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
 * 그래서 우리는 prototype을 사용해야 한다.
 */
function pushV3(...items) {
  for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }

  return this;
}

Array.prototype.pushV3 = pushV3;

console.log([1, 2, 3, 4, 5].pushV3(6, 7));
