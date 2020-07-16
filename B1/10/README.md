### display: grid 살펴보기

이전 레퍼토리에서 flex가 1차원 레이아웃임을 배웠다.
이번엔 2차원 레이아웃인 grid 레이아웃을 공부해보자.
.contanier에 다음 문단을 입력해본다.

```css
.contanier {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
```
display의 새로운 값인, grid이다.
grid-templeate-columns의 값을 살펴보면 처음 보는 단위인 fr이 보인다.
grid 레이아웃에서 주로 사용하는 단위로 알아두자.

열(columns)를 세 줄로 나누었다.
만약 행(rows)를 나누고 싶다면, grid-templete-rows를 주면 된다.

잘 관찰해보면 따로 크기를 지정할 필요 없이
grid 프로퍼티 명세만으로 알아서 크기가 조정되는 것을 관찰할 수 있다.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_10-1.JPG" alt="B1_10-1" />

box 간의 간격이 없다.
grid 명세의 grid-gap을 이용해 간격을 벌려보자.

```css
.contanier {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap : 15px 15px;
}
```
grid-gap은 grid-row-gap과 grid-column-gap의 축약형이다.

이전 flex로 그리드를 만들 때
따로 너비와 margin 값을 지정해야 했던 반면,
grid는 고유 명세만으로 모든 문제를 해결하고 있음을 알 수 있다.

### grid로 요소 배치하기

grid는 줄 번호와 열 번호를 지정하여 요소를 배치한다.
타 프로퍼티로 레이아웃을 구성하는 것 보다 아주 쉽다.
예제를 살펴보자.

```css
<style>
.contanier {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap : 15px 15px;
}
    
.item1 {
    grid-column:  1 / 3;
    grid-row : 1;
}
    
.item2 {
    grid-column:  3;
    grid-row : 1;
}
    
.item3 {
    grid-column:  1;
    grid-row : 2 / 4;
}
    
.item4 {
    grid-column:  2 / 4;
    grid-row : 2;
}
    
.item5 {
    grid-column:  2 / 4;
    grid-row : 3;
}
</style>

<body>
    <div class="contanier">
    <div class="box item1">박스 1</div>
    <div class="box item2">박스 2</div>
    <div class="box item3">박스 3</div>
    <div class="box item4">박스 4</div>
    <div class="box item5">박스 5</div>
    </div>
</body>
```

각 box마다 .item을 지정하여 grid-column, grid-row로 요소를 배치하는 것을 관찰할 수 있다.
예를 들어 grid-row : 3 이라면 박스를 3번째 행(row)에 배치하라는 의미 이고, 
grid-column : 2 / 4 라면 2번째 열부터 4번째 열까지의 공간을 요소의 크기가 차지하겠다.. 라는 뜻이다.

출력 결과는 다음과 같다.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_10-2.JPG" alt="B1_10-2" />

보통 그리드로 페이지 레이아웃을 짤 때에는 12개의 작은 단위로 나누어서
배치를 짠다. (오로지 머리 연상으로만 짜는 것은 힘들다.)

설명만 봐서는 왜 저런 결과로 나오는지 이해할 수 없다.
grid에 대해 관심이 있다면 여러 자료를 수집하자.

### grid-area

각 box에 식별자를 부여 하여 배치하는 방법도 있다.
다음 예제를 살펴보자.
전체 코드는 grid-area.html을 살펴볼 것.

```css
    .item1 { grid-area : a; }
    .item2 { grid-area : b; }
    .item3 { grid-area : c; }
    .item4 { grid-area : d; }
    .item5 { grid-area : e; }
```

그 다음에 .contanier에 다음과 같은 문단을 추가한다.

```css
.contanier {
    grid-template-areas: 
        "a a b"
        "c d d"
        "e e e";
}
```
그렇다. 말 그대로 각 box에 해당하는 식별자를 원하는 위치에 배치한다.
이전에 grid-columns, grid-rows로 배치하는 것보다 훨씬 직관적이다.(이건 내 생각..)
출력 결과는 다음과 같다.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_10-3.JPG" alt="B1_10-3" />

만약 공백을 넣고 싶다면 식별자가 들어갈 자리에 점(.)을 추가하면 된다.
