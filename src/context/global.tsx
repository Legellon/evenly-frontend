import { createContext, useContext } from "react"

export type GlobalContext = {
    theme?: ColorThemes,
    toggleTheme?: () => void
}

export enum ColorThemes {
    LIGHT = 'light-theme',
    DARK = 'dark-theme'
};

const GlobalContext = createContext<GlobalContext>({});

export function useGlobal() {
    return useContext(GlobalContext);
}

export default function GlobalProvider({ value, children }: any) {
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}