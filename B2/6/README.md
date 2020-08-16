<p>
이번엔 새로운 요소를 생성하는 것에 대해 기록해보겠다.<br />
해당 작업을 치루는데에는 다음 기본적인 메커니즘을 거친다.
</p>

<ol>
<li>새로운 컨텐츠를 생성할 위치를 지정.</li>    
<li>해당 위치의 원하는 곳에 새로운 요소를 생성.</li>
</ol>

<p>
어디에 새로운 요소를 위치 시킬 것인지에 따라
다음 메서드들이 존재한다.
</p>

<ul>
    <li>after()</li>
    <li>before()</li>
    <li>prepend()</li>
    <li>append()</li>
</ul>

<p>
예를 들어서 after()는 매개변수로 받은 요소 바로 앞에 지정한 요소를 생성한다.<br />
각 메서드들의 위치를 그림으로 표현하면 다음과 같다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B2_6-1.png" alt="B2_6-1" />

<p>
jQuery를 이용해 새로운 콘텐츠를 생성하는 행위 역시 DOM 트리에 새로운 콘텐츠를 생성하는 일이다.<br />
XSS 공격에 대해 취약점을 보이는 것에 주의을 가할 것.
</p>