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
                'fidenzaPalette[0]': "#DB4F54",
                'fidenzaPalette[1]': "#D12A2F",
                'fidenzaPalette[2]':"#E57D32",
                'fidenzaPalette[3]':"#FCBC19",
                'fidenzaPalette[4]':"#FCD265",
                'fidenzaPalette[5]':"#29A691",
                'fidenzaPalette[6]':"#7CA9BF",
                'fidenzaPalette[7]':"#315F8C",
                'fidenzaPalette[8]':"#F7B1A1",
                'fidenzaPalette[9]':"#B8D9CE",
                'fidenzaPalette[10]':"#E0D7C5",
                'fidenzaPalette[11]':"#543E2E",
                'fidenzaPalette[12]':"#1F335D",
                'fidenzaPalette[13]':"#3B2B20",
                'fidenzaPalette[14]':"#121A33",
                'fidenzaPalette[15]':"#261C15"
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