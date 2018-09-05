import axios from 'axios'
import qs from 'qs'
import moke from './moke.js'
let http = axios.create({
  withCredentials: true
})
export const Store = {
  async fetchSignture(ops) {
    let res = await axios.post(ops && ops.url, qs.stringify(ops.param))
    return res.data
  },
  async indexData(ops) {
    let res = await axios.get(ops.url)
    return res.data
    // return moke
  }
}