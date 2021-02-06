fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries =>{
//console.log(countries);
const countryDiv = document.getElementById('countries');
for(let i =0;i<countries.length;i++){
const country = countries[i];
//console.log(country.name);
const eachDiv = document.createElement('div');
eachDiv.className='countryCSS';

// const h3 = document.createElement('h3');
// h3.innerText = country.name;

// const countryCapital = document.createElement('p');
// countryCapital.innerText = country.capital;

// eachDiv.appendChild(h3);
// eachDiv.appendChild(countryCapital);
// countryDiv.appendChild(eachDiv);

//another way of showing the data
const countryInfo = `
<h3 class="country-name">${country.name}</h3>
<p>${country.capital}</p>
<button onclick="displayCountryDetail('${country.name}')">Details</button>
`
eachDiv.innerHTML = countryInfo;
countryDiv.appendChild(eachDiv);

}
}

const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
//console.log(url);
fetch(url)
.then(res => res.json())
.then(data =>renderCountryInfo(data[0])); //in the country api, country name is in 0 index, that's why data[0]
}

const renderCountryInfo = country =>{
    const countryDiv = document.getElementById("countryDetails");
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>Population:${country.population}</p>
    <p>Area:${country.area}</p>
    <img src = "${country.flag}">
    `
}