<p>
jQuery에서는 요소를 제거하는 것 뿐만 아니라, 복사(copy)하고, 붙여넣는(paste) 메서드도 있다.<br />
요소를 제거하는 remove()는 이미 <a href="https://github.com/TaekGeunLee/study_frontEnd/tree/master/B2/5">해당 디렉토리</a>에서 기록했었지만,<br />
관련 메서드가 또 있기 때문에 언급하도록 하겠다.
</p>

## 제거 : remove(), empty()
<p>remove(), empty() 다음 두 개의 메서드는 요소를 제거한다.</p>

<p>
remove()가 지정한 요소와 해당 하위 요소들을 제거를 한다면,<br />
empty()는 지정한 요소의 관련된 자식 노드들 까지 없애버린다.  
</p>

<p>
이외에도 detach()나 unwrap() 등 제거 관련 메서드들은 있지만<br />
어디까지나 요소를 제거하는 메서드가 있다.. 정도만 알아두도록 하자.<br />
해당 메서드 없이도 얼마든지 구현하는 방법은 있고, 필요할 때 찾아보면 되니까 말이다.
</p>

## 복사 : clone()

<p>리턴한 jQuery 객체 집합을 복사한다.</p>

```javascript
var $p = $('p');
var $clonedQuote = $p.clone();

$p.remove();
$clonedQuote.insertAfter('h2'); // DOM에서 h2 태그의 위치를 알아낸 뒤 해당 위치의 앞 부분에 배치한다.
```
<p>
다음은 cut-copy-paste.js의 일부이다.<br />
p 요소($p)와 p 요소의 복사본($clonedQuote)을 변수에 할당했다.
</p>

<p>
이 때 $p를 제거해도 복사본인 $clonedQuote는 남아 있는 것을 알 수 있다.<br />
예제에서는 $clonedQuote를 h2 태그의 앞에 배치를 하고 있다.
</p>
