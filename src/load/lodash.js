const q = require ("lodash");     
function lodash()
{
    let months = ["january","feburary","march","april","may","june","july","august","september","october","november","december"]
    console.log(q.chunk(months,4));

 
    let oddnum= [1,3,5,7,9,11,13,15,17,19]
console.log(q.tail(oddnum, 9));
  

const number= [2,4,5,4,7]
console.log(q.union(number))

const key=[
    ["horror","The Shining"],
    ["drama","Titanic"],
    ["thriller", "Shutter"],
    ["fantasy","Pans Labyrinth"]];
    
    console.log(q.fromPairs(key));
}
module.exports.lodash = lodash;


    
