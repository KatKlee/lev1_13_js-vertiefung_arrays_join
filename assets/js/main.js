const meinText1 = ["Hello", "World"]
const meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
const meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

const join1Text1 = meinText1.join()
const join2Text1 = meinText1.join("")
const join3Text1 = meinText1.join(" ")
const join4Text1 = meinText1.join("+")

console.log(join1Text1) // Hello,World (joined by comma without space)
console.log(join2Text1) // HelloWorld (joined element next to element)
console.log(join3Text1) // Hello World (joined by space between)
console.log(join4Text1) // Hello+World (joined by the given input)

const join1Text2 = meinText2.join()
const join2Text2 = meinText2.join("")
const join3Text2 = meinText2.join(" ")
const join4Text2 = meinText2.join("+")

console.log(join1Text2) // Hello,World (joined by comma without space)
console.log(join2Text2) // HelloWorld (joined element next to element)
console.log(join3Text2) // Hello World (joined by space between)
console.log(join4Text2) // Hello+World (joined by the given input)

const join1Text3 = meinText3.join()
const join2Text3 = meinText3.join("")
const join3Text3 = meinText3.join(" ")
const join4Text3 = meinText3.join("+")

console.log(join1Text3) // Hello,World (joined by comma without space)
console.log(join2Text3) // HelloWorld (joined element next to element)
console.log(join3Text3) // Hello World (joined by space between)
console.log(join4Text3) // Hello+World (joined by the given input)