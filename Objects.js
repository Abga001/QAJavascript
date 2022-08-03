

let darthVader = new Object();
darthVader["allegiance"] = "empire";
darthVader["weapon"] = "Lightsaber";
darthVader["sith"] = "True";

console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader\'s allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(darthVader["jedi"] = "False");

console.log(darthVader);



let myArray =["hello","everyone"];

console.log(myArray.length);

myArray.push("how");
myArray.push("you");
myArray.push("doing");

console.log(myArray.length);

console.log(myArray);

myArray.shift();

let text = "";
for(let i of myArray) {
    text += i;
    console.log(i);
}