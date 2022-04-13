import { createContext, useContext } from "react"
import { ColorThemes } from "../types/global";

export type GlobalContext = {
    theme: ColorThemes,
    toggleTheme: () => void
}

const GlobalContext = createContext<GlobalContext>({
    theme: ColorThemes.DARK,
    toggleTheme: () => {}
});

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