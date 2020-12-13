var request = new XMLHttpRequest();
request.open('GET', "https://restcountries.eu/rest/v2/all")
request.onload = function(){
var data = JSON.parse(this.response)

// Get all the countries from Asia continent /region using Filter function

console.log(data.filter(ele=>ele.region=="Asia"))

// Get all the countries with population of less than 2 lacs using Filter function

console.log(data.filter(ele=>ele.population<200000))

//  Print the following details name, capital, flag using forEach function
data.forEach(ele=>console.log(ele.name,ele.capital,ele.flag));

// - Print the total population of countries using reduce function

var total = data.reduce((oldPopulation,ele)=>{
return ele.population+oldPopulation;
},0)
console.log(total);

 // Print the country which use US Dollars as currency.

for(i=0;i<data.length;i++){
if(data[i].currencies[0].code==="USD")
{
  console.log(data[i]);
}


}}
request.send()
