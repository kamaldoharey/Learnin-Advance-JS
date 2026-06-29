const mybutton = document.getElementById("submitButton");
// console.log(mybutton);

mybutton.addEventListener("click", function () {
    myfunction1()
        .then((sucess) => alert(sucess))
        .catch((fail) => alert(fail))

});

function myfunction1() {
    return new Promise((resolve, reject) => {
        let enterValue = document.getElementById("enterValue1").value;
        let result = enterValue % 2 == 0 ? resolve("Value is even") : reject("Value is odd");
    })
};

