import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import SaveHeader from '../../components/common/Header/SaveHeader';
import { AuthContextStore } from '../../context/AuthContext';
import ProductForm from '../../components/Product/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleProduct, editProduct } from '../../api/product';
import useImageUpload from '../../hooks/useImageUpload';

const Main = styled.main``;

const LayoutWrapper = styled(Wrapper)`
  padding: 30px 34px;
`;

const Form = styled.form`
  padding-top: 78px;
`;

const EditProduct = () => {
  const { userToken } = useContext(AuthContextStore);
  const [formData, setFormData] = useState({
    itemName: '',
    price: '',
    link: '',
  });
  const [error, setError] = useState({
    itemName: '',
    price: '',
    link: '',
    itemImg: '',
  });
  const { img, onUpload, setImg } = useImageUpload();

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { productId } = useParams();

  let isActivated = false;
  if (
    formData.itemName?.trim() !== '' &&
    formData.price?.trim() !== '' &&
    formData.link?.trim() !== '' &&
    img !== '' &&
    (error.itemName === '' || error.itemName === 'noError') &&
    (error.price === '' || error.price === 'noError') &&
    (error.link === '' || error.link === 'noError') &&
    (error.itemImg === '' || error.itemImg === 'noError') &&
    !isLoading
  ) {
    isActivated = true;
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);

        const data = await getSingleProduct(productId, userToken);
        const { itemName, price, link, itemImage } = data.product;

        setFormData({
          itemName,
          price: price.toString(),
          link,
        });
        setImg(itemImage);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };

    fetch();
  }, [productId, userToken]);

  const addClick = async () => {
    try {
      setIsLoading(true);
      const data = await editProduct(
        productId,
        userToken,
        formData.itemName,
        parseInt(formData.price.replace(/[^0-9]/g, '')),
        formData.link,
        img,
      );

      if (!data.product) throw Error('잘못된 접근입니다.');
      setIsLoading(false);
      navigate('/profile');
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  return (
    <Main>
      <LayoutWrapper>
        <SaveHeader name='저장' mode={isActivated ? 'default' : 'disabled'} onClick={addClick} />
        <Form>
          <ProductForm
            formData={formData}
            setFormData={setFormData}
            img={img}
            onUpload={onUpload}
            error={error}
            setError={setError}
          />
        </Form>
      </LayoutWrapper>
    </Main>
  );
};

export default EditProduct;
