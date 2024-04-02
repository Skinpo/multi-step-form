const btns = document.querySelectorAll(".btn");
const info = document.querySelector(".personal_info");
const plans = document.querySelector(".select_plan");
const add_ons = document.querySelector(".add_ons");
const finish =document.querySelector(".finishing_up");
const thanks = document.querySelector(".thanks");
const next_1 = document.querySelector(".next_1");

// Saved items
 // const phoneNumberRegex = /^\+\d{3} \d{4} \d{3} \d{3}$/;



// function execution when page loads
function setUpInfo() {
    btns[0].classList.add("btn_active");  
}

// infoComplete = () => {
//     function validateEmail() {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const email = document.getElementById("email");
//         const err_email = document.querySelector(".err_email");

//         if (emailRegex.test(email)) {
//             err_email.innerHTML = "";
//         } else {
//             err_email.innerHTML = "wrong email format";
//         }
//     }

//     validateEmail()
// }

next_1.addEventListener("click", (e) => {
    e.preventDefault();
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$/;
    const email = document.getElementById("email");
    const err_email = document.querySelector(".err_email");
    // const err_msgs = document.querySelectorAll(".err_msg");


    //     if (emailRegex.test(email)) {
    //         // err_email.innerHTML = "";
    //         alert("right")
    //     } else {
    //         // err_email.innerHTML = "wrong email format";
    //         alert("wrong")
    //     }
    // err_email.style.visibility = "visible";

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    console.log(isValidEmail("user@example.com"));


    

})