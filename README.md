# 🍼 Bebe Market | 육아 커뮤니티 플랫폼<br>

> Bebe Market은 육아 중인 부모들을 위한 커뮤니티 플랫폼입니다.<br>
> 이 플랫폼은 육아에 필요한 정보를 공유하고 교류할 수 있는 장을 제공합니다.<br>
> `육아 꿀팁` `육아템 추천` `아기용품 거래` `이유식 레시피 공유`<br>
<img width="3491" alt="베베마켓썸네일" src="https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/e44ca668-060e-46cb-bed1-88a36212b121">

<br>


``` 
배포 URL : `127.0.0.1:8000`
Test ID : `127.0.0.1:8000`
Test PW : `127.0.0.1:8000`
```
<br>

📚 [팀 스터디 레포지토리](https://www.notion.so/12c57d2ccab14d1cb045fc9c8477d9f7?pvs=4)
📝 [팀 워크스페이스](https://www.notion.so/fa26227061e6455eb9ffaa4890b5820b?v=6b0e9d29545a4964874dfb61c3ed7150&pvs=4)
🎨 [디자인 피그마](https://www.figma.com/file/nJWmlNXio2PaUPKxgFp0nm/%EA%B0%90%EA%B7%A4?type=design&node-id=7088-4332&mode=design&t=NBFWiiIi6UpSdBv5-0)
<br>
<br>


## 📌목차

- 팀원 소개
- 역할 분담
- 기술 및 개발 환경
- 기능 시연
- 디렉토리 구조
- [코드 컨벤션](https://www.notion.so/9baf128ad01040488e5aa5a6daa78d50?pvs=21) 
- [커밋 컨벤션](https://www.notion.so/db10cf69f07448b487795899770d8f23?pvs=21)

<br>
<br>

## 팀원 소개


| 이석형| 임수정 | 임지인 | 정수연 |
| ------ | ------ | ------ | ------ |
| ![IMG_0522](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/84b2a722-24d8-4497-a033-9f0eeb8557e3)| ![임수정](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/1b07a06c-6373-4a61-98f0-8971cf7584cc)| ![eb13](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/0f28c820-3477-49ba-ae78-db14bca8eefa)| ![수연님](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/0dffd8f9-8179-484b-8ab8-f83d4128d000)|
| <div align=center>[@seok-hyung](https://github.com/seok-hyung)</div> | <div align=center>[@sujung-lim](https://github.com/sujung-lim)</div> | <div align=center>[@LimJeeIn](https://github.com/LimJeeIn)</div> | <div align=center>[@susuje](https://github.com/susuje)</div> |

<br>
<br>

## 역할 분담


❤️ 이석형
- UI
  <ul>
    <li>페이지 : 회원가입, 홈 피드, 채팅 리스트, 채팅 방, 검색</li>
    <li>공용 컴포넌트 : InputBox, user</li>
  </ul>

- 기능
  <ul>
    <li>홈 피드</li>
    <li>검색</li>
    <li>팔로우 팔로잉 리스트 불러오기 구현</li>
    <li>팔로우 언팔로우 기능 구현</li>
    <li>홈피드 / 팔로우 / 팔로잉 무한스크롤 기능 구현</li>
    <li>프로필 수정 기능 구현</li>
    <li>로그아웃</li>
  </ul>

- 협업
  <ul>
    <li>PR 확인 및 머지</li>
  </ul>
<br>

💜  임수정
- UI
  <ul>
    <li>페이지: 마이 프로필, 사용자 프로필, 프로필 수정, 소셜 로그인 화면</li>
    <li>컴포넌트: 버튼, 게시글 앨범형</li>
  </ul>
  
- 기능<br>
  <ul>
    <li>프로필 수정 페이지 사용자 이름, 계정 유효성 검사</li>
    <li>프로필 페이지 (판매 중인 상품 불러오기, 게시글 불러오기) 구현</li>
    <li>판매 중인 상품 리스트 구현</li>
  </ul>

- 협업<br>
  <ul>
    <li>README.md 작성, Wiki 작성, 노션 작성</li>
  </ul>
<br>

💚  ️임지인
- UI<br>
  <ul>
    <li>홈 포스트, 프로덕트 공통 컴포넌트 마크업</li>
    <li>이메일 로그인 마크업</li>
    <li>팔로잉/팔로워 목록 페이지 마크업</li>
  </ul>

- 기능<br>
  <ul>
    <li>이메일 로그인 기능 및 토큰 검증, 유효성 검사를 통해 입력값이 적절한지 확인</li>
    <li>팔로우, 언팔로우 목록 기능 구현</li>
  </ul>

- 협업<br>
  <ul>
    <li>README.md 작성</li>
  </ul>
<br>

💙  정수연
- UI<br>
  <ul>
    <li>페이지 : 게시글 작성 및 수정, 게시글 상세, Splash 화면</li>
    <li>공통 컴포넌트 : Modal, NavBar</li>
  </ul>

- 기능<br>
  <ul>
    <li>게시글 등록 ( + 이미지 업로드), 게시글 수정, 삭제,  신고</li>
    <li>게시글 상세 페이지 확인</li>
    <li>댓글 등록, 삭제, 신고</li>
    <li>좋아요 및 좋아요 취소</li>
    <li>상 하단 Nav 및 모달 기능</li>
    <li>상품 수정 및 삭제, 웹사이트 방문</li>
    <li>Splash 페이지 animation</li>
  </ul>

- 디자인<br>
  <ul>
    <li>로고 및 아이콘 등 컨셉 디자인 담당</li>
    <li>Mockup 이미지 제작</li>
  </ul>
<br>

## 기술

| Front-end |  ![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![styled-components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Recoil](https://img.shields.io/badge/Recoil-61DAFB?style=for-the-badge&logo=Recoil&logoColor=1189FB)| 
| ------ | ------ | 
| Back-end | 제공된 API 활용 | ![이미지3](이미지3_URL) | ![이미지4](이미지4_URL) |
| 협업 툴 | ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white) | [@susuje](https://github.com/susuje) |
| 디자인 | ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)  |

## 개발 환경

| 이슈 관리 |  ![Git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)| 
| ------ | ------ | 
| 브랜치 전략 | [Git-Flow](https://github.com/susuje)  | 

## [🧷기술 및 개발 환경 상세 설명 보기](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/wiki/기술-및-개발-환경-상세-설명#기술-선택-이유)
<br>
<br>

## 기능 시연
### 1) 홈
| splash | 로그인 | 회원 가입 |
| ------ | ------ | ------ | 
| ![스플래쉬](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/bc9971ac-6d01-4ecd-96dc-2abd7d07eb79) | ![로그인](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/21aa1964-c15c-478c-83a8-868b7f5756ca) | ![회원가입](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/723f5a42-0821-4c02-8d70-7963dc8aa896) |

| 홈 피드 | 검색 | 
| ------ | ------ |
| ![홈피드](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/91ccb32e-5881-4c5a-ac6b-6b016da5e3a1) | ![검색](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/2d82fa1c-0083-4b8e-b7b9-cd243e95642e)
  

| 채팅 | 404 페이지 |
|------|---------|
| ![채팅](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/c4190c98-f535-4c70-86cd-3cf719760aca.jpg) | ![404 페이지](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/0c375580-a2dd-41f0-8ecf-9b81e0c76add.jpg) |


### 2) 게시글

| 게시글 작성 | 게시글 수정 | 게시글 삭제 |
|------------|------------|------------|
| ![게시글작성1](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/2609aa76-ec34-4534-88fa-c74cacfc9e3e) | ![게시글수정](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/95a664c4-e4dc-42a8-8177-5a908f3ddc25) | ![게시글삭제](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/97f2477b-09af-4250-a2c0-1eedc79db67a) |


| 게시글 상세 및 댓글 | 댓글 삭제 | 댓글 신고 |
| ------ | ------ | ------ | 
| ![게시물 상세 및 댓글](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/4f835cc3-afb0-417f-a5c9-85c73f823624) | ![댓글 삭제](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/ad1b40f2-2745-4b2d-b653-99eea881d5c6) | ![댓글신고](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/c77321de-44a3-459e-b864-45cf902dbe02) | 

| 게시글 신고 | 좋아요, 좋아요 취소 |
| ------ | ------ |
| ![게시글신고](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/cdfbd75e-33a5-4649-bb60-355eae84a4a9) | ![게시글좋아요,취소](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/aa731002-90d6-46a8-b1ee-63fd54134a5d) | 

### 3) 프로필

| 내 프로필 | 프로필 수정 | 
| ------ | ------ |
|![내프로필](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/487f209f-d1a6-45d1-97ee-9b4d6f23ed07) | ![프로필수정](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/1cccfb61-ba47-4c26-8f35-3f722b6c49b4)
  

| 타 유저 프로필 및 팔로우, 언팔로우 | 팔로우 목록 | 
| ------ | ------ |
| ![팔언팔](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/a3cb5090-0598-455e-9f91-025c9581816b) | ![팔로잉목록](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/e0913013-d107-4d2b-8b71-ff62f02187b3) | 


### 4) 판매 상품

| 상품 등록 | 상품 수정 | 상품 삭제 |
| ------ | ------ | ------ |
| ![상품등록](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/2a7cfa46-def6-4d57-8b59-2cf56a7ac007) | ![상품수정](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/79ae7fd8-3ce2-4a8a-b89a-a649151b8c49) | ![상품삭제](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/b92a381f-a95d-476b-9070-159875d39528) | 

## [🧷기능 상세 설명 보기](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/wiki/기능-상세-설명)
<br>

## [🧷폴더 구조 보기](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/wiki/디렉터리-구조)
<br>

##  ✨ 앞으로의 또 다른 시작 ✨

- 맵 API 활용
- 웹 접근성을 고려해 시각, 청각, 지체, 인지적 장애 등 다양한 장애를 가진 사용자들이 웹 사이트나 애플리케이션을 사용할 때,
  어떤 방식으로든 이용이 가능하도록 보장




