import axios from "axios"

/**
 * 请求方法
 * 利用Promise封装了axios了
 */
export const request = (url: string, params: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.post("http://127.0.0.1:8000" + url, {...params}).then((response) => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        })
    })
}