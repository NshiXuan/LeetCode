function lengthOfLongestSubstring(s: string): number {
  // 1.定义set 判断是否重复
  let set = new Set()
  // 2.定义最大长度
  let maxLength = 0
  // 3.定义j删除set的值
  let j = 0
  // 3.定义for循环
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) { // 如果set中没有s[i] 则加入set
      set.add(s[i])
      // 更新最大长度
      console.log(set)
      maxLength = Math.max(maxLength, set.size)
    } else {
      // 如果set中有了s[i] 说明重复 那么set中s[i]的值与s[i]前面的值就没用了 删除当前set之前的值 重新记录 如下
      // 例子1：dvdf 
      // 循环到第二个d时 发现已存在 则删除set中d和d之前的值(这里没有之前的值) 重新加入d
      // Set(1) { 'd' }
      // Set(2) { 'd', 'v' } 
      // delete 
      //   Set(3) { 'v', 'd', 'f' }
      // 3

      // 例子2：pwwa
      // 循环到第二个w时 存在 删除w与w之前的值 重新把w加入set
      // Set(1) { 'p' }
      // Set(2) { 'p', 'w' }
      // delete
      //   delete
      //   Set(2) { 'w', 'a' }
      // 2
      while (set.has(s[i])) {
        set.delete(s[j]);
        console.log('delete')
        j++;
      }
      set.add(s[i])
    }
  }
  return maxLength
};

console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("pwwa"))