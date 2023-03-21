function isPalindrome(x: number): boolean {
  // 1.把number转成string 通过下标判断是否对称
  const numStr = x + ''

  // 2.获取start与end下标 对比 
  let start = 0
  let end = numStr.length - 1

  // 3.判断是否对称
  // 3.1 如果长度为1 回文
  if (numStr.length == 1) return true

  // 3.2 如果start与end的字符不相同 则不为回文数
  if (numStr[start] != numStr[end]) return false

  // 3.3 来到这说明最左最右都对称 start+1 end-1再次判断是否相等
  while (start < end) {
    if (numStr[start] != numStr[end]) return false
    start = start + 1
    end = end - 1
  }

  return true
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false