import { ethers } from "ethers"

export type Web3ProviderState = {
    prev: boolean
}
export type CardClient = Web3ProviderState & {
    setPrev: (p: boolean) => void;
}

