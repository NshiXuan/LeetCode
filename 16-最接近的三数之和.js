/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 1.边界判断
  if (!Array.isArray(nums) || nums.length < 3) {
    return -1
  }

  // 2.数组排序小 -> 大
  nums.sort((num1, num2) => num1 - num2)

  // 3.计算三数之和与绝对值
  let sum = nums[0] + nums[1] + nums[2]
  let absMin = Math.abs(sum - target)

  // 4.定义第一个数i 第二个left 第三个right
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      // 5.循环更新三数之和与绝对值
      let newSum = nums[i] + nums[left] + nums[right]
      let newAbs = Math.abs(newSum - target)

      // 6.如果新的绝对值小于之前的绝对值 重新赋值
      if (newAbs < absMin) {
        absMin = newAbs
        sum = newSum
      }

      // 7.如果newSum小于target
      if (newSum < target) {
        left++
      } else {
        right--
      }
    }
  }

  return sum
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 0, 0], 1))