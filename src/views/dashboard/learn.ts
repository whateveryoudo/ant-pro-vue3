/*
 * @Author: ykx
 * @Date: 2021-05-13 10:10:04
 * @LastEditTime: 2021-05-14 15:52:59
 * @LastEditors: your name
 * @Description:
 * @FilePath: \ant-pro-vue3\src\views\dashboard\learn.ts
 */
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: string | number | undefined;
}
interface NumberArr {
  [index: number]: number;
}
interface IArguments {
  [index: number]: number;
  callee: Function;
  length: number;
}
interface searcFunc {
  (source: string, substring?: string): boolean;
}
const p: Person = {
  id: 1,
  name: "撒大声地",
  age: 12,
  genal: "男",
};
// let fibonacci: number[] = [1,1,2,3,5];
// let fibonacci: Array<number> = [1,1,2,3,5];
let fibonacci: NumberArr = [1, 1, 2, 3, 5];
function sun() {
  const arg: IArguments = arguments;
}
// function sum (x: number, y :number): number {
//     return x + y;
// }
const sum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
sum(1, 2);

const mysearch: searcFunc = function (
  source: string,
  substring: string = "bbb"
): boolean {
  return source === substring;
};
// p.id = 2;
console.log(mysearch("aaa"));

function restArg(source: string, ...rest: any[]) {
  console.log(source, rest);
}
console.log(restArg("asdas", 1, 2, 41));

interface Cat {
  name: string;
  swim(): void;
}
interface Dog {
  name: string;
  run(): void;
}
function animalAction(animal: Cat | Dog): void {
  const temp = animal as Cat;
  if (typeof temp.swim === "function") {
    temp.swim();
  }
}
// function swimming(animal: Cat | Dog): void {
//     (animal as Cat).swim();
// }
const a = {
  name: "Tom",
  run() {
    console.log("跑");
  },
};

// swimming(a);


interface Animal{
    name: string;
}
interface Fish {
    name: string;
    swim():void;
}

const animal1: Animal = { name: '一个动物'}
// const fish1 = animal1 as Fish;
// const fish1: Fish = animal1

// function getCacheData<T>(key: string) : T {
//     return (window as any).cache[key];
// }
// const tom = getCacheData<Cat>('tom');
// tom.swim();

let bob: [string, number] = ['asds', 112]
bob = ['bb', 22]
bob.push(33)
function createArr<T>(length: number, value: T): Array<T> {
  let result:T[] = [];
  for(let i = 0;i < length;i++){
    result.push(value);
  }
  return result
}
const arr = createArr<string>(3, 'x');
console.log(arr);

interface arrOther{
  length: number
}
function logger<T extends arrOther>(arg: T):void{
  console.log(arg.length);
}
logger([1,2,3]);
function copyFields<T extends U, U>(target: T, source:U): T{
  let temp:T = target;
  for(let k in source){
    temp[k] = (source as T)[k]
  }
  return temp
}
console.log(copyFields({b :2,c: 3,d:4, f: 5}, {b:22, c:10, f: 30}))


interface CreateArrFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArray: CreateArrFunc<string>;
createArray = function <T>(length: number, value: T): Array<T> {
  let result:T[] = []
  for(let i = 0;i < length;i ++) {
    result.push(value);
  }
  return result;
}
console.log(createArray(4, 'aa'));

class GenericNumber <T>{
  zeroVal: T | undefined;
  add:((x: T, y: T) => T) | undefined
}
const g = new GenericNumber<number>();
g.zeroVal = 0;
g.add = function (x, y) { return x + y}