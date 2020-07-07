<p>table 역시 옛날에 자주 애용하던 레이아웃 방식이였다.<br />
예제 코드를 한번 살펴보자.</p>

```html
<head>
<style>
    .wrapper {display: table;}
    ul {display: table-row;}
    li {display: table-cell;}
</style>
</head>
<body>
<div class="wrapper">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>    
</body>
```

<p>
table이라면 tr,td 등을 써야겠지? 라고 생각했지만 table의 특성을 입힐 수 있는 display 프로퍼티 값들을 사용했다.<br />
tr, th, td 등과 같은 태그들도 기본적으로 해당 특성이 걸려 있으며, display를 이용해 언제든지 다른 특성으로 바꿀 수 있다.    
</p>

<p>코드를 관찰해보면, 
.wrapper는 table를, ul은 tr를, li는 td의 역할을 맡고 있다.</p>

### border-spacing
<p>border-spacing은 CSS3 프로퍼티로, 
table cell 사이의 간격을 벌려주는 역할을 한다.</p>


<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_7-1.JPG" alt="B1_7-1" />

<p>기본적으로 table에는 margin, padding이 적용되지 않는다.
border-spacing을 이용해 셀 사이의 간격을 벌려준다.</p>

```html
<head>
<style>
    .wrapper {display: table; border-spacing: <가로>px <세로>px;}
    ul {display: table-row;}
    li {display: table-cell;}
</style>
</head>
<body>
<div class="wrapper">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>    
</body>
```
<p>
주의할 것으로, border-spacing은 기존 table의 역할을 맡고 있는 요소에
입혀야 효과가 적용된다. 그리고 최신 프로퍼티이기에 구 브라우저에서 제대로
동작하지 않을 가능성이 있다.    
</p>

<p>원래 테이블은 콘텐츠들을 table로 정리하는 용도로 쓰이다만,
table로도 레이아웃을 규성할 수 있다.<br />
하지만 이것을 본래 목적에서 벗어나는 행위라고 생각하는 사람들이 많다.</p>
