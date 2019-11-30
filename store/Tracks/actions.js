export default {
  getRecentTracks ({ commit }) {
    return new Promise ((resolve, reject) => {
      this.$axios.$get('https://api.muhar.us/last.fm/').then((response) => {
        if (!response.error) {
          commit('SET_TRACKS', response.tracks)
          resolve(response)
        }
        else {
          reject(response)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
