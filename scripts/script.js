const loadData = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const datas = data.data.tools[0];
    console.log(desc)
}

loadData()