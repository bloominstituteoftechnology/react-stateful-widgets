const friend = {
  name: "Mark",
  age: 29,
  weight: "130 Kilograms"
}

console.log(friend.name) // "Mark"
console.log(friend.age) // 29
console.log(friend.weight) // "130 Kilograms"

const { name, age, weight } = friend;

console.log(name) // "Mark"
console.log(age) // 29
console.log(weight)

const array = [1, 2, 3];

const [variableName, second, third] = array;


const friend = {
  name: "Anubis",
  age: 24,
  favFood: "Eggs"
}

console.log(friend.name)//"Anubis"
console.log(friend.age)// 24
console.log(friend.favFood)//"Eggs"

const { name, age, favFood} = friend;

console.log(name)
console.log(age)
console.log(favFood)