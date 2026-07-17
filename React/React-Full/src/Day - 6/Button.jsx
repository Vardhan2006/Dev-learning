import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from './ThemeContext';

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <div >
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default Button