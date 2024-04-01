/**
 * 구현할 메서드: filter
 * - 조건을 충족하는 배열의 요소만 추출해서 새로운 배열을 생성한다
 * - 각 요소에 함수를 적용하여 결과가 true인 요소만 포함한다
 * - 원본 배열의 상태는 그대로 유지한다
 */
function myFilter(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.myFilter = myFilter;

console.log([1, 2, 3, 4, 5].myFilter((num) => num % 2 === 0));
console.log([1, 2, 3, 4, 5].myFilter((num) => num > 3));
