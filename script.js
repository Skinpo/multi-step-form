const btns = document.querySelectorAll(".btn");
const info = document.querySelector(".personal_info");
const plans = document.querySelector(".select_plan");
const add_ons = document.querySelector(".add_ons");
const finish =document.querySelector(".finishing_up");
const thanks = document.querySelector(".thanks");
const next_1 = document.querySelector(".next_1");
const email = document.querySelector(".email");
const err_mail = document.querySelector(".err_email");
const num = document.querySelector(".num");
const err_num = document.querySelector(".err_num");
const fullName = document.querySelector(".name");
const err_name = document.querySelector(".err_name");


// function execution when page loads
function setUpInfo() {
    btns[0].classList.add("btn_active");  
}

// functions for when user is filling input fields
fullName.addEventListener("keyup", () => {
    fullName.style.border = "1px solid hsl(243, 100%, 62%)";
    err_name.textContent = "";
})

email.addEventListener("keyup", () => {
    email.style.border = "1px solid hsl(243, 100%, 62%)";
    err_mail.textContent = "";
})

num.addEventListener("keyup", () => {
    num.style.border = "1px solid hsl(243, 100%, 62%)";
    err_num.textContent = "";  
})

// input field validation
nameIsValid = () => {
    if (fullName.value === "" || fullName.value === null) {
        fullName.style.border = "1px solid hsl(354, 84%, 57%)";
        err_name.style.visibility = "visible";
        err_name.textContent = "This field is required";
    }else if (fullName.value.match(/^[A-Za-z\s]*$/)) {
        fullName.style.border = "2px solid hsl(229, 24%, 87%)";
    }else {
        err_name.style.visibility = "visible";
        fullName.style.border = "1px solid hsl(354, 84%, 57%)"
        err_name.textContent = "Invalid name"; 
    }
}

emailIsValid = () => {
    if (email.value === "" || email.value === null) {
        email.style.border = "1px solid hsl(354, 84%, 57%)";
        err_mail.style.visibility = "visible";
        err_mail.textContent = "This field is required";
    }else if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        email.style.border = "2px solid hsl(229, 24%, 87%)";
    }else {
        err_mail.style.visibility = "visible";
        email.style.border = "1px solid hsl(354, 84%, 57%)"
        err_mail.textContent = "Invalid email"; 
    }
}

numIsValid = () => {
    if (num.value === "" || num.value === null) {
        num.style.border = "1px solid hsl(354, 84%, 57%)";
        err_num.style.visibility = "visible";
        err_num.textContent = "This field is required";
    }else if (num.value.match(/^[0-9]{11}$/)) {
        num.style.border = "2px solid hsl(229, 24%, 87%)";
    }else {
        err_num.style.visibility = "visible";
        num.style.border = "1px solid hsl(354, 84%, 57%)"
        err_num.textContent = "Invalid number"; 
    }
}

allInputIsValid = () => {
    if (fullName.value.match(/^[A-Za-z\s]*$/) &&
        email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
        num.value.match(/^[0-9]{11}$/)) {
        btns[0].classList.remove("btn_active");
        btns[1].classList.add("btn_active");
        info.style.display = "none";
        plans.style.display = "block";
        selectPlans[0].classList.add("active");
    }
}


// function that takes user from info to plan
next_1.addEventListener("click", (e) => {
    e.preventDefault();
    nameIsValid();
    emailIsValid();
    numIsValid();
    allInputIsValid();
})

// plans
const selectPlans = document.querySelectorAll(".plan");

btns[1].addEventListener("click", () => {
    btns[0].classList.remove("btn_active");
    btns[1].classList.add("btn_active");
    info.style.display = "none";
    plans.style.display = "block";
    selectPlans[0].classList.add("active");
})

for (let i = 0; i < selectPlans.length; i++) {
    selectPlans[i].addEventListener("click", () => {
        if (selectPlans[i] === selectPlans[0]) {
            selectPlans[0].classList.add("active");
            selectPlans[1].classList.remove("active");
            selectPlans[2].classList.remove("active");
        }else if(selectPlans[i] === selectPlans[1]) {
            selectPlans[0].classList.remove("active");
            selectPlans[1].classList.add("active");
            selectPlans[2].classList.remove("active");
        }else if(selectPlans[i] === selectPlans[2]) {
            selectPlans[0].classList.remove("active");
            selectPlans[1].classList.remove("active");
            selectPlans[2].classList.add("active");
        }
    })
}









