import styled from "styled-components";
import { Description } from "./sharedstyles";

const FooterContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 30vh;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};

    h1 {
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }
`;

const Footer = () => {
    return <FooterContainer>
        <h1>
            The Clubs of CHS
        </h1>
        <Description>
            A project by the CHS Website Development Club
        </Description>
    </FooterContainer>
};

export default Footer;