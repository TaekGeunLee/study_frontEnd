<p>
Affity designer는 벡터 기반 그래픽 툴이다.<br />
하지만 Persona 기능을 통해 픽셀 중점 작업으로 변환할 수 있다.<br />
이는 Affity 계열 제품에서 보이는 특징이다.
</p>

<p>
예시로 하나의 png 이미지를 불러와보자.<br />
아무것도 열지 않은 상태에서, UI 버튼으로 이미지 파일을 열면(open) 해당 프로젝트 자체는 픽셀로 취급한다.<br />
대상 파일을 이미 열어둔 프로젝트 파일로 끌어오는 식으로 Image 상태의 파일을 불러온다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/T1_2-1.JPG" alt="T1_2-1" />

<p>불러운 이미지의 레이어 패널을 살펴봤을 때 Image Layer라고 적혀 있는 것을 관찰할 수 있다.</p>

<p>
이 상태에서 페인팅 툴을 이용해 다른 색깔로 바꿀려고 하는데.. 그게 안되는 것 같다.<br />
페인팅 작업은 픽셀(Pixel) 편집 작업에 해당하기 때문에 Image 상태인 레이어를 편집할 수 없다.<br />
레스터라이즈(Rasterize) 변환을 통해 Pixel Layer로 바꿔줄 필요가 있다.
</p>

<img src="https://github.com/TaekGeunLee/study_frontEnd/blob/master/readmeImg/T1_2-2.JPG" alt="T1_2-2" />

### 레스터라이즈(Rasterize) 란?

<p>
간단하게 <b>픽셀 형태로 변환한다.</b> 라고 이해하면 된다.<br />
벡터 기반 툴에서 픽셀 형태의 이미지는 별개의 타입으로 취급되어, 레스터화가 안된 이미지는 벡터 작업이 불가하다.<br />
만약 픽셀 작업이 필요하다면 레스터화하는 방안을 생각해볼 수 있다.
</p>

<p>
그렇다고 모든 작업에 레스터 작업을 병행해야 한다는 의미는 아니다.<br />
픽셀로 변환되기에 기존 벡터의 기능을 잃게 되어 이미지가 깨지는 비트맵 현상이 발생한다.
</p>