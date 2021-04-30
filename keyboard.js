const kd = document.querySelectorAll(".key");
const textbox = document.querySelector(".textbox");

let keyPressed = (e) => {
  let kc = e.keyCode;
    if ( (kc >= 65 && kc <= 90) || kc == 32 || kc == 21 || kc == 16) {
        if (kc == 81) { kd[0].classList.add("key__down"); }
        else if (kc == 87) { kd[1].classList.add("key__down"); }
        else if (kc == 69) { kd[2].classList.add("key__down"); }
        else if (kc == 82) { kd[3].classList.add("key__down"); }
        else if (kc == 84) { kd[4].classList.add("key__down"); }
        else if (kc == 89) { kd[5].classList.add("key__down"); }
        else if (kc == 85) { kd[6].classList.add("key__down"); }
        else if (kc == 73) { kd[7].classList.add("key__down"); }
        else if (kc == 79) { kd[8].classList.add("key__down"); }
        else if (kc == 80) { kd[9].classList.add("key__down"); }
        else if (kc == 65) { kd[10].classList.add("key__down"); }
        else if (kc == 83) { kd[11].classList.add("key__down"); }
        else if (kc == 68) { kd[12].classList.add("key__down"); }
        else if (kc == 70) { kd[13].classList.add("key__down"); }
        else if (kc == 71) { kd[14].classList.add("key__down"); }
        else if (kc == 72) { kd[15].classList.add("key__down"); }
        else if (kc == 74) { kd[16].classList.add("key__down"); }
        else if (kc == 75) { kd[17].classList.add("key__down"); }
        else if (kc == 76) { kd[18].classList.add("key__down"); }
        else if (kc == 90) { kd[19].classList.add("key__down"); }
        else if (kc == 88) { kd[20].classList.add("key__down"); }
        else if (kc == 67) { kd[21].classList.add("key__down"); }
        else if (kc == 86) { kd[22].classList.add("key__down"); }
        else if (kc == 66) { kd[23].classList.add("key__down"); }
        else if (kc == 78) { kd[24].classList.add("key__down"); }
        else if (kc == 77) { kd[25].classList.add("key__down"); }
        else if (kc == 16) { kd[26].classList.add("key__down"); }
        else if (kc == 32) {
            kd[27].classList.add("key__down");
            textbox.innerHTML += "&nbsp;";
        }
        else if (kc == 21) {
            kd[28].classList.add("key__down");
        }
    }
    Key_Sound(kc);
}

let keyReleased = (e) => {
    let kc = e.keyCode;
  if (kc == 81) { kd[0].classList.remove("key__down"); }
        else if (kc == 87) { kd[1].classList.remove("key__down"); }
        else if (kc == 69) { kd[2].classList.remove("key__down"); }
        else if (kc == 82) { kd[3].classList.remove("key__down"); }
        else if (kc == 84) { kd[4].classList.remove("key__down"); }
        else if (kc == 89) { kd[5].classList.remove("key__down"); }
        else if (kc == 85) { kd[6].classList.remove("key__down"); }
        else if (kc == 73) { kd[7].classList.remove("key__down"); }
        else if (kc == 79) { kd[8].classList.remove("key__down"); }
        else if (kc == 80) { kd[9].classList.remove("key__down"); }
        else if (kc == 65) { kd[10].classList.remove("key__down"); }
        else if (kc == 83) { kd[11].classList.remove("key__down"); }
        else if (kc == 68) { kd[12].classList.remove("key__down"); }
        else if (kc == 70) { kd[13].classList.remove("key__down"); }
        else if (kc == 71) { kd[14].classList.remove("key__down"); }
        else if (kc == 72) { kd[15].classList.remove("key__down"); }
        else if (kc == 74) { kd[16].classList.remove("key__down"); }
        else if (kc == 75) { kd[17].classList.remove("key__down"); }
        else if (kc == 76) { kd[18].classList.remove("key__down"); }
        else if (kc == 90) { kd[19].classList.remove("key__down"); }
        else if (kc == 88) { kd[20].classList.remove("key__down"); }
        else if (kc == 67) { kd[21].classList.remove("key__down"); }
        else if (kc == 86) { kd[22].classList.remove("key__down"); }
        else if (kc == 66) { kd[23].classList.remove("key__down"); }
        else if (kc == 78) { kd[24].classList.remove("key__down"); }
        else if (kc == 77) { kd[25].classList.remove("key__down"); }
        else if (kc == 16) { kd[26].classList.remove("key__down"); }
        else if (kc == 32) { kd[27].classList.remove("key__down"); }
        else if (kc == 21) { kd[28].classList.remove("key__down"); }
}


window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);
/*
window.onload = () => {
document.querySelector(".textbox").focus();
*/

function Key_Sound(kc){
    let slct_switch = document.getElementById("switch_slct");
    slct_switch = slct_switch.options[slct_switch.selectedIndex].value;
    let audio

    if ( (kc >= 65 && kc <= 90) || kc == 32 || kc == 21 || kc == 16) {
    switch(slct_switch){
        case 'Cherry적축':
            if (kc == 32 || kc == 21) {
                console.log("1")
                audio = new Audio('Sound/CherryRedNOT/space.wav');
            }else if(kc >= 65 && kc <= 67 ){
                console.log("2")
                audio = new Audio('Sound/CherryRedNOT/1.wav');
            }else if(kc >= 68 && kc <= 70 ){
                console.log("3")
                audio = new Audio('Sound/CherryRedNOT/2.wav');
            }else if(kc >= 71 && kc <= 73 ){
                console.log("4")
                audio = new Audio('Sound/CherryRedNOT/3.wav');
            }else if(kc >= 74 && kc <= 76 ){
                console.log("5")
                audio = new Audio('Sound/CherryRedNOT/4.wav');
            }else if(kc >= 77 && kc <= 79 ){
                console.log("6")
                audio = new Audio('Sound/CherryRedNOT/5.wav');
            }else if(kc >= 80 && kc <= 82 ){
                console.log("7")
                audio = new Audio('Sound/CherryRedNOT/6.wav');
            }else if(kc >= 83 && kc <= 85 ){
                console.log("8")
                audio = new Audio('Sound/CherryRedNOT/7.wav');
            }else if(kc >= 86 && kc <= 88 ){
                console.log("9")
                audio = new Audio('Sound/CherryRedNOT/8.wav');
            }else{
                audio = new Audio('Sound/CherryRedNOT/9.wav');
            }
            audio.play();
            break;
    }
}
}

// 브랜드별 스위치
function Select_Swich(e) {
    let Cherry = ["청축", "갈축", "적축", "흑축"];
    let Gateron = ["청축", "갈축", "적축", "흑축"];
    let Kailh = ["청축", "갈축", "적축", "흑축"];
    let Custom = ["커스텀영역"]
    let target = document.getElementById("switch_slct");
    let d

    if(e.value == "Cherry") d = Cherry;
    else if(e.value == "Gateron") d = Gateron;
    else if(e.value == "Kailh") d = Kailh;
    else if(e.value == "Custom") d = Custom;

    target.options.length = 0;

    console.log(d);
    for (x in d) {

        let opt = document.createElement("option");
        opt.value = e.value + d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }   
}

function Select_Option(e) {
    let test = ["옵션 미구현"]
    let target = document.getElementById("Option_slct");
    let d

    if(e.value != "Cherry") d = test;

    target.options.length = 0;

    for (x in d) {
        let opt = document.createElement("option");
        opt.value = d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }   
}