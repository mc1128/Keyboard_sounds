const kd = document.querySelectorAll(".key");
const textbox = document.querySelector(".textbox");

/*
let keykorea = (e) => {
    let valueInVar = document.getElementById("textvalue").value;
    let key_korean = Hangul.disassemble(e.target.value);
    kc_korea = (key_korean[key_korean.length-1])

    if (kc_korea == "ㅂ" || kc_korea == "ㅃ") { kd[0].classList.add("key__down"); }
        else if (kc_korea == "ㅈ" || kc_korea == "ㅉ") { kd[1].classList.add("key__down"); }
        else if (kc_korea == "ㄷ" || kc_korea == "ㄸ") { kd[2].classList.add("key__down"); }
        else if (kc_korea == "ㄱ" || kc_korea == "ㄲ") { kd[3].classList.add("key__down"); }
        else if (kc_korea == "ㅅ" || kc_korea == "ㅆ") { kd[4].classList.add("key__down"); }
        else if (kc_korea == "ㅛ") { kd[5].classList.add("key__down"); }
        else if (kc_korea == "ㅕ") { kd[6].classList.add("key__down"); }
        else if (kc_korea == "ㅑ") { kd[7].classList.add("key__down"); }
        else if (kc_korea == "ㅐ" || kc_korea == "ㅒ") { kd[8].classList.add("key__down"); }
        else if (kc_korea == "ㅔ" || kc_korea == "ㅖ") { kd[9].classList.add("key__down"); }
        else if (kc_korea == "ㅁ") { kd[10].classList.add("key__down"); }
        else if (kc_korea == "ㄴ") { kd[11].classList.add("key__down"); }
        else if (kc_korea == "ㅇ") { kd[12].classList.add("key__down"); }
        else if (kc_korea == "ㄹ") { kd[13].classList.add("key__down"); }
        else if (kc_korea == "ㅎ") { kd[14].classList.add("key__down"); }
        else if (kc_korea == "ㅗ") { kd[15].classList.add("key__down"); }
        else if (kc_korea == "ㅓ") { kd[16].classList.add("key__down"); }
        else if (kc_korea == "ㅏ") { kd[17].classList.add("key__down"); }
        else if (kc_korea == "ㅣ") { kd[18].classList.add("key__down"); }
        else if (kc_korea == "ㅋ") { kd[19].classList.add("key__down"); }
        else if (kc_korea == "ㅌ") { kd[20].classList.add("key__down"); }
        else if (kc_korea == "ㅊ") { kd[21].classList.add("key__down"); }
        else if (kc_korea == "ㅍ") { kd[22].classList.add("key__down"); }
        else if (kc_korea == "ㅠ") { kd[23].classList.add("key__down"); }
        else if (kc_korea == "ㅜ") { kd[24].classList.add("key__down"); }
        else if (kc_korea == "ㅡ") { kd[25].classList.add("key__down"); }
}*/


let keyPressed = (e) => {

    let kc = e.keyCode;
    if ( (kc >= 65 && kc <= 90) || kc == 32 || kc == 21 || kc == 16) {
        console.log("통과")
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
            //textbox.innerHTML += "&nbsp;";
        }
        else if (kc == 21) {
            kd[28].classList.add("key__down");
        }
    }
    Key_Sound(kc);
}

let keyReleased = (e) => {
    let kc = e.keyCode;
    if (kc == 81 ) { kd[0].classList.remove("key__down"); }
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


//window.addEventListener("input", keykorea);

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);

/*
window.onload = () => {
document.querySelector(".textbox").focus();
*/

function Key_Sound(kc){
    // 경로 패치
    let slct_switch = document.getElementById("switch_slct");
    slct_switch = slct_switch.options[slct_switch.selectedIndex].value;
    let audio
    
    let slct_opt = document.getElementById("Option_slct");
    slct_opt = slct_opt.options[slct_opt.selectedIndex].value;

    let Sound_dir = "Sound/" + slct_switch + "/" + slct_opt;
    
    console.log(Sound_dir);

    if ((kc >= 65 && kc <= 90) || kc == 32 || kc == 21 || kc == 16) {
            if (kc == 32 || kc == 21) {
                console.log("1")
                audio = new Audio(Sound_dir+'/space.wav');
            }else if(kc >= 65 && kc <= 67 ){
                console.log("2")
                audio = new Audio(Sound_dir+'/1.wav');
            }else if(kc >= 68 && kc <= 70 ){
                console.log("3")
                audio = new Audio(Sound_dir+'/2.wav');
            }else if(kc >= 71 && kc <= 73 ){
                console.log("4")
                audio = new Audio(Sound_dir+'/3.wav');
            }else if(kc >= 74 && kc <= 76 ){
                console.log("5")
                audio = new Audio(Sound_dir+'/4.wav');
            }else if(kc >= 77 && kc <= 79 ){
                console.log("6")
                audio = new Audio(Sound_dir+'/5.wav');
            }else if(kc >= 80 && kc <= 82 ){
                console.log("7")
                audio = new Audio(Sound_dir+'/6.wav');
            }else if(kc >= 83 && kc <= 85 ){
                console.log("8")
                audio = new Audio(Sound_dir+'/7.wav');
            }else if(kc >= 86 && kc <= 88 ){
                console.log("9")
                audio = new Audio(Sound_dir+'/8.wav');
            }else{
                audio = new Audio(Sound_dir+'/9.wav');
            }
            audio.play();
    }
}


// 브랜드별 스위치
function Select_Swich(e) {
    let Cherry = ["청축", "갈축", "적축", "흑축"];
    let Gateron = ["청축", "갈축", "적축", "흑축", "광축"];
    let Kailh = ["청축", "갈축", "적축", "흑축", "광축"];
    let Capacity= ["노뿌", "토프레"]
    let Custom = ["커스텀영역"]
    let target = document.getElementById("switch_slct");
    let d
    let x

    if(e.value == "Cherry") d = Cherry;
    else if(e.value == "Gateron") d = Gateron;
    else if(e.value == "Kailh") d = Kailh;
    else if(e.value == "Capacity") d = Capacity;
    else if(e.value == "Custom") d = Custom;

    target.options.length = 0;

    console.log(d);
    for (x in d) {
        let opt = document.createElement("option");
        let switch_opt;
        switch(d[x]){
            case '청축':
                switch_opt = "Blue";
                break;
            case '갈축':
                switch_opt = "Brown";
                break;
            case '적축':
                switch_opt = "Red";
                break;
            case '흑축':
                switch_opt = "Black";
                break;
            case '노뿌':
                switch_opt = "Noppo";
                break;
            case '토프레':
                switch_opt = "Topre";
                break;
            case '광축':
                switch_opt = "Optical";
                break;
            default:
                switch_opt = d[x];
                break;
        }
        opt.value = e.value + switch_opt;
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }   
}

function Select_Option(e) {
    let lube_opt = ["비윤활", "윤활"]
    let target = document.getElementById("Option_slct");
    let d
    let x

    if(e.value != "Cherry") d = lube_opt;


    target.options.length = 0;

    for (x in d) {
        let opt = document.createElement("option");
        let opt_slst;
        switch(d[x]){
            case '비윤활':
                opt_slst = "NOT";
                break;
            case '윤활':
                opt_slst = "LUB";
                break;
            default:
                opt_slst = d[x];
                break;
        }
        opt.value = opt_slst;
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }   
    Keysound_info();
}

function Keysound_info(){
    
    let key_switch = document.getElementById("switch_slct").value;
    let key_option = document.getElementById("Option_slct").value;

    let key_sum = key_switch + key_option;

    let ts_text

    switch(key_sum){
        case 'CherryRedNOT':
            ts_text = '타건 사운드는 Cherry 적축(RED) 비윤활입니다. \n\n'+
            '사용된 키보드 : 레오폴드750R \n'+
            '스위치 타입 : 리니어 (Linear) \n'+
            '키압 : 45G \n'+
            '사운드 제공 : TEST';
            
            Key_Text(ts_text)
            break;
        case 'CherryBlueNOT':
            ts_text = '타건 사운드는 Cherry 청축(BLUE) 비윤활입니다. \n\n'+
            '사용된 키보드 : 레오폴드750R \n'+
            '스위치 타입 : 클릭 (Click) \n'+
            '키압 : 50G \n'+
            '사운드 제공 : ';
                
            Key_Text(ts_text)
            break;
    }
}

function Key_Text(ts_text){
    
    document.getElementById("textvalue").value = ts_text
    
    let test_text = Hangul.disassemble(ts_text);          
    let arr_text = [];
    let num = 0;
        window.onkeypress = function(){
            if(num < test_text.length){ 
                arr_text = arr_text.concat(test_text[num]);
                let text_assem = Hangul.assemble(arr_text);
                document.getElementById("textvalue").value = text_assem;
                num++;
                }
            }
}