export default {
  SET_TRACKS (state, tracks) {
    state.tracks = tracks
  },
  RESET_TRACKS (state) {
    state.tracks = []
  },
  SET_USERNAME (state, username) {
    state.username = username
  },
  RESET_USERNAME (state) {
    state.username = ''
  },
  SET_LIMIT (state, limit) {
    state.limit = limit
  },
  RESET_LIMIT (state) {
    state.limit = 5
  }
}
