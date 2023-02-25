
import { useState } from 'react';
import Context from './Context';

const CardProvider = ({ children }: any) => {
    const [prev, setPrev] = useState(false);
    return (<Context.Provider value={{ prev, setPrev }}>{children}</Context.Provider>)
}

export default CardProvider;