import { createContext, useState } from 'react'
import { ProviderPropsLogin, LoginContextData } from '../utils/Interfaces'
import Form from '../components/Form'

export const LoginContext = createContext({} as LoginContextData)

export function LoginProvider ({ children }: ProviderPropsLogin) {

    const [isFormOpen, setIsFormOpen] = useState(false);

    function OpenForm() {
        console.log('Foi')
        setIsFormOpen(true)
    }
    
    console.log(isFormOpen)

    function closeForm() {
        console.log('Close')
        setIsFormOpen(false)
    }

    const store = {
        OpenForm,
        closeForm
    }

    return (
        <LoginContext.Provider value={store}>
            { children }

            { isFormOpen && <Form /> }
        </LoginContext.Provider>
    )
}

