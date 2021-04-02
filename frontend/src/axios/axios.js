import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5000'
})

export const auth = axios.create({
  baseURL: 'http://localhost:5000/api/auth'
})

