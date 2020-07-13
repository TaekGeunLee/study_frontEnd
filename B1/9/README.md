<p>
flex 레이아웃을 사용해보자.<br />
이전에 position, float 등을 사용하는 것 보다 간편하고, 다양한 레이아웃을 만들 수 있다.<br />
다만 최신 CSS 프로퍼티이기 때문에, 구 브라우저에 대한 대응도 필요할 것이다.    
</p>

<p>
요소에 display:flex를 설정하면 해당 자식 요소들에 <br />
변화가 생긴다.      
</p>

```html
<style>
    .contents {
        display: flex;
    }
</style>

<div class="contents">
    <div class="box">
    <h1>이것은 Flex box 입니다.</h1>
    <p>내용</p>
    </div>
    
    <div class="box">
    <h1>이것은 Flex box 입니다.</h1>
    <p>내용</p>
    </div>
    
    <div class="box">
    <h1>이것은 Flex box 입니다.</h1>
    <p>내용</p>
    </div>
</div>
```
<p>
이걸로 flex를 사용할 준비를 마쳤다.<br />
flex를 입힌 해당 부모 요소를 contanier, 해당 요소의 자식 요소들을 box 라고 부른다.<br />
이전엔 .box들이 위에서 아래 순으로 정렬이 되겠지만, flex를 입히면 다음과 같이 된다.   
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_9-1.jpg" alt="B1_9-1" />

<p>
box 요소들이 수직으로 정렬되며, contanier의 높이 만큼 그 크기가 길어졌다.<br />
box들은 계속 추가해 나가면 contanier의 크기를 기준으로 크기가 조정되는 것을 관찰할 수 있다만..<br />
계속 추가하다보면 contanier의 크기를 초과해 버린다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_9-2.jpg" alt="B1_9-2" />

<p>
아무런 제약이 없다면, box들은 수직으로 정렬된다.<br />
다음 프로퍼티를 주는 것으로 수평으로 정렬되게 할 수 있다.    
</p>

```css
    .contents {
        display: flex;
        flex-wrap : wrap;
    }
```

### flex는 1차원 레이아웃

<p>
자, 이번에는 box의 갯수를 6개로 세팅해보자.<br />
그렇다면 6개의 박스가 수직으로 배치되는 것을 관찰할 수 있다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_9-3.jpg" alt="B1_9-3" />

<p>
저렇게 한 줄로 정렬되어 있는 box들을 2줄로 정렬하게 해보자.<br />
한 줄에 박스 3개 씩 이니, 줄바꿈을 해줄 필요가 있다. <br />
style 태그에 다음 문단을 입력한다.    
</p>

```css
    .box {
        flex: 1 1 300px;
    }
```
<p>이번엔 contanier가 아닌, box에 css 스타일을 입혔다.<br />
flex에는 contanier에 입히는 프로퍼티, box에 입히는 프로퍼티가 존재한다.</p>

<p>해당 프로퍼티에 관한 설명은 후에 공부하게 될 것이다.<br />
그냥, 줄바꿈을 하게 해주는 속성이다. 정도로 이해하자.<br />
이후엔 다음과 같이 출력된다.</p>


<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_9-4.jpg" alt="B1_9-4" />

<p>출력을 관찰하면서 flex를 이용해 그리드 레이아웃을 만드는 것도
고려해볼 수 있다.</p>

<p>여기서 box 하나를 지워버리면 어떻게 될까?<br />
box의 총 갯수가 5개가 되면서 빈 자리가 생기지 않을까?<br />
결과는 다음과 같다.</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_9-5.jpg" alt="B1_9-5" />

<p>
지워버린 빈 자리를 2번째 행의 남은 box들의 크기가 늘어나면서
채워졌음을 관찰할 수 있다.<br />
이 말은 box를 하나라도 지워버리면 그리드 형태가 깨져버림을 의미한다.    
</p>

<p>
flex에서는 box가 다른 줄로 넘어가버리면<br />
새로운 줄(행/열)이 생기면서 새로운 플렉스 컨테이너가 된다.<br />
그림으로 나타내보면 다음과 같다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_9-6.png" alt="B1_9-6" />

<p>
이를 통해 flex를 <b>1차원 레이아웃(one-dimensional layout)</b> 이라고 부른다.<br />
하나의 줄을 따라서는 요소들의 위치를 다룰 수 있지만, 행과 열 모두를 제어하면서 요소를 배치하는 것은<br />
불가능 하다는 뜻이다.    
</p>

<p>
x축 y축을 연상해보면<br />
1차원 레이아웃(flex)은 하나의 축만을 다룰 수 있으며, <br />
2차원은 2개의 축을 다룰 수 있다는 것이다.    
</p>

<p>
flex를 이용해 2차원 처럼 동작하게 하는 방법은 있다만,<br />
본격적으로 그리스 시스템을 만드는 것이라면,<br />
그리드 레이아웃(2차원)을 쓰는 것을 추천하고 있다.  
</p>


