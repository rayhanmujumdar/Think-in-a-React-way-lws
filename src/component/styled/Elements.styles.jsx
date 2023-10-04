import styled from 'styled-components';

export const Tag = styled.span`
    display: inline-block;
    color: #fff;
    background: ${(props) => props.color};
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`;

export const H1 = styled.h1`
    color: #fff;
`;

export const P = styled.p`
    width: 280px;
    font-size: 13px;
    line-height: 1.4;
    color: #aaa;
    margin: 20px 0;
`;

export const Image = styled.img`
    position: absolute;
    top: 30px;
    right: -20px;
    z-index: 0;
`;

export const ThemeButton = styled.button`
    display: inline-block;
    overflow: hidden;
    position: relative;
    font-size: 11px;
    color: ${({ theme }) => theme.style.Button.color};
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.style.Button.border};
    font-weight: bold;
    background: ${({ theme }) => theme.style.ThemeButton.background};
    border-radius: 50px;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -10px;
        width: 0%;
        background: ${({ theme }) => theme.style.Button.background};
        height: 100%;
        z-index: -1;
        transition: width 0.3s ease-in-out;
        transform: skew(-25deg);
        transform-origin: right;
    }
    &:hover {
        transition: all 0.5s ease;
        &::after {
            width: 150%;
            left: -10px;
            transform-origin: left;
        }
    }
`;
