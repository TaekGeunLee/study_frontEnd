<p>
jQuery는 css 스타일 셀렉터를 이용해 메서드를 적용시킬 요소를 탐색한다.<br />
이전 JS 명세의 DOM 쿼리와 그 역할은 똑같지만,<br />
DOM API에서 고유 메서드로 요소를 탐색하는 데에 비해 jQuery에서는 css 셀렉터를 이용해 탐색한다는 것이 다르다.
</p>

<p>js/basic-example.js를 살펴보자.</p>

```javascript
// 이전 생략
$('li').on('click', function() {
  $(this).remove();
});
```
<p>
먼저 메서드를 적용할 요소를 지정해야하는데 jQuery()가 그 역할을 담당한다.<br />
축약형이 $() 이므로 위의 코드는 아래와 같이 써도 똑같이 동작한다.
</p>

```javascript
// 이전 생략
jQuery('li').on('click', function() {
  $(this).remove();
});
```
<p>
함수의 인자로 css 셀렉터를 사용하여 요소를 지정한다.<br />
작은따옴표('')로 감싸야 한다는 것에 주의하도록 하자. 
</p>

<p>
이렇게 $()로 지정한 요소 뒤에 접근 지정자(.)를 이용하여 
적용할 메서드들을 이어 붙여나가는 것이다.<br />
위의 예제는 li 태그들을 클릭했을 때 사라지게 한다. 라는 뜻이 된다.
</p>

### 매치드 셋(matched set)

<p>
$()로 요소를 선택했을 때, jQuery 객체가 리턴된다.<br /> 
이러한 jQuery 객체를 매치드 셋(matched set) 이라고도 부른다.
</p>

<p>
요소를 지정했을 때 리턴되는 매치드 셋은 단일, 혹은 다수일 수 있다.<br />
아래의 예제를 살펴보자.  
</p>

```javascript
// 단일 jQuery 객체 리턴
jQuery('ul').on('click', function() {
  $(this).remove();
});

// 다수의 jQuery 객체 리턴
jQuery('li').on('click', function() {
  $(this).remove();
});
```
<p>
만약 DOM 트리에 복수의 태그 노드들이 존재한다면<br />
그에 해당되는 종류의 요소를 지정하기만 해도 복수의 객체가 리턴된다.<br />
이렇게 리턴된 다수/복수의 태그들에는 배열 마냥 고유 인덱스 번호가 붙게 된다.
</p>

<p>
다음 그림 처럼 인덱스 번호가 부여된다. 
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B1_2-1.png" alt="B2_2-1" />

<p>
이전에 이 책에서 DOM을 공부할 때
DOM 트리의 각 노드들은 관련된 정보들을 지니고 있음을 알았었다.<br />
해당 노드가 어떤 id값을 지녔는지, 어떤 텍스트를 지녔는지, 어떤 속성이 있는지, 이런 것들 말이다.
</p>