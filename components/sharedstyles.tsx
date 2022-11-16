import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  gap: 1rem;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  a {
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`

const Divider = styled.div`
  &::after {
    content: ' ';
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.red};
    width: 100%;
    border-radius: 10px;
  }
`;


export { Container, Main, Title, Description, Divider }
