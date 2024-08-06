const heroes_bollywood=["ajay","sid","hrthitk","salman"]
const heroes_hollywood=["henry","jaosn","vin","hugeh"]

//using concat
// const all_heroes=heroes_bollywood.concat(heroes_hollywood)
//console.log(all_heroes);

//spread operator
const all_heroes=[...heroes_bollywood,...heroes_hollywood]
console.log(all_heroes);

