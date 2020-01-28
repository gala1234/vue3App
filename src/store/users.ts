import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { State, User } from '../types'

export const actions: ActionTree<State, any> = {
  addUserAsync (contex, id) {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then(data => data.json())
      .then(item => {
        const user: User = {
          id: item.id,
          name: item.name,
          age: item.age,
          description: item.description,
          services: {
            a: item.services.a,
            b: item.services.b,
            c: item.services.c
          },
          gender: item.gender,
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
          website: item.website,
          some: {
            fb: item.some.fb,
            ig: item.some.ig,
            li: item.some.li,
            yt: item.some.yt
          }
        }

        contex.commit('addUser', user)
      })
  }
}
