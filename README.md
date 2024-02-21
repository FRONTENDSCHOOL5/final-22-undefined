# 🦴 Happy-Paw

<p align="center"><img src ="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/122862593/9fa4a124-9ec5-4b71-bfb5-06e7bb3f00e9"></p>

<br>
<br>

> ### 🐾 해피포 (Happy-Paw) : 반려동물 통합 커뮤니티 서비스

|                           배포 URL                           |      테스트 ID       |  테스트 PW   |
| :----------------------------------------------------------: | :------------------: | :----------: |
| [`https://happy4.netlify.app/`](https://happy4.netlify.app/) | `happypaw@gmail.com` | `happypawpw` |

<br>
<br>
<br>

## 0. 목차

1. [프로젝트 소개](#1-프로젝트-소개)
2. [개발 환경](#2-개발-환경)
3. [협업 환경](#3-협업-환경)
4. [역할 분담](#4-역할-분담)
5. [프로젝트 구현](#5-프로젝트-구현)
6. [핵심 코드](#6-핵심-코드)
7. [트러블 슈팅](#7-트러블-슈팅)

<br>
<br>
<br>

## 1. 프로젝트 소개

- 🐱 반려동물의 정보를 공유하는 커뮤니티를 구축합니다.
- 🛍️ 원하는 물품을 판매하거나 구매하는 서비스를 제공합니다.
- 🧤 사용자들 끼리 팔로우 기능을 통해 서로의 소식을 공유할 수 있습니다.
- 🖼️ 글과 사진을 함께 업로드하여 반려 동물들의 일상을 자랑하고 공유할 수 있습니다.
- 🧡 다른 사용자들의 글에 좋아요를 누르고 댓글을 작성할 수 있습니다.
- 🗺️ 지도기능을 통해 내주변의 반려동물 카페, 병원, 호텔을 찾을 수 있습니다.

<br>
<br>
<br>

## 2. 개발 환경

### 2-1. 개발기간

- 프로젝트 기획 및 개발 : 2023.06.01 ~ 2023.06.30
- 프로젝트 노션 : <strong>[`해피포 노션 바로가기`](https://www.notion.so/22-undefined-91ffc29faf424d4d965788dfd80b55fc)</strong>

<br>
<br>

### 2-2. 기술스택

<table>
  <tr height="30px">
    <th>Front-End</th>
    <th>Back-End</th>
    <th>Co-work & etc</th>
  </tr>
<tr height="100px">
<td valign="center" width= "30%">
<div align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styled components&logoColor=white">
</div>
</td>
<td valign="center" width= "30%">
<div align="center">
<strong>제공된 API 사용</strong>
</div>
</td>
<td valign="center" width= "60%">
<div align="center">  
<img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white">
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"> 
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"> <br>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white"> 
<img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white">

</div>
</td>

</td></tr></table>

<br>
<br>
<br>

## 3. 협업 환경

### 3-1. 협업 컨벤션

#### 3-1-1. 폴더 구조

```
🐾 HappyPaw
├─ 📦 public
│  ├─ ⭐ favicon.ico
│  └─ 📃 index.html
├─ 📦 src
│  ├─ 📂 api
│  ├─ 📂 assets
│  │  ├─ 📂 icon
│  │  └─ 📂 splash
│  ├─ 📂 components
│  │  ├─ 📂 common
│  │  │  ├─ 📂 Button
│  │  │  ├─ 📂 Carousel
│  │  │  ├─ 📂 Header
│  │  │  ├─ 📂 Input
│  │  │  ├─ 📂 MainLayout
│  │  │  ├─ 📂 Modal
│  │  │  ├─ 📂 TabMenu
│  │  │  └─ 📂 Wrapper
│  │  ├─ 📂 Follow
│  │  ├─ 📂 Post
│  │  ├─ 📂 Product
│  │  ├─ 📂 Profile
│  │  └─ 📂 Skeleton
│  ├─ 📂 context
│  ├─ 📂 hooks
│  ├─ 📂 pages
│  │  ├─ 📂 ChatPage
│  │  ├─ 📂 ErrorPage
│  │  ├─ 📂 FollowListPage
│  │  ├─ 📂 HomePage
│  │  ├─ 📂 JoinPage
│  │  ├─ 📂 LoginPage
│  │  ├─ 📂 MapPage
│  │  ├─ 📂 PostPage
│  │  ├─ 📂 ProductPage
│  │  ├─ 📂 ProfilePage
│  │  ├─ 📂 SearchPage
│  │  └─ 📂 SplashPage
│  ├─ 📂 routes
│  ├─ 📂 styles
|  ├─ 📜 App.js
|  └─ 📜 index.js
```

<br>
<br>

#### 3-1-2. 코드 컨벤션

- 타입은 종류 중 **하나**만 선택하며, **영어 소문자**로 시작한다.
- 주제는 한글로 간단명료하게 작성한다.
- 주제의 마지막 문자로 `.(마침표)`를 사용하지 않는다.
- 주제는 '-다', '-음'과 같은 어미로 끝내지 않고, 과거형을 사용하지 않는다.
  - 올바르지 않은 예 ) `feat: 카카오 로그인 연동 기능을 추가했다, 혹은 추가함 (#3)`
  - 옳은 예 ) `feat: 카카오 로그인 연동 기능 추가 (#3)`
- 주제는 소스 코드를 보지 않고도 변경 사항이 무엇인지 알 수 있도록 작성해야 한다.
  - 올바르지 않은 예 ) `design: CSS 조정 (#4)`
  - 옳은 예 ) `design: text box와 layout frame 사이에 left padding 추가 (#4)`
- 커밋 메시지는 제삼자가 봤을 때 무엇을 했는지 파악할 수 있게 자세히 작성한다.
- 커밋 메시지는 어떻게 보단 **무엇과 왜**를 설명한다.
- 한 커밋에는 한 가지 기능만 담는다.
  - 예 ) 화면 개발의 경우 : 컴포넌트 단위로 커밋
  - 예2 ) 기능 개발의 경우 : 각 기능 단위로 커밋

<br>
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
<br>

### 3-2. 협업 방식

#### - 공통 이슈만들고, 공유하고 싶은 문제가 있는 경우 이슈로 작성하여 공유하고 작업한 이력 남기기

![스크린샷 2023-09-11 204309](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/b66933e4-cc47-4a68-b5e5-b0f459640367)

<br>

#### - `GitHub Project Board`를 이용한 전체 진도 상황 공유

![스크린샷 2023-09-11 202111](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/fd241f49-344c-4e56-9e2c-cd004f837ae4)

<br>

#### - 다른 팀원 코드의 BUG 찾는 경우 이슈 작성 후 `Assignees` 지정

![스크린샷 2023-09-11 202412](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/a951d26a-4bf9-441f-b308-e35c525289c2)

<br>

#### - `Common` 컴포넌트 폴더를 따로 관리하여 코드 재사용율 높이기

![스크린샷 2023-09-11 203732](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/f3552177-77f2-465d-8bb3-c84ef44beb6d)

<br>

#### - 페이지의 디자인의 일관성과 쉬운 유지보수를 위해 `ThemeProvider`를 사용

```jsx
const colors = {
  primary: '#374259',
  secondary: '#b1b5bb',
  third: '#F2D8D8',
  gray: '#dbdbdb',
  bgGray: '#f2f2f2',
  txtColor: '#767676',
  warning: '#FD7A6E',
  white: '#fff',
};

const theme = { colors };

export default theme;
```

<br>
<br>

### 3-3. Git Branch 전략

#### - 소규모 프로젝트 방식 채택

![그림1](https://github.com/hyeonbinnn/happy-paw/assets/117449788/f286ecb1-f4f7-4bc6-bd16-139e06242607)

<br>
<br>
<br>

## 4. 역할 분담

### 4-1. 팀원 소개

|                                                                      정현빈                                                                      |                                                                     박지윤                                                                      |                                                                      이상용                                                                      |                                                                      김미정                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/0e06de5c-3578-4a4f-8587-8baa55a06946" width="200" height="200"> | <img src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/77823753/69e61949-2979-4ae2-b539-0a3a0fdf5d8e" width="200" height="200"> | <img src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/122862593/c08fc883-e7f8-4aa8-a341-919b853d091d" width="200" height="200"> | <img src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/122963246/f1d573f5-d661-448c-ae88-1362a58415f1" width="200" height="200"> |
|                                                                       팀장                                                                       |                                                                      팀원                                                                       |                                                                       팀원                                                                       |                                                                       팀원                                                                       |
|                                                   [hyeonbinnn](https://github.com/hyeonbinnn)                                                    |                                                [JiyunPark1301](https://github.com/JiyunPark1301)                                                |                                                [yongisadragon](https://github.com/yongisadragon)                                                 |                                                       [goyomi](https://github.com/goyomi)                                                        |

<br>
<br>

### 4-2. 역할 분담

<img width="3311" alt="해피포 마인드맵" src="https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/12dededa-596c-4cff-bbb3-74d879eab82c">

<br>
<br>
<br>

## 5. 프로젝트 구현

### 5-1. 전체 UI

![Frame 1](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/5cff6a70-b7cd-4925-a95f-8956c4060df2)

<br>
<br>

### 5-2. PC & Mobile

![제목 없음](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/2053d709-d9fd-4c8b-aefd-ffa617a258df)

<br>
<br>

### 5-3. 페이지 기능

|                                                         스플래시                                                         |                                                         로그인                                                         |                                                     회원가입 & 프로필 설정                                                      |
| :----------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| ![스플래시](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/3ae8aaac-5449-4c86-bb81-7eb37f19fab3) | ![로그인](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/76659ea5-4a42-433d-8229-c82e61cbc61d) | ![회원가입 프로필](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/9076dfd6-ab17-4e2f-ba3c-a0b3fed5f952) |

<br>
<br>

|                                                         홈                                                         |                                                         계정 검색                                                         |                                                        팔로우 & 팔로잉                                                        |
| :----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| ![홈](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/a9275e2c-43cd-40dc-967d-8c5e986e27aa) | ![계정 검색](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/b40c0509-9cea-44f0-83a2-19db0e76e3c1) | ![팔로우 팔로잉](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/327a9b9f-e595-462c-8d55-148c7eee45c1) |

<br>
<br>

|                                                       게시글 업로드                                                        |                                                        게시글 수정                                                         |                                                        게시글 삭제                                                         |
| :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![게시글작성](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/11073e5a-14f0-46d0-9a06-6dbe2401bbb9) | ![게시글수정](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/45214315-b5e0-4a8b-ab43-2dffa1ba1908) | ![게시글삭제](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/a96e7132-86a6-42d6-8fd3-f97795100d88) |

<br>
<br>

|                                                        댓글 작성                                                         |                                                        댓글 삭제                                                         |                                                        댓글 신고                                                         |
| :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| ![댓글작성](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/6983377c-7fc8-4b5d-b115-554127adb7ad) | ![댓글삭제](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/d65411ed-8465-4486-b8e2-cd016d6c4371) | ![댓글신고](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/11e61fe9-2899-437f-9df4-5952783a3694) |

<br>
<br>

|                                                        상품 등록                                                         |                                                        상품 수정                                                         |                                                        상품 삭제                                                         |
| :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| ![상품등록](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/07c683d6-3c4b-4960-96f5-5790b0f60027) | ![상품수정](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/aef1217f-911b-4e33-9633-ca3a3c14d5fc) | ![상품삭제](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/9c577e27-b9ed-4cc9-a0ee-38cd023978eb) |

<br>
<br>

|                                                         프로필 수정                                                         |                                                         404                                                         |                                                         지도                                                         |
| :-------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| ![프로필 수정](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/1946347a-00e2-42a8-9f93-23ba80e4d362) | ![404](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/d7d9d56a-4473-44e1-9eb7-ccb2b5282269) | ![지도](https://github.com/FRONTENDSCHOOL5/final-22-undefined/assets/117449788/c6dc8cd4-14b9-4b4a-bfe5-7332b5469b1e) |

<br>
<br>
<br>

## 6. 핵심 코드

### 실시간 이메일, 계정 ID 중복 검사 실행

```jsx
useEffect(() => {
  if (!['email', 'accountname'].includes(id)) return;

  if (
    (id === 'email' && !EMAIL_REGEX.test(formData.email)) ||
    (id === 'accountname' && !ID_REGEX.test(formData.accountname)) ||
    formData['accountname'] === userAccountname
    // 프로필 수정 페이지에서 현재 로그인한 유저의 accountname인 경우 이미 가입된 계정이라는 에러 메세지를 보여주지 않기 위함
  ) {
    return;
  }

  const errorMsg = id === 'email' ? '이미 가입된 이메일 주소 입니다.' : '이미 가입된 계정ID 입니다.';

  const timer = setTimeout(() => {
    checkDuplication(errorMsg);
  }, 300);

  return () => {
    clearTimeout(timer);
  };
}, [formData.email, formData.accountname]);
```

- <strong>`email`</strong>과 <strong>`accountname`</strong>만 중복 검사를 진행하기 때문에 <strong>`id`</strong>가 다른 값이 되면 <strong>`return`</strong>을 합니다. <br>
  그 다음 <strong>`formData.email`</strong>, <strong>`formData.accountname`</strong>이 변경될 때마다 실행이 됩니다.

- 조건문을 통해 입력된 이메일과 계정 ID의 형식이 올바른지 확인한 뒤, <strong>`formData.accountname`</strong>이 현재 로그인한 사용자의 계정 ID와 일치하지 않는지 확인 후, 만약 조건에 해당하지 않는다면 함수를 종료합니다.

- 그 이외에, 중복된 이메일 또는 계정 ID 에러 메시지를 설정하고, 300밀리초 후에 <strong>`checkDuplication`</strong> 함수를 호출합니다. <br>
  <strong>`timer`</strong> 변수에는 <strong>`setTimeout`</strong> 함수로 생성된 타이머 ID가 저장되며, <strong>`clearTimeout`</strong>을 사용하여 타이머 취소가 가능합니다.

- <strong>`useEffect`</strong>의 반환 함수는 해당 이펙트가 정리(clean-up)될 때 실행하고, 여기서 타이머를 취소하기 위해 <strong>`clearTimeout`</strong>을 호출합니다. <br>
  디바운싱 기능을 적용함으로써 사용자가 입력할 때마다 서버요청을 하지 않기에 통신 비용이 발생하지 않습니다.

<br>
<br>

### 이미지 업로드를 위한 커스텀 훅

```jsx
import { useState } from 'react';
import { uploadImages } from '../api/image';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];
const MAX_SIZE = 10 * 1024 * 1024;

const useImagesUpload = () => {
  const [images, setImages] = useState([]);

  const onUpload = async (files, length) => {
    if (images.length + length > 3) return alert('이미지는 최대 3개까지 업로드 할 수 있습니다.');

    const formData = new FormData();
    for (let i = 0; i < length; i++) {
      const file = files[i];

      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (ALLOWED_EXTENSIONS.includes(`.${fileExtension}`) && file.size <= MAX_SIZE) {
        formData.append('image', file);
      }
    }

    try {
      const data = await uploadImages(formData);
      const filenames = data.map((data) => data.filename);
      setImages((prev) => [...prev, ...filenames]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onDelete = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });

    alert('삭제되었습니다.');
  };

  return { images, onUpload, onDelete };
};

export default useImagesUpload;
```

- 이미지 업로드는 특성상 회원가입 시 프로필 설정, 프로필 수정, 게시글 작성, 상품 등록 등 여러 페이지에서 반복적으로 사용됩니다. 그래서 여러 이미지를 업로드 할 수 있는 상태를 선언하고, 새롭게 들어오는 이미지들과 기존 이미지를 합친 값이 3이 넘으면 더 이상 업로드 할 수 없도록 구현합니다.

- <strong>`FormData`</strong> 객체를 생성하고, <strong>`files`</strong> 배열을 순회하면서 허용되는 확장자 목록과 이미지 사이즈를 검사한 뒤, 통과한다면 <strong>`formData`</strong>에 <strong>`image`</strong> 라는 키 값으로 파일을 추가할 수 있습니다.

- 그 다음 <strong>`uploadImages`</strong> 함수를 통해 서버에 이미지를 업로드하고, 서버 응답에서 파일명을 추출하여 상태를 업데이트하고, <strong>`setImages`</strong> 함수를 사용해 이전 상태값인 <strong>`prev`</strong> 배열과 새로운 파일명 배열인 <strong>`filenames`</strong>를 합쳐서 상태를 갱신합니다.

- 이렇게 함으로써, 이미지 업로드 후의 상태값을 업데이트하고 <strong>`React`</strong> 컴포넌트가 리렌더링될 수 있도록 합니다.

<br>
<br>
<br>

## 7. 트러블 슈팅

### 반복되는 API 요청 작업을 줄이기 위해 파일 분리하기

```jsx
const BASE_URL = 'https://api.mandarin.weniv.co.kr';

export const request = async (url, options) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const imageRequest = async (url, options) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, { ...options });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
```

- 가장 기본이 되는 <strong>`request`</strong> 함수를 만들어 줍니다. 그 다음, 로그인은 <strong>`auth.js`</strong> , 게시글은 <strong>`post.js`</strong> , 상품은 <strong>`product.js`</strong> 등 기능별로 파일을 만듭니다.

<br>
<br>

```jsx
import { request } from './request';

// 회원가입
export const join = async (state, formData, image) => {
  return await request('user', {
    method: 'POST',
    body: JSON.stringify({ user: { ...state, ...formData, image } }),
  });
};

// 로그인
export const login = async (email, password) => {
  return await request('user/login', {
    method: 'POST',
    body: JSON.stringify({ user: { email, password } }),
  });
};

// 토큰 검증
// ...

// 이미 존재하는 이메일(또는 계정)인지 검사
export const validateForm = async (id, formData) => {
  return await request(`user/${id}valid`, {
    method: 'POST',
    body: JSON.stringify({ user: { [id]: formData[id] } }),
  });
};
```

- 파일 내에서 필요한 요청들 즉, <strong>`auth.js`</strong>는 회원가입, 로그인 등 <strong>`post.js`</strong>는 게시글 불러오기, 업로드, 수정, 삭제, 신고 등 각각의 함수로 만들어 줍니다.

- 그리고 각각의 함수를 사용할 때는 먼저 import 해주고, api를 가져온 후 필요한 인자 값들을 넘겨주면 됩니다.

<br>
<br>

![화면 캡처 2023-12-14 201943](https://github.com/hyeonbinnn/happy-paw/assets/117449788/1f2773cb-5066-4035-9c16-ca316579b6b0)

<br>
<br>

<br>
<br>
