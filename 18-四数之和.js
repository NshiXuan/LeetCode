// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */
// var fourSum = function (nums, target) {
//   // 1.构造hash表存储数据
//   let hash = {}
//   let res = []

//   // 2.循环3个 第四个通过差值存储查找
//   for (let i = 0; i < nums.length - 3; i++) {
//     if (i > 0 && nums[i - 1] === nums[i]) {
//       continue
//     }

//     for (let j = i + 1; j < nums.length - 2; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) {
//         continue
//       }

//       for (let k = j + 1; k < nums.length - 1; k++) {
//         // 3.计算第四个数的差值
//         let diff = target - nums[i] - nums[j] - nums[k]


//         // 4.获取第四个数
//         let lastNum = nums[k + 1]
//         console.log(nums[i], nums[j], nums[k], lastNum)
//         // console.log(diff, lastNum)

//         if (hash[lastNum] !== undefined) {
//           res.push(hash[lastNum].concat(lastNum))
//         } else {
//           // 6.不等 存入hash
//           hash[diff] = [nums[i], nums[j], nums[k]]
//         }
//       }
//     }
//   }
//   console.log(res, 'res')
//   console.log(hash, 'hash')

//   // 去重
//   const obj = {};
//   for (const count of res) {
//     const sortNum = JSON.stringify(count.sort());
//     if (!obj[sortNum]) {
//       obj[sortNum] = true;
//     }
//   }
//   const result = Object.keys(obj).map(JSON.parse);
//   return result;
// };

// fourSum([-1, 0, 1, 2, -1, -4], -1) 

console.log('aaa'.length)