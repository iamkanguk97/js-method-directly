/**
 * 구현할 메서드: reduce
 * - 배열의 모든 요소를 하나의 값으로 결합한다
 * - 반복적으로 함수를 적용하여 누적값을 계산한다
 * - 원본 배열의 상태는 유지한다
 *
 * initialValue는 optional임 -> undefined이면 배열의 첫 번째 원소로 선택함
 */
function myReduce(callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    // 반복문 처음인데 초기값을 설정하지 않은 경우 ==> 첫 번째 요소로 설정
    if (i === 0 && initialValue === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
}

Array.prototype.myReduce = myReduce;

console.log([1, 2, 3, 4, 5].myReduce((acc, value) => (acc += value)));
