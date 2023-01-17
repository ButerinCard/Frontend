/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'orbitron' : ["'Press Start 2P'", "cursive"], 
                'plex' : [ "'IBM Plex Mono'", "monospace"]
            }, 
            colors:{
                primaryYellow: '#E7F4F9', 
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