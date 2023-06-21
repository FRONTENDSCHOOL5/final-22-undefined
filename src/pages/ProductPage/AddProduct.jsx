// import React from 'react';
// import styled from 'styled-components';
// import SaveHeader from '../../components/common/Header/SaveHeader';
// import Wrapper from '../../components/common/Wrapper/Wrapper';

// const LayoutWrapper = styled(Wrapper)`
//   padding: 34px;
// `;

// const AddProduct = () => {

//   const deletePost = async () => {
//     console.log('postId 값:', postId);
//     try {
//       const response = await fetch(`https://api.mandarin.weniv.co.kr/product`, {
//         method: 'POST',
//         body: JSON.stringify ({
//           "product":{
//               "itemName": String,
//               "price": Number,//1원 이상
//               "link": String,
//               "itemImage": String
//           }
//       }),
//         headers: {
//           Authorization: `Bearer ${JSON.parse(userToken)}`,
//           'Content-Type': 'application/json',
//         },
//       });

//   return (
//     <LayoutWrapper>
//       <SaveHeader name='저장'></SaveHeader>
//     </LayoutWrapper>
//   );
// };

// export default AddProduct;
