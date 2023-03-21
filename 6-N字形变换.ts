function convert(s: string, numRows: number): string {
  // 1.如果只有一行 直接返回
  if (numRows === 1) {
    return s
  }

  // 2.获取行数 （最小行数）
  // 为什么获取最短长度？ 如(ab,3) 我们需要3行 但是ab只能实现2行 
  let len = Math.min(s.length, numRows)

  // 3.根据行数定义数组长度
  // 数组第一个元素放第一行字符 第二个放第二行
  let rows: any[] = []
  // 根据长度 初始化数组
  for (let i = 0; i < len; i++) {
    rows[i] = ''
  }


  // 4.循环字符串 把字符串按照numRows的行数放入数组 
  // 分析：如下列子PAYPALISHIRING 前4个字符分别放入数组的前四个元素
  /*(1)-(10)代表执行步骤  我们发现数组下标为0->3再3->0
    [0]  P(1)       I(7) 
    [1]  A(2)  L(6) S(8)
    [2]  Y(3) A(5)  H(9)
    [3]  P(4)       I(10)
  */

  // 4.1.定义down与loc
  let index = 0 // 当前数组下标
  let down = false // 控制index位0-3或者3-0

  for (const item of s) {
    rows[index] += item
    console.log(rows)
    if (index === 0 || index == len - 1) {
      down = !down
    }
    index += down ? 1 : -1
  }

  // 5.拼接结果
  let res = ''
  for (const row of rows) {
    res += row
  }
  return res
};

console.log(convert('PAYPALISHIRING', 4))
/*
[ 'P', '', '', '' ]
[ 'P', 'A', '', '' ]
[ 'P', 'A', 'Y', '' ]
[ 'P', 'A', 'Y', 'P' ]
[ 'P', 'A', 'YA', 'P' ]
[ 'P', 'AL', 'YA', 'P' ]
[ 'PI', 'AL', 'YA', 'P' ]
[ 'PI', 'ALS', 'YA', 'P' ]
[ 'PI', 'ALS', 'YAH', 'P' ]
[ 'PI', 'ALS', 'YAH', 'PI' ]
[ 'PI', 'ALS', 'YAHR', 'PI' ]
[ 'PI', 'ALSI', 'YAHR', 'PI' ]
[ 'PIN', 'ALSI', 'YAHR', 'PI' ]
[ 'PIN', 'ALSIG', 'YAHR', 'PI' ]
*/ 