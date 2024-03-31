/**
 * 구현할 메서드: reverse
 * 입력: 배열
 * 출력: reverse된 배열을 반환한다
 */
function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

/**
 * <코딩문님 스타일의 reverse 메서드>
 */
function reverse_v2(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse_v2([1, 2, 3, 4, 5]));
