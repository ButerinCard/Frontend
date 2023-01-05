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
            }, 
            transitionDelay: {
                '30' : '30ms', 
                '60' : '60ms', 
                '90' : '90ms', 
                
              }
        },
       
    },
    plugins: [],
}