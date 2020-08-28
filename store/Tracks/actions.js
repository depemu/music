export default {
  getRecentTracks ({ commit, state }) {
    return new Promise ((resolve, reject) => {
      this.$axios.$get(`//depemu-muhapi.herokuapp.com/last.fm`).then((response) => {
        if (response.recenttracks) {
          const tracks = response.recenttracks.track

          commit('SET_TRACKS', tracks)
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
