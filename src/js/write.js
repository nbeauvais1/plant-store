import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

document.forms["rentalForm"].addEventListener("submit", onAddRental);
 
// Loading form Submit Event Handler
function onAddRental(e) {
    e.preventDefault();
    uploadNewVacactionRenal();
    } 

// File Input Change Handler
function onImageSelected(e) {
    //selected file
    let file = e.target.files[0];
    // update the display with the requested image
document.querySelector(".display img").src = URL.createObjectURL(file);  
    }

    document.querySelector("#rentalImage").addEventListener("change", onImageSelected);

// Upload form fields to storage bucket and RTD
async function uploadNewVacactionRenal() {
    const city = document.querySelector('#cityName').value.trim();
    const file = document.querySelector('#rentalImage').files[0]
   
    // Set path to the storage bucket for the image
    const imageRef =     storageRef( storage, `images/${file.name}`);
    // path to the RTD
    const dataRef =  databaseRef( db, 'rentals')
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
      city
    })
    
}