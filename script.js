const btns = document.querySelectorAll(".btn");
const info = document.querySelector(".personal_info");
const plans = document.querySelector(".select_plan");
const selectPlans = document.querySelectorAll(".plan");
const finish =document.querySelector(".finishing_up");
const add_ons = document.querySelector(".add_ons");
const thanks = document.querySelector(".thanks");
const next = document.querySelectorAll(".next");
const back = document.querySelectorAll(".back");
const email = document.querySelector(".email");
const err_mail = document.querySelector(".err_email");
const num = document.querySelector(".num");
const err_num = document.querySelector(".err_num");
const fullName = document.querySelector(".name");
const err_name = document.querySelector(".err_name");
const checkBox = document.querySelectorAll(".checkbox");
const month = document.querySelector(".mo");
const year = document.querySelector(".ye");


// function execution when page loads
function setUpInfo() {
    btns[0].classList.add("btn_active");  
}

// console.log(checkBox[2].nextElementSibling.nextElementSibling.innerHTML);

// step buttons
stepOne = () => {
    btns[0].classList.add("btn_active");
    btns[1].classList.remove("btn_active");
    btns[2].classList.remove("btn_active");
    btns[3].classList.remove("btn_active");
    info.style.display = "block";
    add_ons.style.display = "none";
    plans.style.display = "none";
    finish.style.display = "none";
}

stepTwo = () => {
    btns[0].classList.remove("btn_active");
    btns[1].classList.add("btn_active");
    btns[2].classList.remove("btn_active");
    btns[3].classList.remove("btn_active");
    info.style.display = "none";
    add_ons.style.display = "none";
    plans.style.display = "block";
    finish.style.display = "none";
    selectPlans[0].classList.add("active");
}

stepThree = () => {
    btns[0].classList.remove("btn_active");
    btns[1].classList.remove("btn_active");
    btns[3].classList.remove("btn_active");
    btns[2].classList.add("btn_active");
    info.style.display = "none";
    add_ons.style.display = "block";
    plans.style.display = "none";
    finish.style.display = "none";
}

stepFour = () => {
    btns[0].classList.remove("btn_active");
    btns[1].classList.remove("btn_active");
    btns[2].classList.remove("btn_active");
    btns[3].classList.add("btn_active");
    info.style.display = "none";
    add_ons.style.display = "none";
    plans.style.display = "none";
    finish.style.display = "block";
}

btns[0].addEventListener("click", () => {
    stepOne();
})

btns[1].addEventListener("click", () => {
    stepTwo();
})

btns[2].addEventListener("click", () => {
    stepThree();
})

btns[3].addEventListener("click", () => {
    stepFour();
})

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
        month.style.color = "hsl(213, 96%, 18%)";
    }
}


// function that takes user from info to plan
next[0].addEventListener("click", (e) => {
    e.preventDefault();
    nameIsValid();
    emailIsValid();
    numIsValid();
    allInputIsValid();
})

// plans
// choosing plans
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

// plans next step and go back buttons functionality

back[0].addEventListener("click", () => {
    stepOne();
})

next[1].addEventListener("click", () => {
    stepThree();
})

// toggle button functionality
const slider = document.querySelector(".slider");
const yearlyValues = document.querySelectorAll(".year");
const monthlyValues = document.querySelectorAll(".month");
const yearly = document.getElementById("yearly");
const months = document.getElementById("month");
console.log(monthlyValues);

let currency = "$";
let monthlyTimeFrame = "/mo";
let yearlyTimeFrame = "/yr";
let firstmonthlyAmount = 9;
let secondmonthlyAmount = 12;
let thirdmonthlyAmount = 15;
let firstyearlyAmount = 90;
let secondyearlyAmount = 120;
let thirdyearlyAmount = 150;

yearlyValue = () => {
    yearly.style.display = "block";
    months.style.display = "none";
    yearlyValues[0].innerHTML = currency + firstyearlyAmount + yearlyTimeFrame;
    yearlyValues[1].innerHTML = currency + secondyearlyAmount + yearlyTimeFrame;
    yearlyValues[2].innerHTML = currency + thirdyearlyAmount + yearlyTimeFrame;
    
};

monthlyValue = () => {
    months.style.display = "block";
    yearly.style.display = "none";
    monthlyValues[0].innerHTML = currency + firstmonthlyAmount + monthlyTimeFrame;
    monthlyValues[1].innerHTML = currency + secondmonthlyAmount + monthlyTimeFrame;
    monthlyValues[2].innerHTML = currency + thirdmonthlyAmount + monthlyTimeFrame;
};

slider.addEventListener("click", () => {
    slider.classList.toggle("lass");

    if (slider.classList.contains("lass")) {
        console.log("yes");
        year.style.color = "hsl(213, 96%, 18%)";
        month.style.color = "hsl(231, 11%, 63%)";
        yearlyValue();
        // monthlyValue();
    } else {
        console.log("no");
        month.style.color = "hsl(213, 96%, 18%)";
        year.style.color = "hsl(231, 11%, 63%)";
        // monthlyValue();
    }
})


// add-ons

back[1].addEventListener("click", () => {
    stepTwo();
})

next[2].addEventListener("click", () => {
    stepFour();
})

// Finishing up

back[2].addEventListener("click", () => {
    stepThree();
})

