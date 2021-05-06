const { makeAutoObservable } = require('mobx')

class FractionStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    settingsMode: false,
    activeMenuItem: 0,
    searchValue: '',
    user: {},
    fractionName: '',
    capabilities: {
      controlStorage: false,
      controlRanks: false,
      controlGroups: false,
      controlAds: false,
      controlCars: {
        changePermissions: false,
        spawn: false
      },
      controlSettings: false,
      controlMembers: {
        changeRanks: false,
        changeGroups: false,
        giveReprimands: false,
        giveAward: false,
        dismiss: false
      }
    },
    description: '',
    ads: [],
    adsActive: false,
    adsEditActive: false,
    adsEdit: {
      id: -1,
      title: '',
      author: '',
      date: '',
      text: ''
    },
    ranks: [],
    ranksSettings: [],
    groups: [],
    cars: [],
    storage: {
      open: false,
      history: []
    },
    members: [],
    activityList: []
  }

  setActive = active => (this.state.active = active)

  get isBlur () {
    return this.state.adsEditActive || this.state.adsActive
  }

  setData = data => {
    this.state.fractionName = data.fractionName
    this.state.capabilities = data.capabilities
    this.state.description = data.description
    this.state.ads = data.ads
    this.state.ranks = data.ranks
    this.state.ranksSettings = data.ranksSettings
    this.state.groups = data.groups
    this.state.cars = data.cars
    this.state.storage.open = data.open
    this.state.members = data.members
    this.state.activityList = data.activityList
    this.state.user = data.user
  }

  get tabletTitle () {
    return this.state.settingsMode ? 'Настройки' : this.state.fractionName
  }

  get discrordList () {
    return this.state.groups.map(({ groupId, groupName }) => ({
      name: groupName,
      list: this.state.members.filter(({ name, groupId: memberGroupId }) => {
        const id = +memberGroupId
        const searchValue = this.state.searchValue.toLocaleLowerCase()
        const groupCheck = id === groupId
        const searchCheck = name.toLocaleLowerCase().includes(searchValue)
        return searchValue ? searchCheck && groupCheck : groupCheck
      })
    }))
  }

  getMemberByName = name => this.state.members.find(memb => memb.name === name)

  getMemberColor = id => {
    if (!this.state.members.length || !this.state.ranks.length || !id)
      return '#ffffff'
    const { rankNum } = this.state.members.find(member => member.id === id)
    return this.state.ranks.find(rank => rank.rankNum === rankNum).color
  }

  getMenuItem (num) {
    if (num === undefined) num = this.state.activeMenuItem
    switch (num) {
      case 0:
        return { title: 'Информация', icon: 'info' }
      case 1:
        return { title: 'Список сотрудников', icon: 'members' }
      case 2:
        return { title: 'Меню активности', icon: 'activity' }
      case 3:
        return { title: 'Список отделов', icon: 'groups' }
      case 4:
        return { title: 'Автопарк', icon: 'cars' }
      case 5:
        return { title: 'Управление складом', icon: 'storage' }
      case 6:
        return { title: 'Управление рангами', icon: 'members' }
      default:
        return null
    }
  }

  setSearchValue = event => {
    const value = event.target.value
    if (value.length <= 30) this.state.searchValue = value
  }

  setSettingsMode = active => {
    const { controlSettings } = this.state.capabilities
    if (controlSettings) {
      this.state.settingsMode = active
      this.state.activeMenuItem = active ? 5 : 0
    }
  }

  setActiveMenuItem = item => (this.state.activeMenuItem = item)

  // ADS

  setAdsActive = active => (this.state.adsActive = active)

  setAdsEditActive = (active, ad) => {
    this.setAdsActive(!active)
    this.state.adsEditActive = active

    if (ad) this.state.adsEdit = ad
    if (!active)
      this.state.adsEdit = {
        id: -1,
        title: '',
        author: '',
        date: '',
        text: ''
      }
  }

  setEditTitle = e => (this.state.adsEdit.title = e.target.value)
  setEditText = e => (this.state.adsEdit.text = e.target.value)

  getFreeAdId = () => {
    let max = 0
    this.state.ads.forEach(ad => {
      max = ad.id > max ? ad.id : max
    })
    return ++max
  }

  editSubmit = () => {
    if (this.state.adsEdit.id === -1) this.adsAdd()
    else this.adsEdit()

    this.setAdsEditActive(false)
  }

  adsDelete = id => {
    this.state.ads = this.state.ads.filter(ad => ad.id !== id)
    window.clientTrigger('fraction.ads.remove', id)
  }

  adsEdit = () => {
    const { title, text, id } = this.state.adsEdit
    this.state.ads = this.state.ads.map(ad => {
      if (ad.id === id) {
        ad.title = title
        ad.text = text
        return ad
      } else return ad
    })
    window.clientTrigger('fraction.ads.edit', { id, title, text })
  }

  adsAdd = () => {
    const { title, text } = this.state.adsEdit
    const { name: author } = this.state.user
    const date = new Date().toLocaleDateString('ru')
    const id = this.getFreeAdId()
    this.state.ads.push({ id, title, author, date, text })
    window.clientTrigger('fraction.ads.add', { id, title, author, date, text })
  }
}

export default new FractionStore()
