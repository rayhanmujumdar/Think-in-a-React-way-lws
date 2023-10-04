import Card from './Card';
import { Container } from './styled/Container.styles';

export default function Tutorial({ setTheme, theme }) {
    return (
        <Container>
            <Card setTheme={setTheme} theme={theme} />
        </Container>
    );
}
