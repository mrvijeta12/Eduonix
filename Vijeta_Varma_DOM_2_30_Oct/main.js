async function data() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");

    const details = await response.json();
    return details;
}

data().then((objectData) => {

    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td> <img src=" ${values.image}"/><td>
        <td> ${values.name}<td>
        <td> ${values.id}<td>
        <td> ${values.symbol}<td>
        <td> ${values.current_price}<td>
        <td> ${values.total_volume}<td>`
    });

    document.getElementById("crypto-table").innerHTML = tableData

}).catch((error) => {
    console.log(error);
});


// ASSIGNMENT 2

// MULTI-LEVEL INHERITANCE 

// class Employee {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   infoEmployee() {
//     console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
//   }
// }

// class Manager extends Employee {
//   constructor(name, age, post) {
//     super(name, age);
//     this.post = post;
//   }

//   infoManager() {
//     console.log(`working... ${this.post} `);
//   }
// }

// class OtherEmployee extends Manager {
//   constructor(name, age, post, project) {
//     super(name, age, post);
//     this.project = project;
//   }

//   infoOtherEmployee() {
//     console.log(`Myself ${this.name} and I am ${this.age} years old. Currently at a post of ${this.post} and work on ${this.project}.`);
//   }
// }

// const result = new OtherEmployee("Aarav", 24, "Senior Engineer", "Backend Project");
// result.infoEmployee();
// result.infoManager() ;
// result.infoOtherEmployee();


// HIERARCHICAL INHERITANCE



// class Food {
//   constructor(name, category) {
//     this.name = name;
//     this.category = category;
//   }

//   describe() {
//     console.log(`This is ${this.name}, a type of ${this.category}.`);
//   }
// }

// class Fruit extends Food {
//   constructor(name,category) {
//     super(name,category);
//   }
//   isSweet() {
//     console.log(`${this.name} is sweet.`);
//   }
// }

// class Vegetable extends Food {
//   constructor(name,category) {
//     super(name,category);
//   }

//   isHealthy() {
//     console.log(`${this.name} is healthy.`);
//   }
// }

// const mango = new Fruit("Mango" ,"Fruit");
// const sweet_potato = new Vegetable("Sweet-potato" ,"Vegetable");
// mango.describe();
// sweet_potato.describe();












