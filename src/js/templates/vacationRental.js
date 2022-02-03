/* 
    Templating
    template literals setup
    
    testing leaving my test data 
*/

function vacationRental ({key, city, imageUrl}) {
    const template = `
        <aside class="vacation-rental" data-key="${key}">

            <figure>
            <img src="${imageUrl}" width="160" alt="Vacation rental property in ${city}.">
                <figcaption> <h2>${city}</h2></figcaption>
            </figure>
    
            <footer>
                <button id="edit" data-key="${key}">edit</button>
                <button id="delete" data-key="${key}">delete</button>
            </footer>
    
        </aside>
      `
    const element = document.createRange().createContextualFragment(template).children[0]
    addVacationControls(element)
    return element

}
function addVacationControls(rental){
    rental.querySelector('#edit').addEventListener('click', onEditRental)
    rental.querySelector('#edit').addEventListener('click', onRemoveRental)
}

function onEditRental(e){
    const key = e.target.dataset.key;
    sessionStorage.setItem('key', key)
    window.location.assign('update.html')
}

function onRemoveRental(e){
    const key = e.target.dataset.key;
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}

export {vacationRental}