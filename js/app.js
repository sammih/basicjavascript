/************************************************************
 *******************  Example One  **********************
 ************************************************************/
let sum = function(num1, num2) {
    return num1 + num2;
}

let exampleOne = document.querySelector('.example-one');
exampleOne.innerHTML = sum(8,4);



/************************************************************
 *******************  Example Toggler  **********************
 ************************************************************/
let codeToggler = document.querySelector('.fa-chevron-down');
codeToggler.addEventListener('click', function () {
    let code = document.querySelector(".code");

    if (code.style.display === "block")
    code.style.display = "none";
    else {
        code.style.display = "block";
    }
});