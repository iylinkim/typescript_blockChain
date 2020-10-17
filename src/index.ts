// $ tsc는 ts파일에 있는 코드를 컴파일해서 index.js와 index.js.map을 만들어줌
// 어떤 종류의 변수와 데이터인지 설정을 해줘야 함

/* const name = "Nicolas",
    age = 24,
    gender = "female"; */

//type check 하는 interface, typescript에서만 작동함!
interface Human {
    name: string,
    age: number,
    gender: string;
}

// 전달할 parameter
const person = {
    name: "nicolas",
    age:22,
    gender: "female",
};

/* const sayHi = (name:string, age:number, gender:string):string => {
    // 3번째 인수는 옵션!
    // void 위치에는 함수가 어떤 유형을 반환하는지에 대한 것
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}; */
const sayHi = (person: Human):string => {
    // 3번째 인수는 옵션!
    // void 위치에는 함수가 어떤 유형을 반환하는지에 대한 것
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));


export {};
// 이 작업을 하지 않으면 변수 이름 선언 오류남