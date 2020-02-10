import { UserInterface } from '../../types'

export const state: UserInterface = {
  id: null,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: null,
      lng: null
    }
  },
  phone: null,
  website: ''
}
