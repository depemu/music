export default {
  getRecentTracks ({ commit }) {
    return new Promise ((resolve, reject) => {
      this.$axios.$get('https://api.lab.muhar.us/last.fm/').then((response) => {
        commit('SET_TRACKS', response)
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
