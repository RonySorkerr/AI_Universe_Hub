const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const techs = data.data.tools;
    // console.log(techs)
    loadDetails(techs)
}

const loadDetails = techs => {
    const dtlsContianer = document.getElementById('container');
    techs.forEach(tech =>{
        console.log(tech)
        const features = tech.features;
        // features.forEach(feature => console.log(feature))
        const dtlcard = document.createElement('div');
        dtlcard.classList = `card shadow-xl`
        dtlcard.innerHTML = `
        <figure><img src="${tech.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <p>${tech.features}</p>
          <hr>
          <div class="flex justify-between items-center">
            <div class="">
                <h1 class="text-2xl">${tech.name}</h1>
                <p>${tech.published_in
                }</p>
            </div>
            <div class="">
                <button class="btn">&rarr;</button>
            </div>
          </div>
        `;
        dtlsContianer.appendChild(dtlcard)
    })
}


loadData()