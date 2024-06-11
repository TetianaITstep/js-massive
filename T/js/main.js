// const newArray = [1,2,3,4];
// const newArray2 = newArray
// console.log(newArray===newArray2);
// let a = 12;

// let b=a;
// a=20

// console.log(a);
// console.log(b);

// const friends = ["Ira", "Tetiana", "Max","Roma", "Sasha"]
// friends[1] = "Tetiana S"
// console.log(friends[1]);
// for(let i=0; i<friends.length; i+=1){
//     console.log(`${i}- ${friends[i]}`);
//     console.log(friends[i].toUpperCase());
// }

// friends.push("Alex")
// console.log(friends);

// for(const friend of friends){
//     console.log(friend);
// }



// const cart = [
//     54, 12, 20,59,64
// ];

// const eur = 43;
// let total_uah = 0;
// let total_eur = 0;
// for(const number of cart){
//     total_eur+=number;
//     total_uah = total_eur*  eur

// }
// console.log(total_uah);
// console.log(total_eur);


// for(let i=0; i<numbers.length; i+=1){
// if(numbers[i]%2===0){
//     console.log(numbers[i]);
//     total+=numbers[i]
// }
// }
// console.log(total);
// const numbers = [1,2,3,45,60]
// let total=0;
// for(const number of numbers){
//     if(number%2 !==0){
//         console.log(number);
//         continue;
      
//     }
//     total+=number
// }
// console.log(total);



const login = [
    "@1ohapuie",
    "@2sregsg",
    "3rdhgdr",
    "4tghsdghsr"
   
]

const findLogin = "3rdhgdr"
// let message= "";
// for (let i = 0; i<login.length; i+=1){

//    if(message="Welcome")











//   login[i] !== findLogin ? message="Welcome";
//   continue;
  
// }

// console.log(message);





// const message = login.includes(findLogin)? "Welcome" : "Login";
// console.log(message);



const numbers = [ 24, 24,32414,234,44,55,66,22,36,64];
let minNumber = numbers[0];
for(const number of numbers){
    if(number< minNumber ){
        minNumber = number;
    }
}
console.log(minNumber)




const title = "top 10 benefits of React framework"

const normalTitle = title.toLowerCase();
console.log(normalTitle);
const words = normalTitle.split(" ")
console.log(words);
const slug = words.join("-")
console.log(slug);