import { fetchApi } from '@/utils/index.ts'

interface State {
  isFixed: boolean
  artistData: object[]
  songsData: Song[]
  pickSongs: object[]
  likeSongs: object[]
}
interface Song {
  song_art_image_url: string
  title: string
  url: string
  id: number
  isLiked: boolean
}


export const state = () => ({
  isFixed: false,
  artistData: [
    {
      title: "洋楽",
      data: [
        {
          name: "John Mayer",
          id: "488"
        },
        {
          name: "oasis",
          id: "21100"
        },
        {
          name: "Bruno Mars",
          id: "500"
        },
        {
          name: "Ed Sheeran",
          id: "12418"
        },
        {
          name: "Vulfpeck",
          id: "195434"
        },
        {
          name: "RHCP",
          id: "1460"
        }
      ]
    },
    {
      title: "邦楽",
      data: [
        {
          name: "東京事変",
          id: "1273045"
        },
        {
          name: "AKFG",
          id: "358968"
        },
        {
          name: "ELLEGARDEN",
          id: "271551"
        },
        {
          name: "BUMP",
          id: "355179"
        },
        {
          name: "RADWIMPS",
          id: "383998"
        }
      ]
    }
  ],
  songsData: [],
  pickSongs: [],
  likeSongs: []
})

export const mutations = {
  switchIsFixed(state: State, isFixed: boolean) {
    state.isFixed = isFixed
  },
  songsReset(state: State) {
    state.songsData = []
    state.pickSongs = []
  },
  setSongs(state: State, songObject: any) {
    state.songsData.push(songObject)
  },
  setpickSongs(state: State, randomSongs: any[]) {
    state.pickSongs = randomSongs.concat()
  }

}

export const actions = {
  async createSongDataArray({ state, commit }: { state: State, commit: any }, artistId: number) {
    const data = await fetchApi(artistId)
    const songs: Song[] = data.response.songs
    commit('songsReset')
    for (let i = 0; i < songs.length; i++) {
      commit('setSongs', {
        image: songs[i].song_art_image_url,
        title: songs[i].title,
        link: songs[i].url,
        id: songs[i].id,
        isLiked: false
      })
    }
    const copySongsData = state.songsData.concat()
    let songsLength = copySongsData.length
    const randomSongs = []
    for (let i = 1; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * songsLength)
      randomSongs.push(state.songsData[randomNumber])
      copySongsData[randomNumber] = copySongsData[songsLength - 1]
      songsLength = songsLength - 1
    }
    commit('setpickSongs', randomSongs)
  }
}