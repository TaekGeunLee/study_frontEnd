<p>
자동 마진(auto-margin)을 이용해 요소를 한 가운데로 
배치해본 경험이 있었을 것이다.    
</p>

```css
div {
    margin: 0 auto;
}
```
<p>
컨텐츠의 좌/우에 auto 값을 줌으로써 사용할 수 있는 남은 공간을 전부
margin으로 채워버리는 것이다.<br />
그렇게 해서 컨텐츠는 가운데로 배치되게 되는 것이고.   
</p>

<p>
이러한 자동 마진 기법을 flex에서 사용을 해야하는 상황이 있다.<br />
전체 코드는 auto-margin.html을 볼 것.   
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_14-1.JPG" alt="B1_14-1" />

<p>
다음과 같이 수평 방향으로 정렬된 요소들 중 마지막 요소만<br /> 
컨테이너의 오른쪽 가장자리로 옮기고 싶은 것이다.    
</p>

<p>
오른쪽으로 옮길려면 주축의 방향으로 동작하는 justify-self의 사용을
고려해야겠지만,<br />flex에서는 justify-items이 적용되지 않는다.   
</p>

<p>
이전 디렉토리에서 기록을 했었겠지만,<br />
flex는 1차원 레이아웃이기에 박스들을 배치할 때에는 교차축의 방향으로
배치한다.  
</p>

<p>
이런 상황에서 자동 마진을 적용시켜볼 수 있다.   
</p>

```css
.box:last-child {
    margin-left: auto;
}
```

<p>
저런 식으로 마지막 요소의 왼쪽 공간을 전부 margin으로 채워넣음으로써
오른쪽 가장자리로 이동시키도록 했다.   
</p>