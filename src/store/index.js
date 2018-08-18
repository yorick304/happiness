import axios from 'axios'
let http = axios.create({
  withCredentials: true
})
export const Store = {
  async fetchSignture(ops) {
    let res = await http({
      url: ops && ops.url,
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      transformRequest: [function(data) {
        let ret = ''
        for (let it in data) {
          ret += decodeURIComponent(it) + '=' + decodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      data: ops && ops.param
    })
    return res.data
  }
}