/**
 * 구현할 메서드: map
 * - 배열 각 요소를 반환하여 새로운 배열을 만든다
 * - 각 요소에 함수를 적용하여 변형한다
 * - 원본 배열의 상태는 그대로 유지한다
 */
function myMap(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // callback에는 현재의 값, 현재 요소의 인덱스, 그리고 map 함수가 호출된 배열
    result[i] = callback(this[i], i, this);
  }
  return result;
}

Array.prototype.myMap = myMap;

const resultV1 = [1, 2, 3, 4, 5].myMap((num) => num * 10);
const resultV2 = [1, 2, 3, 4, 5].myMap((num) => num.toString());
console.log(resultV1);
console.log(resultV2);
