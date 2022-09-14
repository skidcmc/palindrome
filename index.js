 const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let fillterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = fillterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(fillterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});

txtInput.addEventListener("keyup", () => {

    fillterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(fillterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});