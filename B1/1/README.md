float은 CSS 초창기 시절에 많은 개발자들이 레이아웃을 만드는데 많이 쓰던
프로퍼티이다.<br />float 만으로 레이아웃을 만드는 것에 대해 기록해본다.<br />

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_2-1.JPG" alt="B1_2-1" />

위의 예시 처럼 6개의 list 요소들(.content)을 float:left로 정렬했다.<br />
float로 정렬하면, 왼쪽(left) 또는 오른쪽(right)로 다른 요소가 가로막을 때 까지
이동한다.<br />배치하고자 하는 요소들의 너비(width)와 높이(height)가 일정하다면 문제가 없는 방식이다.<br />
과거 웹디자인기능사 실기 시험을 볼때, 가장 많이 애용하던 방식이기도 하고 말이다..
하지만 이 방식에는 문제점이 있다.<br />

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_2-2.JPG" alt="B1_2-2" />

2번째 컴포넌트에 추가로 텍스트를 넣어서 높이(height)가 커져버렸다.<br />
이 때문에 4번째 상자가 왼쪽으로 floating하지 못하고 오른쪽 구석탱이로 가면서
이상한 배치가 되었다.<br /><br />

이처럼 floating한 요소들 중 단 하나라도 크기가 변해버리면
요소 배치가 엉망이 되어버린다.<br />
이에 대한 해결책들에 대해선 다음과 같다.

### 첫 번째 방법 : clearfix

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_2-3.JPG" alt="B1_2-3" />

위의 그림 처럼 하나의 행마다 .wrap요소로 감싼다.<br />
그 다음에 .wrap 내부의 요소들에 걸린 float을 제거한다.
(이러한 행위를 clearfix 라고 부른다.)<br />

코드상으론 다음과 같다.<br />
전체 코드는 float.html 문서를 확인할 것.<br />

```css
    .content {float: left;}
    
    .wrap {clear: both;}
```

.. 다만 각 행 마다 .wrap 태그로 감싸줘야 하기 때문에
정렬해야 하는 컴포넌트의 수가 많아지면 일일히 .wrap를 만들어줘야 하는
단점이 있다.<br />

### 두 번째 방법 : inline-block

다른 방법으로는 display:inline-block 프로퍼티를 사용하는 것이다.<br />
방법은 간단. 정렬하고자 하는 컴포넌트에 해당 프로퍼티를 주기만 하면 끝.<br />

```css
    .content {
        display: inline-block;
    }
```

하지만 이것에도 단점이 존재한다.<br />
기본적으로 인라인 요소들은 사이에 여백을 둘려는 특성을 지니고 있다.
(직접 해보자. a 태그나 img 태그들을 나란히 배치시켜보자.)
<br />
<br />
inline-block이 적용된 컴포넌트들은 inline 요소가 된다.<br />
컴포넌트 사이에 margin을 적용하지 않아도 공백이 존재하기 때문에, 공백이 더 넓어진다.<br />
이는 본인 의도대로 정확한 레이아웃을 설계하기 어렵다는 뜻이 되지 않을까 싶다.<br /><br />

물론 기본적으로 가지고 있는 공백을 제거하는 방법도 있다만, 
쉽게 망가질 수 있는 레이아웃이 된다는 단점이 있다고 한다.(이것이 왜 단점이 되는지 이해를 못했다..)<br />

여기까지 float과 inline-block을 이용해 정렬하는 방법에 대해 공부했다.<br />
여기에 따라오는 단점과 타협할 수 있다면 쓸만한 레이아웃을 만들 수 있을 것이다.<br />




