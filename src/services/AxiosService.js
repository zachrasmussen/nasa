import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})



export const nasaApi = Axios.create({
  baseURL: 'https://api.nasa.gov/',
  timeout: 4000,
  params: {
    api_key: 'T5xC7RGd3hgpKpqKWI96mBxb4JVcODvuP1l0zF8K'
  }
})