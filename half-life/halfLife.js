module.exports = function halfLife(initialQuantity, quantityRemaining, time) {
  return time * 2 / (initialQuantity / quantityRemaining);
}