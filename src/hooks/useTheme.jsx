import { useEffect,useState } from "react";

export default function useTheme() {
    const [theme,setTheme] = useState(()=>{

    try{
        return localStorage.getItem('theme') || null;
    } catch{
        return  null;
    }
});

useEffect(()=>{
    if(theme === 'dark'){
        document.documentElement.classList.add('dark');
    } else if(theme === 'light'){
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
        try{
            if(theme) localStorage.setItem('theme',theme);
            else localStorage.removeItem('theme');
        } catch{}
    
},[theme]);


const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

// helper to explicitly

const setDark = () => setTheme('dark');
const setLight = () => setTheme('light');
const setSystem = () => setTheme(null);

return { theme, toggle, setDark, setLight, setSystem};
}