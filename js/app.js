
const main = document.getElementById('main');//main div declare
const inputBtn = () => {
    const input = document.getElementById('input-value');
    const searchText = input.value;
    const errorMessage = document.getElementById('error-text');
    //Conditions are provided for the Empty string
    if(searchText == ''){
         errorMessage.innerText = "Please enter a search text";
         input.value='';
         main.innerHTML = '';
    }
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(data => phoneDisplay(data.data))
        input.value='';
        main.innerHTML = '';
        errorMessage.innerHTML = '';
    }

}
// phone details show ===============>
const phoneDisplay = (phones) => {
    for(const phone of phones){
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.classList.add("col-12");
        div.classList.add("mt-5")
        div.classList.add("mb-2")
        div.innerHTML = `
        <div class="card shadow p-3 bg-body rounded" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <p class="card-text">${phone.phone_name}</p>
            <button onclick = "cardDetails('${phone.slug}')" class="btn btn-primary">See More</button>
        </div>
    </div>
        
        `
        main.appendChild(div)
    }
}
// ======= Card Details Show ==========>
const cardDetails = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const setDetails = (data.data);
        const div = document.createElement('div');
        main.innerHTML = "";
        div.classList.add("mb-3")
        div.innerHTML = `
            <div class="card mb-3 mt-4" style="max-width: 616px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img style = "width:100%; height:100%; padding: 20px;" src="${setDetails.image}" class="card-img-top" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body ">
                <h2 class="card-title  text-success">${setDetails.brand}</h2>
                <P class="card-title"><h6 style="color:#e84393;">ReleaseDate:</h6> ${setDetails.releaseDate}</P>                
                <P class="card-title"><h6 style="color:#e84393">Memory:</h6> ${setDetails.mainFeatures.memory}</P>               
                <P class="card-title "><h6 style="color:#e84393">DisplaySize:</h6> ${setDetails.mainFeatures.displaySize}</P>                
                <P class="card-title"><h6 style="color:#e84393">ChipSet:</h6> ${setDetails.mainFeatures.chipSet}</P>               
                <P class="card-title"><h6 style="color:#e84393">Sensors:</h6> ${setDetails.mainFeatures.sensors}</P>
                </div>
                </div>
            </div>
            </div>
                `
        main.appendChild(div);
    });
}


