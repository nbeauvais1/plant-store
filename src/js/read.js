
import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import { plantProduct } from './templates/plantProduct';


async function pageInit(){
    const plantRef = dataRef(db, 'plants/');
    const plantSnapShot = await get(plantRef)
    const data = plantSnapShot.val();
    
    const cards = Object.values(data).map(plant=>{
        
        const card = plantProduct(plant)
        document.querySelector('.products').append(card)
        return null
    })
}

pageInit()
