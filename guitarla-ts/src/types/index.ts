export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

//Herencia en type

export type CartItem = Guitar & {
    quantity: number
}


//Look up types
/*
export type GuitarID = Guitar['id']
*/

// Utility types (una manera diferente de heredar ciertas propiedades de una clase a otra)
/*
export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
    quantity: number
}
*/

//Herencia en interface
/*
export interface CartItem extends Guitar {
    quantity: number
}
*/