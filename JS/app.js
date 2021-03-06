'use strict'

let workingHours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Daily Location Total'];
City.allCity = [];
let dailyCityTotal = [];

const parentElement = document.getElementById('cookiesSales');
    
const tableElement = document.createElement('table');

parentElement.appendChild(tableElement);

function tableHearder(){
      
        const trElement = document.createElement('tr');
        tableElement.appendChild(trElement);
      
        const thElement = document.createElement('th');   
        trElement.appendChild(thElement);
        thElement.textContent = 'City/Hours';

        for(let i = 0; i < workingHours.length; i++){
            const thElement = document.createElement('th');   
            trElement.appendChild(thElement);
            thElement.textContent = workingHours[i];
       
    }
}

    tableHearder();

function City(name, minCust,maxCust,cookiesSales, average, total){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookiesSales = cookiesSales;
    this.average = average;
    this.total = 0;
    City.allCity.push(this);
}
City.prototype.getCookiesSales = function(minCust,maxCust){
    for (let index = 0; index < (workingHours.length - 1); index++) {
  
          this.cookiesSales.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.average)) ;
        this.total = this.total + this.cookiesSales[index];

}
this.cookiesSales.push(this.total);
}

dailyCityTotal.push(this.total);
console.log(dailyCityTotal);

City.prototype.render = function(){

  
        const trElement = document.createElement('tr');
        tableElement.appendChild(trElement);

        const tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent =  this.name;
    
        for( let i = 0; i < workingHours.length; i++){
            
            const tdElement = document.createElement('td');
            trElement.appendChild(tdElement);
            tdElement.textContent =  this.cookiesSales[i]; 
        }
        

}

function tableFooter(){
      
    const trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
  
    const thElement = document.createElement('th');   
    trElement.appendChild(thElement);
    thElement.textContent = 'Totals';
//
//     for(let i = 0; i < workingHours.length; i++){
//         const thElement = document.createElement('th');   
//         trElement.appendChild(thElement);
//         thElement.textContent = Seattle.cookiesSales[i] + Tokyo.cookiesSales[i] + Dubai.cookiesSales[i] + Paris.cookiesSales[i] + Lima.cookiesSales[i];
   
// }
for( let i = 0; i < (workingHours.length); i++ ){
  const th1Element = document.createElement( 'th' );
  trElement.appendChild( th1Element );
  let dailyTotalHours = 0;
  for ( let j = 0; j < City.allCity.length; j++ ) {
    dailyTotalHours += City.allCity[j].cookiesSales[i];
  }
  th1Element.textContent = dailyTotalHours;
}

//
}
//  ()


const Seattle = new City('Seatle', 23 , 65 , [], 6.3);
const Tokyo = new City('Tokyo', 3 , 24 ,[], 1.2);
const Dubai = new City('Dubai', 11, 38, [], 3.7);
const Paris = new City('Paris', 20, 38 , [], 2.3);
const Lima = new City('Lima', 2, 16, [], 4.6);
Seattle.getCookiesSales();
Tokyo.getCookiesSales();
Dubai.getCookiesSales();
Paris.getCookiesSales();
Lima.getCookiesSales();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
tableFooter();



  const formelement = document.getElementById('addNewCity');
  
//   console.log(formelement);

  formelement.addEventListener( 'submit',function(event){ 
    
    event.preventDefault();
    tableElement.removeChild(tableElement.lastChild);
    const cityName = event.target.cityName.value;
    const minCust = parseFloat(event.target.minCust.value);
    const maxCust = parseFloat(event.target.maxCust.value);
    const average = parseFloat(event.target.average.value);
    
    const city = new City(cityName, minCust , maxCust , [], average);
    
   
    city.getCookiesSales();
    city.render();
    formelement.reset();
    tableFooter();
    console.log(thElement);
}
);


  function generateRandomNumber(minCust, maxCust) {
    return Math.ceil(Math.random() * (maxCust - minCust + 1) + minCust) ; 
  }; 

//   function tableFooter(){
      
//     const trElement = document.createElement('tr');
//     tableElement.appendChild(trElement);
  
//     const thElement = document.createElement('th');   
//     trElement.appendChild(thElement);
//     thElement.textContent = 'Totals';
    

//     for(let i = 0; i < workingHours.length; i++){
//         const thElement = document.createElement('th');   
//         trElement.appendChild(thElement);
//         thElement.textContent = Seattle.cookiesSales[i] + Tokyo.cookiesSales[i] + Dubai.cookiesSales[i] + Paris.cookiesSales[i] + Lima.cookiesSales[i];
// }

// }




