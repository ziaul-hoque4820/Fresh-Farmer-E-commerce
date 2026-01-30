/**
 * Get theme from localStorage or system preference
 * @returns {string} 'dark' or 'light'
 */
export const getInitialTheme = () => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        return storedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    // Default to light
    return 'light';
};

/**
 * Apply theme to document
 * @param {string} theme - 'dark' or 'light'
 */
export const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
};

/**
 * Toggle theme between light and dark
 * @returns {string} new theme value
 */
export const toggleTheme = () => {
    const currentTheme = getInitialTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);

    return newTheme;
};

/**
 * Initialize theme on app load
 * Call this function before your app renders
 */
export const initializeTheme = () => {
    const theme = getInitialTheme();
    applyTheme(theme);
    return theme;
};
