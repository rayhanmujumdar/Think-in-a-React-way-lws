import styled from 'styled-components';

export const UL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px 0px;
`;

export const P = styled.p`
    font-size: 23px;
    text-align: center;
    padding: 4px 0px;
    cursor: pointer;
`;

export const Button = styled.button`
    border: none;
    border: 1px solid gray;
    padding: 4px 6px;
    font-size: 16px;
    border-radius: 5px;
    &:hover {
        background-color: black;
        color: white;
    }
`;

export const LI = styled.li`
    & a {
        font-size: 18px;
        padding: 4px 11px;
        cursor: pointer;
        transition-duration: 0.3s;
        color: #fff;
        &:hover {
            background-color: #3d3c3c;
            border-radius: 5px;
            transition-duration: 0.3s;
        }
    }
`;
