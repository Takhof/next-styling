import styled from "styled-components";

const Title = styled.h1`
font-size: 100px;
color: ${({ theme }) => theme.colors.primary}};
`;

function CSSJS() {
  return <Title>Styled Title</Title>;
}

export default CSSJS;
