/* 제목 : 그리드 트랙의 배치와 정렬 */
<p>
이전 레퍼토리에서<br />
flex에서의 justify-content와 align-content가 어떤 영향을 끼치는지 익혔었다.    
</p>

<p>
grid에서의 저 둘의 프로퍼티들은 <br />
그리드 트랙에 영향을 주게 된다.<br />
여기서 말하는 트랙이란, 그리드 선과 선 사이의 행/열을 의미한다.   
</p>

<p>grid_content.html 예제를 열어보자.</p>

```css
.contanier {
    display: grid;
    grid-template-rows: repeat(3, 200px);
    grid-template-columns: repeat(4, 15%);
```
<p>
그리드 각 영역의 행과 열을 fr이 아닌 다른 값을 사용했다.<br />
행/열은 그리드 트랙을 의미할 것이다.<br />
현 상태에서 그리드 컨테이너는 왼쪽 상단으로 이동하게 된다.<br />
이는 justify-content, align-content 값의 디폴트 값이 start 이기 때문이다.   
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_13-1.JPG" alt="B1_13-1" />

<p>
이 상태에서 2개의 프로퍼티의 값을 전부
space-between으로 맞추면 각 그리드 영역들이 컨테이너의 크기에 맞게 정렬된다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_13-1.JPG" alt="B1_13-2" />
