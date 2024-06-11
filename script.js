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
let marineBlue = "hsl(213, 96%, 18%)";

let summaryInfo = [];


// function execution when page loads
function setUpInfo() {
    btns[0].classList.add("btn_active");  
}

// step buttons functionalities
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

// btns[0].addEventListener("click", () => {
//     stepOne();
// })

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
        stepTwo();
        reset();
    }
}


// function that takes user from info to plan
next[0].addEventListener("click", (e) => {
    e.preventDefault();
    nameIsValid();
    emailIsValid();
    numIsValid();
    allInputIsValid();
    addOnMonthlyPrices();
})

// ***************************************************

// plans
// monthly price plans to be dynamically injected
const arcadeMonthlyPrice = document.createElement("div");
arcadeMonthlyPrice.setAttribute("class", "month");
arcadeMonthlyPrice.innerHTML = `
    <h4>$9/mo</h4>
`

const advancedMonthlyPrice = document.createElement("div");
advancedMonthlyPrice.setAttribute("class", "month");
advancedMonthlyPrice.innerHTML = `
    <h4>$12/mo</h4>
`

const proMonthlyPrice = document.createElement("div");
proMonthlyPrice.setAttribute("class", "month");
proMonthlyPrice.innerHTML = `
    <h4>$15/mo</h4>
`

// yearly price plans to be dynamically injected
const arcadeYearlyPrice = document.createElement("div");
arcadeYearlyPrice.setAttribute("class", "year");
arcadeYearlyPrice.innerHTML = `
    <h4>$90/yr</h4>
    <p>2 months free</p>
`

const advancedYearlyPrice = document.createElement("div");
advancedYearlyPrice.setAttribute("class", "year");
advancedYearlyPrice.innerHTML = `
    <h4>$120/yr</h4>
    <p>2 months free</p>
`

const proYearlyPrice = document.createElement("div");
proYearlyPrice.setAttribute("class", "year");
proYearlyPrice.innerHTML = `
    <h4>$150/yr</h4>
    <p>2 months free</p>
`

// function that injects yearly prices for plan choice
arcadeYear = () => {
        year.style.color = marineBlue;
        month.style.color = coolGray;
        description[0].appendChild(arcadeYearlyPrice);
        description[1].appendChild(advancedYearlyPrice);
        description[2].appendChild(proYearlyPrice);
        description[0].removeChild(arcadeMonthlyPrice);
        description[1].removeChild(advancedMonthlyPrice);
        description[2].removeChild(proMonthlyPrice);
}

// function that injects monthly prices for plan choice
arcadeMonth = () => {
        month.style.color = marineBlue;
        year.style.color = coolGray;
        description[0].appendChild(arcadeMonthlyPrice);
        description[1].appendChild(advancedMonthlyPrice);
        description[2].appendChild(proMonthlyPrice);
}

const reset = () => {
    selectPlans[0].classList.add("active");
    selectPlans[1].classList.remove("active");
    selectPlans[2].classList.remove("active");
    arcadeMonth();
    // description[0].removeChild(arcadeYearlyPrice);
    // description[1].removeChild(advancedYearlyPrice);
    // description[2].removeChild(proYearlyPrice);
}

// toggle button functionality
const slider = document.querySelector(".slider");
const description = document.querySelectorAll(".desc");
// const package = document.querySelectorAll(".package");

slider.addEventListener("click", () => {
    slider.classList.toggle("lass");

    if (slider.classList.contains("lass")) {
        arcadeYear();
        // resetAgain();
        addOnYearlyPrices();
        packages[0].removeChild(addOnMonthlyOptionOne);
        packages[1].removeChild(addOnMonthlyOptionTwo);
        packages[2].removeChild(addOnMonthlyOptionThree);
    } else {
        arcadeMonth();
        description[0].removeChild(arcadeYearlyPrice);
        description[1].removeChild(advancedYearlyPrice);
        description[2].removeChild(proYearlyPrice);
        addOnMonthlyPrices();
        packages[0].removeChild(addOnYearlyOptionOne);
        packages[1].removeChild(addOnYearlyOptionTwo);
        packages[2].removeChild(addOnYearlyOptionThree);
    }
})

// choosing plans
for (let i = 0; i < selectPlans.length; i++) {
    let activePlan = selectPlans[i];
    activePlan.addEventListener("click", () => {
        if (selectPlans[i] === selectPlans[0]) {
            selectPlans[0].classList.add("active");
            selectPlans[1].classList.remove("active");
            selectPlans[2].classList.remove("active");
            // console.log(selectPlans[0].children[1].children[1]);
        }else if(selectPlans[i] === selectPlans[1]) {
            selectPlans[0].classList.remove("active");
            selectPlans[1].classList.add("active");
            selectPlans[2].classList.remove("active")
            // console.log(selectPlans[1].children[1].children[0].innerHTML);
        }else if(selectPlans[i] === selectPlans[2]) {
            selectPlans[0].classList.remove("active");
            selectPlans[1].classList.remove("active");
            selectPlans[2].classList.add("active");
        }
    })
}



// dynamically add value of chosen package to summary

// plans next step and go back buttons functionality

back[0].addEventListener("click", () => {
    stepOne();
    
})

next[1].addEventListener("click", () => {
    stepThree();
    // console.log(selectPlans);
   for (let i = 0; i < selectPlans.length; i++) {
    const activeSelect = selectPlans[i];
    if (activeSelect.classList.contains("active")) {
        console.log(activeSelect.children[1].children[0].innerHTML);
        console.log(activeSelect.children[1].children[1].children[0].innerHTML);
    }
    ;
   }

    
})

// *********************************************


// add-ons

const packages = document.querySelectorAll(".packages");
// console.log(packages[0].children[2].textContent);
// console.log(packages[0]);

for (let i = 0; i < packages.length; i++) {
    const element = packages[i];
    // console.log(element);
    element.children[0].addEventListener("click", () => {
        element.classList.toggle("active_2");
        // console.log(element.children[1].children[0].innerHTML);
        // console.log(element.children[2].children[0].innerHTML);
        // console.log(element);
    })
}

// add on prices to be dynamically injected upon slider choice
// yearly prices
const addOnYearlyOptionOne = document.createElement("div");
addOnYearlyOptionOne.setAttribute("class", "yearly");
addOnYearlyOptionOne.innerHTML = `
    <p class="price">+$10/yr</p>
`

const addOnYearlyOptionTwo = document.createElement("div");
addOnYearlyOptionTwo.setAttribute("class", "yearly");
addOnYearlyOptionTwo.innerHTML = `
    <p class="price">+$20/yr</p>
`

const addOnYearlyOptionThree = document.createElement("div");
addOnYearlyOptionThree.setAttribute("class", "yearly");
addOnYearlyOptionThree.innerHTML = `
    <p class="price">+$20/yr</p>
`

// monthly prices 
const addOnMonthlyOptionOne = document.createElement("div");
addOnMonthlyOptionOne.setAttribute("class", "monthly");
addOnMonthlyOptionOne.innerHTML = `
    <p class="price">+$1/mo</p>
`

const addOnMonthlyOptionTwo = document.createElement("div");
addOnMonthlyOptionTwo.setAttribute("class", "monthly");
addOnMonthlyOptionTwo.innerHTML = `
    <p class="price">+$2/mo</p>
`

const addOnMonthlyOptionThree = document.createElement("div");
addOnMonthlyOptionThree.setAttribute("class", "monthly");
addOnMonthlyOptionThree.innerHTML = `
    <p class="price">+$2/mo</p>
`

// function that injects prices in add on depending on what is chosen in slider
addOnMonthlyPrices = () => {
    packages[0].appendChild(addOnMonthlyOptionOne);
    packages[1].appendChild(addOnMonthlyOptionTwo);
    packages[2].appendChild(addOnMonthlyOptionThree);
}

addOnYearlyPrices = () => {
    packages[0].appendChild(addOnYearlyOptionOne);
    packages[1].appendChild(addOnYearlyOptionTwo);
    packages[2].appendChild(addOnYearlyOptionThree);
}

// changing choice
const change = document.querySelector(".change");
change.addEventListener("click", () => {
    stepTwo();
    // empty the array
    for (let i = 0; i < packages.length; i++) {
        const element = packages[i];
        // console.log(element);
        element.children[0].addEventListener("click", () => {
            element.classList.toggle("active_2");
        })
    } 
})


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
    for (let i = 0; i < packages.length; i++) {
        const element = packages[i];
        // console.log(element);
        element.children[0].addEventListener("click", () => {
            element.classList.toggle("active_2");
        })

        if (element.classList.contains("active_2")) {
            console.log(element.children[1].children[0].innerHTML);
            console.log(element.children[2].children[0].innerHTML);
        }
    }    

    stepFour();
    
})

// dynamically add value of chosen input/inputs to summary

// Finishing up

back[2].addEventListener("click", () => {
    stepThree();
})





// ***************************************************

// converting values in plans to usable data type (number)
// console.log(proYearlyPrice.textContent.trim());
// let kiss = proYearlyPrice.textContent.trim();
// kissed = Array.from(kiss);
// const [ one, two, three, four, five, six, ...otherData ] = kissed;
// console.log(kissed);
// console.log(two, three, four);
// let figure = two + three + four;
// let nums = Number(figure);
// console.log(nums);

// let pak1 = packages[0].children[2].textContent;
// pack1 = Array.from(pak1);
// console.log(pack1);
// const[ plus, currency, amount, ...otherData ] = pack1;
// money = Number(amount);
// console.log(money);

// still to do is taking care of default value of the slider