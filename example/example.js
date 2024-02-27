import { randInt, vec2, vec2Maginitude, vec2Distance } from '../src/jsgl.js'

const vecA = vec2(randInt(-5, 5), randInt(-5, 5))
const vecB = vec2(randInt(-5, 5), randInt(-5, 5))

console.log(vecA)
console.log(vecB)

console.log(vec2Distance(vecA, vecB))