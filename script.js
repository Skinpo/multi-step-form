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

let coolGray = "hsl(231, 11%, 63%)";
let marineBlue = "hsl(213, 96%, 18%)"


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
    // selectPlans[0].classList.add("active");
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
    selectPlans[0].classList.add("active");
    month.style.color = "hsl(213, 96%, 18%)";
    arcadeMonth();
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
    stepTwo();
    selectPlans[0].classList.add("active");
    arcadeMonth();
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

// toggle button functionality
const slider = document.querySelector(".slider");
const description = document.querySelectorAll(".desc");


// monthly price plans
const arcadeMonthlyPrice = document.createElement("h4");
arcadeMonthlyPrice.setAttribute("class", "h4");
arcadeMonthlyPrice.innerHTML = `
    <h4 class="month">$9/mo</h4>
`

const advancedMonthlyPrice = document.createElement("h4");
advancedMonthlyPrice.setAttribute("class", "h4");
advancedMonthlyPrice.innerHTML = `
    <h4 class="month">$12/mo</h4>
`

const proMonthlyPrice = document.createElement("h4");
proMonthlyPrice.setAttribute("class", "h4");
proMonthlyPrice.innerHTML = `
    <h4 class="month">$15/mo</h4>
`

// yearly price plans
// const freeTime = document.createElement("p");
// freeTime.setAttribute("class", "p");
// freeTime.innerHTML = `
//     <p class="year">2 months free</p>
// `

const arcadeYearlyPrice = document.createElement("div");
arcadeYearlyPrice.setAttribute("class", "year");
arcadeYearlyPrice.innerHTML = `
    <div class="year">
        <h4>$90/yr</h4>
        <p>2 months free</p>
    </div>
`

const advancedYearlyPrice = document.createElement("div");
advancedYearlyPrice.setAttribute("class", "year");
advancedYearlyPrice.innerHTML = `
    <div class="year">
        <h4>$120/yr</h4>
        <p>2 months free</p>
    </div>
`

const proYearlyPrice = document.createElement("div");
proYearlyPrice.setAttribute("class", "year");
proYearlyPrice.innerHTML = `
    <div class="year">
        <h4>$150/yr</h4>
        <p>2 months free</p>
    </div>
`

// arcadeYearlyPrice.appendChild(freeTime);

arcadeYear = () => {
        console.log("yes");
        year.style.color = marineBlue;
        month.style.color = coolGray;
        description[0].appendChild(arcadeYearlyPrice);
        description[1].appendChild(advancedYearlyPrice);
        description[2].appendChild(proYearlyPrice);
        description[0].removeChild(arcadeMonthlyPrice);
        description[1].removeChild(advancedMonthlyPrice);
        description[2].removeChild(proMonthlyPrice);
}

arcadeMonth = () => {
        console.log("no");
        month.style.color = marineBlue;
        year.style.color = coolGray;
        description[0].appendChild(arcadeMonthlyPrice);
        description[1].appendChild(advancedMonthlyPrice);
        description[2].appendChild(proMonthlyPrice);
}



slider.addEventListener("click", () => {
    slider.classList.toggle("lass");
    // let coolGray = "hsl(231, 11%, 63%)";
    // let marineBlue = "hsl(213, 96%, 18%)"

    if (slider.classList.contains("lass")) {
        arcadeYear();
        
    } else {
        arcadeMonth();
        description[0].removeChild(arcadeYearlyPrice);
        description[1].removeChild(advancedYearlyPrice);
        description[2].removeChild(proYearlyPrice);
        
        // description[1].appendChild(advancedMonthlyPrice);
        // description[2].appendChild(proMonthlyPrice);
        
    }
})

// plans next step and go back buttons functionality

back[0].addEventListener("click", () => {
    stepOne();
})

next[1].addEventListener("click", () => {
    stepThree();
})




// add-ons

back[1].addEventListener("click", () => {
    btns[0].classList.remove("btn_active");
    btns[1].classList.add("btn_active");
    btns[2].classList.remove("btn_active");
    btns[3].classList.remove("btn_active");
    info.style.display = "none";
    add_ons.style.display = "none";
    plans.style.display = "block";
    finish.style.display = "none";
})

next[2].addEventListener("click", () => {
    stepFour();
})

// Finishing up

back[2].addEventListener("click", () => {
    stepThree();
})

