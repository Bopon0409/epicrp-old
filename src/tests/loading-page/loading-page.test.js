const hint = 'Меняйте расположение своих Т/С так, как удобно Вам'
const getData = (active) => JSON.stringify({ active, hint })
const setLoading = active => window.trigger('loading.set', getData(active))

window.test.loading = { setLoading }
