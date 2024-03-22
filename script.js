const list = document.getElementById('list');
const search = document.getElementById('search')
const listItems = [];

search.addEventListener('input', (e) => filterInput(e.target.value))

async function getDataFormPublicAPI() {
    const responseAPI = await fetch('https://randomuser.me/api?results=50')
    const {results} = await responseAPI.json();
    list.innerHTML = 'Loading...';
    setTimeout(() => {
        list.innerHTML = '';
        results.forEach(result => {
            const divItem = document.createElement('div')
            listItems.push(divItem);
            divItem.innerHTML = /*html*/`<div class="child">
                                            <img src="${result.picture.thumbnail}" alt="">
                                            <div class="detail">
                                                <h2>${result.name.title}. ${result.name.first} ${result.name.last}</h2>
                                                <p>From: ${result.location.country}</p>
                                            </div>
                                        </div>`;
            list.appendChild(divItem);
        })
    }, 2000)
}
function filterInput(keySearch){
    const searchTerm = keySearch.toLowerCase();
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm)){
            item.classList.remove("hidden");
        }else{
            item.classList.add("hidden");
        }
    })
    // console.log(keySearch);
}
getDataFormPublicAPI();
