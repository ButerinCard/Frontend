import { createContext } from 'react';
import { CardClient } from './types';

export const Context = createContext<CardClient | undefined>(undefined);

export default Context;