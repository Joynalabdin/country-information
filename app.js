fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => countryFilter(data))


const countryFilter = (country) => {
    const countries = document.getElementById("countries")

    

   

    country.forEach(filter => {
        const countryDiv = document.createElement('div')
        countryDiv.className = "country-div";
        const countryInfo = `
    <h3>${filter.name}</h3>
    <p>${filter.capital}</P>
    <button onclick = "displayCountryDetail('${filter.name}')"> Details </button>
    `
        countryDiv.innerHTML = countryInfo
        countries.appendChild(countryDiv)

    });
}

const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> renderCountryInfo(data[0]))
}

const renderCountryInfo = country => {
    console.log(country)
    const countryDiv = document.getElementById("countryDetail")
    countryDiv.innerHTML = `
    <h1> ${country.name} </h1>
    <p> Population : ${country.population}</p>
    <p> Area : ${country.area}</p>
    <img src= ${country.flag}>
    
    `
}