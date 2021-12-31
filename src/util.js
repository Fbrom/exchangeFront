export function unique(value, index, self) {
    return self.indexOf(value) === index;
  };


export function calculator(comission, finalValue, amount) {
  return parseFloat(amount * (1 - comission) * finalValue).toFixed(2);
}