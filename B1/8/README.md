<p>
멀티 칼럼 레이아웃(multi column layout)은 마치 신문단 처럼
여러 개의 열로 나누어서 표현하는 레이아웃 기법이다.<br />
신문지를 연상해보면 어떤 배치인지 짐작할 수 있을 것이다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_8-1.jpg" alt="B1_8-1" />

<p>
column-count 프로퍼티를 이용해 멀티 칼럼 레이아웃을 나타내보자.<br />
전체 코드는 multi-column.html를 참고할 것.       
</p>

```css
<style>
.contents {
    column-count: 4;
}
</style>
<body>
    <div class="contents">
    <p>내용 1</p>
    <p>내용 2</p>
    <p>내용 3</p>
    <p>내용 4</p>
    </div>
</body>
```
<p>
사용법은 아주 간단.<br />특정 요소에 프로퍼티를 적용시키기만 하면
자식 요소들에 적용이 된다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_8-2.JPG" alt="B1_8-2" />

<p>
보시다시피, 열을 4단으로 나누었다.<br />
이보다 더 많게 7, 8, 9.. 까지 나눌 수도 있다.<br />
너무 많이 단 수를 늘리면 컨텐츠들이 서로 겹치게 될 것이다.    
</p>

<p>
이것만 보면 대체 어디에 써먹을 수 있을지 의문이다만, 
구글에 'multi column layout'을 쳐보면 여러 예시들을 살펴볼 수 있다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_8-3.jpg" alt="B1_8-3" />

<p>
이런 식으로 각 div 박스들을 신문 칼럼처럼 나누면 꽤 그럴싸한 레이아웃을 구성할 수도 있을 것이다.<br />
또는.. form 에서 체크박스 입력기가 많을 경우에 column-count를 써서 한번에 정리해버리는 경우도 생각해볼 수 있고 말이다.    
</p>
