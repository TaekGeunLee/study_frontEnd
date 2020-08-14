<p>
매치드 셋(matched set)으로 리턴한 요소를 지정한 이후에는<br />
해당 리턴한 요소에 적용할 메서드를 사용한다.
</p>

<p>
메서드에는 애니메이션 효과 적용, 요소 제거/추가/수정/생성등 여러 종류가 있다.<br />
여기 jQuery 챕터에서는 여러 메서드를 사용해보면서 사용법을 익히게 될 것 이다.<br />
이 디렉토리에서 기록할 내용은 요소의 정보를 읽어내는 방법이다.
</p>

## 요소 정보 가져오기

<p>
요소의 정보라는 것은 해당 태그에 어떤 속성이 있는지, 텍스트 노드가 무엇인지 등에
대해서 이다.<br />
.html(), .text() 이 두 가지 메서드가 있다.
</p>

#### html()

<p>
html()은 리턴된 요소의 자식 노드를 읽어들인다.<br />
다음은 get-html-fragment.js의 일부이다.
</p>

```javascript
var $listHTML = $('ul').html();
$('ul').append($listHTML);
```

<p>
$('ul').html()은 ul 태그의 자식 노드를 읽어들인다.<br />
해당 구문을 할당한 변수 $listHTML에는 다음과 같은 문자열이 담겨진다.
</p>

```html
<li id="one" class="hot"><em>fresh</em> figs</li>
<li id="two" class="hot">pine nuts</li>
<li id="three" class="hot">honey</li>
<li id="four">balsamic vinegar</li>
```

<p>
만약 매치드 셋에 연속된 요소들이 담겨 있다면 해당 요소들 중 첫 번째 요소만 읽여진다.<br />
다음은 get-html-node.js의 일부이다.
</p>

```javascript
var $listItemHTML = $('li').html();
```
<p>변수 $listItemHTML 에는 다음 문자열이 담겨진다.</p>

```html
<li id="one" class="hot"><em>fresh</em> figs</li>
```

#### text()

<p>
리턴된 요소의 텍스트 노드만 가져온다.<br />
다음은 get-text-fragment.js과 get-text-fragment.js의 일부를 합친 것이다.
</p>

```javascript
var $listText = $('ul').text();
var $listText = $('li').text();
```
<p>ul 요소에 적용한 변수 $listText에는 다음 문자열이 담겨진다.</p>

```html
fresh figs pine nuts honey balsamic vinegar
```

<p>반면 li 요소의 경우에는 다음과 같다.</p>

```html
fresh figspine nutshoneybalsamic vinegar
```
<p>
ul 태그에는 자식 요소로 4개의 li 요소가 배치되어 있었다.<br />
각 li 태그의 텍스트 노드들이 붙어있느냐, 안 붙어있느냐가 그 차이점이다.
</p>