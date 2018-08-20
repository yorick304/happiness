import axios from 'axios'
import qs from 'qs'
let http = axios.create({
  withCredentials: true
})

// axios.interceptors.request.use(config => {
//   config.headers = {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
//   return config
// })
export const Store = {
  async fetchSignture(ops) {
    let res = await axios.post(ops && ops.url, qs.stringify(ops.param))
    return res.data
  }
}