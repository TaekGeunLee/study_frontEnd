### 양식화 규격(Fomatting Context) 이란?
<p>
자식 요소를 가진 하나의 부모 요소가 있다.<br />
다음과 같이.<br />
</p>

```html
<div class="contanier">
    <div class="box">
        <p>I'm a floating box.</p>
    </div>
</div>
```

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_3-1.JPG" alt="B1_3-1" />

<p>
관찰하기 쉽게, 
.contanier는 흰색으로, .box엔 핑크색으로 칠해줬다.<br />
이 상태에서 float을 걸게 되면 .box가 쪼그라 들 것이다.  
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_3-2.JPG" alt="B1_3-2" />

<p>
이것을 '부모 요소(.contanier)의 흐름에서 벗어낫다' 라고도 할 수 있다.<br />
position:absolute 를 썻을 때 그런 경험을 해본 적이 있었다.    
</p>

<p>
.contanier에 overflow:hidden 을 걸어줬을 시,
원래대로 돌아온다.<br /> 통상적으로 요소의 자식 요소는 부모 요소의 흐름을 따른다.(이것을 상속이라고도 하지.)<br />
자식 요소만 흐름으로부터 벗어난 상태에서 부모 요소에 흐름을 만들면서
자식 요소가 부모 요소의 흐름에 따르게 하도록 한 것이다.<br />   
</p>

<p>
이 처럼 본래 흐름에 벗어난 요소를 살펴봤는데, 
이것을 '요소에 자기만의 흐름, 규격이 생성되었다.' 라고도 부를 수 있다.<br />
이러한 규격을 <em>양식화 규격(Fomatting Context)</em> 이라고도 부른다.<br />
양식화 규격은 다음 CSS 프로퍼티를 적용해줬을 때 생성된다.   
</p>

<ul>
    <li>floating 를 걸어줬을 때</li> 
    <li>position: absolute; 를 걸어줬을 때</li> 
    <li>display: inline-block 을 적용했을 때</li> 
    <li>overflow: visible 이외의 모든 overflow 프로퍼티 값들</li>    
</ul>

<p>
다음 조건들이 양식화 규격을 생성한다고 해서 
이들을 모두 같은 프로퍼티로 취급하지 말 것.    
</p>

<p>전체 코드는 Fomatting-Context.html를 참고하기 바란다.</p>

### 흐름 내의 요소와 흐름으로부터 벗어난 요소
<p>이번엔 .contanier 내부에 새로운 p 태그를 걸어주었다.</p>

```html
<style>
    .contanier 
    {
        overflow: hidden;
        width: 450px; 
    }
    .box {float: left;}
    .contanier p {background: lightsalmon;}
    .box>p {background-color: greenyellow;}
</style>


<div class="contanier">
    <div class="box">
        <p>I'm a floating box.</p>
    </div>
    <!-- 여기!! --><p>I'm paragraph I am a paragraph of text inside the container. I am in-flow. My text wraps around the float but my background color extends behind the floated item.</p>
</div>
```
<p>
.contanier 내부의 p와, .box 내부의 p를 서로 비교하는 것을 목표로 관찰을 해보자. 구분하기 쉽게 배경색을 주어줬다.<br />
브라우저 상의 출력은 다음과 같다.    
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_3-3.JPG" alt="B1_3-3" />

<p>
현재 .contanier>p 는 .contanier의 흐름 속에 있다.<br />
흐름에 속한 요소들중 별 다른 제약이 없을 경우,
블록 요소는 부모 요소의 크기 만큼 넓어진다.<br />
<i>(이것은.. 그렇게 하자! 라고 정한 것이다. 이해하려고 들지 말자.)</i><br />
.contanier>p 에 배경색(살구색)을 입혀서 그렇게 된 것을 확인할 수 있다.    
</p>

<p>.contanier>p를 인라인 요소로도 바꿔 어떻게 변하는지 관찰해보자.</p>

<p>
.contanier>p에 새로운 양식화 규격을 걸어서
흐름으로부터 벗어나게 만들 수도 있을 것이다.     
</p>

<p>전체 코드는 flow-outside-and-inside.html 을 참고할 것.</p>















