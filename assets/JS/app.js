'use strict'

let workingHours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Total'];

const Seattle = {
    City: 'Seattle',
    minCust: 23,
    maxCust: 65,
    cookiesSales: [], 
    average: 6.3,
    getCookiesSales: function(minCust, maxCust){
        for (let index = 0; index < (workingHours.length - 1); index++) {
  
            this.cookiesSales.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.average)) ;
        }
        
        
        let total = this.cookiesSales[0] + this.cookiesSales[1] + this.cookiesSales[2] +this.cookiesSales[3] +this.cookiesSales[4] +this.cookiesSales[5] +this.cookiesSales[6] +this.cookiesSales[7] +this.cookiesSales[8] +this.cookiesSales[9] +this.cookiesSales[10] +this.cookiesSales[11] +this.cookiesSales[12] +this.cookiesSales[13]; 
        this.cookiesSales.push(total);

    },
    
    render: function() {

    const parentElement = document.getElementById('cookiesSales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for( let i = 0; i < workingHours.length; i++){
        
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.cookiesSales[i] + ' cookies' +'.'; 
    }
}
};

const Tokyo = {
    City: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    cookiesSales: [], 
    average: 1.2,
    getCookiesSales: function(minCust, maxCust){
        for (let index = 0; index < (workingHours.length - 1); index++) {
  
            this.cookiesSales.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.average)) ;
        }
        
        
        let total = this.cookiesSales[0] + this.cookiesSales[1] + this.cookiesSales[2] +this.cookiesSales[3] +this.cookiesSales[4] +this.cookiesSales[5] +this.cookiesSales[6] +this.cookiesSales[7] +this.cookiesSales[8] +this.cookiesSales[9] +this.cookiesSales[10] +this.cookiesSales[11] +this.cookiesSales[12] +this.cookiesSales[13]; 
        this.cookiesSales.push(total);

    },
    
    render: function() {

    const parentElement = document.getElementById('cookiesSales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for( let i = 0; i < workingHours.length; i++){
        
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.cookiesSales[i] + ' cookies' +'.'; 
    }
}
};
const Dubai = {
    City: 'Dubai',
    minCust: 11,
    maxCust: 38,
    cookiesSales: [], 
    average: 3.7,
    getCookiesSales: function(minCust, maxCust){
        for (let index = 0; index < (workingHours.length - 1); index++) {
  
            this.cookiesSales.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.average)) ;
        }
        
        
        let total = this.cookiesSales[0] + this.cookiesSales[1] + this.cookiesSales[2] +this.cookiesSales[3] +this.cookiesSales[4] +this.cookiesSales[5] +this.cookiesSales[6] +this.cookiesSales[7] +this.cookiesSales[8] +this.cookiesSales[9] +this.cookiesSales[10] +this.cookiesSales[11] +this.cookiesSales[12] +this.cookiesSales[13]; 
        this.cookiesSales.push(total);

    },
    
    render: function() {

    const parentElement = document.getElementById('cookiesSales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for( let i = 0; i < workingHours.length; i++){
        
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.cookiesSales[i] + ' cookies' +'.'; 
    }
}
};
const Paris = {
    City: 'Paris',
    minCust: 20,
    maxCust: 38,
    cookiesSales: [], 
    average: 2.3,
    getCookiesSales: function(minCust, maxCust){
        for (let index = 0; index < (workingHours.length - 1); index++) {
  
            this.cookiesSales.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.average)) ;
        }
        
        
        let total = this.cookiesSales[0] + this.cookiesSales[1] + this.cookiesSales[2] +this.cookiesSales[3] +this.cookiesSales[4] +this.cookiesSales[5] +this.cookiesSales[6] +this.cookiesSales[7] +this.cookiesSales[8] +this.cookiesSales[9] +this.cookiesSales[10] +this.cookiesSales[11] +this.cookiesSales[12] +this.cookiesSales[13]; 
        this.cookiesSales.push(total);

    },
    
    render: function() {

    const parentElement = document.getElementById('cookiesSales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for( let i = 0; i < workingHours.length; i++){
        
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.cookiesSales[i] + ' cookies' +'.'; 
    }
}
};
const Lima = {
    City: 'Lima',
    minCust: 2,
    maxCust: 16,
    cookiesSales: [], 
    average: 4.6,
    getCookiesSales: function(minCust, maxCust){
        for (let index = 0; index < (workingHours.length - 1); index++) {
  
            this.cookiesSales.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.average)) ;
        }
        
        
        let total = this.cookiesSales[0] + this.cookiesSales[1] + this.cookiesSales[2] +this.cookiesSales[3] +this.cookiesSales[4] +this.cookiesSales[5] +this.cookiesSales[6] +this.cookiesSales[7] +this.cookiesSales[8] +this.cookiesSales[9] +this.cookiesSales[10] +this.cookiesSales[11] +this.cookiesSales[12] +this.cookiesSales[13]; 
        this.cookiesSales.push(total);

    },
    
    render: function() {

    const parentElement = document.getElementById('cookiesSales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for( let i = 0; i < workingHours.length; i++){
        
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.cookiesSales[i] + ' cookies' +'.'; 
    }
}
}

function generateRandomNumber(minCust, maxCust) {
    return Math.ceil(Math.random() * (maxCust - minCust + 1) + minCust) ; 
  }
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



  
