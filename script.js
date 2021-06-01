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

const lastElementInArray = function(array) {
    return array.pop()
}

const lastElementInArray2 = function(array) {
    return array[array.length - 1]
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])) 
console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"])) 
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

//OPDRACHT E alternate

const impeachTrumpSlice2 = function(array) {
    //zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
    const newArray = array.slice(1, 4);
    console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
    return newArray;
  };
  
  const impeachTrumpSplice2 = function(array) {
    const removedElement = array.splice(0, 1);
    console.log(
      "removed element:",
      removedElement,
      "De mutated array, Trump is missing:",
      array
    );
    return array;
  };
  
  console.log(impeachTrumpSlice2(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice2(presidents)); // ["Obama", "Bush", "Clinton"]
  

//OPDRACHT F

const stringsTogether = function(array) {
    return array.join(" ");
  };
  
  console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
  //resultaat: "Winc Academy is leuk ;-}"

//OPDRACHT G 

const combineArrays = function(array1, array2) {
    return array1.concat(array2);
  };
  
  console.log(combineArrays([1, 2, 3], [4, 5, 6]));
  console.log(combineArrays(["hoi", "hey", "hallo"], [4, 5, 6]));
  // result should be [1,2,3,4,5,6]


