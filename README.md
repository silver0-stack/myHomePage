# 👁‍🗨 온:미 (ME)

![preview](https://user-images.githubusercontent.com/76518850/132673959-e72002f2-b947-44b8-812e-c4aa8a89848c.gif)

라이브 데모: https://silver0-stack.github.io/myHomePage/

---

## 1. 프로젝트 개요

- 프로젝트명: **온:미 (ME)**  
- 역할: 프론트엔드 전부 구현 (HTML / CSS / JavaScript)  
- 제작 시기: 2021-1, 교양 과목 기말 대체 프로젝트  
- 목적: "나"에 대한 소개를 담은 개인 홈페이지를 직접 디자인하고 구현하여 프론트엔드 기본기를 다지기 위해 만들었습니다.

---

## 2. 왜 만들었나? (동기)

교양 수업의 기말 대체 과제로 자유 주제가 주어졌고, 개인을 소개하는 홈페이지는 기획부터 디자인, 구현까지 직접 해볼 수 있어 흥미롭게 접근했습니다. 단순히 정적인 소개뿐 아니라 다크모드 토글, 이미지 hover 효과 등 인터랙션 요소를 직접 구현해보는 것을 목표로 삼았습니다.

---

## 3. 기능 요약

- 정적 페이지 구성 (index.html + 여러 하위 페이지)
- 다크 모드 토글 (dark_mode.js)
- 이미지 hover / 카드형 링크로 다른 섹션 이동
- 반응형 레이아웃(간단한 화면 크기 대응)
- 로컬에서 간단히 실행 가능한 구조

---

## 4. 사용 기술

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- (배포) GitHub Pages — 정적 사이트 호스팅

---

## 5. 로컬에서 실행하는 방법

아래 명령어들을 순서대로 실행하면 로컬에서 확인할 수 있습니다.

1. 리포지토리 클론
```bash
git clone https://github.com/silver0-stack/myHomePage.git
cd myHomePage
```

2. (권장) Python 내장 서버로 실행
```bash
 winpty python -m http.server 8000
```

3. 브라우저에서 열기
```
http://localhost:8000/index.html
```


서버 중지는 실행 중인 터미널에서 Ctrl + C

---

## 6. 배포

이 프로젝트는 GitHub Pages로 배포되어 있습니다. 라이브 데모는 다음 링크에서 확인하세요:

https://silver0-stack.github.io/myHomePage/

(정적 파일만 호스팅되므로 서버사이드 로직은 포함되어 있지 않습니다.)

---

## 7. 향후 개선 계획

- 이미지 파일 최적화(용량/크기 조정)로 로딩 속도 개선  
- 반응형/접근성 보완(모바일 레이아웃, 키보드 접근성)  
- 간단한 백엔드 연동: 댓글이나 연락처 폼(Formspree 또는 Firebase 연동)  
- 코드 리팩터링 및 CSS 구조 정리 (재사용 가능한 컴포넌트화)

---

## 8. 참고 및 주의사항

- 현재 프로젝트는 프론트엔드만 구현되어 있습니다. 백엔드 기능은 구현되어 있지 않으므로 폼 전송 등 서버 의존 기능은 동작하지 않습니다.  
- 대용량 이미지가 많은 경우 로드 시간이 길어질 수 있으니 필요시 이미지 최적화를 권장합니다.

---

## 9. 연락처 / 출처

- GitHub: https://github.com/silver0-stack/myHomePage  
- 문의는 GitHub Issues 또는 이메일(프로필 참조)로 부탁드립니다.

---

감사합니다!
