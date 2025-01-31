import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  data() {
    return {
      loader: true,
      nowPlaying: false,
      playing: false,
      theme: 0,
      themes: [
        {
          name: 'default',
          title: 'List'
        },
        {
          name: 'boxes',
          title: 'Gallery'
        },
        {
          name: 'text',
          title: 'Text'
        },
        /*{
          name: 'square',
          title: 'Thumbnail'
        }*/
      ]
    }
  },
  computed: {
    ...mapGetters({
      tracks: 'Tracks/tracks'
    }),
    bgPlaying() {
      if (this.playing) {
        return this.playing
      }

      return this.nowPlaying
    },
    currentThemeClass () {
      return [
        `music--${this.currentThemeName}`
      ]
    },
    currentTheme () {
      return this.themes[this.theme]
    },
    currentThemeName () {
      return this.currentTheme.name
    },
    currentThemeTitle () {
      return this.currentTheme.title
    },
    togglerCaption () {
      return this.currentThemeTitle
    }
  },
  methods: {
    ...mapActions({
      getRecentTracks: 'Tracks/getRecentTracks'
    }),
    image (t) {
      return t.image.extralarge
    },
    artist (t) {
      return t.artist
    },
    song (t) {
      return t.name
    },
    album (t) {
      return t.album
    },
    isPlaying (t) {
      return t.nowPlaying || false
    },
    timestamp (t) {
      const dateTime = moment(t.date, 'D MMM YYYY, HH:mm').add(7, 'hours')

      return dateTime.fromNow()
    },
    musicHover (track) {
      if (this.playing.name != track.name) {
        this.playing = track
      }
    },
    musicLeave () {
      this.playing = false
    },
    imageDescription (item) {
      return `${this.song(item)} by ${this.artist(item)} (${this.album(item)})`
    },
    toggleThemes() {
      if (this.theme == this.themes.length - 1) {
        this.theme = 0
      }
      else {
        this.theme++
      }
    }
  },
  mounted() {
    this.getRecentTracks().then(() => {
      this.loader = false
    })
  }
}
