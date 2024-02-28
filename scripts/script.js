const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const techs = data.data;
    // console.log(data.data.tools)
    displayData(techs)
}


const displayData = techs => {
    const mainContainer = document.getElementById('container');
    techs.forEach(tech => {
        const eachCardContainter = document.createElement('div');
        eachCardContainter.classList = `card shadow-xl`;
        eachCardContainter.innerHTML = `
        <figure><img src="${tech.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <hr>
          <div class="flex justify-between items-center">
            <div class="">
                <h1>ChatGPT</h1>
                <p>relseat date</p>
            </div>
            <div class="">
                <button class="btn">&rarr;</button>
            </div>
        `;
        console.log(tech.image)
        mainContainer.appendChild(eachCardContainter);

    });
}

loadData()