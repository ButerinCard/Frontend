export function condenseAddress (address: string | undefined) {
    if(!address) 
        return ''; 
    return `${address.slice(0, 5)}...${address.slice(28, 32)}`
}