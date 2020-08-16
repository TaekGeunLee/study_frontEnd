<p>
보통 jQuery를 안 쓰고 JS 파일을 html 페이지에 링크 시킬 때에는
다음과 같이 작성한다.
</p>

```html
<body>
<!-- 전체 코드 -->
    
<script src="쑐라쑐라" type="text/javascript"></script>
</body>
```
<p>
html 전체 코드를 브라우저에서 전부 로드 한 뒤에 script 파일을 로드하기 위해<br />
body 태그의 닫는 태그 바로 앞에 script 태그를 위치시킨다.
</p>

<p>
만약 head 태그에 위치 시킨다면 html 전체 코드를 로드하기 도중에 script 파일을 로드하는 것이 된다.<br />
이는 연결한 JS 코드가 제대로 실행이 안될 가능성이 있다.
</p>

<p>jQuery에는 이와 관련된 메서드가 있다.</p>

```javascript
$(document).ready(function() {
    // 쏼라쏼라
}); 
// 정석 코드

$(function() {
    // 쏼라쏼라
}) 
// 축약형
```
<p>
ready()는 리턴한 요소가 코드를 실행한 준비를 마친 뒤에 콜백 함수 내의 코드를 실행한다.<br />
매치드 셋으로 리턴한 요소를 페이지 전체(document)를 가리키고 있다.
</p>

<p>
ready()를 사용하면 JS 파일을 어디에나 위치시켜도<br /> 
항상 전체 페이지가 로드 된 뒤에 실행된다.<br />
하지만 그렇다고 script 태그의 위치를 아무대나 위치시켜도 된다는 말은 아니다.
</p>

```html
<body>
    
<script src="javascript" type="text/javascript"></script>
<script src="jQuery" type="text/javascript"></script>
</body>
```
<p>
jQuery 라이브러리가 로드 되기 전에는 JS 파일을 실행시킬 수 없다는 점을 알아두도록 하자.<br />
위와 같이 script 태그를 배치시키면 JS 파일이 동작이 안 될 것이다.
</p>
