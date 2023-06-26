import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import SaveHeader from '../../components/common/Header/SaveHeader';
import { AuthContextStore } from '../../context/AuthContext';
import ProductForm from '../../components/Product/ProductForm';
import { useNavigate } from 'react-router-dom';

const Main = styled.main``;

const LayoutWrapper = styled(Wrapper)`
  padding: 30px 34px;
`;

const Form = styled.form`
  padding-top: 78px;
`;

const AddProduct = () => {
  const { userToken } = useContext(AuthContextStore);
  const [formData, setFormData] = useState({
    itemName: '',
    price: '',
    link: '',
  });
  const [img, setImg] = useState('');
  const [error, setError] = useState({
    itemName: '',
    price: '',
    link: '',
    itemImg: '',
  });

  const navigate = useNavigate();

  let isActivated = false;
  if (
    formData.itemName.trim() !== '' &&
    formData.price.trim() !== '' &&
    formData.link.trim() !== '' &&
    img !== '' &&
    (error.itemName === '' || error.itemName === 'noError') &&
    (error.price === '' || error.price === 'noError') &&
    (error.link === '' || error.link === 'noError') &&
    (error.itemImg === '' || error.itemImg === 'noError')
  ) {
    isActivated = true;
  }

  const addClick = async () => {
    try {
      const response = await fetch('https://api.mandarin.weniv.co.kr/product', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          product: {
            itemName: formData.itemName,
            price: parseInt(formData.price.replace(/[^0-9]/g, '')),
            link: formData.link,
            itemImage: img,
          },
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/profile');
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Main>
      <LayoutWrapper>
        <SaveHeader name='저장' mode={isActivated ? 'default' : 'disabled'} onClick={addClick} />
        <Form onSubmit={(e) => e.preventDefault()}>
          <ProductForm
            formData={formData}
            setFormData={setFormData}
            img={img}
            setImg={setImg}
            error={error}
            setError={setError}
          />
        </Form>
      </LayoutWrapper>
    </Main>
  );
};

export default AddProduct;
