# Web Vitals 성능 최적화
- https://web-performance-5315a.web.app/

## 개선 방법

| 성능 개선 사항              | 개선된 지표                     | 설명                                                                                          |
|-----------------------|----------------------------|---------------------------------------------------------------------------------------------|
| product 핸들링 로직 수정     | loadProducts함수로 통합관리       | 모든 product를 loadProducts함수를 통해 관리하고 width, height값을 지정및 loading에 대한 처리를 동시에 적용              |
| showTopBar 개선         | display가 아닌 opacity로 표현    | will-change속성을 사용해 opcity로 GPU에 애니메이션 연산 할당                                                 |
| 콘텐츠가 포함된 최대 페인트 요소 개선 | Hero image 모바일, 태블릿, 데스크탑  | 3개의 img태그를 랜더링 하는 것 이 아닌 srcset, sizes 속성을 사용해 하나의 img 태그로 계산                               |
|                       | Hero 이미지 지연로딩              | 초기에 스켈레톤UI를 표현한뒤, 실제 보여줘야할 이미지는 setTimeOut을 활용해 지연로딩 => 스켈레톤UI는 용량이 적어 로딩이빠른 저화질 이미지로 대체 가능 |
| 대규모 레이아웃 변경 개선        | products section 스켈레톤UI적용  | CLS수치가 적도록 실제 데이터를 받아온뒤의 레이아웃과 유사하게 스켈레톤 UI를 적용                                             |
|                       | hero section 최소높이 적용       | 모바일 초기화면 랜더링시, hero 이미지를 받아온 이후와 유사하도록 최소 높이 적용                                             |
| 랜더링 차단 리소스 개선         | 대용량JS 파일 document랜더링 이후 실행 | font 파일 프로젝트내부에 위치 & 대용량JS파일은 document 랜더링 이후 실행되도록 구조 변경 => defer 사용 가능                    |
| 차세대 형식을 사용해 이미지 표현하기  | webp사용                     | 프로젝트 내부의 이미지파일을 jpg -> webp로 변환                                                             |


## 개선 후 향상된 지표

### BEFORE
<img width="1705" alt="스크린샷 2024-08-16 오전 3 07 51" src="https://github.com/user-attachments/assets/27eebd76-faeb-47c2-b2ab-5f5982541b4c">

### AFTER
<img width="1708" alt="스크린샷 2024-08-16 오전 3 09 05" src="https://github.com/user-attachments/assets/36aa150b-b6f7-488b-915f-eaccd25b2385">


## 기타 사항
- product의 이미지들을 webp로 변환하기 위해 설치형 라이브러리들을 찾아보았지만 못찾았습니다... 혹시 node환경에서 돌아가는 패키지가 아닌 관련된 설치형 라이브러리가 있는지 궁금합니다.
- 이미지 파일이 용량이높아 랜더링시 시간이 많이 걸릴때, 지연로딩을 위해 보여줄 저화질 이미지를 만드는 방법이 있는지 궁금합니다.
