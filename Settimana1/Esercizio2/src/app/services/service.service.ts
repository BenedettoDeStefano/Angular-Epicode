import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  async recuperaLista() {
    return (await fetch ('./assets/db.json')).json()
  }
}


// const url = "src/assets/db.json"

// async function recuperaLista() {
//     try {
//         const response = await fetch(url, {
//             method: "GET",

//         }
//         )
//         if (!response.ok) {
//             throw new Error(`${response.status}`)
//         }
//         const lista = await response.json()
//         console.log(lista)


//     } catch (errore) {
//         console.log('Error with async/await:');
//     }
// }

