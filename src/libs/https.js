import axios from 'axios'
const appkey='1d74cd347b169ba4422176ad1350f3b2'
function axiosGet(options) {
    axios(options.url + "&key=" + appkey).then((res) =>{
        options.success(res.data)
    }).catch((err) =>{
        options.error(err)
    })
}
export {
    axiosGet
}
