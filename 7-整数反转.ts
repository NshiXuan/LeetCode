function reverse(x: number): number {
  // 1.将整数转为绝对值再转为字符串
  let numStr = Math.abs(x) + ''
  console.log(numStr, 'numStr')

  // 2.将字符串转成数组并反转
  let numArr = numStr.split('').reverse()
  console.log(numArr, 'numArr')

  // 3.将反转后的数组拼接 并转为整数
  let res = +numArr.join('')
  console.log(res)

  // 4.如果x本身位负数 则res转为负数
  res = x < 0 ? 0 - res : res

  // 5.判断是否大于32位数
  if (res < -(2 ** 31) || res > (2 ** 31 - 1)) {
    res = 0
  }

  return res
};

console.log(reverse(0))