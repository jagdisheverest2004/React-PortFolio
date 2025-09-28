import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const theme = {
        isDarkMode,
        toggleTheme,
        colors: {
            primary: isDarkMode ? '#10b981' : '#059669',
            secondary: isDarkMode ? '#f59e0b' : '#d97706', 
            accent: isDarkMode ? '#ef4444' : '#dc2626',
            background: isDarkMode ? '#0f172a' : '#f8fafc',
            surface: isDarkMode ? '#1e293b' : '#ffffff',
            text: isDarkMode ? '#f1f5f9' : '#0f172a',
            textMuted: isDarkMode ? '#94a3b8' : '#64748b',
            border: isDarkMode ? '#334155' : '#e2e8f0'
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};