### 폼(form) 요소 선택

<a href="https://api.jquery.com/category/selectors/form-selectors/">해당 링크에 소개되는 셀렉터</a>들은 CSS가 아닌, jQuery에서 제공하는 셀렉터들이다.

이러한 셀렉터들을 이용해 form 태그의 입력기(input) 요소에 접근할 수 있게 된다.
jQuery 만으로 이러한 form 요소들에 접근할 수 있지만, CSS를 사용하는 것 보다 작업 속도가 느려진다.
(교재에서는 form의 경우에만 이렇게 설명했지만, 어떤 jQuery 메서드든지 마찬가지 인 듯 하다.)


### val()

val()은 대략 지정한 요소의 값, 속성 및 함수 등을 가져오는 역할을 담당한다.
대략적인 기능일뿐, 여러 가지의 기능을 지닌다.
다만 해당 교재에서는 input에 사용자가 입력한 값을 가져오는 일에 사용되었다.(textarea나 select 태그에도 쓸 수 있음.)
예시를 살펴보자.

```javascript
var $newItemButton = $('#newItemButton');
var $newItemForm = $('#newItemForm');
var $textInput = $('input:text');

$newItemForm.on('submit', function(e){
    e.preventDefault();
    var newText = $textInput.val();
    $('li:last').after('<li>' + newText + '</li>');
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
  });
// form.js
```

위의 예제의 전체 내용은 사용자가 input 요소에 값을 입력했을 때 해당 값을 새 목록에 추가하는 것이다.
이벤트 핸들러 내의 새로이 선언된 newText 변수에 val()이 사용되는 것을 관찰할 수 있다.
사용자가 입력기 내에 입력한 텍스트 값을 val()를 통해 가져온다.

리스트에 입력한 값을 추가한 이후에는 또 val()의 매개변수로 공백('')을 추가함으로써
입력기에 적었던 내용을 초기화시킨다.

val()의 다양한 예제는 <a href="https://api.jquery.com/val/">다음 링크</a>에서 확인하기를 바란다.

### 이외의 메서드들

이전 레퍼토리에서 필터링에 대한 내용을 기록했었는데,
.is()와 .filter()는 특히 폼 요소에 대해 많이 쓰인다.

전역 메서드 isNumberic()은 매개변수로 받은 값이 숫자인지에 여부에 따라 boolean를 리턴한다.
(전역 메서드 : jQuery 셀렉터 앞에 쓰지 않음. $.isNumberic() 이런 식으로 사용.)
폼에 특정 데이터 타입만 입력할 수 있게 하는 기능에 쓰일 수 있을 것이다.

또한 jQuery가 아닌 JS의 지원 이벤트 중에는 form에 관련된 이벤트들이 존재한다.
앞의 예제에서 이벤트 핸들러에 대응한 submit 이벤트가 바로 그것이다.

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B2_15-1.png" alt="B1_15-1" />




