import axios from 'axios'
const api = axios.create({ baseURL: 'https://api.milliy.store/api/v1/', })
export default api
