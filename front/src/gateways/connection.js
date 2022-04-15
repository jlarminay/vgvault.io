import axios from 'axios'

const connection = axios.create({
  baseURL: 'http://localhost:3000',
})

connection.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.error('Error Sending: ' + err.message)
    return false
  },
)

connection.interceptors.response.use(
  async (response) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    // console.log({
    //   url: response.config.url,
    //   method: response.config.method,
    //   sentData: response.config.data,
    //   returnData: response.data,
    // })
    return response
  },
  async (err) => {
    console.error('Error Receiving: ' + err.message)
    return false
  },
)

export default connection
