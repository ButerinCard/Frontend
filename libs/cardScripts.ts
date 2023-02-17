export function runScript() {

    var [tokenId, phaseId, tokenIdWithinPhase, kiloBytes, patternId, colorId, quoteId, seed] = [650, 3, 1, 34, 0, 12, 3, 114];
 
    // Seeded PRNG
    const rnd = function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    const rndTri = function () {
        return 100 * (1 - Math.sqrt(1 - rnd()));
    };

    // Fidenza color palette
    const fidenzaPalette = [
        "#DB4F54",
        "#D12A2F",
        "#E57D32",
        "#FCBC19",
        "#FCD265",
        "#29A691",
        "#7CA9BF",
        "#315F8C",
        "#F7B1A1",
        "#B8D9CE",
        "#E0D7C5",
        "#543E2E",
        "#1F335D",
        "#3B2B20",
        "#121A33",
        "#261C15"
    ];

    // Setting the card color tone
    (document as any).querySelectorAll(".fidenzaColor").forEach((element: any) => {
        element.setAttribute("fill", fidenzaPalette[colorId]);
    });
    if(colorId >= 14){
        (document as any).querySelectorAll(".patternLines").forEach((element: any) => {
            element.setAttribute("fill", "white");
        });
    }
    (document as any).querySelectorAll(".rayColor").forEach((element: any) => {
        element.setAttribute("stop-color", fidenzaPalette[colorId]);
    });
    if(!document)
        return; 
    // Settings the pattern
    (document as any).getElementById("frame").setAttribute("fill", `url(#pattern${patternId})`);
    (document as any).getElementById("frameBlurry").setAttribute("fill", `url(#pattern${patternId})`);

    // Formatting the background
    // # DONE 
    const discreteAngles = [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345];
    const bgRotate = `rotate(${discreteAngles[Math.floor(rnd()*24)]})`;
    (document as any).querySelectorAll(".rotate").forEach((element: any) => element.setAttribute("patternTransform", bgRotate));
    // # DONE 
    
    // Formatting title box
    const ethTitleElement = (document as any).getElementById("eth_title");
    switch (phaseId) {
        case 0:
            ethTitleElement.setAttribute("href", "#eth_pencil");
            ethTitleElement.setAttribute("transform", "translate(85.5 9.1) scale(.015 .015)");
            break;
        case 1:
            ethTitleElement.setAttribute("href", "#eth_bw");
            ethTitleElement.setAttribute("transform", "translate(87 8.7) scale(.01 .01)");
            break;
        case 2:
            ethTitleElement.setAttribute("href", "#eth_grey");
            ethTitleElement.setAttribute("transform", "translate(87 8.7) scale(.01 .01)");
            break;
        case 3:
            ethTitleElement.setAttribute("href", "#eth_color_a");
            ethTitleElement.setAttribute("transform", "translate(87 8.7) scale(.01 .01)");
            break;
        case 4:
            ethTitleElement.setAttribute("href", "#eth_color_b");
            ethTitleElement.setAttribute("transform", "translate(87 8.7) scale(.01 .01)");
            break;
        default:
    }

    // Setting random corners and adding a bevel
    const dRevert = " M0 0 H100 V140 H0 V0";
    let d = `M10 8 l-2 ${rnd() < 0.5 ? "0" : "2"} V12.82842712475 l${rnd() < 0.5 ? "0" : "2"} 2 H90 l2 ${
        rnd() < 0.5 ? "0" : "-2"
    } V10 l${rnd() < 0.5 ? "0" : "-2"} -2 Z`;
    (document as any).getElementById("titlePath").setAttribute("d", d);
    (document as any).getElementById("titlePathOutside").setAttribute("d", d + dRevert);

    d = `M10 83.1084271247 l-3 ${rnd() < 0.5 ? "0" : "3"} V86.1084271247 l${rnd() < 0.5 ? "0" : "3"} 3 H90 l3 ${
        rnd() < 0.5 ? "0" : "-3"
    } V86.1084271247 l${rnd() < 0.5 ? "0" : "-3"} -3 z`;
    (document as any).getElementById("subtitlePath").setAttribute("d", d);
    (document as any).getElementById("subtitlePathOutside").setAttribute("d", d + dRevert);

    // Setting the protrusions for the image element
    const generateProtrudedPath = function (y0: any, height: any) {
        const transition = function (pos: any) {
            let posNew = (pos + 1 + (rnd() < 0.5)) % 3;
            let posInc = Math.abs(posNew - pos);
            let lenInc = rndTri();
            if (lenInc < posInc) lenInc = posInc;
            return [posNew, posInc, lenInc];
        };

        // Left side
        let p0 = rnd() < 1 / 3 ? 0 : rnd() < 1 / 2 ? 1 : 2;
        let pos = p0;
        let [posNew, posInc, lenInc] = transition(pos);
        let len = lenInc;
        let d = `M${pos + 10} ${y0}`;
        while (len <= height) {
            d += ` v${lenInc - posInc}`;
            d += ` l${posNew - pos} ${posInc}`;
            pos = posNew;

            [posNew, posInc, lenInc] = transition(pos);
            len += lenInc;
        }
        if (len - lenInc <= height - posInc && len <= height + posInc)
            d += ` V${y0 + height - posInc} l${posNew - pos} ${posInc}`;
        else {
            d += ` V${y0 + height}`;
            posNew = pos;
        }

        // Right side
        pos = (2 - (rnd() < 0.5 ? posNew : p0)) % 3;
        [posNew, posInc, lenInc] = transition(pos);
        len = lenInc;
        d += ` H${pos + 88}`;
        while (len <= height) {
            d += ` v-${lenInc - posInc}`;
            d += ` l${posNew - pos} -${posInc}`;
            pos = posNew;

            [posNew, posInc, lenInc] = transition(pos);
            len += lenInc;
        }
        if (len - lenInc <= height - posInc && len <= height + posInc) d += ` V${y0 + posInc} l${posNew - pos} -${posInc}`;
        else d += ` V${y0}`;

        d += ` Z`;
        return d;
    };

    d = generateProtrudedPath(16.82842712475, 64.28);
    (document as any).getElementById("imagePath").setAttribute("d", d);
    (document as any).getElementById("imagePathOutside").setAttribute("d", d + dRevert);
    d = generateProtrudedPath(91.1084271247, 40.8915728753);
    (document as any).getElementById("descriptionPath").setAttribute("d", d);
    (document as any).getElementById("descriptionPathOutside").setAttribute("d", d + dRevert);

    // Vitalik quotes
    const quotes = [
        "There's a shift of legitimacy \nin thinking of Ether as a \ntype of money of any kind.",
        "Ultra-Sound Money",
        "Doge is E-God spelled backwards.",
        "E-God",
        "Remember that section in the game \ntheory textbook that talks about how \nbeing credibly insane can actually \ngive you a strategic advantage?",
        "Credibly Insane",
        "Two eyes for an eye will make the \nwhole world blind in O(log(n)) time.",
        "O(log(n))",
        "My favorite Western cuisine.",
        "Asian Fusion",
        "My centrist blockchain governance \nphilosophy in a nutshell: I supported \nthe DAO fork. \nI support things like the DAO fork \nbeing hard.",
        "Blockchain Centrist",
        "So I just misspelled the name of \nsomeone named Jason as \u2018Json\u2019.",
        "JSON",
        "So total cryptocoin market cap \njust hit $0.5T today. \n\nBut have we earned it?",
        "Earn it",
        "To assume that all slippery slope \narguments are fallacious.",
        "Slippery Slope Fallacy",
        "The correct resolution to the \u2018can \nan omnipotent god make a rock so \nheavy that even he cannot lift it?\u2019 \nparadox is: yes, he can, but as \nsoon as the rock is created he will \nno longer be omnipotent, he'll be \nomnipotent except for that darn rock",
        "Reminder",
        "Any \u2018principle\u2019, \u2018rule\u2019 or \u2018law\u2019 \nwhich the creator deliberately \ntries to name after themselves and \npromote and market with their own \nname will not gain traction and \nprobably doesn't deserve to.",
        "Buterin's Law",
        "I think we should genetically \nengineer our children so that \ntheir brains have hash and elliptic \ncurve operation precompiles.",
        "Elliptic Brains",
        "I've decided I'm more okay \nthan before with taking risks \nwith my social capital \nand occasionally having enemies.",
        "Social Capital",
        "The only correct order for dates is: \nyear, month, day (eg. 2018 Apr 17, \nor 2018.04.17). \nAll other orders are an abomination.",
        "Order",
        "No, I'm not giving away ETH.",
        "Nope",
        "Sometimes the real scarce resource \nis legitimacy.",
        "Legitimate",
        "They should just rename W \nfrom \u2018double-yoo\u2019 to \u2018wee\u2019.",
        "Weeeeeeee!",
        "Is it necessarily a bad thing if \na protocol optimizes a little bit \nfor being theatrical? \n(Thinking about Bitcoin's sudden \nhalvings every 4 years, as opposed \nto the smooth exponential decay curve \nthat a mathematician would have made)",
        "Theatrical",
        "Destroyer of jobs, \ncreator of better ones",
        "Jobs",
        "The \u2018metaverse\u2019 is going to happen \nbut I don't think any of the \nexisting corporate attempts to \nintentionally create the metaverse \nare going anywhere.",
        "Metaverse",
        "Paradox of diversity: \nif every organization within society \nmust fully reflect the diversity \nof that society's members, \nthen there can be no diversity between \norganizations in that society.",
        "Diversity",
        "Freedom is important.",
        "Freedom",
        "Reminder: Ethereum is neutral, \nbut I am not.",
        "Neutrality",
        "Being a pluralist requires \nbeing at peace with the fact that \nthere are groups in the world \nthat operate under principles \nvery alien and uncongenial to you, \nand that some of those groups \neven have some power.",
        "Pluralist",
        "I propose the term \u2018alfalfa leak\u2019 \nfor something that doesn't give you \nan easy path to short term profit, \nbut is still ultimately \ngood for you.",
        "Alfalfa",
        "The less libertarian side of me \nsometimes kinda wishes that the EU \nwould make it illegal to make iOS-\nonly apps, and require companies of a \ncertain size to either write a version \nfor each major platform or use \na cross-platform dev framework.",
        "Cross-platform",
        "Make a world where humans are one-\ndimensionalized and stereotyped the \nsame way we treat orcs and elves today. \nLike, there should only be one Human \nNation, with one personality trait, \nand its capital should be called \nHumanton (and the main food hummus).",
        "Humanton",
        "Often I have to go through many \ndifferent articles and search \nkeywords to find the original (document as any). \nLinking to the primary source \nshould be the norm!",
        "Sourceful",
        "Beware the impulse to preach that \n\u2018we must make sacrifices for the \nsake of peace\u2019, \nbut suggest only sacrifices where \nother people are the ones sacrificing \nwhile you give up nothing.",
        "Beware",
        "When I came up with Ethereum my \nfirst thought was: \n\u2018Ok, this is too good to be true.\u2019 \n\nAs it turned out, the core Ethereum \nidea was good, fundamentally, \ncompletely sound.",
        "Sound",
        "Normalize saying \u2018dub\u2019\n (instead of \u2018double-yoo\u2019)\n as the name of the letter W.\n All letters deserve \na one-syllable name.",
        "Dub",
        "I like the fact that hard forks \ngive users a measure of control, \nrequiring them to opt in \nto protocol changes. \nSure, they can be a little more \nchaotic if they're controversial, \nbut that's the price of freedom.",
        "The Hard Forkoooooor",
        "Some Bitcoin users see the hard \nfork as in some ways violating \ntheir most fundamental values. \nI personally think these fundamental \nvalues, pushed to such extremes, \nare silly.",
        "Hard Forker",
        "In general, signalling theory says \nthat if you have a good way of \nproving something and a noisy way of \nproving something, and you choose \nthe noisy way, that means chances \nare it's because you couldn't do \nthe good way in the first place.",
        "Signal",
        "In order to have \na decentralised database, \nyou need to have security. \nIn order to have security, \nyou need to have incentives.",
        "Incentives",
        "The main advantage of blockchain \ntechnology is supposed to be that \nit's more secure, \nbut new technologies are generally \nhard for people to trust, and \nthis paradox can't really be avoided.",
        "Paradoxical",
        "Bitcoin is a digital currency, \nand the protocol is written \nto sustain this cryptocurrency. \n\nClearly, Ethereum platform has ETH, \nit is also a digital currency, but \nit exists to sustain the protocol.",
        "Currency & Protocol",
        "I remember knowing, \nfor a while, for a long time, \nthat I was kind of \nabnormal in some sense.",
        "Abnormal",
        "If crypto succeeds, \nit's not because\n it empowers better people, \nit's because\n it empowers better institutions.",
        "Institutional",
        "I think Bitcoin really feels \nempowering in a sense.",
        "Bitcoiner",
        "I happily played World of Warcraft \nduring 2007-2010, but one day Blizzard \nremoved the damage component from my \nbeloved warlock's Siphon Life spell. \nI cried myself to sleep, and on that \nday I realized what horrors \ncentralized services can bring.",
        "WoW",
        "The industrial revolution allowed us, \nfor the first time, \nto start replacing human labour \nwith machines.",
        "Revolution",
        "Whereas most technologies tend to \nautomate workers doing menial tasks, \nblockchains automate away the center. \nInstead of putting the taxi driver out \nof a job, blockchain puts Uber out of \na job and lets the taxi drivers work \nwith the customer directly.",
        "Peer-to-peer",
        "I came up with the idea behind \nEthereum. This idea of a blockchain \nwith a built-in programming \nlanguage as what I thought was \nthe simplest and most logical way to \nactually build a platform that can be \nused for many kinds of applications.",
        "Programmable",
        "Bitcoin is great as a form of \ndigital money, but its scripting \nlanguage is too weak for any kind \nof serious advanced applications \nto be built on top.",
        "Scripter"
    ];

    // Add description text
    const descriptionText = quotes[quoteId * 2];
    const subtitleText = quotes[quoteId * 2 + 1];
    const lines = descriptionText.split("\n");
    lines[0] = "\u201c" + lines[0];
    lines[lines.length - 1] = lines[lines.length - 1] + "\u201d";
    lines.forEach((line, ind) =>
        (document as any)
            .getElementById(`line${Math.floor((7 - lines.length) / 2) + ind + 1}`)
            .appendChild((document as any).createTextNode(line))
    );
    (document as any).getElementById("lineKB").appendChild((document as any).createTextNode(`Size = ${kiloBytes} KB`));

    // Wait until fonts are loaded to format the text boxestokenId
    (document as any).fonts.ready.then(() => {
        const tokenIdInPhaseElement = (document as any).getElementById("tokenIdWithinPhase");
        tokenIdInPhaseElement.appendChild((document as any).createTextNode(tokenIdWithinPhase + 1));
        (document as any).getElementById("numberWrap").setAttribute("width", tokenIdInPhaseElement.getBBox().width + 1.1);

        const descritionTextWidth = lines
            .map((undefined, ind) => (document as any).getElementById(`line${Math.floor((7 - lines.length) / 2) + ind + 1}`).getBBox())
            .reduce((maxWidth, { width }) => Math.max(maxWidth, width), 0);
        (document as any).getElementById("descriptionText").setAttribute("transform", `translate(${(100 - descritionTextWidth) / 2 - 14})`);
    });

    // Setting the subtitle
    const subtitleElement = (document as any).getElementById("subtitleText");
    subtitleElement.appendChild((document as any).createTextNode(subtitleText));

    // Setting the card ID
    (document as any).getElementById("cardNumber").appendChild((document as any).createTextNode(`${tokenId + 1}`));

    // Set special card attributes
    if (phaseId) (document as any).getElementById("vitalik").setAttribute("href", "#vitalikImage");
    if (subtitleText === "Bitcoiner") {
        if (phaseId) (document as any).getElementById("laserEyesImage").setAttribute("visibility", "visible");
        else (document as any).getElementById("laserEyesPencil").setAttribute("visibility", "visible");
    }
    if(subtitleText === "WoW")
        (document as any).getElementById("speechBubble").setAttribute("visibility", "visible");
    
    if (subtitleText === "The Hard Forkoooooor") 
        (document as any).getElementById("pitchfork").setAttribute("visibility", "visible");
}