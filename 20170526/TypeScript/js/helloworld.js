/**
 * Created by boyeon on 2017. 5. 25..
 */
// typescript : type, class, return type
// 자료형
// any, string, number, boolean ..
var numOrString = 7;
var arrNumOrString1 = [1, 2, 3, 4, "ar"];
var arrNumOrString2 = [1, 2, 3, '123', 7];
for (var _i = 0, arrNumOrString1_1 = arrNumOrString1; _i < arrNumOrString1_1.length; _i++) {
    var num = arrNumOrString1_1[_i];
    console.log(num);
}
// 함수의 리턴 자료형 지정
function returnNum() {
    return 'ab';
}
function testVoid() {
    return;
}
// 벡틱 문자열
// 함수, 문자열 출력 예
var msg = "안녕하세요";
var poster = "p1.jpg";
var markup = "\n    <li>\n        <div>\n            <span>\n                <img src=\"poster.js\"> " + msg + "\n                <p>" + test() + "</p>\n            </span>\n        </div>\n    </li>\n";
function test() {
    return "하";
}
console.log(markup);
// 화살표 함수
// 기능
// 1. this 에 대한 처리
// 2. 코드 수가 줄어듬
// 일반적인 함수
var testF = function (num) {
    return num + 10;
};
// 화살표 함수
var testF2 = function (num) { return num + 10; };
var testF3 = function (num) { return num + 10; };
console.log(testF(12));
console.log(testF2(12));
console.log(testF3(12));
// oop (객체지향개념)
var Person = (function () {
    function Person(age, name) {
        // age, name 은 생성자의 지역변수
        this.age = age;
        this.name = name;
    }
    // getter
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    // setter
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var person = new Person(10, 'boyeon');
console.log(person.getName); // getter call
