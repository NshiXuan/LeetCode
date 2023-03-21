function myAtoi(s: string): number {
  // 1.定义一个判断字符是否为数字的方法
  const isNum = (s: string) => s >= '0' && s <= '9'

  // 2.去掉字符串的空格
  const newStr = s.trim()

  // 3.循环新的字符串 判断是否为数字 如果是push到数组中
  let numArr: any = []
  for (let i = 0; i < newStr.length; i++) {
    if (i == 0) {
      // 3.1 如果第一个为数字 push到res 不是直接break
      if (newStr[i] === '+' || newStr[i] === '-' || isNum(newStr[i])) {
        numArr.push(newStr[i])
      } else {
        break
      }
    } else if (isNum(newStr[i])) {
      // 3.2 如果第二个或之后的字符为数字
      numArr.push(newStr[i])
    } else {
      // 3.3 如果不是数字 进入下一个循环
      break
    }
  }

  // 4.如果numArr中只有+ - 号 直接返回0
  if (numArr.length == 1 && (numArr[0] == '+' || numArr[0] == '-')) {
    return 0
  }

  // 将res的数字字符拼接转成数字
  const numRes = +numArr.join('')
  let resNum = Math.max(-2147483648, numRes)
  resNum = Math.min(2147483647, resNum)
  return resNum
};

// console.log(myAtoi("4193 with words"))
// console.log(myAtoi("-321"))
// console.log(myAtoi("words and 987"))
// console.log(myAtoi(" -0012a42"))
console.log(myAtoi("3.14159"))
