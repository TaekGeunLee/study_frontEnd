<p>
이번엔 요소의 내용을 수정하는 것에 대해
기록해 보겠다.
</p>

## html(), text()

<p>
이전 레퍼토리에서 요소의 정보를 읽어들이는데 사용했었던 메서드이다.<br />
읽어들인 정보를 변수에 할당하여 사용했었다.
</p>

<p>
지정한 요소의 정보를 해당 메서드의 매개변수와 맞는 걸로 바꿔치기 한다.<br />
각 메서드마다의 특징을 살펴보자.
</p>

#### text()

<p>예제를 살펴보자.</p>

```javascript
$('li#one').text('almonds');
$('li#one').text('<b>almonds</b>');
```

<p>
매개변수로 지정한 문자열로 수정한다.<br />
위의 예제에서 지정한 노드의 문자열인 "fresh fig"을 "almonds"로 수정했다.<br />
다만 마크업도 텍스트로 취급해버리기 때문에 마크업을 바꿀 목적이라면 다른 메서드를 사용해야 한다.
</p>

#### html()

<p>
이전 구절에서 text()를 썼던 것 처럼 하면 된다.<br />
text()와는 달리 마크업은 마크업으로 취급한다.
</p>

<p>
교재에서는 html() 내에 콜백 함수를 집어넣어<br />
리턴한 요소들의 콘텐츠를 사용하는 동시에 수정하는 방법을 제시하고 있다.<br />
하지만 이전에 내가 배운대로라면 html()로 리턴한 요소가 복수라면 첫 번째 요소만 리턴하고,<br /><a href="https://forum.jquery.com/topic/jquery-html-callback">html() 내에는 콜백 함수가 들어가지 않는다고 사람들이 그렇게 말하고 있다.</a> html()은 비동기식으로 동작하지 않기 때문에 콜백을 쓰지 않는다는 의견을 봤다.
</p>

<p>교재에서 제시한 방법과 내가 생각해본 방법들을 나열해보면 다음과 같다.</p>

```javascript
$('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
}); // 교재의 방법

$('li.hot').each(function() {
    $(this).html(`<em>${$(this).text()}</em>`)
}); // 위와 결과는 똑같음.
```
<p>루프를 이용하면 html()를 사용한 매치드 셋의 모든 요소들에 코드를 적용할 수 있다.</p>

## remove()

<p>지정한 요소를 지워버리는 아주 심플한 메서드.</p>


```javascript
$('li#one').remove();
```
<p>
매치드 셋으로 리턴한 요소에는 'li#one' 자체가 들어있다.<br />
html()를 사용했을 때, 선택한 요소의 자식 노드를 리턴한다고 익혔었는데 위와 혼동해서는 안된다.
</p>