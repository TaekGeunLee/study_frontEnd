<p>
이번 레퍼토리에서는 grid의 배치와 정렬 방법에 대해
기록해 보겠다.
</p>

### fireFox 개발자 도구 : grid 보기

<p>
fireFox 개발자 도구에서는 그리드 격자를 볼 수 있는 도구를 제공한다.<br />
grid 프로퍼티를 사용할 때 많이 많이 쓰도록 하자!    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_12-1.JPG" alt="B1_12-1" />

## grid의 배치

<p>
실습을 위해 <a href="https://github.com/TaekGeunLee/study_frontEnd/blob/master/B1/10/grid-area.html">해당 소스</a>를 쓰겠다.<br /> 
소스를 조금만 수정해 3행 4열로 바꾸었다. 전체 코드는 align-items.html을 확인할 것.    
</p>

```css
.contanier {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap : 15px 15px;
    grid-template-areas: 
        "a a b"
        "c d d"
        "e e e";
}
```
<p>
grid의 배치 방식은 flex와 유사하다.<br />
align-items의 디폴트 값이 stretch 인 것은 같다.   
</p>

<p>
align-items의 값이 교차축의 방향을 따른다는 것도 같다.<br />
다만, 교차축을 grid에서는 칼럼축(column axis) 이라고 부른다.<br />
해당 예제에서 칼럼축의 방향은 수직 방향일 것이다.<br />
헷갈리면 칼럼축을 y축이라고 생각해버리자.    
</p>

<p>grid에서 align-items 값을 바꾸면 다음과 같이 된다.</p>

```css
.contanier {
    align-items: start;
}
```
<p>
기존 flex에서는 값으로 flex-start를 줬었던 것이 생각날 것이다.<br /> 
접미사로 붙은 flex를 뺀 것이다. <br />
결과는 다음과 같이 출력된다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_12-2.JPG" alt="B1_12-2" />

<p>
이를 통해 수직 상태의 칼럼축(flex에서는 교차축)의 시작(start) 지점이 맨 위쪽임을 확인할 수 있다.<br />
그리드 격자의 맨 위 쪽으로 박스들이 몰리면서 본래 크기대로 변화하는 것을 관찰하는 것을 통해서 말이다.<br />
다른 값들을 주면서 실험해보자.    
</p>

<p>
align-self를 이용해 개별 box에 align-items 효과를 덮어 씌우는 것도 가능하다.<br />
<a href="https://github.com/TaekGeunLee/study_frontEnd/tree/master/B1/11">이전 레퍼토리</a>에서 이미 똑같은 내용을 언급했으므로 바로 다음으로 넘어가겠다.    
</p>

## grid의 정렬

<p>
x축, 즉 로우축을 따라 박스들을 정렬하고 싶을 때에는<br />
justify-items 프로퍼티를 사용한다.<br />
align-items를 사용했을 때 y축을 따라서 박스들이 배치되는 것을 확인했었다.<br /> 
justify와 align의 차이점을 구분하도록 하자.    
</p>

<p>
주의할 것으로 x축을 따라서 박스들을 정렬하는 것이기에<br />
박스들에 너비(width)가 지정되어 있는 상태여야 변화를 관찰할 수 있다.   
</p>

```css
.contanier {
    justify-items: end;
}
```
<p>
출력 결과로 각 box들이 자기 공간의 맨 오른쪽 끝에 배치되면서 본래 지정된 크기로 바뀌는 것을 관찰할 수 있다.<br /> 
만약 값을 start로 바꾸면 왼쪽 끝으로 배치될 것이다.<br />
오른쪽 끝은 x축의 끝(end) 지점이니까 말이다.   
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_12-3.JPG" alt="B1_12-3" />

<p>마찬가지로 justify-self를 이용해 개별 박스를 지정하여 정렬할 수 있다.</p>