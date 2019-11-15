import Vuex from 'vuex'

import State from './Global/state'
import Getters from './Global/getters'
import Mutations from './Global/mutations'
import Actions from './Global/actions'

import Tracks from './Tracks'

export default () => {
  return new Vuex.Store({
    modules: {
      Tracks
    },
    state: State,
    getters: Getters,
    mutations: Mutations,
    actions: Actions
  })
}
