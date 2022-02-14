import {ref as dataRef, get, set, update, ref, remove} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';

function pageInit(){
    const plantKey = sessionStorage.getItem('key');

    const plantRef = dataRef(db, 'plants/-Mvq6o98xEIzJrBd3415');
    plantRef.remove()
}

pageInit()