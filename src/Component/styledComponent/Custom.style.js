import styled from 'styled-components';
import NotFound from '../NotFound';

const NotFoundPage = styled(NotFound)`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    & p {
        font-size: 40px;
        color: #262626;
    }
    & a {
        font-size: 18px;
        padding: 5px 10px;
        background-color: #424949;
        color: white;
        border-radius: 5px;
    }
    & a:active {
        background-color: #1b2631;
    }
`;

export default NotFoundPage;
