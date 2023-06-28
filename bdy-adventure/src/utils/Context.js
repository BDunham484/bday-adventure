import { createContext, useContext, useState } from 'react';



const StateContext = createContext();
const { Provider } = StateContext;


const StateProvider = ({ children }) => {

    const [shades, setShades] = useState(false);
    const [eaten, setEaten] = useState(false);

    return <Provider value={{
        shades,
        setShades,
        eaten,
        setEaten
    }}>
        {children}
    </Provider>
};

const useStateContext = () => {
    return useContext(StateContext)
}

export { StateProvider, useStateContext, StateContext}
