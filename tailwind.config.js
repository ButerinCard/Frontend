/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'PS2' : ["'Press Start 2P'", "cursive"], 
                'plex' : [ "'IBM Plex Mono'", "monospace"],
                'orbitron': ["'Orbitron'", "sans-serif"], 
                'ubuntu': ["'Ubuntu Mono'", 'monospace']
            }, 
            colors:{
                primaryYellow: '#E7F4F9',
                'fidenzaColor[0]': "#DB4F54",
                'fidenzaColor[1]': "#D12A2F",
                'fidenzaColor[2]':"#E57D32",
                'fidenzaColor[3]':"#FCBC19",
                'fidenzaColor[4]':"#FCD265",
                'fidenzaColor[5]':"#29A691",
                'fidenzaColor[6]':"#7CA9BF",
                'fidenzaColor[7]':"#315F8C",
                'fidenzaColor[8]':"#F7B1A1",
                'fidenzaColor[9]':"#B8D9CE",
                'fidenzaColor[10]':"#E0D7C5",
                'fidenzaColor[11]':"#543E2E",
                'fidenzaColor[12]':"#1F335D",
                'fidenzaColor[13]':"#3B2B20",
                'fidenzaColor[14]':"#121A33",
                'fidenzaColor[15]':"#261C15"
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