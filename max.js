/**
 * 구현할 메서드: max
 * 입력: 숫자형 값으로 구성된 배열
 * 출력: 입력된 배열의 가장 큰 요소(숫자)
 */
function max(arr) {
  // 빈 배열일 경우에는 null 반환
  if (arr.length === 0) {
    return null;
  }

  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }

  return maxVal;
}

console.log(max([1, 2, 3, 4, 5]));
