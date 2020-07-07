### position: relative
<p>상대 요소가 어떤 역할을 하는지는 대강 알고 있을 것이다.</p>

<p>
position: relative; 가 적용된 요소는
<b>컨테이너 블록(contanier block)</b>이 된다.
이 책을 보면서 새롭게 알게 된 사실이다.
</p>


### position: absoulte
<p>
전체 코드는 absolute.html을 참고할 것.<br />
position: absolute;가 적용된 요소는
컨테이너 블록의 가장자리를 기준으로 오프셋 위치만큼 이동한다.<br />
오프셋 값을 주지 않았을 경우 요소의 위치에 대해 달라진 점을 관찰할 수 없다.
아무 오프셋 값을 0으로 설정해서 기준점을 찾아보자. 그 기준점이 바로
컨테이너 블록의 가장자리이다.<br />
자신이 속한 부모 요소가 컨테이너 블록이 아니라면,
브라우저 창의 가장자리를 기준으로 이동한다.(viewport)   
</p>

<p>
<a href="https://github.com/TaekGeunLee/study_frontEnd/tree/master/B1/3">이전 레퍼토리</a>에서 absolute 값은 기존 흐름에서 벗어나게 한다는 것을 배웠었다.<br />실제로 aboluste 값을 주면, 부모 요소(핑크색)가 쪼그라드는 것을 관찰할 수 있다.   
</p>


```css
.contanier {width: 400px; border: 2px solid hotpink;}
.box 
{
    position: absolute;
    width: 300px; height: 300px;
    background: green; color: #fff;
}
```
<p>
정확히는 부모 요소에 설정된 크기만큼만 쪼그라드는 것이다.
height까지 입힌다음에 absolute를 적용시켜보자.    
</p>


### relative 내의 absolute
absolute-on-relative.html를 살펴보자.

```css
    .contanier 
    {
        position: relative;
        width: 800px; border: 2px solid hotpink;
    }
    .point {position: absolute; background: pink;}
```

<p>
relative가 적용된 부모 요소 내에 3개의 자식요소가 있다.<br />
2번째 요소(.point)에 absolute를 입히면 어떻게 될까?
구분을 위해 다른 색으로 칠한다.    
</p>


<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_5-1.JPG" alt="B1_5-1" />

<p>
.point가 기존 흐름에서 벗어났음을 관찰할 수 있다.
여기서 오프셋 값으로 0를 주면 다음과 같이 된다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_5-2.JPG" alt="B1_5-2" />

<p>
absolute가 입혀진 .point가 컨테이너 블록인 부모 요소를 기준으로
이동하는 것을 확인할 수 있다.    
</p>


















