function updateDoor(div, text, color) {
    div.innerHTML = text;
    div.style.backgroundColor = color;
    div.classList.add('opened');
}

function door1(div) {
    updateDoor(div, 'Weihnachten ist die Zeit, in der das Herz leise spricht.', 'rgb(102, 138, 83)');
}

function door2(div) {
    updateDoor(div, 'Stille ist nicht leer – sie ist voller Antworten.', 'rgb(200, 16, 46)');
}

function door3(div) {
    updateDoor(div, 'Wahre Geschenke sind nicht verpackt, sondern gefühlt.', 'rgb(0, 100, 0)');
}

function door4(div) {
    updateDoor(div, 'Ein warmes Wort ist oft wertvoller als das größte Geschenk.', 'rgb(255, 215, 0)');
}

function door5(div) {
    updateDoor(div, 'Lass nicht zu, dass die Hektik dir den Zauber raubt.', 'rgb(192, 192, 192)');
}

function door6(div) {
    updateDoor(div, 'Ein achtsames Herz erkennt das Wunder im Kleinen.', 'rgb(255, 250, 250)');
}

function door7(div) {
    updateDoor(div, 'Zeit ist das schönste Geschenk, das wir einander machen können.', 'rgb(220, 20, 60)');
}

function door8(div) {
    updateDoor(div, 'Im Kerzenschein wird selbst der Alltag still und weich.', 'rgb(34, 139, 34)');
}

function door9(div) {
    updateDoor(div, 'Verbringe Weihnachten nicht nur im Außen, sondern auch bei dir selbst.', 'rgb(255, 0, 0)');
}

function door10(div) {
    updateDoor(div, 'Manchmal braucht es nur ein Lächeln, um ein Herz zu berühren.', 'rgb(0, 128, 0)');
}

function door11(div) {
    updateDoor(div, 'Stille Nächte bringen oft die klarsten Gedanken.', 'rgb(139, 0, 0)');
}

function door12(div) {
    updateDoor(div, 'Dankbarkeit ist der wahre Glanz der Festtage.', 'rgb(0, 255, 127)');
}

function door13(div) {
    updateDoor(div, 'Nicht das, was unter dem Baum liegt, zählt – sondern wer darum sitzt.', 'rgb(255, 228, 181)');
}

function door14(div) {
    updateDoor(div, 'Achtsamkeit ist, Weihnachten mit offenen Augen und offenem Herzen zu erleben.', 'rgb(245, 245, 220)');
}

function door15(div) {
    updateDoor(div, 'Jede Schneeflocke ist ein Gruß der Stille.', 'rgb(255, 69, 0)');
}

function door16(div) {
    updateDoor(div, 'Liebe braucht keinen Anlass – aber Weihnachten erinnert uns daran.', 'rgb(138, 43, 226)');
}

function door17(div) {
    updateDoor(div, 'Lass dein Herz genauso hell leuchten wie die Lichterketten.', 'rgb(255, 99, 71)');
}

function door18(div) {
    updateDoor(div, 'Weihnachten beginnt dort, wo wir anderen Frieden schenken.', 'rgb(72, 61, 139)');
}

function door19(div) {
    updateDoor(div, 'Der Duft von Zimt und Geborgenheit liegt in der Luft.', 'rgb(255, 255, 224)');
}

function door20(div) {
    updateDoor(div, 'In der Ruhe des Winters findet die Seele Raum.', 'rgb(178, 34, 34)');
}

function door21(div) {
    updateDoor(div, 'Ein friedlicher Moment zählt mehr als tausend Worte.', 'rgb(0, 206, 209)');
}

function door22(div) {
    updateDoor(div, 'Auch der kleinste Lichtschein vertreibt Dunkelheit.', 'rgb(255, 182, 193)');
}

function door23(div) {
    updateDoor(div, 'Sei in dieser Zeit nicht perfekt – sondern präsent.', 'rgb(107, 142, 35)');
}

function door24(div) {
    updateDoor(div, 'Weihnachten ist die Einladung, wieder Mensch zu sein – mit Herz.', 'rgb(255, 248, 220)');
}

// Prevent double-tap zoom on mobile
document.addEventListener('touchend', function(event) {
    if (event.target.classList.contains('door')) {
        event.preventDefault();
    }
}, false);