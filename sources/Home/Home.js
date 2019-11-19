import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      loader: true,
      nowPlaying: false
    }
  },
  computed: {
    ...mapGetters([
      'tracks'
    ])
  },
  methods: {
    ...mapActions([
      'getRecentTracks'
    ]),
    image (t) {
      return t.image[3]['#text']
    },
    artist (t) {
      return t.artist['#text']
    },
    song (t) {
      return t.name
    },
    album (t) {
      return t.album['#text']
    },
    isPlaying (t) {
      if (t['@attr']) {
        this.nowPlaying = t

        return true
      }

      return false
    },
    timestamp (t) {
      return t.date['#text']
    }
  },
  mounted() {
    this.getRecentTracks().then(() => {
      this.loader = false
    })
  }
}
