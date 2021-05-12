import hudStore from '../hud/hud-store'

const { makeAutoObservable } = require('mobx')

class FractionStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    fractionName: '',
    description: '',

    activeMenuItem: 0,
    searchValue: '',
    settingsMode: false,

    user: {},
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
        checkInfo: false,
        changeRanks: false,
        changeGroups: false,
        giveReprimands: false,
        giveAward: false,
        dismiss: false
      }
    },

    ads: [],
    adsActive: false,
    adsEditActive: false,
    adsEdit: { id: -1, title: '', author: '', date: '', text: '' },

    ranks: [],
    ranksSettings: [],
    groups: [],
    cars: [],
    storage: { open: false, history: [] },
    members: [],

    activityId: 0,
    activityCurrent: '',
    activityList: [],
    activityData: [],

    contextMenu: { active: false, id: 0, xCord: 0, yCord: 0, hoverEl: '' },

    modalAward: { active: false, id: 0, text: '', sum: '', activeBtn: '' },
    modalReprimand: { active: false, id: 0, text: '' },
    modalDismiss: { active: false, id: 0, text: '' },

    groupExpand: 0
  }

  setActive = active => (this.state.active = active)

  setData = data => {
    if (data.fractionName) this.state.fractionName = data.fractionName
    if (data.capabilities) this.state.capabilities = data.capabilities
    if (data.description) this.state.description = data.description
    if (data.ads) this.state.ads = data.ads
    if (data.ranks) this.state.ranks = data.ranks
    if (data.ranksSettings) this.state.ranksSettings = data.ranksSettings
    if (data.groups) this.state.groups = data.groups
    if (data.cars) this.state.cars = data.cars
    if (data.open) this.state.storage.open = data.open
    if (data.members) this.state.members = data.members
    if (data.activityList) this.state.activityList = data.activityList
    if (data.user) this.state.user = data.user
  }

  get isBlur () {
    const isAds = this.state.adsActive || this.state.adsEditActive
    const isModal = this.state.modalDismiss.active ||
      this.state.modalAward.active || this.state.modalReprimand.active
    return isAds || isModal
  }

  get tabletTitle () {
    return this.state.settingsMode ? 'Настройки' : this.state.fractionName
  }

  getGroupName = id => {
    if (!id) return ''
    return this.state.groups.find(({ groupId }) => groupId === id).groupName
  }

  getRankName = id => {
    if (!id) return ''
    return this.state.ranks.find(({ rankNum }) => rankNum === id).rankName
  }

  get discordList () {
    const searchValue = this.state.searchValue.toLocaleLowerCase()
    const list = this.state.groups.map(({ groupId, groupName }) => ({
      name: groupName,
      list: this.state.members.filter(({ name, groupId: memberGroupId }) => {
        const groupCheck = memberGroupId === groupId
        const searchCheck = name.toLocaleLowerCase().includes(searchValue)
        return searchValue ? searchCheck && groupCheck : groupCheck
      })
    }))
    const unGrouped = {
      name: this.state.fractionName,
      list: this.state.members.filter(({ name, groupId }) => {
        const searchCheck = name.toLocaleLowerCase().includes(searchValue)
        return searchValue ? searchCheck && !groupId : !groupId
      })
    }
    list.push(unGrouped)
    return list
  }

  getMemberByName = name => {
    if (!name) return {}
    return this.state.members.find(member => member.name === name)
  }

  getMemberById = id => {
    if (!id) return {}
    return this.state.members.find(member => member.id === id)
  }

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

  setActiveMenuItem = item => {
    this.state.activeMenuItem = item

    this.clearActivity()
    this.state.searchValue = ''

    if (item !== 2) this.setActivityId(0)
    if (item === 5) this.requestStorage()
  }

  //=================================   ADS   ==================================

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
    window.frontTrigger('fraction.ads.remove', id)
  }

  adsEdit = () => {
    const { title, text, id } = this.state.adsEdit
    this.state.ads = this.state.ads.map(ad => {
      if (ad.id === id) {
        ad.title = title
        ad.text = text
        ad.date = hudStore.state.date + ' в ' + hudStore.state.time
        return ad
      } else return ad
    })
    window.frontTrigger('fraction.ads.edit', id, title, text)
  }

  adsAdd = () => {
    const { title, text } = this.state.adsEdit
    const { name: author } = this.state.user
    const date = hudStore.state.date + ' в ' + hudStore.state.time
    const id = this.getFreeAdId()
    this.state.ads.unshift({ id, title, author, date, text })
    window.frontTrigger('fraction.ads.add', title, author, text)
  }

  navClickHandler = id => {
    const el = document.getElementById('ad' + id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  //============================   Groups List   ===============================

  get groupList () {
    return this.state.groups.map(({ groupId, groupName }) => {
      const members = this.state.members
        .filter(member => member.groupId === groupId)
      const quantity = members.length
      const onlineQuantity = members.filter(member => member.online).length

      const handler = () => {
        if (quantity) this.groupListHandler(groupId)
      }

      return { groupName, members, quantity, onlineQuantity, groupId, handler }
    })
  }

  groupListHandler = groupId => {
    const { groupExpand } = this.state
    this.state.groupExpand = groupExpand === groupId ? 0 : groupId
  }

  //============================   Members List   ==============================

  get contextMenusItems () {
    const { controlMembers } = this.state.capabilities
    const list = []

    if (controlMembers.checkInfo)
      list.push({ title: 'Информация', handler: this.activityOpen })
    if (controlMembers.changeRanks)
      list.push({ title: 'Ранг', handler: this.ranksClickHandler })
    if (controlMembers.changeGroups)
      list.push({ title: 'Отдел', handler: this.groupsClickHandler })
    if (controlMembers.giveReprimands) {
      list.push({ title: 'Выдать выговор', handler: this.reprimandOpen })
      list.push({ title: 'Снять выговор', handler: this.reprimandTakeOff })
    }
    if (controlMembers.giveAward)
      list.push({ title: 'Выдать премию', handler: this.awardOpen })
    if (controlMembers.dismiss)
      list.push({ title: 'Уволить', handler: this.dismissOpen })

    return list
  }

  get secondaryContextMenusItems () {
    const { id } = this.state.contextMenu
    switch (this.state.contextMenu.hoverEl) {
      case 'ranks':
        return this.state.ranks.map(({ rankName, rankNum, color }) => ({
          rankName,
          color,
          active: this.getMemberById(id).rankNum === rankNum,
          handler: () => this.setMemberRank(id, rankNum)
        }))

      case 'groups':
        return this.state.groups.map(({ groupName, groupId }) => ({
          groupName,
          active: this.getMemberById(id).groupId === groupId,
          handler: () => this.setMemberGroup(id, groupId)
        }))

      default:
        return []
    }
  }

  setMemberGroup = (memberId, groupId) => {
    if (this.state.capabilities.controlMembers.changeGroups) {
      const member = this.state.members.find(({ id }) => id === memberId)
      member.groupId = groupId
      window.frontTrigger('fraction.members.group', memberId, groupId)
    }
  }

  setMemberRank = (memberId, rankNum) => {
    const currentMemberRank = this.getMemberById(memberId).rankNum
    const access =
      this.state.user.rankNum > rankNum &&
      this.state.user.rankNum > currentMemberRank &&
      this.state.capabilities.controlMembers.changeRanks

    if (access) {
      const member = this.state.members.find(({ id }) => id === memberId)
      member.rankNum = rankNum
      window.frontTrigger('fraction.members.rank', memberId, rankNum)
    }
  }

  ranksClickHandler = () => {
    const { hoverEl } = this.state.contextMenu
    this.state.contextMenu.hoverEl = hoverEl === 'ranks' ? '' : 'ranks'
  }

  groupsClickHandler = () => {
    const { hoverEl } = this.state.contextMenu
    this.state.contextMenu.hoverEl = hoverEl === 'groups' ? '' : 'groups'
  }

  activityOpen = id => {
    this.setActivityId(id)
    this.setActiveMenuItem(2)
    this.setContextMenu(false, 0, 0, 0, '')
  }

  reprimandTakeOff = memberId => {
    const member = this.state.members.find(({ id }) => memberId === id)
    if (member.reprimands >= 1) {
      window.frontTrigger('fraction.members.reprimand.drop', memberId)
      member.reprimands -= 1
    }
    this.setContextMenu(false, 0, 0, 0, '')
  }

  get membersList () {
    const searchValue = this.state.searchValue.toLocaleLowerCase()
    return this.state.members.filter(({ name, rankNum, groupId }) => {
      const rankName = this.getRankName(rankNum)
      const groupName = this.getGroupName(groupId)
      const nameCheck = name.toLocaleLowerCase().includes(searchValue)
      const rankCheck = rankName.toLocaleLowerCase().includes(searchValue)
      const groupCheck = groupName.toLocaleLowerCase().includes(searchValue)
      return nameCheck || rankCheck || groupCheck
    })
  }

  memberClickHandler = ({ clientX, clientY }, id) => {
    setTimeout(() => this.setContextMenu(true, clientX, clientY, id), 10)
  }

  setContextMenu = (active, xCord, yCord, id, hoverEl) => {
    this.state.contextMenu = { active, xCord, yCord, id, hoverEl }
  }

  clickOutsideContextMenu = e => {
    const modalBlock = document.querySelector(
      '.context-menu')
    if (!e.path.includes(modalBlock)) this.setContextMenu(false, 0, 0, 0)
  }

  //===========================   Member modals   ==============================

  get memberModalId () {
    const { modalAward, modalReprimand, modalDismiss } = this.state
    if (modalAward.active) return modalAward.id
    else if (modalReprimand.active) return modalReprimand.id
    else if (modalDismiss.active) return modalDismiss.id
    else return 0
  }

  submitHandler = () => {
    if (this.state.modalAward.active) this.awardSubmit()
    else if (this.state.modalReprimand.active) this.reprimandSubmit()
  }

  // Award

  awardOpen = id => {
    this.setContextMenu(false, 0, 0, 0)
    this.state.modalAward.id = id
    this.state.modalAward.active = true
    this.setAwardActiveBtn('$100')
  }

  awardClose = () => {
    this.state.modalAward.active = false
    this.state.modalAward.id = 0
    this.state.modalAward.sum = ''
    this.state.modalAward.text = ''
    this.state.modalAward.activeBtn = ''
  }

  setAwardActiveBtn = btn => {
    if (btn !== 'Другое') {
      let arr = btn.split('')
      arr.shift()
      arr = Number(arr.join(''))
      this.setAwardSum(arr)
    }
    this.state.modalAward.activeBtn = btn
  }

  setAwardSum = sum => {
    const numSum = Number(sum)
    if (!isNaN(numSum) && numSum < 100000) this.state.modalAward.sum = sum
  }

  setAwardText = text => this.state.modalAward.text = text

  awardSubmit = () => {
    const { id, text, sum } = this.state.modalAward
    window.frontTrigger('fraction.members.award', id, text, Number(sum))
    this.awardClose()
  }

  // Reprimand

  reprimandOpen = id => {
    this.setContextMenu(false, 0, 0, 0)
    this.state.modalReprimand.id = id
    this.state.modalReprimand.active = true
  }

  reprimandClose = () => {
    this.state.modalReprimand.active = false
    this.state.modalReprimand.id = 0
    this.state.modalReprimand.text = ''
  }

  setReprimandText = text => this.state.modalReprimand.text = text

  reprimandSubmit = () => {
    const { id, text } = this.state.modalReprimand
    window.frontTrigger('fraction.members.reprimand', id, text)
    this.reprimandClose()
    const member = this.state.members.find(({ id: memberId }) => memberId ===
      id)
    member.reprimands += 1
  }

  // Dismiss

  dismissOpen = id => {
    this.setContextMenu(false, 0, 0, 0)
    this.state.modalDismiss.id = id
    this.state.modalDismiss.active = true
  }

  dismissClose = () => {
    this.state.modalDismiss.id = 0
    this.state.modalDismiss.text = ''
    this.state.modalDismiss.active = false
  }

  setDismissText = text => this.state.modalDismiss.text = text

  dismissSubmit = () => {
    const { id, text } = this.state.modalDismiss
    window.frontTrigger('fraction.members.dismiss', id, text)
    this.dismissClose()
  }

  //==============================   Activity   ================================

  requestActivity = (name, id) => {
    if (id === 0) id = this.state.user.id
    this.state.activityCurrent = name
    window.frontTrigger('fraction.activity.request', name, id)
  }

  setActivityData = data => (this.state.activityData = data.list)

  setActivityId = id => (this.state.activityId = id)

  clearActivity = () => {
    this.state.activityCurrent = ''
    this.state.activityData = []
  }

  get activityUser () {
    const { activityId, user } = this.state
    return this.state.activityId !== 0 ? this.getMemberById(activityId) : user
  }

  //===============================   Storage   ================================

  requestStorage = () => window.frontTrigger('fraction.storage.request',
    this.state.fractionName
  )

  setStorageData = data => (this.state.storage = data)

  setStorageOpen = () => {
    if (this.state.capabilities.controlStorage) {
      const { storage: { open }, fractionName } = this.state
      this.state.storage.open = !open
      window.frontTrigger('fraction.storage.toggle', !open, fractionName)
    }
  }
}

export default new FractionStore()
