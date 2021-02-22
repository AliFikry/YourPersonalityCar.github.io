var form = document.querySelector(".messageForm");
document.querySelector(".submitFormBtn").addEventListener("click", (e) => {
    e.preventDefault()
    var name = document.querySelector(".formName").value;
    var email = document.querySelector(".formEmail").value;
    var message = document.querySelector(".formComment").value;
    SendMail(name, email, message);
    form.reset();
})

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