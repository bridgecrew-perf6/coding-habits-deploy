function ColorGenerator() {
    const Dict = {
        "1-jsYellow": "#F0DB4F",
        "2-brightGreen": "#66FF00",
        "3-brigthNavyBlue": "#1974D2",
        "4-brightTurquoise": "#08E8DE",
        "5-yellowRose": "#FFF000",
        "6-brightOrange": "#FFAA1D",
        "7-brightPink": "#FF007F",
        "8-hotMagenta": "#FF00CC",
        "9-screemingGreen": "#66FF66",
        "10-sizzlingRed": "#FF3855",
        "11-emeraldGreen": "#14A989",
        "12-grape": "#6F2DA8",
        "13-lemon": "#FDFF00",
        "14-scarlet": '#FD0E35',
        "15-turquoise": "#6CDAE7",
        "16-purpleHeart": "#652DC1"
    }
    const colorDict = {
        1: "1-jsYellow",
        2: "2-brightGreen",
        3: "3-brigthNavyBlue",
        4: "4-brightTurquoise",
        5: "5-yellowRose",
        6: "6-brightOrange",
        7:"7-brightPink",
        8: "8-hotMagenta",
        9:"9-screemingGreen",
        10: "10-sizzlingRed",
        11: "11-emeraldGreen",
        12: "12-grape",
        13: "13-lemon",
        14: "14-scarlet",
        15: "15-turquoise",
        16: "16-purpleHeart"
    }

    let randomNumber = Math.floor(Math.random() * (1 - 16 + 1) + 16)
    return Dict[colorDict[randomNumber]]

}


export default ColorGenerator;
