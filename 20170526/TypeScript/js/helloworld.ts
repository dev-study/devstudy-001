/**
 * Created by boyeon on 2017. 5. 25..
 */
// typescript : type, class, return type

// 자료형
// any, string, number, boolean ..
let numOrString : string | number = 7;
let arrNumOrString1 :[number|string] = [1,2,3,4,"ar"];
let arrNumOrString2 : Array<number|string> = [1,2,3,'123',7];

for (let num of arrNumOrString1){
    console.log(num);
}

// 함수의 리턴 자료형 지정
function returnNum() : string {
    return 'ab';
}

function testVoid() : void {
    return;
}

// 벡틱 문자열
// 함수, 문자열 출력 예
let msg : string = "안녕하세요";
let poster : string = "p1.jpg";
let markup = `
    <li>
        <div>
            <span>
                <img src="poster.js"> ${msg}
                <p>${test()}</p>
            </span>
        </div>
    </li>
`;

function test() : string {
    return "하";
}
console.log(markup);

// 화살표 함수
// 기능
// 1. this 에 대한 처리
// 2. 코드 수가 줄어듬

// 일반적인 함수
let testF = function (num:number){
    return num + 10;
}

// 화살표 함수
let testF2 = (num) => {return num + 10};
let testF3 = (num) => num + 10;

console.log(testF(12));
console.log(testF2(12));
console.log(testF3(12));

// oop (객체지향개념)
class Person {
    private age: number;        // class의 멤버변수
    private name: string;       // Class의 멤버변수

    constructor(age: number, name: string){
        // age, name 은 생성자의 지역변수
        this.age = age;
        this.name = name;
    }

    // getter
    getAge() : number {
        return this.age;
    }

    getName() : string {
        return this.name;
    }

    // setter
    setAge(age: number) : void {
        this.age = age;
    }

    setName(name: string) : void {
        this.name = name;
    }

    // java 생성자
    // public Person(int age, string name){
    //  this.age = age;
    //  this.name = name;
    // }
}

let person = new Person(10,'boyeon');

console.log(person.getName);    // getter call



































