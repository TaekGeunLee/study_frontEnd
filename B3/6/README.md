<p>
자바스크립트는 프로토타입(prototype) 기반의 언어이다.<br />
Java, C++ 등의 객체지향 언어와는 달리 클래스를 지원하지 않는다.<br />
그렇기에 생성자, 프로토타입만을 이용해 클래스를 만들었다.
</p>

```javascript
var Person = (function() {
	// 생성자 함수
	function Person(name) {
  	this.name = name;
  }
  
  // 메서드
  Person.prototype.sayHi = function() {
  	console.log("Hi " + this.name + "~?");
  }
  return Person;
}()); // ()를 쓴 이유는 Person이 생성자 함수 Person을 리턴하기 때문이다. 일종의 캡슐화.


var p1 = new Person("Susi");
p1.sayHi();
// ES5 에서의 클래스를 생성하는 예제
```
<p>
JS의 코딩 스타일에 익숙하지 않은 사람들 중에는 이러한 방식이 매우 낯설 것이다.<br />
그리고 이 방식을 피하는 사람들도 많을테고.
</p>

<p>
ES6 버전으로 들어가면서 JS에서도 클래스를 지원하게 되었다.<br />
이것은 진짜로 클래스가 도입되었다는 의미는 아니며, 여기서의 클래스도 함수로 구현되어 있다.<br />
즉, 타 언어의 클래스를 생성하는 것 처럼 작업할 수 있도록 새로운 명세(class)를 도입했다.. 라고 나는 그렇게 받아들였다.
</p>
### 소스 목록

* [1](https://github.com/TaekGeunLee/study_frontEnd/blob/master/B3/6/6-1.md) : 기본
* [2](https://github.com/TaekGeunLee/study_frontEnd/blob/master/B3/6/6-2.md) : getter, setter
* [3](https://github.com/TaekGeunLee/study_frontEnd/blob/master/B3/6/6-3.md) : 정적 메서드
* ■■ : 클래스 상속
