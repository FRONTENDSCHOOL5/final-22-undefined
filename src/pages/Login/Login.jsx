import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button/Button";
import FormInput from "../../components/common/Input/FormInput";
import Wrapper from "../../components/common/Wrapper/Wrapper";

import { useState } from "react";

const Main = styled.main``;

const Form = styled.form``;

const Section = styled.section``;

const Heading = styled.h1`
  margin: 30px 0 40px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const LoginBtn = styled(Button)`
  margin-top: 30px;
`;

const initialFormState = {
  email: "",
  password: ""
};

const initialErrorState = {
  email: "",
  password: ""
};

const Login = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(initialErrorState);

  const req = {
    user: {
      email: formData.email,
      password: formData.password
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://api.mandarin.weniv.co.kr/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(req)
        }
      );
      const data = await response.json();

      if (data.status === 422) {
        console.log("틀린 정보. 로그인 실패했다.:", data);
      } else {
        console.log("옳은 정보. 로그인 성공했다:", data);
        saveUserInfo(data);
      }
    } catch (error) {
      console.error("실패했다:", error);
    }
  };

  const saveUserInfo = (data) => {
    const token = data.user.token;
    const accountname = data.user.accountname;

    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("accountname", JSON.stringify(accountname));
    // setUserToken(token); 나중에 getItem해서 세팅하는 함수
    // setUserAccountname(accountname);
  };

  let formIsValid = false;
  if (error.email === "noError" && error.password === "noError")
    formIsValid = true;

  return (
    <Main>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Section>
            <Heading>로그인</Heading>

            <FormInput
              id="email"
              label="이메일"
              formData={formData}
              setFormData={setFormData}
              error={error}
              setError={setError}
              inputProps={{
                type: "email",
                placeholder: "이메일 주소를 입력해 주세요."
              }}
            />

            <FormInput
              id="password"
              label="비밀번호"
              formData={formData}
              setFormData={setFormData}
              error={error}
              setError={setError}
              inputProps={{
                type: "password",
                placeholder: "비밀번호를 설정해 주세요.",
                autoComplete: "off"
              }}
            />

            {/* formIsValid에 의해 둘 중 하나의 값이 LoginBtn-> Button 컴포넌트 프롭스로 들어가게된다. */}
            <LoginBtn mode={formIsValid ? "default" : "disabled"} size="lg">
              로그인
            </LoginBtn>
          </Section>
        </Form>
      </Wrapper>
    </Main>
  );
};

export default Login;
