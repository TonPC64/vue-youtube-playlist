import axios from 'axios'
import config from '../config/config'

export async function search ({ commit }, keyword) {
  try {
    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search/?q=${keyword}&maxResults=25&part=snippet&key=${config.API_KEY}`)
    this.searchResult = data
    commit('setSearchResult', data)
  } catch (error) {
    console.log(error)
  }
}
