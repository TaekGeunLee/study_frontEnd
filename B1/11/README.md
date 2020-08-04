<p>
저번 3장에서는 새로운 레이아웃 방식으로<br />
float의 원래 사용법, flex, grid가 무엇인지에 대해 살펴봤다.<br />
이번 장에서는 이러한 기술들의 사용법, 원리에 대해 정리되어있다.    
</p>

<p>먼저 float의 배치및 정렬 방법을 기록해보겠다.</p>

## Float의 배치
<p>
이전 레퍼토리에서 컨테이너에 display : flex 를 적용하면<br />
컨테이너의 크기에 맞게 박스의 길이가 꽉 차는 것을 본 적이 있었다.<br />
이것은 컨테이너나 박스의 css 디폴트 값으로 stretch가 적용되어 있기 때문이다.<br />
예시를 한번 보자.    
</p>



```css
    .contanier {
        width: 1000px;
        height: 50vh;
        background: #fff; display: flex;
        align-items: flex-start;
    }
```
<p>
프로퍼티 align-items를 이용해 stretch인 기본 값을 다르게 바꿀 수 있다. <br />
예를 들어 flex-start으로 조정하면
박스들이 맨 위로 옮겨가면서 본래 박스에 적용된 크기로 줄어든다.<br />
맨 아래로 정렬하거나 한 가운데로 정렬하는 것도 고려할 수 있을 것이다. <br />
전체코드는 align-item.html를 참조하자.    
</p>


<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-1.JPG" alt="B1_11-1" />

<p>
박스 전체가 아닌 특정 박스에 효과를 주고 싶으면
align-self를 부여한다.<br />해당 프로퍼티는 박스에 적용한다.   
</p>


```css
.box:first-child {align-self: flex-start;}
.box:nth-child(3) {align-self: center;}
```

<p>
전체 코드는 align-self.html를 참조하자.<br />
다음과 같이 출력된다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-2.JPG" alt="B1_11-2" />

### 주축과 교차축
<p>
이러한 박스들의 배치는 주축(main axis)과 교차축(cross axis) 위에서 이루어진다.<br />
평소의 주축은 수평 상태이고, 교차축은 항상 주축에 수직을 유지하려는 특성을 지니고 있다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-3.png" alt="B1_11-3" />

<p>
flex 명세를 이용해 주축의 방향을 바꿀 수 있다.<br />
다음 예제를 살펴보자.    
</p>

```css
    .contanier {
        display: flex;
        flex-direction: column;
    }
```
<p>
align-self.html에서 코드를 수정하였다.<br />
전체 코드는 flex-direction.html을 참조할 것.    
</p>

<p>
flex-direction을 이용해 주축의 방향을 수직으로 바꾸었다.<br />
이에 맞춰서 box들이 열(column) 방향으로 정렬되는 것을 관찰할 수 있다.<br /> 
이를 통해 주축의 방향이 곧 box들이 정렬되는 방향임을 짐작할 수 있다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-4.png" alt="B1_11-4" />

<p>
이 상태에서 align-item 값을 flex-end로 바꾸면<br />
맨 오른쪽 끝으로 박스들이 이동하는 것을 관찰할 수 있다.   
</p>

```css
    .contanier {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
```
<p>
이는 교차축의 끝(end) 방향으로 이동했음을 알 수 있다.<br />
만약 align-item의 값을 flex-start로 했었더라면<br />
시작(start) 방향인 왼쪽 끝으로 이동했을 것이다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-5.png" alt="B1_11-5" />

<p>
정리를 해보면,<br />
flex-direction은 주축의 방향을 바꿈으로써 box들의 배치 방향을 바꾸고(정렬),<br />
align-self는 값에 따라 교차축의 어느 방향에 배치할 것인지에 대해 정한다..<br /> 
라고 할 수 있겠다.    
</p>

## Float의 정렬

<p>
처음 display 프로퍼티를 이용해 flex를 세팅했을 때, <br />
요소들이 왼쪽 끝에서부터 정렬되는 것을 관찰할 수 있었다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-6.JPG" alt="B1_11-6" />

<p>
이는 justify-content의 default 값이 flex-start 이기에,<br />
주축의 처음(start) 지점에서부터 요소들이 정렬되는 것이다.<br />
만약 값을 flex-end으로 설정하면 오른쪽 끝에 배치될 것이다.<br />
이는 주축의 끝(end) 지점에 배치된 것이다.    
</p>

<p>
justify-content는 주축의 방향에 따라 다르게 작용한다.<br />
예를 들어 주축이 수직 방향(column) 이라면 위쪽에서부터 배치될 것이다.<br />
수평 상태의 주축의 시작(start) 지점은 위쪽 이니까 말이다.    
</p>

<p>
참고로 flex에서는 grid 명세에서 사용하는 justify-items 값이 적용되지 않는다.<br />
이에 대해선 flex가 1차원 레이아웃이기 때문에 인 것만 알아두도록 하자.<br />
상세한 자료는 <a href="https://stackoverflow.com/questions/48535585/the-difference-between-justify-self-justify-items-and-justify-content-in-css-gr">여기</a>를 참고하자.    
</p>


### 아이템 사이 간격 주기

<p>
전체 실습 코드는 justify-content-values.html 을 참고할 것.<br />
justify-content로 다른 일도 할 수 있다.    
</p>

```css
.contanier
{
    display: flex;
    justify-content: space-between;
}
```

<p>
프로퍼티 값으로 space-between을 적용하면<br />
모든 item 사이에 균등한 공간을 부여한다.<br />
위의 예제의 출력 결과는 다음과 같다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-7.JPG" alt="B1_11-7" />

<p>또 다른 값으로 space-around가 있는데, <br />
이는 모든 item 양쪽에 공간을 부여한다.</p>

<p>
잘 보면 본인이 예상했던 것 보다 아이템 박스들이 꽤 넓은 공백을 가지고 있고, <br />
각 값마다 왜 저런 결과가 나오는지에 대해 의문점이 든다.<br />
내가 이해한 대로 그림으로 표현해보면 다음과 같다.    
</p>

<ul>
    <li><img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-8.PNG" alt="B1_11-8" /></li>
    <li><img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-9.PNG" alt="B1_11-9" /></li>
</ul>

<p>
space-around, space-between 를 적용했을 때 전부<br />
각 아이템에 부여한 공백의 크기의 두 배의 마진 값을 가지게 되었다.    
</p>

<p>
두 프로퍼티와는 별개로 space-evenly 라는 값이 있는데, <br />
이는 모든 item에 균등한 공백을 부여한다.    
</p>

### 정 가운데에 배치하기

<p>전체 실습 코드는 align-center.html 을 참고할 것.</p>

<p>정 가운데에 배치하는 것에는 여러 방법이 있겠지만<br />
위의 구절에서 배운 flex 명세만을 이용한 방법도 존재한다.
</p>

```css
.contanier {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

<p>
display로 세팅한 이후에<br />
align-items와 justify-content의 값을 전부 center로 설정을 해주기만 하면 된다.<br />
이 때 item의 본래 설정된 크기로 돌아오면서 contanier의 정 한가운데에 배치되게 된다.    
</p>

### align-content

<p>
flex 명세에서의 align-content는 
주로 정렬된 item 사이에 공백을 주는 용도로 사용된다.<br />
justify-content가 주축 방향으로 공백을 주는 것이라면<br />
align-content는 교차축 방향으로 공백을 주는 것이라고 이해를 하자.
(일부 프로퍼티 한정)    
</p>

<p>
다만 align-content는 flex-wrap : wrap 이고, 여유 분의 너비가 있는 상태에서만
동작한다.<br />예제 코드를 살펴보자. 전체 코드는 align-content.html를 참고할 것.    
</p>

```css
    .contanier {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }
    
    .box { flex: 1 1 500px; }
```

<p>
align-content이 갖는 값은 justify-content가 갖는 값과 동일하고,<br />동작되는 방식이 
교차축의 방향으로 공백을 주는 것 외에는 같다. 직접 값을 바꿔가면서 결과를 관찰해보자.    
</p>