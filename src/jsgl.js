// vec2 start
function vec2(x, y) {
  return { x: x, y: y }
}

function vec2Add(a_vec, b_vec) {
  return vec2(a_vec.x + b_vec.x, a_vec.y + b_vec.y)
}

function vec2Neg(vec) {
  return vec2(-vec.x, -vec.y)
}

function vec2Maginitude(vec) {
  return Math.sqrt(vec.x * vec.x + vec.y * vec.y)
}

function vec2Distance(a_vec, b_vec) {
  return vec2Maginitude(vec2Add(a_vec, vec2Neg(b_vec)))
}
// vec2 end

// rand start
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function randFloat(min, max) {
  return Math.random() * (max - min) + min
}
// rand end

export {
  vec2,
  vec2Add,
  vec2Neg,
  vec2Maginitude,
  vec2Distance,
  
  randInt,
  randFloat,
}