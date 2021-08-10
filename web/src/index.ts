import api from './utils/api'

const greetings = async () => {
  const res = await api.get('/')
  console.log(res)
}

greetings()
