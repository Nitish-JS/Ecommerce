import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;
const Announcement = () => {
  return <Container>Free shipping on orders over ₹500!!!</Container>;
};

export default Announcement;
