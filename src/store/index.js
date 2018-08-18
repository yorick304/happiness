import axios from 'axios'
let http = axios.create({
  withCredentials: true
})
export const Store = {
  async fetchSignture(ops) {
    var fd = new FormData()
    fd.append('link', ops.param.link)
    let res = await axios.post(ops && ops.url, ops.param)
    // let res = await http({
    //   url: ops && ops.url,
    //   method: 'post',
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   },
    //   transformRequest: [function(data) {
    //     let ret = ''
    //     for (let it in data) {
    //       ret += decodeURIComponent(it) + '=' + decodeURIComponent(data[it])
    //     }
    //     return ret
    //   }],
    //   data: ops && ops.param
    // })
    return res.data
  }
}