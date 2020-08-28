export default {
  getRecentTracks ({ commit, state }) {
    return new Promise ((resolve, reject) => {
      const username = state.username
      const apiKey = process.env.LASTFM_API_KEY
      const limit = state.limit

      this.$axios.$get(`//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&limit=${limit}&format=json`).then((response) => {
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
