import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import { ButtonContainer, CardContainer, ContentContainer } from './styled/Container.styles';
import { StyledTitle } from './styled/Custom.styles';
import { H1, Image, P, Tag, ThemeButton } from './styled/Elements.styles';

export default function Card({ setTheme, theme }) {
    const changeTheme = () => (theme === 'dark' ? 'light' : 'dark');
    return (
        <CardContainer>
            <ContentContainer>
                <P>
                    <ThemeButton type="button" onClick={() => setTheme(changeTheme())}>
                        {theme.charAt(0).toUpperCase() + theme.slice(1, Infinity)}
                    </ThemeButton>
                </P>
                <Tag color="#4361ee">Exclusive</Tag>
                <H1>
                    <StyledTitle color="#fff" text="React Styled Component" />
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="nerd" width="300px" />
        </CardContainer>
    );
}
