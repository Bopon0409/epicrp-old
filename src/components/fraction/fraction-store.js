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
    userId: 0,
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

    groupExpand: 0,
    modalGroupCreate: { active: false, name: '', boss: '', ranks: [] },
    modalGroupEdit: { active: false, id: 0, boss: null, currentRank: 0 },

    defaultRankSettings: [],
    settings: {
      rankNum: 0,
      name: '',
      priority: 0,
      color: '#ffffff',
      colorPicker: false,
      settingsList: [],
      newMember: false,
      priorityError: ''
    }
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
    if (data.userId) this.state.userId = data.userId
    if (data.defaultRankSettings)
      this.state.defaultRankSettings = data.defaultRankSettings
  }

  get isBlur () {
    const {
      adsActive, adsEditActive, modalDismiss, modalAward, modalReprimand,
      modalGroupEdit, modalGroupCreate
    } = this.state
    return adsActive || adsEditActive ||
      modalDismiss.active || modalAward.active || modalReprimand.active ||
      modalGroupCreate.active || modalGroupEdit.active
  }

  get user () {
    const { userId } = this.state
    return this.state.members.find(member => member.id === userId) || {}
  }

  get tabletTitle () {
    return this.state.settingsMode ? 'Настройки' : this.state.fractionName
  }

  getGroupName = id => {
    if (!id) return ''
    return this.state.groups.find(({ groupId }) => groupId === id)?.groupName
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

  getRankById = id => {
    if (id === 0) return null
    return this.state.ranks.find(({ rankNum }) => rankNum === id)
  }

  getGroupById = id => {
    if (id === 0) return null
    return this.state.groups.find(({ groupId }) => groupId === id)
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
    if (this.state.capabilities.controlSettings) {
      this.state.settingsMode = active
      this.setActiveMenuItem(active ? 5 : 0)
    }
  }

  setActiveMenuItem = item => {
    this.state.activeMenuItem = item
    this.clearActivity()
    this.state.searchValue = ''
    const menuName = this.getMenuItem(item).icon
    window.frontTrigger(`fraction.change-menu.${menuName}`)

    if (item !== 2) this.setActivityId(0)
    if (item !== 3) this.state.groupExpand = 0
  }

  //===========================   Ranks Settings   =============================

  get ranksSorted () {
    const list = this.state.ranks.slice().sort((rank1, rank2) =>
      rank1.rankNum - rank2.rankNum)
    if (this.state.settings.newMember) list.push({
      rankNum: 0, rankName: 'Новый ранг', color: 'white'
    })
    return list
  }

  clickOutsideColorPicker = e => {
    const colorPickerCheck = typeof e.target.className == 'string' &&
      e.target.className.includes('color-block')

    if (!colorPickerCheck) {
      const modalBlock = document.querySelector('#fraction-color-picker')
      if (!e.path.includes(modalBlock)) this.setSettingColorPicker(false)
    }
  }

  setRankSetting = settingName => {
    const list = this.state.settings.settingsList
    const setting = list.find(item => item.settingName === settingName)
    setting.value = !setting.value
  }

  setSettingColorPicker = active => this.state.settings.colorPicker = active
  setSettingColor = color => this.state.settings.color = color
  setSettingName = name => this.state.settings.name = name

  setSettingPriority = priority => {
    let rankBusy = this.state.ranks
      .find(({ rankNum }) => rankNum === Number(priority))

    if (rankBusy && Number(priority) !== this.state.settings.rankNum)
      this.state.settings.priorityError = 'Приоритет занят другим рангом'
    else this.state.settings.priorityError = ''

    if (priority < 999) this.state.settings.priority = priority
  }

  getSettingRank = rankNum => {
    switch (rankNum) {
      case 0:
        return { rankNum: 0, rankName: 'Новый ранг', color: 'white' }
      case 'init':
        return this.ranksSorted[0]
      default:
        return this.getRankById(rankNum)
    }
  }

  setSettingsBuffer = (rankNum) => {
    const rank = this.getSettingRank(rankNum)
    const settingsList = rankNum === 0 ?
      this.state.defaultRankSettings :
      this.state.ranksSettings
        .find(({ rankNum }) => rankNum === rank.rankNum).settingsList

    this.state.settings = {
      color: rank.color,
      colorPicker: false,
      name: rank.rankName,
      priority: rank.rankNum,
      rankNum: rank.rankNum,
      settingsList: JSON.parse(JSON.stringify(settingsList)),
      newMember: rankNum === 0
    }
  }

  rankSettingRemove = () => {
    window.frontTrigger('fraction.rank.remove', this.state.settings.rankNum)
  }

  rankSettingSubmit = () => {
    let {
      newMember, rankNum, color, settingsList, name, priority
    } = this.state.settings
    priority = Number.parseInt(priority)
    if (!newMember) {
      this.setSettingsBuffer('init')
      window.frontTrigger('fraction.rank.edit', {
        rankNumOld: rankNum, rankNumNew: priority,
        rankName: name, color, settingsList
      })
    } else {
      window.frontTrigger('fraction.rank.create', {
        rankNum: priority, rankName: name, color: color, settingsList
      })
    }
  }

  //================================   Cars   ==================================

  get contextCarsList () {
    const { changePermissions, spawn } = this.state.capabilities.controlCars
    const list = []

    if (changePermissions) {
      list.push({
        title: 'Допуск', handler: () => this.setContextHoverEl('Допуск')
      })
      list.push({
        title: 'Отдел', handler: () => this.setContextHoverEl('Отдел')
      })
    }
    if (spawn) {
      list.push({ title: 'Зареспавнить', handler: this.spawnCar })
      list.push({ title: 'Зареспавнить все', handler: this.spawnAllCars })
    }

    return list
  }

  setContextHoverEl = el => {
    const { hoverEl } = this.state.contextMenu
    this.state.contextMenu.hoverEl = hoverEl === el ? '' : el
  }

  get contextCarsSecondaryList () {
    const { id } = this.state.contextMenu
    const car = this.state.cars.find(car => car.id === id)
    switch (this.state.contextMenu.hoverEl) {
      case 'Допуск':
        return this.state.ranks.map(({ rankName, rankNum, color }) => ({
          rankName,
          color,
          active: car.permissions.ranks.includes(rankNum),
          handler: () => this.setCarPermissionRank(id, rankNum)
        }))

      case 'Отдел':
        return this.state.groups.map(({ groupName, groupId }) => ({
          groupName,
          active: car.permissions.groupId.includes(groupId),
          handler: () => this.setCarPermissionGroup(id, groupId)
        }))

      default:
        return []
    }
  }

  spawnCar = id => window.frontTrigger('fraction.cars.spawn', id)
  spawnAllCars = () => window.frontTrigger('fraction.cars.spawn-all')

  setCarPermissionRank = (carId, rankNum) => {
    const car = this.state.cars.find(car => car.id === carId)
    const carRanks = car.permissions.ranks
    if (carRanks.includes(rankNum)) {
      car.permissions.ranks = carRanks.filter(rank => rank !== rankNum)
      window.frontTrigger('fraction.cars.permission.rank.delete',
        car.id,
        rankNum
      )
    } else {
      car.permissions.ranks.push(rankNum)
      window.frontTrigger('fraction.cars.permission.rank.add', car.id, rankNum)
    }
  }

  setCarPermissionGroup = (carId, groupId) => {
    const car = this.state.cars.find(car => car.id === carId)
    const carGroups = car.permissions.groupId
    if (carGroups.includes(groupId)) {
      car.permissions.groupId = carGroups.filter(id => id !== groupId)
      window.frontTrigger('fraction.cars.permission.group.delete',
        car.id, groupId
      )
    } else {
      car.permissions.groupId.push(groupId)
      window.frontTrigger('fraction.cars.permission.group.add', car.id, groupId)
    }
  }

  //===============================   Context   ================================

  get context () {
    switch (this.state.activeMenuItem) {
      case 1 :
        return {
          main: this.contextMembersList,
          second: this.contextSecondaryMembersList
        }
      case 3:
        return { main: this.contextGroupList, second: [] }
      case 4:
        return {
          main: this.contextCarsList,
          second: this.contextCarsSecondaryList
        }
      default:
        return { main: [], second: [] }
    }
  }

  get contextGroupList () {
    const groupId = this.state.contextMenu.id
    if (this.state.capabilities.controlGroups) {
      return [
        { title: 'Настройки', handler: () => this.groupEditClick(groupId) },
        { title: 'Удалить', handler: () => this.groupRemoveClick(groupId) }
      ]
    } else return []
  }

  get contextMembersList () {
    const { controlMembers } = this.state.capabilities
    const list = []

    if (controlMembers.checkInfo)
      list.push({ title: 'Информация', handler: this.activityOpen })
    if (controlMembers.changeRanks)
      list.push({
        title: 'Ранг', handler: () => this.setContextHoverEl('ranks')
      })
    if (controlMembers.changeGroups)
      list.push({
        title: 'Отдел', handler: () => this.setContextHoverEl('groups')
      })
    if (controlMembers.giveReprimands) {
      list.push({ title: 'Выдать выговор', handler: this.reprimandOpen })
      list.push({ title: 'Снять выговор', handler: this.reprimandRemove })
    }
    if (controlMembers.giveAward)
      list.push({ title: 'Выдать премию', handler: this.awardOpen })
    if (controlMembers.dismiss)
      list.push({ title: 'Уволить', handler: this.dismissOpen })

    return list
  }

  get contextSecondaryMembersList () {
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

  setContextMenu = (active, xCord, yCord, id, hoverEl) => {
    if (this.context.main.length && !this.isBlur)
      this.state.contextMenu = { active, xCord, yCord, id, hoverEl }
  }

  clickOutsideContextMenu = e => {
    const modalBlock = document.querySelector(
      '.context-menu')
    if (!e.path.includes(modalBlock)) this.setContextMenu(false, 0, 0, 0)
  }

  //=================================   ADS   ==================================

  setAdsActive = active => {
    if (active) window.frontTrigger('fraction.change-menu.ads')
    this.state.adsActive = active
  }

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
    window.frontTrigger('fraction.ads.remove', id)
  }

  adsEdit = () => {
    const { title, text, id } = this.state.adsEdit
    window.frontTrigger('fraction.ads.edit', id, title, text)
  }

  adsAdd = () => {
    const { title, text } = this.state.adsEdit
    const { name: author } = this.user
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

  groupEditClick = id => {
    if (this.state.capabilities.controlGroups) {
      this.setContextMenu(false, 0, 0, 0, '')
      this.groupSettingsOpen(id)
    }
  }

  groupRemoveClick = id => {
    if (this.state.capabilities.controlGroups) {
      this.setContextMenu(false, 0, 0, 0, '')
      window.frontTrigger('fraction.group.remove', id)
    }
  }

  //============================   Group Modals   ==============================

  setGroupCreateModalName = name => this.state.modalGroupCreate.name = name
  setGroupCreateModalBoss = boss => this.state.modalGroupCreate.boss = boss

  toggleGroupCreateModalRank = id => {
    const { modalGroupCreate } = this.state
    const rank = modalGroupCreate.ranks.find(({ rankNum }) => rankNum === id)
    rank.value = !rank.value
  }

  get groupBossPretenders () {
    const { members } = this.state
    if (!members.length) return []
    const applicants = members.filter(({ groupId }) => !groupId)
    return applicants.map(({ id, name }) => ({ value: id, text: name }))
  }

  groupCreateOpen = () => {
    const { ranks } = this.state
    this.state.modalGroupCreate = {
      active: true,
      name: '',
      boss: this.groupBossPretenders[0],
      ranks: ranks.map(({ rankNum, rankName, color }) => ({
        rankNum, rankName, color, value: false
      }))
    }
  }

  groupCreateClose = () => {
    this.state.modalGroupCreate = {
      active: false, name: '', boss: '', ranks: []
    }
  }

  groupCreateSubmit = () => {
    const {
      name, boss: { value: chiefId }, ranks
    } = this.state.modalGroupCreate

    let ranksList = ranks.filter(({ value }) => value)
    ranksList = ranksList.map(({ rankNum }) => rankNum)
    window.frontTrigger('fraction.group.create', { name, chiefId, ranksList })
    this.groupCreateClose()
  }

  getGroupInitBoss = id => {
    if (this.getGroupById(id).bossId) {
      const member = this.getMemberById(this.getGroupById(id).bossId)
      return { value: member.id, text: member.name }
    } else return this.groupBossPretenders[0]
  }

  groupSettingsOpen = id => {
    const currentRank = this.getGroupById(id).ranks[0].rankNum
    const boss = this.getGroupInitBoss(id)
    this.state.modalGroupEdit = { id, active: true, currentRank, boss }
  }

  groupSettingsClose = () => {
    this.state.modalGroupEdit = {
      id: 0, active: false, currentRank: 0, boss: null
    }
  }

  get settingsList () {
    const { currentRank, id } = this.state.modalGroupEdit
    return this.getGroupById(id)?.ranks
      .find(({ rankNum }) => rankNum === currentRank).settingsList
  }

  setGroupSettingCurrentRank = id => this.state.modalGroupEdit.currentRank = id
  setGroupSettingCurrentBoss = boss => {
    this.state.modalGroupEdit.boss = boss
  }

  groupSettingBossSubmit = () => {
    const { id, boss } = this.state.modalGroupEdit
    window.frontTrigger('fraction.group.boss_edit', id, boss.value)
  }

  get groupSettingSelectList () {
    const list = this.groupBossPretenders
    const bossId = this.getGroupById(this.state.modalGroupEdit.id)?.bossId
    const boss = {
      value: this.getMemberById(bossId).id,
      text: this.getMemberById(bossId).name
    }
    return bossId ? [boss, ...list] : list
  }

  toggleRankSetting = (name) => {
    const { id, currentRank } = this.state.modalGroupEdit
    const group = this.state.groups.find(({ groupId }) => groupId === id)
    const rank = group.ranks.find(({ rankNum }) => rankNum === currentRank)
    const setting = rank.settingsList
      .find(({ settingName }) => settingName === name)
    setting.value = !setting.value

    window.frontTrigger('fraction.group.edit', {
      groupId: id, rankNum: currentRank,
      settingsName: name, value: setting.value
    })
  }

  //============================   Members List   ==============================

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
      this.user.rankNum > rankNum &&
      this.user.rankNum > currentMemberRank &&
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

  reprimandRemove = memberId => {
    window.frontTrigger('fraction.members.reprimand.drop', memberId)
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

  memberClickHandler = (event, id) => {
    const { clientX, clientY } = event
    const check1 = event.target.className.includes('expand__image')
    const check2 = event.target.className.includes('expand__button')
    if (check1 || check2) return
    setTimeout(
      () => this.setContextMenu(true, clientX, clientY, id),
      50
    )
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
    if (id === 0) id = this.user.id
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
    const { state: { activityId }, user } = this
    return this.state.activityId !== 0 ? this.getMemberById(activityId) : user
  }

  //===============================   Storage   ================================

  setStorageData = data => (this.state.storage = data)

  setStorageOpen = () => {
    if (this.state.capabilities.controlStorage) {
      this.state.storage.open = !this.state.storage.open
      window.frontTrigger('fraction.storage.toggle', this.state.storage.open)
    }
  }
}

export default new FractionStore()
