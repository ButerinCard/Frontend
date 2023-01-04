/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'orbitron' : ["'Orbitron'", "sans-serif"], 
                'libre' : ["'Libre Baskerville'", 'serif']
            }, 
            colors:{
                primaryYellow: '#FCD265', 
            }
        },
       
    },
    plugins: [],
}