
// Models
export interface User {
    id: number,
    name: string,
    age: string,
    description: string,
    services: {
        a: boolean,
        b: boolean,
        c: boolean,
    },
    gender: string,
    phone: number,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: number,
        lng: number
      }
    },
    some: {
        fb: string,
        ig: string,
        li: string,
        yt: string,
    },
    website: string,
  }
