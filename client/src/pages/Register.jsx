import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { notifySuccess, notifyFailure, notifyInfo } from "../components/alert";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.div`
  font: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  width: 100%;
`;

const Register = () => {
  const history = useHistory();
  // const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const changeHandler = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(userData);
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      console.log("user data : " + userData);
      const res = await userRequest.post("auth/register", userData);
      res && notifySuccess("Successfully Registered");
      history.push("/");
    } catch (err) {
      notifyFailure(err);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input
            placeholder="username"
            name="username"
            onChange={changeHandler}
          ></Input>
          <Input
            placeholder="email"
            type="email"
            name="email"
            onChange={changeHandler}
          ></Input>
          <Input
            name="password"
            placeholder="password"
            type="password"
            onChange={changeHandler}
          ></Input>
          <Input
            name="confirmpassword"
            placeholder="confirm password"
            type="password"
            onChange={changeHandler}
          ></Input>
          <Button onClick={submitHandler}>Create</Button>
          <Links>
            <Link to="/login">Already have an account?</Link>
          </Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
