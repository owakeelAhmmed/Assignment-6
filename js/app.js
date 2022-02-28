

const main = document.getElementById('main');
const inputBtn = () => {
    const input = document.getElementById('input-value');
    const searchText = input.value;
    

    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(data => phoneDisplay(data.data))
}


const phoneDisplay = (phones) => {
    


    for(const phone of phones){
        const div = document.createElement('div');
        console.log(phone);

        div.classList.add("col-lg-4");
        div.classList.add("mt-5")
        div.classList.add("mb-3")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <p class="card-text">${phone.phone_name}</p>
            <p class="card-text">${phone.slug}</p>
            <button onclick = "cardDetails('')" class="btn btn-primary">See More</button>
        </div>
    </div>
        
        `
        main.appendChild(div)

    }
}