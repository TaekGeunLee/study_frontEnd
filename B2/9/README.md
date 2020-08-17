## 특성(attribute) 제어하기

<p>
jQuery로 요소의 특성을 제어해보자.<br />
attr(), removeattr() 이 두 개의 메서드로 대부분의 작업을 행할 수 있다.
</p>

```javascript
$('li').attr('id');
$('li').attr('id', 'hot');

$('li').removeAttr('id'); // id 특성을 지움.
```
<p>
다음은 지정한 요소에 새로운 특성을 추가하고 있는 예제이다.<br />
여기서 두 번째 매개변수로 특성의 값도 지정할 수 있다.<br />
속성의 값을 수정할 때에도 attr()를 사용하면 된다.  
</p>

<p>또한 자주 쓰이는 class값을 제어하는 메서드도 따로 있다.</p>

```javascript
$('li').addClass('cool');
$('li').removeClass('cool');
```
<p>
메서드의 매개변수로 삭제할 class 값을 입력해서<br />
추가할 것인지, 삭제할 것인지에 대해 결정한다.
</p>

## css 속성 제어하기

<p>
css() 이 하나의 메서드 만으로
해당 속성을 가져오거나 설정할 수 있다.
</p>

```javascript
$('li').css('background-color'); // css 속성 값을 가져온다.
$('li').css('background-color', 'lightsalmon'); // 해당 css 속성 값을 지정한다.
```

<p>
보통 css에서는 하나의 요소에 다수의 속성을 둬서 작업한다.<br />
여러 개의 속성을 다루고 싶다면 <b>객체 표현식</b>을 사용한다.<br />
JS에서 객체를 나타낼 때 사용하는 표현식이다만, JSON이나 BSON등 다른 곳에서도 사용된다.
</p>

```javascript
$('li').css({
    font-family: "궁서체",
    background-color: "lightsalmon", 
    color: "#fff"
});
```
<p>css 내에 적은 모든 속성들을 리턴한 jQuery 객체에 적용한다.</p>