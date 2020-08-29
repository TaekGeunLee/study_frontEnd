<p>
jQuery의 DOM 탐색 관련 메서드들은 전부 매개변수로 CSS 셀렉터를 요구한다.<br />
해당 메서드들을 이용해 리턴된 jQuery 객체와 관련된 요소들을 탐색할 수 있다. 
</p>

```javascript
var $h2 = $('h2');
$('ul').hide();
$h2.append('<a class="show">show</a>');

$h2.on('click', function() {
    $h2.next('ul') // 매개변수로 리턴한 요소의 다음 이웃 요소를 리턴.
      .fadeIn(500)
      .children('.hot')
      .addClass('complete');
    $h2.find('a').fadeOut();
});
// traversing.js
```

<p>
위의 예제에서 일부 DOM 탐색 관련 메서드들을 사용하는 모습을 보여주고 있다.
</p>

<p>
h2 태그의 다음 이웃 요소는 ul 태그 이므로, next()의 매개변수를 생략해도 똑같은 결과를 보여준다.<br />
(디렉토리 내의 html 파일을 참고할 것.)<br />
매개변수가 꼭 필요한 DOM 탐색 메서드들은 find()와 closest() 뿐이다.
</p>

<p>
이미 이전 챕터에서 DOM에 대해 다뤘으므로,<br />
jQuery의 주요 DOM 트리만을 기재하고 기록을 마무리하겠다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B2_12-1.png" alt="B2_12-1" />



