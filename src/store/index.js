import axios from 'axios'
let http = axios.create({
  withCredentials: true
})
export const Store = {
  async fetchSignture(ops) {
    let res = await axios.post(ops && ops.url, ops.param)
    return res.data
  }
}