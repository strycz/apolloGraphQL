import React, { useState, createContext, useContext } from 'react';

const languages = ['JavaScript', 'Python'];


const ThemeContext = createContext<any>({})

const App = () => {
    const [language, setLanguage] = useState(languages[0]);

    const toggleLanguage = () => {
        setLanguage(language === 'JavaScript' ? 'Python' : 'JavaScript');
    };

    // implement Context here so can be used in child components
    return (
        <ThemeContext.Provider value={{ language, toggleLanguage }}>
            <MainSection />
        </ThemeContext.Provider>
    );
}


const MainSection = () => {

    const { language, toggleLanguage } = useContext(ThemeContext);

    return (
        <div>
            <p id="favoriteLanguage">Favorite programing language:</p>
            <button id="changeFavorite">Toggle language</button>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);