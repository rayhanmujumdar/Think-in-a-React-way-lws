import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyled;
