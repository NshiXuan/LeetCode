type IKun = "sing" | "dance" | "rap" | null | undefined

// 类型体操实现
//  new (...args: any[]) => any为一个构造器
type MyInstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : never

// type IKuns = NonNullable<IKun>
type IKuns =
// type IKuns = "sing" | "dance" | "rap"