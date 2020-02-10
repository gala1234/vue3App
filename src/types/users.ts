
// Models
export interface UserInterface {
    id: number | null,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: number | null,
        lng: number | null
      }
    },
    phone: number | null,
    website: string,
  }
