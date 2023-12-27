// alert(document.getElementsByClassName("btn").length)
document.getElementsByClassName("btn")[0].style.color = "cyan";
document.getElementsByClassName("btn")[1].style.color = "red";

let b = document.getElementsByClassName("btn");
let op;
let ans = "";

for (let i = 0; i < b.length; i++) {
    b[i].onclick = function () { click(b[i].value) };
}

function click(val) {
    switch (val) {
        case "0": addToTextbox(val);
            break;
        case "1": addToTextbox(val);
            break;
        case "2": addToTextbox(val);
            break;
        case "3": addToTextbox(val);
            break;
        case "4": addToTextbox(val);
            break;
        case "5": addToTextbox(val);
            break;
        case "6": addToTextbox(val);
            break;
        case "7": addToTextbox(val);
            break;
        case "8": addToTextbox(val);
            break;
        case "9": addToTextbox(val);
            break;
        case "+": addToTextbox(val);
            break;
        case "-": addToTextbox(val);
            break;
        case "*": addToTextbox(val);
            break;
        case "/": addToTextbox(val);
            break;
        case ".": addToTextbox(val);
            break;
        case "=":
            if (document.getElementById("textbox").value != "")
                equal();
            break;
        case "ac":
            document.getElementById("txtbx_jnr").value = "";
            document.getElementById("textbox").value = "";
            break;
        case "del": delFromTextbox();
            break;
        default:
            alert("Invalid Input");
    }
}

function addToTextbox(val) {
    let t=document.getElementById("textbox").value;
    // console.log(t!="");
    // console.log(val!="+");
    if(t!=""){
        let str=document.getElementById("textbox").value+val;
        let c=str.charAt(str.length-1);


        if(c=="+" || c=="-" || c=="*" || c=="/" || c=="."){
            if(str.charAt(str.length-2)!="+" && str.charAt(str.length-2)!="-" && str.charAt(str.length-2)!="*" && str.charAt(str.length-2)!="/" && str.charAt(str.length-2)!="."){
                console.log(c!=str.charAt(str.length-2));
                document.getElementById("textbox").value = document.getElementById("textbox").value + val;
            }
        }
        else
            document.getElementById("textbox").value = document.getElementById("textbox").value + val;
    }
    else{
        if(val!="+" && val!="-" && val!="*" && val!="/" && val!="."){
            document.getElementById("textbox").value = document.getElementById("textbox").value + val;
        }
    }
}

function delFromTextbox() {
    let temp2 = "", temp1 = document.getElementById("textbox").value;
    for (let i = 0; i < temp1.length - 1; i++) {
        temp2 = temp2 + temp1[i];
    }
    document.getElementById("textbox").value = temp2;
}


function addValue() {

    let tb = document.getElementById("textbox").value;
    let ind = tb.indexOf("+");
    let num1, num2;
    if (tb.substr(0, ind).includes(".")) {
        num1 = Number.parseFloat(tb.substr(0, ind));
    }
    else {
        num1 = Number.parseInt(tb.substr(0, ind));
    }
    if (tb.substr(ind + 1).includes(".")) {
        num2 = Number.parseFloat(tb.substr(ind + 1));
    }
    else {
        num2 = Number.parseInt(tb.substr(ind + 1));
    }
    ans = num1 + num2;
    document.getElementById("txtbx_jnr").value = num1 + "+" + num2;
    console.log(num1 + "+" + num2 + "=" + ans);
}

function subValue() {
    let tb = document.getElementById("textbox").value;
    let ind = tb.indexOf("-");
    let num1, num2;
    if (tb.substr(0, ind).includes(".")) {
        num1 = Number.parseFloat(tb.substr(0, ind));
    }
    else {
        num1 = Number.parseInt(tb.substr(0, ind));
    }
    console.log(num1);
    // console.log(num1);
    if (tb.substr(ind + 1).includes(".")) {
        num2 = Number.parseFloat(tb.substr(ind + 1));
    }
    else {
        num2 = Number.parseInt(tb.substr(ind + 1));
    }
    ans = num1 - num2;
    document.getElementById("txtbx_jnr").value = num1 + "-" + num2;
    console.log(num1 + "+" + num2 + "=" + ans);
}

function mulValue() {
    let tb = document.getElementById("textbox").value;
    let ind = tb.indexOf("*");
    let num1, num2;
    if (tb.substr(0, ind).includes(".")) {
        num1 = Number.parseFloat(tb.substr(0, ind));
    }
    else {
        num1 = Number.parseInt(tb.substr(0, ind));
    }
    console.log(num1);
    // console.log(num1);
    if (tb.substr(ind + 1).includes(".")) {
        num2 = Number.parseFloat(tb.substr(ind + 1));
    }
    else {
        num2 = Number.parseInt(tb.substr(ind + 1));
    }
    ans = num1 * num2;
    document.getElementById("txtbx_jnr").value = num1 + "*" + num2;
    console.log(num1 + "+" + num2 + "=" + ans);
}

function divValue() {
    let tb = document.getElementById("textbox").value;
    let ind = tb.indexOf("/");
    let num1, num2;
    if (tb.substr(0, ind).includes(".")) {
        num1 = Number.parseFloat(tb.substr(0, ind));
    }
    else {
        num1 = Number.parseInt(tb.substr(0, ind));
    }
    if (tb.substr(ind + 1).includes(".")) {
        num2 = Number.parseFloat(tb.substr(ind + 1));
    }
    else {
        num2 = Number.parseInt(tb.substr(ind + 1));
    }
    ans = num1 / num2;
    document.getElementById("txtbx_jnr").value = num1 + "/" + num2;
    console.log(num1 + "+" + num2 + "=" + ans);
}

function equal() {
    op = false;
    let str = document.getElementById("textbox").value;

    if (str.includes("+")) {
        addValue();
    }
    else if (str.includes("-")) {
        subValue();
    }
    else if (str.includes("*")) {
        mulValue();
    }
    else if (str.includes("/")) {
        divValue();
    }
    document.getElementById("textbox").value = ans;
}