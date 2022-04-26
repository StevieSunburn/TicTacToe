let clickCounter = 1;
let ids = ["topleft", "topmiddle", "topright", "midleft", "midmid", "midright", "bottomleft", "bottommid", "bottomright"]
let combos = ["topLine", "midLine", "botLine", "leftSide", "midCol", "rightSide", "leftRight", "rightLeft"]
let possibleCombos = {
    topLine: [],
    midLine: [],
    botLine: [],
    leftSide: [],
    midCol: [],
    rightSide: [],
    leftRight: [],
    rightLeft: []
}




function click(htmlid){
    document.getElementById("winner").innerHTML = "Winner";
    if(document.getElementById(htmlid).innerHTML === "-"){
        if (clickCounter % 2 == 1){
            document.getElementById(htmlid).innerHTML = "X";
            clickCounter++;
            switch(htmlid){
                case "topleft":
                    possibleCombos["topLine"].push("X");
                    possibleCombos["leftSide"].push("X");
                    possibleCombos["leftRight"].push("X");
                    break;
                case "topmiddle":
                    possibleCombos["topLine"].push("X");
                    possibleCombos["midCol"].push("X");
                    break;
                case "topright":
                    possibleCombos["topLine"].push("X");
                    possibleCombos["rightSide"].push("X");
                    possibleCombos["rightLeft"].push("X");
                    break;
                case "midleft":
                    possibleCombos["midLine"].push("X");
                    possibleCombos["leftSide"].push("X");
                    break;
                case "midmid":
                    possibleCombos["midLine"].push("X");
                    possibleCombos["midCol"].push("X");
                    possibleCombos["leftRight"].push("X");
                    possibleCombos["rightLeft"].push("X");
                    break;
                case "midright":
                    possibleCombos["midLine"].push("X");
                    possibleCombos["rightSide"].push("X");
                    break;
                case "bottomleft":
                    possibleCombos["botLine"].push("X");
                    possibleCombos["leftSide"].push("X");
                    possibleCombos["rightLeft"].push("X");
                    break;
                case "bottommid":
                    possibleCombos["botLine"].push("X");
                    possibleCombos["midCol"].push("X");
                    break;
                case "bottomright":
                    possibleCombos["botLine"].push("X");
                    possibleCombos["rightSide"].push("X");
                    possibleCombos["leftRight"].push("X");
                    break;
                };
            checkforV(); 
            } else if (clickCounter % 2 == 0){
            document.getElementById(htmlid).innerHTML = "O";
            clickCounter++;
            switch(htmlid){
                case "topleft":
                    possibleCombos["topLine"].push("O");
                    possibleCombos["leftSide"].push("O");
                    possibleCombos["leftRight"].push("O");
                    break;
                case "topmiddle":
                    possibleCombos["topLine"].push("O");
                    possibleCombos["midCol"].push("O");
                    break;
                case "topright":
                    possibleCombos["topLine"].push("O");
                    possibleCombos["rightSide"].push("O");
                    possibleCombos["rightLeft"].push("O");
                    break;
                case "midleft":
                    possibleCombos["midLine"].push("O");
                    possibleCombos["leftSide"].push("O");
                    break;
                case "midmid":
                    possibleCombos["midLine"].push("O");
                    possibleCombos["midCol"].push("O");
                    possibleCombos["leftRight"].push("O");
                    possibleCombos["rightLeft"].push("O");
                    break;
                case "midright":
                    possibleCombos["midLine"].push("O");
                    possibleCombos["rightSide"].push("O");
                    break;
                case "bottomleft":
                    possibleCombos["botLine"].push("O");
                    possibleCombos["leftSide"].push("O");
                    possibleCombos["rightLeft"].push("O");
                    break;
                case "bottommid":
                    possibleCombos["botLine"].push("O");
                    possibleCombos["midCol"].push("O");
                    break;
                case "bottomright":
                    possibleCombos["botLine"].push("O");
                    possibleCombos["rightSide"].push("O");
                    possibleCombos["leftRight"].push("O");
                    break;
                };
            checkforV();        
        } if (clickCounter > 9){
            alert("gameover")
        }
    }
} 

function checkforV(){
    for (let i = 0; i < combos.length; i++){
        if (possibleCombos[combos[i]].join("") === "XXX"){
            document.getElementById("winner").innerHTML = "X Wins";
            for (let i = 0; i < ids.length; i++){
                document.getElementById(ids[i]).innerHTML = "-";
            }
            possibleCombos = {
                topLine: [],
                midLine: [],
                botLine: [],
                leftSide: [],
                midCol: [],
                rightSide: [],
                leftRight: [],
                rightLeft: []
            }
            clickCounter = 1;    
        } else if (possibleCombos[combos[i]].join("") === "OOO"){
            document.getElementById("winner").innerHTML = "O Wins";
            for (let i = 0; i < ids.length; i++){
                document.getElementById(ids[i]).innerHTML = "-";
            }
            possibleCombos = {
                topLine: [],
                midLine: [],
                botLine: [],
                leftSide: [],
                midCol: [],
                rightSide: [],
                leftRight: [],
                rightLeft: []
            }
            clickCounter = 1;
        }

    }
};