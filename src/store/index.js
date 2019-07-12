import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);
const state = {
        count: 10,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
}

export default new Vuex.Store({
      state,
      mutations,
      actions,
      getters,
      
})