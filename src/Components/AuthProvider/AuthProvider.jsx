import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    //create user with pass and email

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    )
}