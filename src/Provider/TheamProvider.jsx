import { createContexts, useState } from "react";
import PropTypes from 'prop-types';


export const ThemeContext = createContexts(null)
const TheamProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    }
    const themeInfo = {theme, toggleTheme}
    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};
TheamProvider.propTypes = {
    children: PropTypes.object.isRequired
}
export default TheamProvider;