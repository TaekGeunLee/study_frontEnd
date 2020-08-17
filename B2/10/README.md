## 이벤트 리스너 on()

<p>
jQuery 마찬가지로 이벤트 리스너를 등록하는 메서드가 있다.<br />
구 버전에서는 click()이나 focus()와 같이 각 이벤트에 대응되는 리스너 메서드들을 사용했었지만,<br />
1.7 버전 이후로 부터는 모든 이벤트를 on()에 등록하도록 바뀌었다.
</p>

```javascript
var ids = '';
var $listItems = $('li');

$listItems.on('mouseover click', function() {
    ids = this.id;
    $listItems.children('span').remove();
    $(this).append(' <span class="priority">' + ids + '</span>');
});
```
<p>
다음은 events.js의 일부이다.<br />
여기서는 on()을 사용하는 것을 보여 주고 있다.<br />
on()의 매개변수로 첫번째에는 대응되는 이벤트를, 두 번째에는 이벤트 리스너에 해당하는 콜백 함수를 담고 있다.<br />
이벤트는 여러 개 등록할 수 있다.
</p>

<p>
위의 예제에서는 li 요소에 마우스를 올려다놓거나 클릭했을 때<br /> 
이벤트 리스너 함수를 실행한다는 뜻이 될 것이다.
</p>

## event 객체

<p>
이벤트 리스너 콜백 함수를 등록하면 자동적으로 event 객체를 전달받는다.<br />
이 말은 콜백 함수에서 event 객체를 쓸 수 있다는 의미이다.<br />
이것은 일반 JS에서도 해당된다.
</p>

```javascript
$('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp); // 시간(time)을 등록. e.timeStamp는 유닉스 시간이다.
    var clicked = date.toDateString(); // 유닉스 시간 상태인 date를 사람이 읽을 수 있는 문자열로 바꾼다.
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });
```
<p>
다음은 events-object.js의 일부이다.<br />
이벤트 리스너 내에서 event 객체(e)를 쓰고 있는 것을 보여주고 있다.<br />
event 객체내의 프로퍼티를 사용할 수 있는데,<br />
어떤 이벤트가 발생했었는지(e.type), 이벤트가 발생한 시간(e.timeStamp) 등이 바로 이것이다.
</p>

<p>
사용할 수 있는 event 객체 프로퍼티는 <a href="https://api.jquery.com/category/events/event-object/">여기서</a> 참고하도록 하자.
</p>

<p>
위에 예제에서는 리스트(li)를 클릭했을 때 <br />
리스트 옆에 이벤트가 발생한 시간(즉, 클릭한 시간.)을 출력하는 예제를 보여주고 있다.
</p>

## 기타 매개변수

<p>이외에 on()에서는 선택 값으로 이벤트 리스너에 전달할 추가 데이터나 필터링할 요소를 지정할 수 있다.</p>

```javascript
var listItem, itemStatus, eventType;

$('ul').on(
    'click mouseover',
    ':not(#four)', //id 값이 four가 아닌 모든 요소에만 리스너를 적용한다.
    {status: 'important'}, // e.data 형태로 사용 가능.
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />'; 
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);   
    /*
        e.target.textContent : 이벤트가 발생한 요소의 텍스트
        e.data.status : on() 메서드의 3번째 매개변수
        e.type : 이벤트 리스너에 대응되는 이벤트.
    */
    }
);
```
<p>
다음은 event-delegation.js의 일부이다.<br />
on()에 할당받은 각 매개변수들을 분석해보자.
</p>

<ul>
    <li>첫 번째: 이벤트</li>
    <li>두 번째 (선택적): 이벤트가 발생했을 때 처리할 요소를 필터링.</li>
    <li>세 번째 (선택적): 이벤트 리스너에 전달할 추가 데이터들. 객체 표현식 형태로 작성하며, e.data 형태로 리턴된다.</li>
    <li>네 번째 : 이벤트 리스너</li>
</ul>

<p>event에 대한 관련 정보(listItem, itemStatus, eventType)들을 페이지에 추가하고 있다.</p>