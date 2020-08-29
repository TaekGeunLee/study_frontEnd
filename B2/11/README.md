<p>jQuery의 특정 메서드로 동적인 효과와 애니메이션을 아주 쉽게 구현할 수 있다.</p>

## 효과(effect) 적용하기

<p>
2019년 쯔음에 웹디자인기능사 실기를 공부하면서 이미 썼던 메서드들 이겠지만,<br />
아래의 메서드들을 이용해 jQuery에서 기본적으로 구현할 수 있는 효과들을 적용할 수 있다.<br />
버전이 업데이트 되면서 추가로 생긴 메서드들도 있겠지만 다음은 주로 많이 쓰이는 효과 메서드.. 라고 판단된다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B2_11-1.png" alt="B2_11-1" />

<p>
접미사로 Toggle이 붙은 메서드는 애니메이션을 적용할 대상 매치드 셋의 상태에 따라 효과를 적용한다.<br />
예를 들어서 fadeToggle()은 대상 객체가 fade-out 상태일 경우 fade-in 한다.
</p>

```javascript
$('h2').hide().slideDown();

var $li = $('li');
$li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
});

// effects.js 참조
```

<p>
다음 예제에서 효과 메서드의 사용 예시를 보여주고 있다.<br />
fadeIn()을 적용하려면 대상 요소가 안보이는 상태여야 하므로 미리 hide()를 써서 숨긴 뒤에 페이드 인을 적용시켰다.<br />
만약 fadeOut()을 적용시키려면 요소가 보여지는 상태 여야 할 것이다. 
</p>

<p>
each()를 씀 으로써 매치드 셋 내부의 각 jQuery 객체에 루프를 적용함으로써 하나 씩 효과가 적용되도록 했다.<br />
이 작업을 빼먹으면 대상 요소들은 같은 시간 내에 전부 fadeIn 되버릴 것이다.<br />
each()의 콜백 함수 내의 매개변수(index)는 매치드 셋에 리턴된 각 요소들의 인덱스 번호를 의미한다. 
</p>

## css 속성 애니메이션(animation) 적용하기

<p>
.animate() 메서드는 CSS 속성 값을 변화시켜 효과와 애니메이션을 구현한다.<br />
이전 구절에서 효과(effect)를 적용할 때 각 메서드를 썻었더라면,<br />
여기서는 단 하나의 메서드만으로 CSS 속성 값을 이용해 애니메이션을 만든다.
</p>

```javascript
.animate({필수 값}, <선택값 매개변수 3개>);
```

<p>
메서드 첫 번째 매개변수에는 객체표현식을 써서 변화시킬 CSS 속성 값을 지정한다.<br />
margin 같이 숫자 값으로 조정할 수 있는 CSS 속성이라면 다 된다.<br />
하지만 글꼴 같이 문자열을 사용하는 속성은 불가능하다.
</p>

<p>
필수 값 옆에 3개의 매개변수를 옵션으로 둘 수 있다.<br />
자세한 설명은 <a href="https://api.jquery.com/animate/">여기</a>를 참고하자.
</p>

```javascript
$('li').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80' // padding-left의 값을 80 만큼 증가.
    }, 500, function() {
      $(this).remove();
    });
});

// animate.js 참조
```
<p>
다음 예제에서 animate()의 사용 예시를 관찰할 수 있다.<br />
각 list 요소를 클릭했을 때 해당 요소가 왼쪽에서 오른쪽 방향으로 사라진다(remove).
</p>

<p>
animate()의 첫 번째 인자를 살펴보자.<br />
리턴한 jQuery 객체의 opacity와 padding-left CSS 값을 변화시킨다.<br />
겉으로 보기에는 오른쪽 방향으로 이동되면서 fadeOut 되는 것 처럼 보인다.
</p>

<p>
옵션 값으로 애니메이션 진행 속도(500)와 애니메이션이 끝난 이후에 실행할 콜백 함수를 집어넣었다.<br />
위의 예제에서는 애니메이션이 끝나면 리턴한 jQuery 객체를 지워버린다.
</p>

<p>
jQuery에서 구현할 수 있는 효과 및 애니메이션은 전부 CSS3에서 구현할 수 있다.<br />
그리고 CSS3으로 구현하는 것이 처리 속도가 훨씬 빠르다.<br />
다만, 최신 브라우저에서는 동작하지 않는다.
</p>