/**
 * 강욱이 직접 작성한 JavaScript Push 메서드
 */
function pushV1(arr, ...items) {
  let idx = arr.length;

  for (const item of items) {
    arr[idx++] = item;
  }

  return arr;
}

function pushV2(arr, ...items) {
  return [...arr, ...items];
}

console.log(pushV1([1, 2, 3, 4, 5], 6, 7));
console.log(pushV2([1, 2, 3, 4, 5], 6, 7));

/**
 * 하지만 위에처럼 하는건 우리가 실제로 사용하는 배열 메서드 같지 않다.
 * 실제 배열의 Push 메서드는 길이를 반환한다.
 * 그리고 우리는 prototype을 사용해야 한다.
 */
function pushV3(...items) {
  for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }

  return this.length;
}

Array.prototype.pushV3 = pushV3;

const testArray = [1, 2, 3, 4, 5];
console.log(testArray.pushV3(6, 7));
console.log(testArray);
