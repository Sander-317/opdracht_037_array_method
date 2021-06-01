// OPDRACHT A
const addTheWordCool = function(array){
    // add your code
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// OPDRACHT B

const  amountOfElementsInArray = ['appels', 'peren', 'citroenen'];

console.log(amountOfElementsInArray.length);

// console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

//OPDRACHT C 

selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];

console.log(selectBelgiumFromBenelux[0]);

// resultaat: "Belgie" 


// OPDRACHT D

const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];

console.log(lastElementInArray[3])

  // resultaat: "Schildpad"

  //OPDRACHT E 

  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
                    return presidents.slice(1)
  }



//   const impeachTrumpSplice = function(array) {
//      console.log(presidents.splice(0, 1 , ""));
//      return  presidents.splice(0, 1, "");
//         // console.log(presidents)
//   }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
// //   console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
// // impeachTrumpSplice();
// console.log(impeachTrumpSplice(presidents));




