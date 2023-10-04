import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Tutorial from './component/Tutorial';
import GlobalStyled from './component/styled/Global.styles';
import themeData from './utils/theme.data';

function App() {
    const { lightTheme, darkTheme } = themeData;
    const [theme, setTheme] = useState('light');
    const [themeStyle, setThemeStyle] = useState(lightTheme);
    useEffect(() => {
        if (theme === 'dark') {
            setThemeStyle(darkTheme);
        } else {
            setThemeStyle(lightTheme);
        }
    }, [theme, lightTheme, darkTheme]);
    return (
        <>
            <GlobalStyled />
            <ThemeProvider theme={{ style: themeStyle }}>
                <Tutorial setTheme={setTheme} theme={theme} />
            </ThemeProvider>
        </>
    );
}

export default App;
