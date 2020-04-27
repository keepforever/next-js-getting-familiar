import { useState } from 'react';
import Link from 'next/link';
import TopNavBar from '../comps/TopNavBar';
import { Paper, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

const SiteLayout = ({ children }) => {
    const [themeMode, setThemeMode] = useState('dark');

    console.log('\n', '\n', `themeMode = `, themeMode, '\n', '\n');
    const muiTheme = createMuiTheme({
        palette: {
            type: themeMode
        }
    });

    const handleToggleTheme = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Paper style={{ minHeight: '100vh' }}>
                <TopNavBar onToggleTheme={handleToggleTheme}/>
                <>{children}</>
            </Paper>
        </ThemeProvider>
    );
};

export default SiteLayout;
