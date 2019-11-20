import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

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
      const dateTime = moment(t.date['#text'], 'D MMM YYYY, HH:mm').add(7, 'hours')

      return dateTime.fromNow()
    }
  },
  mounted() {
    this.getRecentTracks().then(() => {
      this.loader = false
    })
  }
}
