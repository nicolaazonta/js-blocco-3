/* Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */


const cars = [

    {
        marca: 'volkswagen',
        modello: 'golf',
        alimentazione: 'benzina'
    },

    {
        marca: 'porsche',
        modello: 'cayenne',
        alimentazione: 'diesel'
    },

    {
        marca: 'mercedes',
        modello: 'serieX',
        alimentazione: 'gpl'
    },

    {
        marca: 'audi',
        modello: 'rs6',
        alimentazione: 'elettrica'
    },

    {
        marca: 'renault',
        modello: 'capture',
        alimentazione: 'benzina'
    },
    {
        marca: 'twingo',
        modello: 'golf',
        alimentazione: 'benzina'
    },

    {
        marca: 'toyota',
        modello: 'land cruiser',
        alimentazione: 'diesel'
    },

    {
        marca: 'mercedes',
        modello: 'serieX',
        alimentazione: 'gpl'
    },

    {
        marca: 'audi',
        modello: 'quattro',
        alimentazione: 'elettrica'
    },

    {
        marca: 'hiunday',
        modello: 'bha',
        alimentazione: 'benzina'
    }
];

/* Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. */


/* cars.forEach(element,index) => {

    console.log(element[index]);
    
     const benzinaCars = cars.filter((car => {
        if(car)
    })) 
    
}); */

//console.log(cars[2].alimentazione);


const benzinaCars = cars.filter((car,index) => {
    if(cars[index].alimentazione === 'benzina'){
        return true;
    }
    return false;
})
console.log(benzinaCars); 

const dieselCars = cars.filter((car,index) => {
    if(cars[index].alimentazione === 'diesel'){
        return true;
    }
    return false;
})
console.log(dieselCars);


const otherCars = cars.filter((car,index) => {
    if(!cars[index].alimentazione === 'diesel' && !cars[index].alimentazione === 'diesel'){
        return true;
    }
    return false;
})
console.log(otherCars);