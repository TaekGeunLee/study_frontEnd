### 요소 영역의 크기

<p>
CSS에서 border, margin, padding 이 세 가지 값으로 요소의 크기를 지정한다고 익혔었다.<br />
jQuery의 크기를 지정하는 메서드를 쓸 때에는 앞의 3가지 값을 고려해야 한다. 
</p>

<p>
일반적으로 CSS로 특정 요소에 width나 height를 설정했을 때,<br /> 
margin이나 padding 값이 해당 요소의 일반적인 크기에 영향을 주지는 않지만 영역/넓이에 영향을 줄 수 있다.
</p>

<p>
예를 들어서 다음과 같이 특정 요소에 CSS 프로퍼티를 지정했다고 가정해보자.
</p>

```css
div {
    width: 200px;
    margin: 5px;
    background-color: red;
}
```
<p>
눈으로 보기 쉽도록 색상(red)을 줬다고 해보자.<br />
div가 차지하는 너비는 겉으로는 200px처럼 보인다.<br />
하지만 보이지 않는 영역 margin 값 까지 고려해보면 실질적으로 차지하는 영역은 210px이다.
</p>

<p>
jQuery에서는 요소의 크기를 다루는데
겉으로 보이는 border 값만 챙길지, 눈에 안 보이는 margin, padding 값도 챙길지에 대한 여부를 정할 수 있다.<br />
다음은 jQuery 메서드의 목록이다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B2_16-1.PNG" alt="B2_16-1" />

<p>그리고 이것은 상단 표의 각 메서드들의 차지 영역을 그림으로 정리한 것이다.</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B2_16-2.PNG" alt="B2_16-2" />

<p>이제 예제를 한번 살펴보자.</p>

```javascript
var listHeight = $('#page').height();

$('ul').append('<p>Height: ' + listHeight + 'px</p>');
$('li').width('50%');
$('li#one').width(125); // 125px로 변경
$('li#two').width('75%');

// dimensions.js
``` 
<p>
상단 표에 언급을 하지 않은 것이다만, width/height()의 매개변수로 특정 값을 지정하면
해당 값으로 셀렉터로 지정한 요소의 크기를 변경할 수 있다.<br />
(기본적으로 px값을 기준으로 둔다. 이 디렉토리에서 소개되는 모든 메서드들에 해당됨.)
</p>

### 창과 페이지의 크기

<p>
만약 jQuery 셀렉터로 document(웹 문서 전체 영역)나 window(브라우저 뷰포트)로 지정했다면, 브라우저 창이나 viewport의 크기까지 알아낼 수 있다.<br />
jQuery에서는 페이지의 크기 뿐만 아니라 스크롤 바의 위치까지 알아낼 수 있는 메서드까지 지원한다. 
</p>

<p>
.scrollLeft()는 수평 방향, .scrollTop()은 수직 방향의 스크롤 바의 위치를 리턴한다.<br />
다만 스크롤 바가 생성되지 않는 경우도 있으니 알아둘 것.
</p>

### 페이지에서 요소의 위치
<p>.offset()이나 .position()는 페이지에서 요소의 위치를 결정할 때 사용한다.</p>

<p>이 둘 메서드들은 요소의 좌표값 위치를 토대로 하나의 객체를 리턴한다.<br />
이렇게 리턴되는 객체에서는 다음 속성들을 사용할 수 있다.</p>

* left : 맨 좌측으로부터 지정한 요소의 왼쪽 상단 까지의 거리 값
* top : 최상단으로부터 지정한 요소의 왼쪽 상단 까지의 거리값

<p>
.offset()과 .position()의 기본적인 역할은 동일하다.<br />
.offset()은 브라우저(뷰포트)를 기준으로 위치를 계산한다.<br />
.position()은 지정한 요소의 부모 요소를 기준으로 위치를 계산한다.<br />
그림으로 쉽게 표현해보면 다음과 같다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B2_16-3.png" alt="B2_16-3" />

<p>
만약 매치드 셋 내에 복수의 jQuery 객체가 리턴되었을 시, 첫 번째 객체의 위치만 리턴하게 된다.<br />
다만 해당 메서드들을 이용해 위치를 변정하고자 할 때에는 리턴된 모든 요소의 위치가 변경된다.
</p>


### 페이지에서 요소의 위치 : 예제

<p>이전 구절에서 기록했던 메서드들을 이용해 하나의 예제를 만들 것이다. </p>

<p>
페이지의 스크롤 바를 내려 특정 위치에 도달하면 하단에 광고 창이 슬라이드되어 노출되게 할 것이다.<br />
만약 스크롤 바를 올려 도달했던 위치값의 이하가 되면 광고 창은 사라지게 될 것이다.<br />
이러한 특정 위치를 여기서는 엔드존(end-zone) 이라고 부르자.<br />
(다른 곳에서도 end-zone 이라고 부를 지는 모르겠다..)
</p>

<p>
뷰포트(window)의 위치가 엔드존의 위치보다 작은지, 큰 지의 여부에 따라 광고를 보이게 한다.<br />
조건문을 활용하면 어렵지 않게 기능을 구현할 수 있다.<br />
그렇다면 엔드존의 위치를 구하는 것이 이번 예제의 핵심이 될 것이다.
</p>

```javascript
var endZone = $('#footer').offset().top - $window.height() - 500; 
// 웹 문서의 전체 너비 - 브라우저 창의 높이(가변적.) - 500
```

<p>
다음은 endZone 경계를 구해서 변수 안에 할당하고 있다.<br />
해당 예제에서는 하단으로부터 500px 지점을 엔드 존으로 지정했다.
</p>

<p>
엔드 존을 계산할 때 웹 페이지의 전체 너비에서 빼도 되지만, 
해당 예제에서는 최상단부터 footer의 상단 영역에서 뺐다.<br />
이를 위해서 offset()을 이용해 리턴한 y축 좌표값을 사용했다.<br />
만약 전체 웹 페이지의 높이를 구하고 싶을 때에는 offset() 대신 height()를 이용하면 될 것이다.
</p>

```javascript
var $window = $(window);
var $slideAd = $('#slideAd'); // 광고창
var endZone = $('#footer').offset().top - $window.height() - 500;

$window.on('scroll', function() {
    if (endZone < $window.scrollTop()) {
      $slideAd.animate({ 'right': '0px' }, 250);
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }
  });
// position.js
```
<p>
다음은 전체 예제이다.<br />
마우스로 스크롤 했을 때 scroll 이벤트가 발생하면서 이벤트 핸들러가 실행된다.<br />
이때 이벤트 핸들러로 endZone에 도달했을 때 광고창의 슬라이드 여부에 관한 코드가 실행이 되는 것이다.
</p>





