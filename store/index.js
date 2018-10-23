import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = () => new Vuex.Store({
  state: {
    locales: ['en', 'ko'],
    locale: 'en'
  },
  mutations: {
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  },
  plugins: process.client ? [createPersistedState()] : []
})

export default store
