import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

export const getCharacters = (page:number) => {
  return api.get(`people?page=${page}`).then(res => {
    return res.data
  })
}

// because person object doesn't have ID property, couldn't use this api
export const getCharacter = (id: string) => {
  api.get(`people/${id}`).then(res => {
  })
}
