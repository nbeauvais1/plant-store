import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

const key = sessionStorage.getItem('key');

document.forms["insertPlant"].addEventListener("submit", updatePlant);
 
// Loading form Submit Event Handler
function updatePlant(e) {
    e.preventDefault();
    uploadUpdatedPlant();
    } 

// Upload form fields to storage bucket and RTD
async function uploadUpdatedPlant() {
    const plantType = document.querySelector('#plantType').value.trim();
    const inOrOut = document.querySelector('#inOrOut').value.trim();
    const careInstruct = document.querySelector('#careInstruct').value.trim();
    const file = document.querySelector('#plantImage').files[0]
   
    // path to the RTD
    const dataRef =  databaseRef( db, 'plants')
    const storagePath = uploadResult.metadata.fullPath;

    // key -MSF53n55GD
    const itemRef = await push(dataRef)
    
    set(itemRef,{
      key: key,
      sku: 'jhrv${itemRef.key}',
      imageUrl,
      storagePath,
      plantType,
      inOrOut,
      careInstruct
    })
    
}