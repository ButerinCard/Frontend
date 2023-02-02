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
            spacing: {
                '100' : '25rem', 
                '104': '26rem', 
                '108': '27rem', 
                '112' : '28rem', 
                '116': '29rem', 
                '120' : '30rem', 
                '124' : '31rem'
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