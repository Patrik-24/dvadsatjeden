let birthday = document.getElementById("myDate");
let myDate = moment().format("YYYY-MM-DD");
let cas = document.getElementById("casCoChyba");
console.log(myDate);


function pocitadlo() {

    let hodnota =  birthday.value

    let datumNarodiek = moment(hodnota, "YYYY-MM-DD")
    /* DNESOK */
    let dnes = moment().startOf("day");
    let days = datumNarodiek.diff(dnes, "days");
    cas.innerText = days +  " DAY/S";
    console.log(days)
    let obr = document.querySelector(".changePhoto");
    let mesiac = datumNarodiek.format('MMMM');
    let month = document.querySelector(".nameMonth"); 
    if (mesiac === "January") {
        console.log("ZIMA-January");
    } else if (mesiac === "February") {
        console.log("ZIMA-February");
        obr.src = "february.jpg";
        month.innerHTML = "February";
    } else if (mesiac === "March") {
        console.log("JAR-March");
        obr.src = "march.jpg";
        month.innerHTML = "March";
    } else if (mesiac === "April") {
        console.log("JAR-April");
        obr.src = "april.jpg";
        month.innerHTML = "April";
    } else if (mesiac === "May") {
        console.log("JAR-May");
        obr.src = "may.jpg";
        month.innerHTML = "May";
    } else if (mesiac === "June") {
        console.log("LETO-June");
        obr.src = "june.jpg";
        month.innerHTML = "June";
    } else if (mesiac === "July") {
        console.log("LETO-July");
        obr.src = "jule.jpg";
        month.innerHTML = "July";
    } else if (mesiac === "August") {
        console.log("LETO-August");
        obr.src = "august.jpg";
        month.innerHTML = "August";
    } else if (mesiac === "September") {
        console.log("JESEN-September");
        obr.src = "september.jpg";
        month.innerHTML = "September";
    } else if (mesiac === "October") {
        console.log("JESEN-October");
        obr.src = "october.jpg";
        month.innerHTML = "October";
    } else if (mesiac === "November") {
        console.log("JESEN-November");
        obr.src = "november.jpg";
        month.innerHTML = "November";
    } else if (mesiac === "December") {
        console.log("ZIMA-December");
        obr.src = "december.jpg";
        month.innerHTML = "December";
    }
};
pocitadlo()

