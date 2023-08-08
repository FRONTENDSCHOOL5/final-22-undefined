# 강냥공냥공냥냥
<p align="center"><img src ="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/c52d7474-c1c1-4bd1-a05e-a424fa7cfe39" width="900"></p>

<br>

### 🐾 강냥공냥공냥냥 : 반려동물 통합 커뮤니티 서비스

| 배포링크| 아이디 | 비밀번호 |
| --- | --- | --- |
| https://save-pets.netlify.app/|`testsavepet@gmail.com ` |`123123`|

<br>
<br>

## 목차
1. [프로젝트 소개](#1-프로젝트-소개)  
2. [개발 환경](#2-개발-환경)   
3. [협업 환경](#3-협업-환경)   
4. [역할 분담](#4-역할-분담)
5. [프로젝트 구현](#5-프로젝트-구현)
6. [핵심 기술](#6-핵심-기술)
7. [트러블 슈팅](#7-트러블-슈팅)

<br>
<br>

## 1. 프로젝트 소개
- ✨ 유기동물 보호센터의 정보를 연동하여 유기동물의 입양을 위한 정보와 커뮤니티를 구축합니다.
- 😇 원하는 물품을 판매하거나 구매하는 서비스를 제공합니다.
- 🧤 사용자들 끼리 팔로우 기능을 통해 서로의 소식을 공유할 수 있습니다.
- 🖼️ 글과 사진을 함께 업로드하여 반려 동물들의 일상을 자랑하고 공유할 수 있습니다 🐕
- 🧡 다른 사용자들의 글에 좋아요를 누르고 댓글을 작성할 수 있어요 (우리 소통해요🙊)
- 🧭 지도기능을 통해 내주변의 반려동물 카페, 병원, 호텔을 찾을 수 있어요.

<br>
<br>

## 2. 개발 환경
### 2-1. 개발기간
- 프로젝트 기획 및 개발 : 2023.06.01 ~ 

<br>

### 2-2. 기술스택
<table align="center">
  <tr height="30px">
    <th>Frontend</th>
    <th>Tool</th>
    <th>기타</th>
  </tr>
<tr height="80px">
<td valign="center" width="35%">
<div align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styled components&logoColor=white">
</div>
</td>
<td valign="center" width="24%">
<div align="center">  
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white">
</div>
</td>
<td valign="center" width="20%">
<div align="center">
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white">
</div>
</td></tr></table>

<br>
<br>

## 3. 협업 환경
### 3-1. 협업 컨벤션
#### 3-1-1. 폴더 구조

<br>

#### 3-1-2. 코드 컨벤션

- 타입은 종류 중 **하나**만 선택하며, **영어 소문자**로 시작한다.
- 주제는 한글로 간단명료하게 작성한다.
- 주제의 마지막 문자로 `.(마침표)`를 사용하지 않는다.
- 주제는 '-다', '-음'과 같은 어미로 끝내지 않고, 과거형을 사용하지 않는다.
    - 올바르지 않은 예) `feat: 카카오 로그인 연동 기능을 추가했다 (#3)`, `feat: 카카오 로그인 연동 기능을 추가함 (#3)`
    - 옳은 예) `feat: 카카오 로그인 연동 기능 추가 (#3)`
- 주제는 소스 코드를 보지 않고도 변경 사항이 무엇인지 알 수 있도록 작성해야 한다.
    - 올바르지 않은 예) `design: CSS 조정 (#4)`
    - 옳은 예) `design: text box와 layout frame 사이에 left padding 추가 (#4)`
- 커밋 메시지는 제삼자가 봤을 때 무엇을 했는지 파악할 수 있게 자세히 작성한다.
- 커밋 메시지는 어떻게 보단 **무엇과 왜**를 설명한다.
- 한 커밋에는 한 가지 기능만 담는다.
    - 예) 화면 개발의 경우 : 컴포넌트 단위로 커밋
    - 예2) 기능 개발의 경우 : 각 기능 단위로 커밋

<br>

#### 3-1-3. 커밋 메세지

```
- fix: 올바르지 않은 동작을 고친 경우
- feat: 새로운 기능을 추가한 경우
- refactor: 내부 로직은 변경하지 않고 코드를 개선한 경우
- style: 코드 개선과 상관없이 사소하게 코드를 수정한 경우
- design: 사용자 UI를 추가, 수정한 경우 (마크업, 퍼블리싱 작업)
- add: 폴더, 파일 등을 추가한 경우
- move: 폴더, 파일, 코드 등의 위치를 이동한 경우
- rename: 폴더명, 파일명 등을 수정한 경우
- remove: 폴더, 파일, 코드 등을 삭제한 경우
- assets: 에셋을 추가, 수정한 경우
- docs: 문서를 추가, 수정한 경우
- chore: 위의 모든 경우에 포함되지 않는 기타 수정사항
```

<br>

### 3-2. 협업 방식

- 공유하고 싶은 문제가 있는 경우 이슈로 작성하여 공유하고 작업한 이력 남기기
- GitHub Project Board를 이용한 전체 진도 상황 공유
- 다른 팀원 코드의 BUG 찾는 경우 이슈 작성 후 Assignees 지정
- `Common` 컴포넌트 폴더를 따로 관리하여 코드 재사용율 높이기
- 페이지의 디자인의 일관성과 쉬운 유지보수를 위해 **ThemeProvider**를 사용

<br>
<br>

## 4. 역할 분담
###  4-1. 팀원 소개

| 정현빈 | 박지윤 | 이상용 | 김미정 |
| :----: | :----: | :----: | :----: |
| <img src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/0e06de5c-3578-4a4f-8587-8baa55a06946" width="200" height="200"> | <img src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/17bae45a-d251-4815-a241-7b4c2c6c835c" width="200" height="200"> | <img src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/17bae45a-d251-4815-a241-7b4c2c6c835c" width="200" height="200"> | <img src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/122963246/f1d573f5-d661-448c-ae88-1362a58415f1" width="200" height="200"> |
| 팀장 | 팀원 | 팀원 | 팀원 |
| [hyeonbinnn](https://github.com/hyeonbinnn) | [JiyunPark1301](https://github.com/JiyunPark1301) | [yongisadragon](https://github.com/yongisadragon) | [goyomi](https://github.com/goyomi) |

<br>

### 4-2. 역할 분담
<img width="3136" alt="강냥공냥공냥냥 마인드맵" src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/c7e550ca-0120-4fb0-a788-892a4ff48dcd">

<br>
<br>

## 5. 프로젝트 구현
### 5-1. 페이지 설명

<br>
<br>

## 6. 핵심 기술

<br>
<br>

## 7. 트러블 슈팅
