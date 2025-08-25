<h1 align="center">
  <br>
  <a href="#"><img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" alt="Overlay Test Tool" width="200"></a>
  <br>
  Overlay Test Tool
  <br>
</h1>

<h4 align="center">퍼블리싱 시 디자인 시안과 구현 화면이 정확히 일치하는지 검수하기 위한 <b>테스트 이미지 오버레이 도구</b>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#background">Background</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#caution">Caution</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDRjMmVpMWVyNXk1a3B0Zm5ydjMxM3c1bzRwb2E0YTk2dzBqZGl4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ulF1vtiDbvrrvKcP3N/giphy.gif" alt="Overlay Test Video" width="400"/>
</p>

## Key Features

* PNG 시안 오버레이 (중앙 정렬)
* 현재 창 너비 표시
* 투명도 실시간 조절
* 단축키 기반 간편 토글  

---

## Background

- 퍼블리싱 과정에서 디자인 수정이 잦아 margin, width 등 세밀한 값이 누락되는 경우가 많음  
- 이를 보완하기 위해 디자인 시안을 직접 이미지로 올려 비교하는 과정을 사용했지만 매번 환경 세팅이 번거로움  
- 따라서 **HTML 환경만 있으면 자동으로 시안을 오버레이할 수 있는 스크립트**를 제작  

---

## Requirements

- HTML 환경에서만 동작  
- `test` 폴더 구조 필수  
- HTML 파일명과 동일한 PNG 파일이 `/test/` 폴더 내에 있어야 함  
  - 예: `index.html` → `/test/index.png`

---

## How To Use

```bash
# Step 1: 시안 이미지 준비
about.html → /test/about.png

# Step 2: JS 파일 추가
overlay-test.js를 프로젝트 root에 저장

# Step 3: HTML에 스크립트 연결
<body>
  ...
  <script src="/overlay-test.js"></script>
</body>

# Step 4: 단축키 제어
T (또는 ㅅ) → 오버레이 토글
, → 투명도 낮추기 
. → 투명도 높이기
