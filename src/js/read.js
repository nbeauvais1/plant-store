import { map } from '@firebase/util';
import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import { vacationRental } from './templates/vacationRental';


async function pageInit(){
    const rentalRef = dataRef(db, 'rentals/');
    const rentalSnapShot = await get(rentalRef)
    const data = rentalSnapShot.val();
    // ES Modules For The Render Function
    
    // Data -> you need to know its structure
    // Firebase structure of Obj of Objects { {}, {}, {}, {} }
    // Obj.keys Obj.values, Object.entries
    const cards = Object.values(data).map(rental=>{
        // console.log(vacationRental(rental))
        const card = vacationRental(rental)
        document.querySelector('main').append(card)
        return null
    })
}

pageInit()

// Time: 1:21:03