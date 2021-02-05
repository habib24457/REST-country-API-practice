fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries =>{
//console.log(countries);
const countryDiv = document.getElementById('country-name');
for(let i =0;i<countries.length;i++){
const country = countries[i];
//console.log(country.name);
const eachDiv = document.createElement('div');

const h3 = document.createElement('h3');
h3.innerText = country.name;

const countryCapital = document.createElement('p');
countryCapital.innerText = country.capital;

eachDiv.appendChild(h3);
eachDiv.appendChild(countryCapital);
countryDiv.appendChild(eachDiv);

}

}