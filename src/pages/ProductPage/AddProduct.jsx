import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import SaveHeader from '../../components/common/Header/SaveHeader';
import { AuthContextStore } from '../../context/AuthContext';
import ProductForm from '../../components/Product/ProductForm';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../api/product';

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
      await addProduct(
        userToken,
        formData.itemName,
        parseInt(formData.price.replace(/[^0-9]/g, '')),
        formData.link,
        img,
      );
      navigate('/profile');
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
