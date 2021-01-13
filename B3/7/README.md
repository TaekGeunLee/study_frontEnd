### Typescript 컴파일러 설치
<p>
작업하면서 TS(TypeScript)를 JS로 컴파일 하는 과정이 필요하다.<br />
TS 컴파일러는 npm을 통해 설치할 수 있다.    
</p>

```
$ npm install -global typescript
$ tsc -v // 버전 확인. 설치 확인 용
```

<p>
TS 파일의 확장자는 .ts이다.<br />
ts 파일을 컴파일 하려면 다음 명령어를 입력한다.    
</p>

```
$ tsc pratice.ts //확장자는 생략 가능.
```
<p>
또는 복수의 파일을 한번에 컴파일 할 수 있다.<br />
아래 예제는 pratice, person, arowana 파일을 한꺼번에 컴파일 한다.    
</p>

```
$ tsc pratice person arowana
```
<p>
그냥 컴파일 시, 동일 폴더에 컴파일된 JS 파일이 생성된다.<br />
다만 그냥 컴파일 하면 ES3(기본 값)으로 컴파일된다.<br />
키워드 target을 사용해 다양한 버전(ES4, ES5, ES6+ ...)의 JS 파일로 컴파일 할 수 있다.
</p>

```
$ tsc pratice -target es6
$ tsc pratice -t es6 // 단축형
```

### 브라우저에서 실행해보기

<p>
<a href="https://www.typescriptlang.org/">공식 페이지</a> 에서 TS를 
인터넷으로 타이핑 할 수 있도록 브라우저 컴파일러를 제공하고 있다. 
연습할 땐 많이 이용하도록 하자.
</p>
