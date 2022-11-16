import styled from "styled-components";

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.red};
    border: 2px solid ${({ theme }) => theme.colors.red};
    border-radius: 15px;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: 600;
    max-width: 200px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
        transform: scale(1.05);
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
        transform: scale(0.98);
    }

    &:focus {
        outline: none;
    }
`;

export default Button;