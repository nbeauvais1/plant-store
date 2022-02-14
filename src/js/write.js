import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

document.forms["insertPlant"].addEventListener("submit", addPlant);
 
// Loading form Submit Event Handler
function addPlant(e) {
    e.preventDefault();
    uploadNewPlant();
    } 

// File Input Change Handler
function onImageSelected(e) {
    //selected file
    let file = e.target.files[0];
    // update the display with the requested image
document.querySelector(".display img").src = URL.createObjectURL(file);  
    }

    document.querySelector("#plantImage").addEventListener("change", onImageSelected);

// Upload form fields to storage bucket and RTD
async function uploadNewPlant() {
    const plantType = document.querySelector('#plantType').value.trim();
    const inOrOut = document.querySelector('#inOrOut').value.trim();
    const careInstruct = document.querySelector('#careInstruct').value.trim();
    const file = document.querySelector('#plantImage').files[0]
   
    // Set path to the storage bucket for the image
    const imageRef =     storageRef( storage, `images/${file.name}`);
    // path to the RTD
    const dataRef =  databaseRef( db, 'plants')
    // Upload the image return
    const uploadResult = await uploadBytes(imageRef, file);
    // asking for the URL use in the src element in the store front.
    const imageUrl =  await getDownloadURL(imageRef) 
    console.log(imageUrl)
    const storagePath = uploadResult.metadata.fullPath;

    // key -MSF53n55GD
    const itemRef = await push(dataRef)
    
    set(itemRef,{
      key:itemRef.key,
      sku: 'jhrv${itemRef.key}',
      imageUrl,
      storagePath,
      plantType,
      inOrOut,
      careInstruct
    })

    window.location.assign('read.html')
    
}