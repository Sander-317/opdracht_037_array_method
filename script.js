// OPDRACHT A
const addTheWordCool = function(array){
    // add your code
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//OPDRACHT A alternate

const isArray = function(input) {
    return Array.isArray(input)
}

console.log(isArray("Winc Winc, nudge nudge")); // false
console.log(isArray([1, 2, 4, 0])); // true

// OPDRACHT B

const  amountOfElementsInArray = function(array){
    return array.length
}
    
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

//OPDRACHT C 

const selectBelgiumFromBenelux = function(array) {
    return array[0]
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//OPDRACHT C alternate

const selectBelgiumFromBeneluxShift = function(array) {
    return array.shift()
}

console.log(selectBelgiumFromBeneluxShift(["Belgie", "Nederland", "Luxemburg"])) 

//OPDRACHT C alternate 2

const selectBelgiumFromBeneluxSlice = function(array) {
    return array.slice(0, 1)
}
console.log(selectBelgiumFromBeneluxSlice(["Belgie", "Nederland", "Luxemburg"]))

//OPDRACHT C alternate 3

const selectBelgiumFromBeneluxSplice = function(array) {
    return array.splice(0, 1)
}
console.log(selectBelgiumFromBeneluxSplice(["Belgie", "Nederland", "Luxemburg"]))


// OPDRACHT D

const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];

console.log(lastElementInArray[3])

  // resultaat: "Schildpad"

  //OPDRACHT E 

  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
    return presidents.slice(1)
  }

const impeachTrumpSplice = function(array) {
     presidents.splice(0 ,1)
     return presidents
     
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


//OPDRACHT F

const stringsTogether =['Winc', 'Academy', 'is', 'leuk', ';-}']

console.log(stringsTogether.join( " ")) 
 


//resultaat: "Winc Academy is leuk ;-}"


//OPDRACHT G 

firstArray = [1,2,3];
secondArray = [4,5,6];

console.log(firstArray.concat(secondArray));

// combineArrays([1,2,3], [4,5,6]) 
  // resultaat: [1,2,3,4,5,6]



