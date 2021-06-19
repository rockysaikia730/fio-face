import { createStore } from 'vuex'
import message_en from '../locales/en.json'
import message_as from '../locales/as.json'
import message_hn from '../locales/hn.json'
import message_bn from '../locales/bn.json'

export default createStore({
  state: {
    lang: message_en
   
  },
  mutations: {
    changelang(state, lang_val) {
      if (lang_val === 'en') {
        state.lang = message_en
      }
      else if (lang_val === 'as') {
        state.lang = message_as
      }
      else if (lang_val === 'bn') {
        state.lang = message_bn
      }
      else if (lang_val === 'hn') {
        state.lang = message_hn
      }
   }
  },
  actions: {
  },
  modules: {
  }
})
