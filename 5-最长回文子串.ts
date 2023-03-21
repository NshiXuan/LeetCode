function longestPalindrome(s: string): string {
  // 双指针
  // 1.定义指针
  let left = 0 // 左指针
  let right = 0 // 右指针

  // 2.定义存储字符串
  let str = ''

  // 3.进行判断 如果有两个相等的字符 如 aba
  for (let i = 0; i < s.length; i++) {
    // 3.1 令指针位置为i
    // 如 a b (c) b c，当来到c时 s[right+1]为b === s[left-1]为b 就可以获取到最长回文了 
    left = i
    right = i


    // 3.2 当s[right+1]===s[i]的时候结束循环 如 aa
    // 例子 a a b a a 
    // i=2时；a (a) b a(right) a 
    // right会循环到倒数第二个a
    // i=3; a(left) a (b) a a(right) 
    // 第一个while不会循环(因为b右边没有相等的) 第二个while一直循环到最后
    while (right + 1 < s.length && s[right + 1] === s[i]) {
      right += 1
    }

    // 3.3 当s[left]===s[right]的时候结束
    while (left - 1 >= 0 && right + 1 < s.length && s[left - 1] === s[right + 1]) {
      right += 1
      left -= 1
    }

    // 3.4 如果合法 就切割left到right之间的字符串
    // 一个字符串可能有多个回文子串 str.length < right - left + 1 用来判断是否为最长的字符串 如果小于当前字符串就不切割
    if (right > left && str.length < right - left + 1) {
      // slice的右边是一个开区间left <= x < right 需要+1
      str = s.slice(left, right + 1)
    }
  }

  // 4.如果没用相等的字符如 a ac 就说明获取其中一个就可以了
  str = str ? str : s[0]

  return str
};

console.log(longestPalindrome("ac"))