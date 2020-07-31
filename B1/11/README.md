저번 3장에서는 새로운 레이아웃 방식으로
float의 원래 사용법, flex, grid가 무엇인지에 대해 살펴봤다.
이번 장에서는 이러한 기술들의 사용법, 원리에 대해 정리되어있다.

먼저 float의 배치및 정렬 방법을 기록해보겠다.

## Float의 배치

이전 레퍼토리에서 컨테이너에 display : flex 를 적용하면
컨테이너의 크기에 맞게 박스의 길이가 꽉 차는 것을 본 적이 있었다.
이것은 컨테이너나 박스의 css 디폴트 값으로 stretch가 적용되어 있기 때문이다.
예시를 한번 보자.

```css
    .contanier {
        width: 1000px;
        height: 50vh;
        background: #fff; display: flex;
        align-items: flex-start;
    }
```

프로퍼티 align-items를 이용해 stretch인 기본 값을
다르게 바꿀 수 있다. 예를 들어 flex-start으로 조정하면
박스들이 맨 위로 옮겨가면서 본래 박스에 적용된 크기로 줄어든다. 맨 아래로 정렬하거나 한 가운데로 정렬하는 것도 고려할 수 있을 것이다. 전체코드는 align-item.html를 참조하자.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-1.JPG" alt="B1_11-1" />

박스 전체가 아닌 특정 박스에 효과를 주고 싶으면
align-self를 부여한다. 해당 프로퍼티는 박스에 적용한다.

```css
.box:first-child {align-self: flex-start;}
.box:nth-child(3) {align-self: center;}
```

전체 코드는 align-self.html를 참조하자.
다음과 같이 출력된다.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-2.JPG" alt="B1_11-2" />

### 주축과 교차축

이러한 박스들의 배치는 주축(main axis)과 교차축(cross axis) 위에서 이루어진다.
평소의 주축은 수평 상태이고, 교차축은 항상 주축에 수직을 유지하려는 특성을 지니고 있다.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-3.png" alt="B1_11-3" />

flex 명세를 이용해 주축의 방향을 바꿀 수 있다.
다음 예제를 살펴보자.

```css
    .contanier {
        display: flex;
        flex-direction: column;
    }
```

align-self.html에서 코드를 수정하였다.
전체 코드는 flex-direction.html을 참조할 것.

flex-direction을 이용해 주축의 방향을 수직으로 바꾸었다.
이에 맞춰서 box들이 열(column) 방향으로 정렬되는 것을 관찰할 수 있다. 
이를 통해 주축의 방향이 곧 box들이 정렬되는 방향임을 짐작할 수 있다.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-4.png" alt="B1_11-4" />

이 상태에서 align-item 값을 flex-end로 바꾸면
맨 오른쪽 끝으로 박스들이 이동하는 것을 관찰할 수 있다.

```css
    .contanier {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
```

이는 교차축의 끝(end) 방향으로 이동했음을 알 수 있다.
만약 align-item의 값을 flex-start로 했었더라면
시작(start) 방향인 왼쪽 끝으로 이동했을 것이다.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_11-5.png" alt="B1_11-5" />

그렇다면 정리를 해보면,
flex-direction은 주축의 방향을 바꿈으로써 box들의 배치 방향을 바꾸고,
align-self는 값에 따라 교차축의 어느 방향에 배치할 것인지에 대해 정한다.. 
라고 할 수 있겠다.



