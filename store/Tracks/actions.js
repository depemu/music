export default {
  getRecentTracks ({ commit }) {
    return new Promise ((resolve, reject) => {
      this.$axios.$get(`https://papi.muhar.us/?app=last-fm&limit=30`).then((response) => {
        if (response.success) {
          commit('SET_TRACKS', response.result)
          resolve(response.result)
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
