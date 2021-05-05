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
    name: '',
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

  setData = data => {
    this.state.name = data.name
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
    return this.state.settingsMode ? 'Настройки' : this.state.name
  }

  get discrordList () {
    return this.state.groups.map(({ groupId, groupName }) => ({
      name: groupName,
      list: this.state.members.filter(member => {
        const id = +member.groupId
        const { searchValue } = this.state
        if (!searchValue) return id === groupId
        else return id === groupId && member.name.includes(searchValue)
      })
    }))
  }

  getMemberByName = name => this.state.members.find(memb => memb.name == name)

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
}

export default new FractionStore()
