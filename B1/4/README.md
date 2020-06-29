이전 레퍼토리에서 float가 레이아웃 구성의 주요 도구 쓰이기에는 단점이 많다는 것을 알았다.
그럼 어디에 쓰는 것이 좋을까?

원래 float는 이미지 옆에 글씨 문단들을 나열시키는데 쓰이는 목적으로 만든 프로퍼티였다.
img 태그와 문단 태그만 있을 시, img 태그에만 float을 적용시키면 문단 태그는 저절로 img에 붙을려고 할 것이다.
이것은 index.html에 정리해놨다.

<img src="#" alt="B1_4-1" />
### shape-outside
shape-outside 프로퍼티를 이용해 float을 더 응용시킬 수 있다.
해당 프로퍼티는 float이 적용된 요소에만 적용된다.
코드를 살펴보면 다음과 같다. 전체 코드는 shape-outside.html을 
참고할 것.

```css
    .contanier>img 
    {
        margin-right: 20px; 
        float: left;
        shape-outside: circle(50%);
    }
```

해당 문단들이 원의 형태로 img 주위에 몰리는 것을 관찰할 수 있다.
패션 잡지를 보는 것 처럼 눈을 즐겁게 해준다.
shape-outside를 지원하는 값들은 많다. 관심있으면 한번 알아보자.















