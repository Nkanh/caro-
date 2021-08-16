var inpbox ="O";
function on(box){
    if (box.innerText != "") return;
    box.innerText = inpbox;
    if (inpbox=="O"){
        inpbox="X";
    } else {
        inpbox="O";
    }
}
