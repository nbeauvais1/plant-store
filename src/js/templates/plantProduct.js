function plantProduct ({key, imageUrl, plantType, inOrOut, careInstruct}) {
    const template = `
        <aside class="plant-product" data-key="${key}">

            <figure>
            <img src="${imageUrl}" width="160" alt="A ${plantType} plant.">
                <figcaption> <h2>${plantType}</h2></figcaption>
                <p>Keep this plant: ${inOrOut}</p>
                <h3>Care Instructions:</h3>
                <p>${careInstruct}</p>
            </figure>
    
            <footer>
                <button id="edit" data-key="${key}">Edit</button>
                <button id="delete" data-key="${key}">Delete</button>
            </footer>
    
        </aside>
      `
    const element = document.createRange().createContextualFragment(template).children[0]
    addPlantControls(element)
    return element

}
function addPlantControls(plant){
    plant.querySelector('#edit').addEventListener('click', onEditPlant)
    plant.querySelector('#delete').addEventListener('click', onDeletePlant)
}

function onEditPlant(e){
    const key = e.target.dataset.key;
    sessionStorage.setItem('key', key)
    window.location.assign('update.html')
}

function onDeletePlant(e){
    const key = e.target.dataset.key;
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}

export {plantProduct}