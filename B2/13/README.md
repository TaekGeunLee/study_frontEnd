## jQuery 객체 집합에 요소 추가하기

<p>
일부 메서드들을 이용해 매치드 셋에 추가로 jQuery 객체 집합을 넣을 수 있다.<br />
관련 메서드들 중 add()는 가장 기본적인 역할을 지니고 있다.
</p>

## 필터링

<p>리턴한 객체집합을 필터링 하여 메서드를 적용한다.</p>

```javascript
var $listItems = $('li');

$listItems.filter('.hot').removeClass('hot');

// filters.js
```

<p>
리턴된 객체(li)들 중 클래스 값이 hot인 요소만 필터링 해서 해당 클래스를 제거하고 있다.<br />
필터링을 하기 위해 filter()를 사용했다.(가장 기본적인 역할을 지녔다.)
</p>


```javascript
$('li').not('hot').addClass
$('li:not(.hot)').addClass('hot')
```

<p>
또는 filter()를 쓰지 않고 CSS 가상 클래스만을 사용해 필터링 할 수 있다.<br />
가상 클래스 :not(), :has() 이 둘이 대표적.<br />
위의 예제의 저 두 개의 문단은 전부 똑같은 결과를 출력한다. 
</p>

<p>
다음은 필터링에 관련된 메서드들이다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/B2_13-1.png" alt="B2_13-1" />

## is()

<p>
프로그래밍 언어의 조건문의 역할을 담당하는 메서드이다. <br />
매개변수로 CSS 선택자를 받는다.
예시를 살펴보자.
</p>

```javascript
if ($this.is('.hot')) {
    $this.prepend('Priority item: ');
}
```

<p>
if문의 조건절을 살펴보자.<br />
만약 $this의 클래스 값이 hot이라면, boolean 값 true를 리턴한다.
</p>

<p>
이전 구절에서 살펴본 필터링 메서드가 필터링된 요소들을 리턴한다면,<br />
is() 메서드는 조건에 따라 boolean 값을 리턴한다.
</p>