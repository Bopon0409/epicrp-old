const { makeAutoObservable } = require('mobx')

class FractionStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    isSettingsMode: false,
    activeMenuItem: 0,
    searchValue: '',
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
  }

  get tabletTitle () {
    return this.state.isSettingsMode ? 'Настройки' : this.state.name
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
    }
  }

  setSearchValue = event => {
    const value = event.target.value
    if (value.length <= 30) this.state.searchValue = value
  }

  setActiveMenuItem = item => (this.state.activeMenuItem = item)
}

export default new FractionStore()
