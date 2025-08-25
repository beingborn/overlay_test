<div align="center">
  <img height="150" src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif"  />
</div>

###

<h1 align="center">Overlay Test Toll</h1>

###

<h3 align="left">👩‍💻  About Project</h3>

###

<p align="left">퍼블리싱 시 시안과 구현 화면이 정확히 일치하는지 검수하기 위한 테스트 이미지 오버레이 도구입니다.<br>디자인 시안(PNG)을 페이지 위에 덧씌워 margin, width, position 등을 빠르게 확인할 수 있습니다.</p>

###

<h3 align="left">🛠 Language and tools</h3>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
</div>

###

<h3 align="left">Background</h3>

###

<p align="left">- 퍼블리싱 과정에서 디자인 수정이 잦아, 변경된 디자인을 정확히 적용하지 못하는 과정이 많았습니다.<br><br>이를 보완하기 위해 시안을 이미지로 올려 직접 비교하는 방식을 자주 사용했으나, 매번 환경 세팅과 인라인 클래스 수정이 번거로웠습니다.<br><br>따라서 간단히 HTML 환경에서만 실행되며, 폴더 규격만 맞추면 자동으로 시안을 오버레이할 수 있는 스크립트를 제작했습니다.</p>

###

<h3 align="left">⚙️ 사전 요구사항</h3>

###

<p align="left">HTML 환경에서만 동작합니다.<br><br>test 폴더 구조를 따라야 하며, HTML 파일명과 동일한 PNG 파일이 test 폴더 내에 있어야 합니다.<br>(예: index.html → /test/index.png)</p>

###

<h3 align="left">🚀 설치 및 사용 방법</h3>

###

<p align="left">시안 이미지 준비<br><br>HTML 파일명과 동일한 이름으로 PNG 저장<br><br>예: about.html → /test/about.png<br><br>JS 파일 추가<br><br>제공된 JS 파일을 프로젝트 root에 저장<br><br>스크립트 연결<br><br><body><br>  ...<br>  <script src="/overlay-test.js"></script><br></body><br><br><br>단축키로 제어<br><br>T (또는 한글 ㅅ) → 오버레이 ON/OFF 토글<br><br>, → 투명도 낮추기 (-0.1)<br><br>. → 투명도 높이기 (+0.1)</p>

###

<h3 align="left">🎛️ 기능</h3>

###

<p align="left">- PNG 시안 오버레이 (중앙 정렬)<br>- 현재 창 너비 표시<br>- 투명도 실시간 조절<br>- 단축키 기반 간편 토글</p>

###

<h3 align="left">⚠️ 주의사항</h3>

###

<p align="left">- 파일명이 HTML과 정확히 일치하지 않으면 오버레이가 실행되지 않습니다.<br>- 기본 PNG 위치는 /test/ 하위 폴더입니다.<br>- opacity는 0 ~ 1 사이에서만 조절됩니다.</p>

###
