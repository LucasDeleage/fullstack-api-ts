import { AxiosResponse } from 'axios'
import api from './utils/api'

const greetings = async () => {
  const res: AxiosResponse = await api.get('/')
  console.log(res)
}

greetings()
