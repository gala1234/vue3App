import { ActionTree } from 'vuex'
import { UserInterface } from '../../types'

export const actions: ActionTree<UserInterface, any> = {
  addUserAsync (contex, id) {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then(data => data.json())
      .then(item => {
        const user: UserInterface = {
          id: item.id,
          name: item.name,
          username: item.username,
          email: item.email,
          address: {
            street: item.address.street,
            suite: item.address.suite,
            city: item.address.city,
            zipcode: item.address.zipcode,
            geo: {
              lat: item.address.geo.lat,
              lng: item.address.geo.lng
            }
          },
          phone: item.phone,
          website: item.website
        }

        contex.commit('addUser', user)
      })
  }
}
