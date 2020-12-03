import { axiosGet } from '@/libs/https'
// import { reject, resolve } from 'core-js/fn/promise'
function getData (consName, type) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: `/api/constellation/getAll?consName=${consName}&type=${type}`,
            success(data) {
                resolve(data);
            },
            error (err) {
                reject(err)
            }
        })
    })
}
export {
    getData
}
