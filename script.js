var form = document.querySelector(".messageForm");
var result1 = document.querySelector(".result1");
var result2 = document.querySelector(".result2");
var result3 = document.querySelector(".result3");
var result4 = document.querySelector(".result4");
var result5 = document.querySelector(".result5");
var resultSection = document.querySelector(".resultSection");
// document.getElementById("flexRadioDefault6").checked
var AllResult = {
    [0]: result1,
    [1]: result2,
    [2]: result3,
    [3]: result4,
    [4]: result5
};
let i = Math.floor(Math.random(0, 4) * 5);
// console.log();
// let i = Math.floor(Math.random(0, 4) * 5);
//     if (i <= 5) {
//        generateANumber()
//     }
//     console.log(i);
document.querySelector(".submitFormBtn").addEventListener("click", (e) => {
    e.preventDefault()
    var name = document.querySelector(".formName").value;
    var email = document.querySelector(".formEmail").value;
    var message = document.querySelector(".formComment").value;
    SendMail(name, email, message);
    form.reset();
})
document.querySelector(".submitBtn").addEventListener("click", (e) => {
    checkForAnswers();

    if (i <= 5) {
        generateANumber
    }
    if (Success == true) {
        let Finaldiv = AllResult[i];
        resultSection.style.display = "block"
        AllResult[i].style.display = "block";
    }
});
function generateANumber() {
    let i = Math.floor(Math.random(0, 4) * 5);

}
function SendMail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mohamedyosry701@gmail.com",
        Password: "jozkmutyhftiqvxw",
        To: 'mohamedyosry701@gmail.com ',
        From: email,
        Subject: `${name} sent you a message`,
        Body: `Name: ${name}<br> Email: ${email} <br> Message: ${message}`,
    }).then(
        message => alert(message)
    );
}
let error1 = 0;
let error2 = 0;
let error3 = 0;
let Success = false;
function checkForAnswers() {
    checkForFirstAnswer();
    checkForSecondAnswer();
    checkForThirdAnswer();

}
function checkForFirstAnswer() {
    if (document.getElementById("flexRadioDefault1").checked == true || document.getElementById("flexRadioDefault2").checked == true) {
        Success = true;

    } else {
        document.querySelector(".alert").style.display = "block"
        document.querySelector(".alert").innerHTML = "Please answer all Question"
        error1 = 1;
        // console.log(error1)
    }
}
function checkForSecondAnswer() {

    if (document.getElementById("flexRadioDefault3").checked == true || document.getElementById("flexRadioDefault4").checked == true) {
        Success = true;
    } else {
        document.querySelector(".alert").style.display = "block"
        document.querySelector(".alert").innerHTML = "Please answer all Question"
        error2 = 1;
        // console.log(error2)

    }
}
function checkForThirdAnswer() {
    if (document.getElementById("flexRadioDefault5").checked == true || document.getElementById("flexRadioDefault6").checked == true) {
        Success = true;

    } else {
        document.querySelector(".alert").style.display = "block"
        document.querySelector(".alert").innerHTML = "Please answer all Question"
        error3 = 1;
        // console.log(error3)
    }
}