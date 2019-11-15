import State from './state'
import Mutations from './mutations'
import Actions from './actions'
import Getters from './getters'

export default {
  namespace: true,
  state: State,
  getters: Getters,
  mutations: Mutations,
  actions: Actions
}
