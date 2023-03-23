// 第一种方法
// function intToRoman(num: number): string {
//   // 1.边界判断
//   if (num < 0 || num > 3999) return ''

//   // 2.定义罗马字符
//   // 2.1 个位 1 - 9
//   const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
//   // 2.2 十位 10 - 20 - ... - 90
//   const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
//   // 2.3 百位 100 - 200 - ... - 900
//   const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
//   // 2.4 千位i 1000 - 2000 -3000
//   const thousands = ['', 'M', 'MM', 'MMM']

//   // 3.定义收集罗马数字的数组
//   const romanArr: string[] = []

//   // 4.获取num的各十百千的位数
//   // 4.1获取千位
//   romanArr.push(thousands[Math.floor(num / 1000)])
//   // 4.2获取百位
//   romanArr.push(hundreds[Math.floor((num % 1000) / 100)])
//   // 4.3获取十位
//   romanArr.push(tens[Math.floor((num % 100) / 10)])
//   // 4.4获取个位
//   romanArr.push(ones[Math.floor(num % 10)])
//   console.log(romanArr)

//   // 5.将罗马数字数组拼接称字符串并返回
//   return romanArr.join('')
// };

// 第二种方法
function intToRoman(num: number): string {
  // 1.边界判断
  if (num < 0 || num > 3999) return ''

  // 2.列举数字对应的罗马字符
  const valueRoman: [number, string][] = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]

  // 3.定义收集罗马字符的数组
  const romanArr: string[] = []

  for (const [value, romanStr] of valueRoman) {
    while (num >= value) {
      num -= value
      romanArr.push(romanStr)
    }

    if (num == 0) break
  }

  // 4.将罗马数字数组拼接称字符串并返回
  return romanArr.join('')
};


console.log(intToRoman(58))
