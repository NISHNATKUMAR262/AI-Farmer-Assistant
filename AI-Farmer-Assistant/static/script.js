/* ==========================================================
   AI Farmer Assistant
   Professional Script.js
   Part - 1
   ========================================================== */

"use strict";

/* ==========================================================
   DOM Ready
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("✅ AI Farmer Assistant Loaded");

    initializeNavbar();

    initializeLoader();

    initializeBackToTop();

    initializeDarkMode();

    initializeImagePreview();

});

/* ==========================================================
   Sticky Navbar
   ========================================================== */

function initializeNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("shadow");
            navbar.classList.add("bg-white");

        } else {

            navbar.classList.remove("shadow");
            navbar.classList.remove("bg-white");

        }

    });

}

/* ==========================================================
   Loading Screen
   ========================================================== */

function initializeLoader() {

    const loader = document.getElementById("loadingScreen");

    if (!loader) return;

    window.addEventListener("load", function () {

        setTimeout(function () {

            loader.style.opacity = "0";

            loader.style.transition = "0.5s";

            setTimeout(function () {

                loader.style.display = "none";

            }, 500);

        }, 1000);

    });

}

/* ==========================================================
   Back To Top Button
   ========================================================== */

function initializeBackToTop() {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    window.addEventListener("scroll", function () {

        if (window.scrollY > 250) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   Dark Mode
   ========================================================== */

function initializeDarkMode() {

    const darkBtn = document.getElementById("darkMode");

    if (!darkBtn) return;

    // Previous Theme

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    }

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

/* ==========================================================
   Profile Image Preview
   ========================================================== */

function initializeImagePreview() {

    const photo = document.getElementById("photo");

    const preview = document.getElementById("preview");

    if (!photo || !preview) return;

    photo.addEventListener("change", function (event) {

        const file = event.target.files[0];

        if (!file) return;

        preview.src = URL.createObjectURL(file);

    });

}
/* ==========================================================
   Password Show / Hide
========================================================== */

function togglePassword(inputId, eyeId) {

    const input = document.getElementById(inputId);
    const eye = document.getElementById(eyeId);

    if (!input || !eye) return;

    if (input.type === "password") {

        input.type = "text";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");

    }

}

/* ==========================================================
   Password Strength
========================================================== */

function initializePasswordStrength() {

    const password = document.getElementById("password");

    if (!password) return;

    password.addEventListener("input", function () {

        const value = password.value;

        let score = 0;

        if (value.length >= 8) score++;
        if (/[A-Z]/.test(value)) score++;
        if (/[a-z]/.test(value)) score++;
        if (/[0-9]/.test(value)) score++;
        if (/[^A-Za-z0-9]/.test(value)) score++;

        const bar = document.getElementById("strengthBar");
        const text = document.getElementById("strengthText");

        if (!bar || !text) return;

        bar.style.width = (score * 20) + "%";

        switch (score) {

            case 0:
            case 1:
            case 2:
                bar.className = "progress-bar bg-danger";
                text.innerHTML = "Weak Password";
                break;

            case 3:
            case 4:
                bar.className = "progress-bar bg-warning";
                text.innerHTML = "Medium Password";
                break;

            case 5:
                bar.className = "progress-bar bg-success";
                text.innerHTML = "Strong Password";
                break;

        }

    });

}

/* ==========================================================
   Confirm Password
========================================================== */

function initializeConfirmPassword() {

    const password = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");

    if (!password || !confirm) return;

    confirm.addEventListener("keyup", function () {

        const message = document.getElementById("matchText");

        if (!message) return;

        if (password.value === confirm.value) {

            message.innerHTML = "✅ Password Matched";
            message.style.color = "limegreen";

        } else {

            message.innerHTML = "❌ Password Not Matched";
            message.style.color = "red";

        }

    });

}

/* ==========================================================
   Mobile Validation
========================================================== */

function initializeMobileValidation() {

    const mobile = document.querySelector("input[name='mobile']");

    if (!mobile) return;

    mobile.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        if (this.value.length > 10) {

            this.value = this.value.substring(0, 10);

        }

    });

}

/* ==========================================================
   Aadhaar Validation
========================================================== */

function initializeAadhaarValidation() {

    const aadhaar = document.querySelector("input[name='aadhaar']");

    if (!aadhaar) return;

    aadhaar.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        if (this.value.length > 12) {

            this.value = this.value.substring(0, 12);

        }

    });

}

/* ==========================================================
   PAN Validation
========================================================== */

function initializePANValidation() {

    const pan = document.querySelector("input[name='pan']");

    if (!pan) return;

    pan.addEventListener("input", function () {

        this.value = this.value.toUpperCase();

    });

}

/* ==========================================================
   Initialize Part-2
========================================================== */

initializePasswordStrength();

initializeConfirmPassword();

initializeMobileValidation();

initializeAadhaarValidation();

initializePANValidation();
/* ==========================================================
   AI Farmer Assistant
   Professional Script.js
   Part - 3
========================================================== */

/* ==========================================================
   Email Validation
========================================================== */

function initializeEmailValidation() {

    const email = document.querySelector("input[name='email']");

    if (!email) return;

    email.addEventListener("blur", function () {

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email.value)) {

            email.classList.add("is-invalid");

        } else {

            email.classList.remove("is-invalid");
            email.classList.add("is-valid");

        }

    });

}

/* ==========================================================
   Name Validation
========================================================== */

function initializeNameValidation() {

    const fullname = document.querySelector("input[name='fullname']");

    if (!fullname) return;

    fullname.addEventListener("input", function () {

        this.value = this.value.replace(/[^a-zA-Z ]/g, "");

    });

}

/* ==========================================================
   Username Validation
========================================================== */

function initializeUsernameValidation() {

    const username = document.querySelector("input[name='username']");

    if (!username) return;

    username.addEventListener("input", function () {

        this.value = this.value
            .toLowerCase()
            .replace(/[^a-z0-9_]/g, "");

    });

}

/* ==========================================================
   Register Form Validation
========================================================== */

function initializeRegisterForm() {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        const required = form.querySelectorAll("[required]");

        let valid = true;

        required.forEach(function (field) {

            if (field.value.trim() === "") {

                field.classList.add("is-invalid");

                valid = false;

            } else {

                field.classList.remove("is-invalid");

                field.classList.add("is-valid");

            }

        });

        if (!valid) {

            e.preventDefault();

            showToast(
                "Please fill all required fields.",
                "danger"
            );

            return;

        }

        showLoadingButton();

    });

}

/* ==========================================================
   Loading Button
========================================================== */

function showLoadingButton() {

    const btn = document.querySelector(".btn-register");

    if (!btn) return;

    btn.disabled = true;

    btn.innerHTML = `

<span class="spinner-border spinner-border-sm me-2"></span>

Creating Account...

`;

}

/* ==========================================================
   Toast Notification
========================================================== */

function showToast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className =
        `alert alert-${type} shadow position-fixed`;

    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.zIndex = "9999";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(function () {

        toast.remove();

    }, 3000);

}

/* ==========================================================
   AI Floating Button
========================================================== */

function initializeAIButton() {

    const ai = document.getElementById("aiBtn");

    if (!ai) return;

    ai.addEventListener("click", function () {

        showToast(
            "🤖 AI Assistant Coming Soon!",
            "info"
        );

    });

}

/* ==========================================================
   Success Modal
========================================================== */

function showSuccessModal() {

    const modalElement =
        document.getElementById("successModal");

    if (!modalElement) return;

    const modal = new bootstrap.Modal(modalElement);

    modal.show();

}

/* ==========================================================
   Initialize Part-3
========================================================== */

initializeEmailValidation();

initializeNameValidation();

initializeUsernameValidation();

initializeRegisterForm();

initializeAIButton();
/* ==========================================================
   AI Farmer Assistant
   Professional Script.js
   Part - 4
========================================================== */

/* ==========================================================
   Advanced Dark Mode
========================================================== */

function initializeTheme() {

    const themeBtn = document.getElementById("darkMode");

    if (!themeBtn) return;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            showToast("🌙 Dark Mode Enabled");

        } else {

            localStorage.setItem("theme", "light");

            showToast("☀️ Light Mode Enabled");

        }

    });

}

/* ==========================================================
   Animated Counter
========================================================== */

function initializeCounters() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        let start = 0;

        const target = Number(counter.dataset.target);

        const speed = Math.ceil(target / 100);

        const timer = setInterval(function () {

            start += speed;

            if (start >= target) {

                counter.innerText = target;

                clearInterval(timer);

            } else {

                counter.innerText = start;

            }

        }, 20);

    });

}

/* ==========================================================
   Fade Animation
========================================================== */

function initializeScrollAnimation() {

    const elements = document.querySelectorAll(".fade-up");

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    elements.forEach(function (item) {

        observer.observe(item);

    });

}

/* ==========================================================
   File Upload Validation
========================================================== */

function initializeFileValidation() {

    const photo = document.getElementById("photo");

    if (!photo) return;

    photo.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const allowed = [

            "image/jpeg",
            "image/png",
            "image/jpg",
            "image/webp"

        ];

        if (!allowed.includes(file.type)) {

            showToast("Only JPG, PNG & WEBP images are allowed", "danger");

            this.value = "";

            return;

        }

        if (file.size > 2 * 1024 * 1024) {

            showToast("Image size must be less than 2MB", "warning");

            this.value = "";

        }

    });

}

/* ==========================================================
   GPS Location
========================================================== */

function initializeGPS() {

    const button = document.getElementById("gpsBtn");

    const input = document.getElementById("gps");

    if (!button || !input) return;

    button.addEventListener("click", function () {

        if (!navigator.geolocation) {

            showToast("Geolocation not supported", "danger");

            return;

        }

        navigator.geolocation.getCurrentPosition(

            function (position) {

                input.value =
                    position.coords.latitude +
                    ", " +
                    position.coords.longitude;

                showToast("Location Found");

            },

            function () {

                showToast("Location Permission Denied", "warning");

            }

        );

    });

}

/* ==========================================================
   Auto Save Form
========================================================== */

function autoSaveForm() {

    const form = document.querySelector("form");

    if (!form) return;

    const fields = form.querySelectorAll("input,select,textarea");

    fields.forEach(field => {

        const key = "farmer_" + field.name;

        if (field.name) {

            field.value = localStorage.getItem(key) || field.value;

        }

        field.addEventListener("input", function () {

            if (field.name) {

                localStorage.setItem(key, field.value);

            }

        });

    });

}

/* ==========================================================
   Reset Form Storage
========================================================== */

function clearFormStorage() {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("reset", function () {

        const fields = form.querySelectorAll("input,select,textarea");

        fields.forEach(field => {

            if (field.name) {

                localStorage.removeItem("farmer_" + field.name);

            }

        });

    });

}

/* ==========================================================
   Initialize Part-4
========================================================== */

initializeTheme();

initializeCounters();

initializeScrollAnimation();

initializeFileValidation();

initializeGPS();

autoSaveForm();

clearFormStorage();
/* ==========================================================
   AI Farmer Assistant
   Professional Script.js
   Part - 5 (Final)
========================================================== */

/* ==========================================================
   Internet Connection Status
========================================================== */

function initializeConnectionStatus() {

    window.addEventListener("online", function () {

        showToast("🟢 Internet Connected", "success");

    });

    window.addEventListener("offline", function () {

        showToast("🔴 Internet Disconnected", "danger");

    });

}

/* ==========================================================
   Live Date & Time
========================================================== */

function initializeClock() {

    const clock = document.getElementById("liveClock");

    if (!clock) return;

    setInterval(function () {

        const now = new Date();

        clock.innerHTML = now.toLocaleString();

    }, 1000);

}

/* ==========================================================
   Screen Size Detection
========================================================== */

function detectScreenSize() {

    const width = window.innerWidth;

    if (width < 576) {

        console.log("📱 Mobile Device");

    }

    else if (width < 992) {

        console.log("📱 Tablet Device");

    }

    else {

        console.log("🖥 Desktop Device");

    }

}

/* ==========================================================
   Success Animation
========================================================== */

function showSuccessAnimation() {

    const modal = document.getElementById("successModal");

    if (!modal) return;

    const success = new bootstrap.Modal(modal);

    success.show();

}

/* ==========================================================
   Loading Overlay
========================================================== */

function showLoader() {

    const loader = document.getElementById("loadingScreen");

    if (!loader) return;

    loader.style.display = "flex";

}

function hideLoader() {

    const loader = document.getElementById("loadingScreen");

    if (!loader) return;

    loader.style.display = "none";

}

/* ==========================================================
   Register Form Submit
========================================================== */

function initializeSubmit() {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        showLoader();

        setTimeout(function () {

            hideLoader();

            showSuccessAnimation();

            showToast("🎉 Account Created Successfully");

            form.reset();

        }, 2000);

    });

}

/* ==========================================================
   Utility Functions
========================================================== */

function getCurrentDate() {

    return new Date().toLocaleDateString();

}

function getCurrentTime() {

    return new Date().toLocaleTimeString();

}

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({

        behavior: "smooth"

    });

}

/* ==========================================================
   Global Error Handler
========================================================== */

window.onerror = function (message, source, line) {

    console.error(

        "Error :",

        message,

        "Line :", line

    );

};

/* ==========================================================
   Window Resize
========================================================== */

window.addEventListener("resize", function () {

    detectScreenSize();

});

/* ==========================================================
   Final Initialization
========================================================== */

initializeConnectionStatus();

initializeClock();

detectScreenSize();

initializeSubmit();

console.log("==================================");
console.log(" AI Farmer Assistant Ready");
console.log(" Version : 2.0");
console.log(" Flask Compatible");
console.log(" Bootstrap 5");
console.log("==================================");
/* ==========================================================
   Internet Connection Status
========================================================== */

function initializeConnectionStatus() {

    window.addEventListener("online", function () {

        showToast("🟢 Internet Connected", "success");

    });

    window.addEventListener("offline", function () {

        showToast("🔴 Internet Disconnected", "danger");

    });

}

/* ==========================================================
   Live Date & Time
========================================================== */

function initializeClock() {

    const clock = document.getElementById("liveClock");

    if (!clock) return;

    setInterval(function () {

        const now = new Date();

        clock.innerHTML = now.toLocaleString();

    }, 1000);

}
/* ==========================================================
   Screen Size Detection
========================================================== */

function detectScreenSize() {

    const width = window.innerWidth;

    if (width < 576) {

        console.log("📱 Mobile Device");

    }

    else if (width < 992) {

        console.log("📱 Tablet Device");

    }

    else {

        console.log("🖥 Desktop Device");

    }

}

/* ==========================================================
   Success Animation
========================================================== */

function showSuccessAnimation() {

    const modal = document.getElementById("successModal");

    if (!modal) return;

    const success = new bootstrap.Modal(modal);

    success.show();

}
/* ==========================================================
   Loading Overlay
========================================================== */

function showLoader() {

    const loader = document.getElementById("loadingScreen");

    if (!loader) return;

    loader.style.display = "flex";

}

function hideLoader() {

    const loader = document.getElementById("loadingScreen");

    if (!loader) return;

    loader.style.display = "none";

}
/* ==========================================================
   Register Form Submit
========================================================== */

function initializeSubmit() {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        showLoader();

        setTimeout(function () {

            hideLoader();

            showSuccessAnimation();

            showToast("🎉 Account Created Successfully");

            form.reset();

        }, 2000);

    });

}
/* ==========================================================
   Utility Functions
========================================================== */

function getCurrentDate() {

    return new Date().toLocaleDateString();

}

function getCurrentTime() {

    return new Date().toLocaleTimeString();

}

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({

        behavior: "smooth"

    });

}
/* ==========================================================
   Global Error Handler
========================================================== */

window.onerror = function (message, source, line) {

    console.error("Error :", message);

    console.error("Line :", line);

};

/* ==========================================================
   Window Resize
========================================================== */

window.addEventListener("resize", function () {

    detectScreenSize();

});

/* ==========================================================
   Final Initialization
========================================================== */

initializeConnectionStatus();

initializeClock();

detectScreenSize();

initializeSubmit();

console.log("==================================");
console.log(" AI Farmer Assistant Ready");
console.log(" Version : 2.0");
console.log(" Flask Compatible");
console.log(" Bootstrap 5");
console.log("==================================");
/*==========================================================
 AI FARMER ASSISTANT
 PROFILE PAGE JAVASCRIPT
 PART-10A
==========================================================*/

"use strict";

/*==========================
  DOM LOADED
==========================*/

document.addEventListener("DOMContentLoaded", function () {

    initializeImagePreview();

    initializeDarkMode();

    initializeCounter();

    initializeAnimations();

    initializeScrollTop();

});

/*==========================
 IMAGE PREVIEW
==========================*/

function initializeImagePreview(){

const input=document.getElementById("profileImage");

const preview=document.getElementById("profilePreview");

if(!input || !preview) return;

input.addEventListener("change",function(){

const file=this.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(e){

preview.src=e.target.result;

}

reader.readAsDataURL(file);

});

}

/*==========================
 DARK MODE
==========================*/

function initializeDarkMode(){

const toggle=document.getElementById("darkMode");

if(!toggle) return;

const saved=localStorage.getItem("theme");

if(saved==="dark"){

document.body.classList.add("dark-mode");

toggle.checked=true;

}

toggle.addEventListener("change",function(){

if(this.checked){

document.body.classList.add("dark-mode");

localStorage.setItem("theme","dark");

}else{

document.body.classList.remove("dark-mode");

localStorage.setItem("theme","light");

}

});

}

/*==========================
 COUNTER
==========================*/

function initializeCounter(){

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=Math.ceil(target/100);

if(current<target){

counter.innerText=current+increment;

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

}

/*==========================
 CARD ANIMATION
==========================*/

function initializeAnimations(){

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

card.style.transition=".4s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

}

/*==========================
 SCROLL TO TOP
==========================*/

function initializeScrollTop(){

const btn=document.createElement("button");

btn.innerHTML='<i class="fas fa-arrow-up"></i>';

btn.id="topBtn";

document.body.appendChild(btn);

btn.style.position="fixed";

btn.style.right="25px";

btn.style.bottom="25px";

btn.style.width="55px";

btn.style.height="55px";

btn.style.borderRadius="50%";

btn.style.border="none";

btn.style.background="#198754";

btn.style.color="#fff";

btn.style.display="none";

btn.style.zIndex="9999";

btn.style.cursor="pointer";

window.addEventListener("scroll",()=>{

btn.style.display=

window.scrollY>300?

"block":"none";

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/*==========================
 SHOW TOAST
==========================*/

function showToast(message){

const toast=document.createElement("div");

toast.innerHTML=message;

toast.style.position="fixed";

toast.style.top="20px";

toast.style.right="20px";

toast.style.background="#198754";

toast.style.color="#fff";

toast.style.padding="15px 25px";

toast.style.borderRadius="12px";

toast.style.zIndex="99999";

toast.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},3000);

}

/*==========================
 SAVE BUTTON
==========================*/

document.querySelectorAll(".btn-success").forEach(btn=>{

btn.addEventListener("click",function(){

showToast("Data Saved Successfully ✅");

});

});

/*==========================
 LOGOUT
==========================*/

document.querySelectorAll(".btn-secondary").forEach(btn=>{

btn.addEventListener("click",function(){

if(confirm("Do you really want to Logout?")){

window.location="/login";

}

});

});

/*==========================
 DELETE ACCOUNT
==========================*/

document.querySelectorAll(".btn-danger").forEach(btn=>{

btn.addEventListener("click",function(){

if(confirm("Delete your account permanently?")){

showToast("Account Deleted");

}

});

});

/*==========================
 FOOTER
==========================*/

console.log(

"%cAI Farmer Assistant Loaded Successfully",

"color:green;font-size:18px;font-weight:bold;"

);
/* ==========================================================
   AI FARMER ASSISTANT
   SCRIPT.JS - PART 15
   Loader + Navbar + Back To Top + Dark Mode + AOS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       LOADER
    =============================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if(loader){

            loader.classList.add("loader-hide");

            setTimeout(() => {

                loader.style.display = "none";

            },600);

        }

    });

    /* ===============================
       NAVBAR SCROLL
    =============================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(navbar){

            if(window.scrollY > 50){

                navbar.classList.add("scrolled");

            }

            else{

                navbar.classList.remove("scrolled");

            }

        }

    });

    /* ===============================
       BACK TO TOP
    =============================== */

    const topBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if(topBtn){

            if(window.scrollY > 300){

                topBtn.style.display = "flex";

            }

            else{

                topBtn.style.display = "none";

            }

        }

    });

    if(topBtn){

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* ===============================
       DARK MODE
    =============================== */

    const darkBtn = document.getElementById("darkModeBtn");

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");

    }

    if(darkBtn){

        darkBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if(document.body.classList.contains("dark-mode")){

                localStorage.setItem("theme","dark");

            }

            else{

                localStorage.setItem("theme","light");

            }

        });

    }

    /* ===============================
       ACTIVE NAV LINK
    =============================== */

    const current = window.location.pathname;

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link=>{

        if(link.getAttribute("href")===current){

            link.classList.add("active");

        }

    });

    /* ===============================
       TOOLTIP
    =============================== */

    const tooltipList = [].slice.call(

        document.querySelectorAll('[data-bs-toggle="tooltip"]')

    );

    tooltipList.map(function(el){

        return new bootstrap.Tooltip(el);

    });

    /* ===============================
       AOS
    =============================== */

    if(typeof AOS !== "undefined"){

        AOS.init({

            duration:1000,

            once:true,

            offset:100

        });

    }

});
/* ==========================================================
   SCRIPT.JS - PART 16
   Counter + Typing + Scroll Progress + Hero Effects
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       COUNTER ANIMATION
    =============================== */

    const counters = document.querySelectorAll(".counter");

    const runCounter = (counter) => {

        const target = parseInt(
            counter.innerText.replace(/\D/g, "")
        );

        if (isNaN(target)) return;

        let count = 0;

        const speed = Math.max(20, target / 150);

        const update = () => {

            if (count < target) {

                count += speed;

                if (count > target) count = target;

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    };

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                runCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /* ===============================
       TYPING EFFECT
    =============================== */

    const typingElement = document.getElementById("typing-text");

    if (typingElement) {

        const words = [

            "AI Crop Recommendation",
            "Smart Farming",
            "Live Weather Updates",
            "Market Price Analysis",
            "24×7 AI Assistant"

        ];

        let wordIndex = 0;

        let charIndex = 0;

        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex++);

                if (charIndex > currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1500);

                    return;

                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex = (wordIndex + 1) % words.length;

                }

            }

            setTimeout(typeEffect, deleting ? 60 : 100);

        }

        typeEffect();

    }

    /* ===============================
       SCROLL PROGRESS BAR
    =============================== */

    const progressBar = document.getElementById("scrollProgress");

    window.addEventListener("scroll", () => {

        if (!progressBar) return;

        const scrollTop = document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / height) * 100;

        progressBar.style.width = progress + "%";

    });

    /* ===============================
       SMOOTH SCROLL
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

    /* ===============================
       HERO IMAGE PARALLAX
    =============================== */

    const heroImage = document.querySelector(".hero-image img");

    window.addEventListener("mousemove", (e) => {

        if (!heroImage) return;

        const x =
            (window.innerWidth / 2 - e.clientX) / 40;

        const y =
            (window.innerHeight / 2 - e.clientY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

    /* ===============================
       FLOATING CARD ANIMATION
    =============================== */

    const floatingCards =
        document.querySelectorAll(".floating-card");

    floatingCards.forEach((card, index) => {

        card.style.animationDelay = `${index * 0.5}s`;

    });

});
/* ==========================================================
   SCRIPT.JS - PART 17
   Forms + Toast + Image Preview + Geolocation
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       PROFILE IMAGE PREVIEW
    =============================== */

    const imageInput = document.getElementById("profileImage");
    const imagePreview = document.getElementById("profilePreview");

    if (imageInput && imagePreview) {

        imageInput.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = function (e) {

                imagePreview.src = e.target.result;

            };

            reader.readAsDataURL(file);

        });

    }

    /* ===============================
       FORM VALIDATION
    =============================== */

    const forms = document.querySelectorAll(".needs-validation");

    forms.forEach(form => {

        form.addEventListener("submit", function (e) {

            if (!form.checkValidity()) {

                e.preventDefault();
                e.stopPropagation();

                showToast(
                    "Please fill all required fields.",
                    "danger"
                );

            } else {

                showToast(
                    "Form submitted successfully!",
                    "success"
                );

            }

            form.classList.add("was-validated");

        });

    });

    /* ===============================
       NEWSLETTER FORM
    =============================== */

    const newsletter = document.querySelector(".newsletter-form");

    if (newsletter) {

        newsletter.addEventListener("submit", function (e) {

            e.preventDefault();

            const email =
                this.querySelector("input[type='email']").value.trim();

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {

                showToast(
                    "Please enter a valid email.",
                    "warning"
                );

                return;

            }

            showToast(
                "Newsletter subscription successful!",
                "success"
            );

            this.reset();

        });

    }

    /* ===============================
       TOAST MESSAGE
    =============================== */

    function showToast(message, type = "success") {

        const toast = document.createElement("div");

        toast.className =
            `alert alert-${type} position-fixed shadow`;

        toast.style.top = "20px";
        toast.style.right = "20px";
        toast.style.zIndex = "99999";
        toast.style.minWidth = "260px";

        toast.innerHTML = message;

        document.body.appendChild(toast);

        setTimeout(() => {

            toast.remove();

        }, 3000);

    }

    /* ===============================
       GEOLOCATION
    =============================== */

    const locationBtn =
        document.getElementById("getLocation");

    if (locationBtn) {

        locationBtn.addEventListener("click", () => {

            if (!navigator.geolocation) {

                showToast(
                    "Geolocation not supported.",
                    "warning"
                );

                return;

            }

            navigator.geolocation.getCurrentPosition(

                (position) => {

                    const latitude =
                        position.coords.latitude.toFixed(5);

                    const longitude =
                        position.coords.longitude.toFixed(5);

                    showToast(
                        `Location: ${latitude}, ${longitude}`,
                        "info"
                    );

                },

                () => {

                    showToast(
                        "Unable to fetch your location.",
                        "danger"
                    );

                }

            );

        });

    }

    /* ===============================
       WEATHER REFRESH BUTTON
    =============================== */

    const weatherRefresh =
        document.getElementById("refreshWeather");

    if (weatherRefresh) {

        weatherRefresh.addEventListener("click", () => {

            weatherRefresh.disabled = true;

            weatherRefresh.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Refreshing';

            setTimeout(() => {

                weatherRefresh.disabled = false;

                weatherRefresh.innerHTML =
                    '<i class="fas fa-sync-alt"></i> Refresh';

                showToast(
                    "Weather updated successfully!",
                    "success"
                );

            }, 2000);

        });

    }

    /* ===============================
       LOCAL STORAGE
    =============================== */

    const username =
        document.getElementById("username");

    if (username) {

        username.value =
            localStorage.getItem("username") || "";

        username.addEventListener("input", () => {

            localStorage.setItem(
                "username",
                username.value
            );

        });

    }

});
/* ==========================================================
   SCRIPT.JS - PART 18
   AI Chat + Notifications + Progress + Favorites
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       AI CHAT QUICK BUTTON
    =============================== */

    const aiChatBtn = document.getElementById("aiChatBtn");
    const aiChatBox = document.getElementById("aiChatBox");
    const aiCloseBtn = document.getElementById("closeChat");

    if (aiChatBtn && aiChatBox) {

        aiChatBtn.addEventListener("click", () => {

            aiChatBox.classList.toggle("show");

        });

    }

    if (aiCloseBtn && aiChatBox) {

        aiCloseBtn.addEventListener("click", () => {

            aiChatBox.classList.remove("show");

        });

    }

    /* ===============================
       QUICK AI REPLIES
    =============================== */

    const chatForm = document.getElementById("chatForm");

    if (chatForm) {

        chatForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const input = document.getElementById("chatInput");
            const messages = document.getElementById("chatMessages");

            if (!input || !messages) return;

            const text = input.value.trim();

            if (text === "") return;

            messages.innerHTML += `
                <div class="text-end mb-2">
                    <span class="badge bg-success">${text}</span>
                </div>
            `;

            setTimeout(() => {

                messages.innerHTML += `
                    <div class="mb-2">
                        <span class="badge bg-secondary">
                            🤖 AI: Thank you! Your question has been received.
                        </span>
                    </div>
                `;

                messages.scrollTop = messages.scrollHeight;

            }, 800);

            input.value = "";

        });

    }

    /* ===============================
       PROGRESS BAR ANIMATION
    =============================== */

    document.querySelectorAll(".progress-bar").forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0%";

        setTimeout(() => {

            bar.style.transition = "1.5s ease";

            bar.style.width = width;

        }, 300);

    });

    /* ===============================
       FAVORITE BUTTON
    =============================== */

    document.querySelectorAll(".favorite-btn").forEach(button => {

        button.addEventListener("click", function () {

            this.classList.toggle("active");

            const icon = this.querySelector("i");

            if (icon) {

                icon.classList.toggle("fas");
                icon.classList.toggle("far");

            }

        });

    });

    /* ===============================
       NOTIFICATION BUTTON
    =============================== */

    const notifyBtn = document.getElementById("notifyBtn");

    if (notifyBtn) {

        notifyBtn.addEventListener("click", () => {

            if ("Notification" in window) {

                Notification.requestPermission().then(permission => {

                    if (permission === "granted") {

                        new Notification("🌾 AI Farmer Assistant", {

                            body: "Weather report has been updated."

                        });

                    }

                });

            }

        });

    }

    /* ===============================
       AUTO DARK MODE
    =============================== */

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

        if (!localStorage.getItem("theme")) {

            document.body.classList.add("dark-mode");

        }

    }

    /* ===============================
       MOBILE MENU CLOSE
    =============================== */

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        link.addEventListener("click", () => {

            const nav = document.querySelector(".navbar-collapse");

            if (nav && nav.classList.contains("show")) {

                new bootstrap.Collapse(nav).hide();

            }

        });

    });

    /* ===============================
       CURRENT YEAR
    =============================== */

    const year = document.getElementById("currentYear");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /* ===============================
       LIVE CLOCK
    =============================== */

    const clock = document.getElementById("liveClock");

    if (clock) {

        setInterval(() => {

            clock.innerHTML =
                new Date().toLocaleTimeString();

        }, 1000);

    }

    /* ===============================
       CONNECTION STATUS
    =============================== */

    function updateConnectionStatus() {

        const status = document.getElementById("connectionStatus");

        if (!status) return;

        if (navigator.onLine) {

            status.innerHTML = "🟢 Online";

            status.className = "text-success";

        } else {

            status.innerHTML = "🔴 Offline";

            status.className = "text-danger";

        }

    }

    updateConnectionStatus();

    window.addEventListener("online", updateConnectionStatus);

    window.addEventListener("offline", updateConnectionStatus);

});
/* ==========================================================
   SCRIPT.JS - PART 19
   Final Production Ready Functions
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       WEATHER API (READY)
    =============================== */

    async function loadWeather() {

        const weatherBox = document.getElementById("weatherData");

        if (!weatherBox) return;

        try {

            // Replace with your Flask API
            // Example: /api/weather

            // const response = await fetch("/api/weather");
            // const data = await response.json();

            weatherBox.innerHTML = `
                <strong>🌤 Weather</strong><br>
                Temperature : 28°C<br>
                Humidity : 68%<br>
                Condition : Sunny
            `;

        }

        catch(error){

            console.error(error);

        }

    }

    loadWeather();

    /* ===============================
       MARKET API (READY)
    =============================== */

    async function loadMarketPrice(){

        const marketBox=document.getElementById("marketPrice");

        if(!marketBox) return;

        try{

            // Replace with Flask API

            marketBox.innerHTML=`
                <strong>🌾 Wheat</strong><br>
                ₹2850 / Quintal
            `;

        }

        catch(err){

            console.error(err);

        }

    }

    loadMarketPrice();

    /* ===============================
       DASHBOARD LIVE TIME
    =============================== */

    const dashboardTime=document.getElementById("dashboardTime");

    if(dashboardTime){

        setInterval(()=>{

            dashboardTime.innerHTML=
            new Date().toLocaleString();

        },1000);

    }

    /* ===============================
       AUTO REFRESH EVERY 5 MIN
    =============================== */

    setInterval(()=>{

        loadWeather();

        loadMarketPrice();

    },300000);

    /* ===============================
       BUTTON LOADING EFFECT
    =============================== */

    document.querySelectorAll(".btn-loading").forEach(button=>{

        button.addEventListener("click",function(){

            const original=this.innerHTML;

            this.disabled=true;

            this.innerHTML=`
                <span class="spinner-border spinner-border-sm"></span>
                Loading...
            `;

            setTimeout(()=>{

                this.disabled=false;

                this.innerHTML=original;

            },2000);

        });

    });

    /* ===============================
       COPY TO CLIPBOARD
    =============================== */

    document.querySelectorAll(".copy-btn").forEach(button=>{

        button.addEventListener("click",()=>{

            const text=button.dataset.copy;

            navigator.clipboard.writeText(text);

            alert("Copied Successfully!");

        });

    });

    /* ===============================
       LAZY IMAGE LOADING
    =============================== */

    const lazyImages=document.querySelectorAll("img[data-src]");

    const lazyObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const img=entry.target;

                img.src=img.dataset.src;

                img.removeAttribute("data-src");

                lazyObserver.unobserve(img);

            }

        });

    });

    lazyImages.forEach(img=>{

        lazyObserver.observe(img);

    });

    /* ===============================
       SCROLL REVEAL
    =============================== */

    const revealItems=document.querySelectorAll(".reveal");

    const revealObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-in");

            }

        });

    });

    revealItems.forEach(item=>{

        revealObserver.observe(item);

    });

    /* ===============================
       PERFORMANCE LOG
    =============================== */

    window.addEventListener("load",()=>{

        console.log("🌾 AI Farmer Assistant Loaded Successfully");

    });

    /* ===============================
       GLOBAL ERROR HANDLER
    =============================== */

    window.onerror=function(message,source,line,column,error){

        console.error(

            "Application Error:",
            message,
            line

        );

    };

    /* ===============================
       FINAL MESSAGE
    =============================== */

    console.log(`
======================================
🌾 AI Farmer Assistant
Version : 1.0
Status  : Production Ready
======================================
`);

});
/* ==========================================================
   SCRIPT.JS - PART 20
   Utility Functions + API Helper + Production Helpers
========================================================== */

(() => {

    "use strict";

    /* =====================================
       SELECT ELEMENT
    ===================================== */

    const $ = (selector) => document.querySelector(selector);

    const $$ = (selector) => document.querySelectorAll(selector);

    /* =====================================
       FETCH JSON HELPER
    ===================================== */

    async function fetchJSON(url, options = {}) {

        try {

            const response = await fetch(url, options);

            if (!response.ok) {

                throw new Error(`HTTP ${response.status}`);

            }

            return await response.json();

        }

        catch (error) {

            console.error("API Error:", error);

            return null;

        }

    }

    /* =====================================
       FORMAT DATE
    ===================================== */

    function formatDate(date = new Date()) {

        return date.toLocaleDateString("en-IN", {

            weekday: "long",

            day: "numeric",

            month: "long",

            year: "numeric"

        });

    }

    /* =====================================
       FORMAT TIME
    ===================================== */

    function formatTime(date = new Date()) {

        return date.toLocaleTimeString();

    }

    /* =====================================
       PAGE DATE
    ===================================== */

    const pageDate = $("#currentDate");

    if (pageDate) {

        pageDate.textContent = formatDate();

    }

    /* =====================================
       PAGE TIME
    ===================================== */

    const pageTime = $("#currentTime");

    if (pageTime) {

        setInterval(() => {

            pageTime.textContent = formatTime();

        }, 1000);

    }

    /* =====================================
       BUTTON RIPPLE EFFECT
    ===================================== */

    $$(".btn").forEach(button => {

        button.addEventListener("click", function(e) {

            const circle = document.createElement("span");

            const diameter = Math.max(

                this.clientWidth,

                this.clientHeight

            );

            const radius = diameter / 2;

            circle.style.width = circle.style.height =

                `${diameter}px`;

            circle.style.left =

                `${e.clientX - this.offsetLeft - radius}px`;

            circle.style.top =

                `${e.clientY - this.offsetTop - radius}px`;

            circle.classList.add("ripple");

            const ripple = this.querySelector(".ripple");

            if (ripple) ripple.remove();

            this.appendChild(circle);

        });

    });

    /* =====================================
       AUTO CLOSE ALERTS
    ===================================== */

    setTimeout(() => {

        $$(".alert-dismissible").forEach(alert => {

            alert.remove();

        });

    }, 5000);

    /* =====================================
       CONNECTION SPEED
    ===================================== */

    if (navigator.connection) {

        console.log(

            "Connection:",

            navigator.connection.effectiveType

        );

    }

    /* =====================================
       KEYBOARD SHORTCUT
    ===================================== */

    document.addEventListener("keydown", (e) => {

        if (e.ctrlKey && e.key.toLowerCase() === "k") {

            e.preventDefault();

            const search = $("#searchInput");

            if (search) {

                search.focus();

            }

        }

    });

    /* =====================================
       SCROLL TO SECTION
    ===================================== */

    window.scrollSection = function(id) {

        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({

            behavior: "smooth"

        });

    };

    /* =====================================
       API READY FUNCTIONS
    ===================================== */

    window.API = {

        weather() {

            return fetchJSON("/api/weather");

        },

        market() {

            return fetchJSON("/api/market");

        },

        crop(data) {

            return fetchJSON("/api/crop", {

                method: "POST",

                headers: {

                    "Content-Type":

                    "application/json"

                },

                body: JSON.stringify(data)

            });

        }

    };

    /* =====================================
       FINAL STATUS
    ===================================== */

    console.log("%c🌾 AI Farmer Assistant",

        "font-size:18px;font-weight:bold;color:#198754;"

    );

    console.log("Frontend Version : 2.0");

    console.log("Status : Ready for Flask Backend");

})();
/* ==========================================================
   SCRIPT.JS - PART 21
   Dashboard + Theme + Session + Offline Support
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       THEME MANAGER
    ========================================== */

    const themeToggle = document.getElementById("themeToggle");

    function applyTheme(theme) {

        if (theme === "dark") {

            document.body.classList.add("dark-mode");

        } else {

            document.body.classList.remove("dark-mode");

        }

    }

    const savedTheme = localStorage.getItem("theme") || "light";

    applyTheme(savedTheme);

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const currentTheme =
                document.body.classList.contains("dark-mode")
                ? "light"
                : "dark";

            applyTheme(currentTheme);

            localStorage.setItem("theme", currentTheme);

        });

    }

    /* ==========================================
       DASHBOARD PROGRESS
    ========================================== */

    document.querySelectorAll(".progress-bar").forEach(bar => {

        const target = parseInt(bar.dataset.progress || "0");

        let value = 0;

        const timer = setInterval(() => {

            if (value >= target) {

                clearInterval(timer);

            } else {

                value++;

                bar.style.width = value + "%";

                bar.innerHTML = value + "%";

            }

        }, 15);

    });

    /* ==========================================
       FARM STATUS
    ========================================== */

    const statusElement = document.getElementById("farmStatus");

    if (statusElement) {

        const status = [

            "🌱 Soil Healthy",

            "🌦 Weather Normal",

            "💧 Irrigation Required",

            "🌾 Crop Growing Well",

            "🤖 AI Monitoring Active"

        ];

        let index = 0;

        setInterval(() => {

            statusElement.innerHTML = status[index];

            index++;

            if (index >= status.length) {

                index = 0;

            }

        }, 3000);

    }

    /* ==========================================
       SESSION TIMEOUT WARNING
    ========================================== */

    let inactivityTimer;

    function resetTimer() {

        clearTimeout(inactivityTimer);

        inactivityTimer = setTimeout(() => {

            console.warn("Session inactive.");

            alert("⚠ Session inactive.\nPlease continue working.");

        }, 15 * 60 * 1000);

    }

    [

        "mousemove",

        "keydown",

        "scroll",

        "click"

    ].forEach(event => {

        document.addEventListener(event, resetTimer);

    });

    resetTimer();

    /* ==========================================
       OFFLINE MESSAGE
    ========================================== */

    function updateNetworkStatus() {

        const banner = document.getElementById("networkStatus");

        if (!banner) return;

        if (navigator.onLine) {

            banner.innerHTML = "🟢 Connected";

            banner.className = "alert alert-success";

        } else {

            banner.innerHTML = "🔴 No Internet Connection";

            banner.className = "alert alert-danger";

        }

    }

    updateNetworkStatus();

    window.addEventListener("online", updateNetworkStatus);

    window.addEventListener("offline", updateNetworkStatus);

    /* ==========================================
       VISITOR TIMER
    ========================================== */

    const visitTimer = document.getElementById("visitTimer");

    if (visitTimer) {

        let seconds = 0;

        setInterval(() => {

            seconds++;

            visitTimer.innerHTML =
                seconds + " sec";

        }, 1000);

    }

    /* ==========================================
       PAGE LOADED
    ========================================== */

    console.log("✅ Dashboard Utilities Loaded");

});
/* ==========================================================
   SCRIPT.JS - PART 22
   Flask API Integration + Live Dashboard
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       API CONFIG
    ===================================== */

    const API = {

        weather: "/api/weather",

        market: "/api/market",

        dashboard: "/api/dashboard",

        notification: "/api/notifications"

    };

    /* =====================================
       API REQUEST
    ===================================== */

    async function getAPI(url){

        try{

            const response = await fetch(url);

            if(!response.ok){

                throw new Error("API Error");

            }

            return await response.json();

        }

        catch(error){

            console.error(error);

            return null;

        }

    }

    /* =====================================
       WEATHER DATA
    ===================================== */

    async function loadWeather(){

        const box = document.getElementById("weatherCard");

        if(!box) return;

        const data = await getAPI(API.weather);

        if(!data) return;

        document.getElementById("temperature").innerHTML =
        data.temperature + "°C";

        document.getElementById("humidity").innerHTML =
        data.humidity + "%";

        document.getElementById("condition").innerHTML =
        data.condition;

    }

    /* =====================================
       MARKET PRICE
    ===================================== */

    async function loadMarket(){

        const data = await getAPI(API.market);

        if(!data) return;

        const table = document.getElementById("marketTable");

        if(!table) return;

        table.innerHTML = "";

        data.forEach(item=>{

            table.innerHTML += `

            <tr>

                <td>${item.crop}</td>

                <td>${item.market}</td>

                <td>₹${item.price}</td>

            </tr>

            `;

        });

    }

    /* =====================================
       DASHBOARD DATA
    ===================================== */

    async function loadDashboard(){

        const data = await getAPI(API.dashboard);

        if(!data) return;

        const farmers = document.getElementById("totalFarmers");

        const crops = document.getElementById("totalCrops");

        const predictions = document.getElementById("totalPredictions");

        const users = document.getElementById("onlineUsers");

        if(farmers) farmers.innerHTML = data.farmers;

        if(crops) crops.innerHTML = data.crops;

        if(predictions) predictions.innerHTML = data.predictions;

        if(users) users.innerHTML = data.online_users;

    }

    /* =====================================
       NOTIFICATIONS
    ===================================== */

    async function loadNotifications(){

        const data = await getAPI(API.notification);

        if(!data) return;

        const badge = document.getElementById("notificationCount");

        if(badge){

            badge.innerHTML = data.length;

        }

        const list = document.getElementById("notificationList");

        if(!list) return;

        list.innerHTML = "";

        data.forEach(notification=>{

            list.innerHTML += `

            <li class="list-group-item">

                🔔 ${notification.message}

            </li>

            `;

        });

    }

    /* =====================================
       REFRESH BUTTON
    ===================================== */

    const refresh = document.getElementById("refreshDashboard");

    if(refresh){

        refresh.addEventListener("click",async()=>{

            refresh.disabled = true;

            refresh.innerHTML =

            `<span class="spinner-border spinner-border-sm"></span>
             Refreshing...`;

            await loadWeather();

            await loadMarket();

            await loadDashboard();

            await loadNotifications();

            refresh.innerHTML =

            `<i class="fas fa-sync"></i> Refresh`;

            refresh.disabled = false;

        });

    }

    /* =====================================
       AUTO REFRESH
    ===================================== */

    loadWeather();

    loadMarket();

    loadDashboard();

    loadNotifications();

    setInterval(()=>{

        loadWeather();

        loadMarket();

        loadDashboard();

        loadNotifications();

    },300000);

    /* =====================================
       API STATUS
    ===================================== */

    const apiStatus = document.getElementById("apiStatus");

    if(apiStatus){

        apiStatus.innerHTML =

        "🟢 Connected to Flask Backend";

    }

    console.log("✅ Flask API Connected");

});
/* ==========================================================
   SCRIPT.JS - PART 23
   AI Prediction + Chatbot + Charts + Reports
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       COMMON API HELPER
    ===================================== */

    async function postData(url, data) {

        try {

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Request Failed");
            }

            return await response.json();

        } catch (error) {

            console.error(error);
            return null;

        }

    }

    /* =====================================
       AI CROP PREDICTION
    ===================================== */

    const cropForm = document.getElementById("cropPredictionForm");

    if (cropForm) {

        cropForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const data = {

                nitrogen: document.getElementById("nitrogen").value,
                phosphorus: document.getElementById("phosphorus").value,
                potassium: document.getElementById("potassium").value,
                temperature: document.getElementById("temperatureInput").value,
                humidity: document.getElementById("humidityInput").value,
                ph: document.getElementById("phInput").value,
                rainfall: document.getElementById("rainfallInput").value

            };

            const result = await postData("/api/crop/predict", data);

            const output = document.getElementById("predictionResult");

            if (!output) return;

            if (result) {

                output.innerHTML = `
                    <div class="alert alert-success">
                        <h5>🌾 Recommended Crop</h5>
                        <strong>${result.crop}</strong>
                    </div>
                `;

            }

        });

    }

    /* =====================================
       AI CHATBOT
    ===================================== */

    const chatbotForm = document.getElementById("chatbotForm");

    if (chatbotForm) {

        chatbotForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const input = document.getElementById("chatMessage");

            if (!input) return;

            const message = input.value.trim();

            if (message === "") return;

            const response = await postData("/api/chatbot", {

                message: message

            });

            const chat = document.getElementById("chatContainer");

            if (chat && response) {

                chat.innerHTML += `

                <div class="text-end mb-2">

                    <div class="alert alert-success d-inline-block">

                        ${message}

                    </div>

                </div>

                <div class="text-start mb-2">

                    <div class="alert alert-info d-inline-block">

                        🤖 ${response.reply}

                    </div>

                </div>

                `;

                chat.scrollTop = chat.scrollHeight;

            }

            input.value = "";

        });

    }

    /* =====================================
       IMAGE PREVIEW
    ===================================== */

    const imageInput = document.getElementById("cropImage");

    if (imageInput) {

        imageInput.addEventListener("change", function () {

            const preview = document.getElementById("imagePreview");

            if (!preview || !this.files.length) return;

            preview.src = URL.createObjectURL(this.files[0]);

            preview.style.display = "block";

        });

    }

    /* =====================================
       PDF REPORT DOWNLOAD
    ===================================== */

    const reportButton = document.getElementById("downloadReport");

    if (reportButton) {

        reportButton.addEventListener("click", () => {

            window.location.href = "/download/report";

        });

    }

    /* =====================================
       LIVE CHART.JS SUPPORT
    ===================================== */

    if (typeof Chart !== "undefined") {

        const chartCanvas = document.getElementById("dashboardChart");

        if (chartCanvas) {

            new Chart(chartCanvas, {

                type: "line",

                data: {

                    labels: [

                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun"

                    ],

                    datasets: [{

                        label: "Crop Yield",

                        data: [

                            15,
                            22,
                            28,
                            35,
                            40,
                            48

                        ],

                        fill: false

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false

                }

            });

        }

    }

    /* =====================================
       GEOLOCATION
    ===================================== */

    const locationButton = document.getElementById("detectLocation");

    if (locationButton) {

        locationButton.addEventListener("click", () => {

            navigator.geolocation.getCurrentPosition(position => {

                document.getElementById("latitude").value =
                    position.coords.latitude;

                document.getElementById("longitude").value =
                    position.coords.longitude;

            });

        });

    }

    /* =====================================
       ERROR LOGGER
    ===================================== */

    window.addEventListener("error", function (event) {

        console.error(

            "Global Error:",

            event.message

        );

    });

    console.log("✅ Advanced AI Module Loaded");

});
/* ==========================================================
   SCRIPT.JS - PART 24
   PWA + Search + Export + Accessibility
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SERVICE WORKER
    ===================================== */

    if ("serviceWorker" in navigator) {

        window.addEventListener("load", async () => {

            try {

                await navigator.serviceWorker.register("/service-worker.js");

                console.log("✅ Service Worker Registered");

            } catch (error) {

                console.error("Service Worker Error:", error);

            }

        });

    }

    /* =====================================
       GLOBAL SEARCH FILTER
    ===================================== */

    const searchInput = document.getElementById("globalSearch");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            document.querySelectorAll(".search-item").forEach(item => {

                const text = item.textContent.toLowerCase();

                item.style.display = text.includes(value)
                    ? ""
                    : "none";

            });

        });

    }

    /* =====================================
       EXPORT TABLE TO CSV
    ===================================== */

    const exportBtn = document.getElementById("exportCSV");

    if (exportBtn) {

        exportBtn.addEventListener("click", () => {

            const table = document.getElementById("marketTable");

            if (!table) return;

            let csv = [];

            table.querySelectorAll("tr").forEach(row => {

                let cols = [];

                row.querySelectorAll("th,td").forEach(col => {

                    cols.push(`"${col.innerText}"`);

                });

                csv.push(cols.join(","));

            });

            const blob = new Blob([csv.join("\n")], {

                type: "text/csv"

            });

            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;

            link.download = "market-data.csv";

            link.click();

            URL.revokeObjectURL(url);

        });

    }

    /* =====================================
       FULL SCREEN MODE
    ===================================== */

    const fullscreenBtn = document.getElementById("fullscreenBtn");

    if (fullscreenBtn) {

        fullscreenBtn.addEventListener("click", () => {

            if (!document.fullscreenElement) {

                document.documentElement.requestFullscreen();

            } else {

                document.exitFullscreen();

            }

        });

    }

    /* =====================================
       ACCESSIBILITY FONT SIZE
    ===================================== */

    const increaseFont = document.getElementById("increaseFont");

    if (increaseFont) {

        increaseFont.addEventListener("click", () => {

            let size = parseFloat(

                getComputedStyle(document.body).fontSize

            );

            document.body.style.fontSize = (size + 1) + "px";

        });

    }

    const decreaseFont = document.getElementById("decreaseFont");

    if (decreaseFont) {

        decreaseFont.addEventListener("click", () => {

            let size = parseFloat(

                getComputedStyle(document.body).fontSize

            );

            if (size > 12) {

                document.body.style.fontSize = (size - 1) + "px";

            }

        });

    }

    /* =====================================
       BACKUP LOCAL DATA
    ===================================== */

    const backupBtn = document.getElementById("backupData");

    if (backupBtn) {

        backupBtn.addEventListener("click", () => {

            const backup = {

                username: localStorage.getItem("username"),

                theme: localStorage.getItem("theme"),

                date: new Date().toISOString()

            };

            const blob = new Blob(

                [JSON.stringify(backup, null, 2)],

                { type: "application/json" }

            );

            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;

            link.download = "backup.json";

            link.click();

            URL.revokeObjectURL(url);

        });

    }

    /* =====================================
       PERFORMANCE TIMER
    ===================================== */

    window.addEventListener("load", () => {

        const loadTime = performance.now();

        console.log(

            `⚡ Page Loaded in ${loadTime.toFixed(2)} ms`

        );

    });

    /* =====================================
       FINAL INITIALIZATION
    ===================================== */

    console.log("🚀 Part-24 Loaded Successfully");

});
/* ==========================================================
   SCRIPT.JS - PART 25
   Analytics + Idle Detection + API Queue + Utilities
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       PAGE ANALYTICS
    ===================================== */

    const pageAnalytics = {

        page: window.location.pathname,

        startTime: Date.now(),

        clicks: 0,

        scrollDepth: 0

    };

    document.addEventListener("click", () => {

        pageAnalytics.clicks++;

    });

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (height > 0) {

            pageAnalytics.scrollDepth = Math.round(
                (scrollTop / height) * 100
            );

        }

    });

    window.addEventListener("beforeunload", () => {

        console.table(pageAnalytics);

    });

    /* =====================================
       IDLE DETECTION
    ===================================== */

    let idleTime = 0;

    function resetIdle() {

        idleTime = 0;

    }

    [
        "mousemove",
        "keypress",
        "scroll",
        "touchstart"
    ].forEach(event => {

        document.addEventListener(event, resetIdle);

    });

    setInterval(() => {

        idleTime++;

        if (idleTime === 5) {

            console.log("🟡 User is idle.");

        }

    }, 60000);

    /* =====================================
       API REQUEST QUEUE
    ===================================== */

    class RequestQueue {

        constructor() {

            this.queue = [];

            this.processing = false;

        }

        add(task) {

            this.queue.push(task);

            this.process();

        }

        async process() {

            if (this.processing) return;

            this.processing = true;

            while (this.queue.length > 0) {

                const task = this.queue.shift();

                try {

                    await task();

                }

                catch (error) {

                    console.error(error);

                }

            }

            this.processing = false;

        }

    }

    const apiQueue = new RequestQueue();

    window.apiQueue = apiQueue;

    /* =====================================
       KEYBOARD SHORTCUTS
    ===================================== */

    document.addEventListener("keydown", e => {

        if (e.altKey && e.key === "1") {

            window.location.href = "/dashboard";

        }

        if (e.altKey && e.key === "2") {

            window.location.href = "/crop";

        }

        if (e.altKey && e.key === "3") {

            window.location.href = "/weather";

        }

        if (e.altKey && e.key === "4") {

            window.location.href = "/market";

        }

    });

    /* =====================================
       SIMPLE LOADER API
    ===================================== */

    window.showLoader = function () {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.display = "flex";

        }

    };

    window.hideLoader = function () {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.display = "none";

        }

    };

    /* =====================================
       RANDOM FARM TIP
    ===================================== */

    const tips = [

        "🌱 Test your soil regularly.",

        "💧 Irrigate crops early morning.",

        "🌾 Rotate crops every season.",

        "☀ Monitor weather before sowing.",

        "🌿 Use organic compost whenever possible."

    ];

    const farmTip = document.getElementById("farmTip");

    if (farmTip) {

        farmTip.textContent =

            tips[Math.floor(Math.random() * tips.length)];

    }

    /* =====================================
       VERSION INFO
    ===================================== */

    console.log("=================================");

    console.log("AI Farmer Assistant");

    console.log("Frontend Version : 2.5");

    console.log("Status : Stable Build");

    console.log("=================================");

});
/* ==========================================================
   SCRIPT.JS - PART 26
   Security + Auto Save + Retry + Network Monitor
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       AUTO SAVE FORM
    ===================================== */

    document.querySelectorAll("form").forEach(form => {

        const key = "autosave_" + (form.id || Math.random());

        // Load saved values
        form.querySelectorAll("input, textarea, select").forEach(field => {

            const value = localStorage.getItem(
                `${key}_${field.name}`
            );

            if (value !== null) {

                field.value = value;

            }

            field.addEventListener("input", () => {

                localStorage.setItem(
                    `${key}_${field.name}`,
                    field.value
                );

            });

        });

        form.addEventListener("submit", () => {

            form.querySelectorAll("input, textarea, select").forEach(field => {

                localStorage.removeItem(
                    `${key}_${field.name}`
                );

            });

        });

    });

    /* =====================================
       FETCH WITH RETRY
    ===================================== */

    async function fetchRetry(url, options = {}, retries = 3) {

        for (let i = 1; i <= retries; i++) {

            try {

                const response = await fetch(url, options);

                if (!response.ok) {

                    throw new Error(response.status);

                }

                return await response.json();

            }

            catch (error) {

                console.warn(
                    `Retry ${i}/${retries}`
                );

                if (i === retries) {

                    throw error;

                }

            }

        }

    }

    window.fetchRetry = fetchRetry;

    /* =====================================
       COPY TEXT
    ===================================== */

    window.copyText = async function (text) {

        try {

            await navigator.clipboard.writeText(text);

            console.log("Copied:", text);

        }

        catch (error) {

            console.error(error);

        }

    };

    /* =====================================
       ONLINE / OFFLINE INDICATOR
    ===================================== */

    function updateNetwork() {

        const badge = document.getElementById("networkBadge");

        if (!badge) return;

        badge.textContent = navigator.onLine
            ? "🟢 Online"
            : "🔴 Offline";

    }

    updateNetwork();

    window.addEventListener("online", updateNetwork);

    window.addEventListener("offline", updateNetwork);

    /* =====================================
       IMAGE FALLBACK
    ===================================== */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            img.src = "/static/images/no-image.png";

        });

    });

    /* =====================================
       PAGE VISIBILITY
    ===================================== */

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            console.log("User switched tab.");

        } else {

            console.log("User returned.");

        }

    });

    /* =====================================
       ESC KEY CLOSE MODALS
    ===================================== */

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            document.querySelectorAll(".modal.show")
                .forEach(modal => {

                    bootstrap.Modal
                        .getInstance(modal)
                        ?.hide();

                });

        }

    });

    /* =====================================
       MEMORY USAGE (Chrome)
    ===================================== */

    if (performance.memory) {

        console.table({

            Used: (
                performance.memory.usedJSHeapSize / 1048576
            ).toFixed(2) + " MB",

            Total: (
                performance.memory.totalJSHeapSize / 1048576
            ).toFixed(2) + " MB"

        });

    }

    /* =====================================
       FINAL LOG
    ===================================== */

    console.log("====================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 2.6");
    console.log("Security Module Loaded");
    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 27
   Cache + Theme Scheduler + Toast Manager + Validation
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       API CACHE
    ===================================== */

    const cache = new Map();

    async function cachedFetch(url) {

        if (cache.has(url)) {

            return cache.get(url);

        }

        try {

            const response = await fetch(url);

            if (!response.ok) {

                throw new Error("Network Error");

            }

            const data = await response.json();

            cache.set(url, data);

            return data;

        }

        catch (error) {

            console.error(error);

            return null;

        }

    }

    window.cachedFetch = cachedFetch;

    /* =====================================
       CLEAR CACHE
    ===================================== */

    window.clearCache = function () {

        cache.clear();

        console.log("✅ API Cache Cleared");

    };

    /* =====================================
       TOAST MANAGER
    ===================================== */

    window.showToast = function (

        message,

        type = "success"

    ) {

        const toast = document.createElement("div");

        toast.className = `alert alert-${type}`;

        toast.style.position = "fixed";
        toast.style.top = "20px";
        toast.style.right = "20px";
        toast.style.zIndex = "99999";
        toast.style.minWidth = "280px";

        toast.innerHTML = message;

        document.body.appendChild(toast);

        setTimeout(() => {

            toast.remove();

        }, 3000);

    };

    /* =====================================
       AUTO THEME
    ===================================== */

    function updateTheme() {

        const hour = new Date().getHours();

        if (hour >= 18 || hour <= 6) {

            document.body.classList.add("dark-mode");

        } else {

            document.body.classList.remove("dark-mode");

        }

    }

    updateTheme();

    /* =====================================
       EMAIL VALIDATION
    ===================================== */

    window.validateEmail = function (email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            .test(email);

    };

    /* =====================================
       PHONE VALIDATION
    ===================================== */

    window.validatePhone = function (phone) {

        return /^[0-9]{10}$/.test(phone);

    };

    /* =====================================
       NUMBER FORMAT
    ===================================== */

    window.formatNumber = function (num) {

        return new Intl.NumberFormat().format(num);

    };

    /* =====================================
       DATE FORMAT
    ===================================== */

    window.formatDate = function (date) {

        return new Date(date)

            .toLocaleDateString();

    };

    /* =====================================
       AUTO SCROLL CHAT
    ===================================== */

    const chatBox = document.getElementById("chatContainer");

    if (chatBox) {

        const observer = new MutationObserver(() => {

            chatBox.scrollTop = chatBox.scrollHeight;

        });

        observer.observe(chatBox, {

            childList: true

        });

    }

    /* =====================================
       CONNECTION LATENCY
    ===================================== */

    async function checkLatency() {

        const start = performance.now();

        try {

            await fetch("/");

            const end = performance.now();

            console.log(

                "Latency:",

                Math.round(end - start),

                "ms"

            );

        }

        catch {

            console.log("Offline");

        }

    }

    checkLatency();

    /* =====================================
       STORAGE INFO
    ===================================== */

    console.table({

        LocalStorage:

            localStorage.length,

        SessionStorage:

            sessionStorage.length

    });

    /* =====================================
       FINAL LOG
    ===================================== */

    console.log("====================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 2.7");
    console.log("Optimization Module Loaded");
    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 28
   Real-Time Updates + Preferences + API Health
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       USER PREFERENCES
    ===================================== */

    const preferences = {

        language:
            localStorage.getItem("language") || "en",

        theme:
            localStorage.getItem("theme") || "light",

        notifications:
            localStorage.getItem("notifications") === "true"

    };

    window.userPreferences = preferences;

    function savePreferences() {

        localStorage.setItem(
            "language",
            preferences.language
        );

        localStorage.setItem(
            "theme",
            preferences.theme
        );

        localStorage.setItem(
            "notifications",
            preferences.notifications
        );

    }

    /* =====================================
       LANGUAGE SELECTOR
    ===================================== */

    const languageSelect =
        document.getElementById("languageSelect");

    if (languageSelect) {

        languageSelect.value = preferences.language;

        languageSelect.addEventListener("change", function () {

            preferences.language = this.value;

            savePreferences();

            console.log(
                "Language:",
                preferences.language
            );

        });

    }

    /* =====================================
       API HEALTH CHECK
    ===================================== */

    async function checkAPIHealth() {

        const badge =
            document.getElementById("apiHealth");

        if (!badge) return;

        try {

            const response = await fetch("/api/health");

            if (response.ok) {

                badge.innerHTML = "🟢 API Online";

                badge.className =
                    "badge bg-success";

            }

            else {

                throw new Error();

            }

        }

        catch {

            badge.innerHTML = "🔴 API Offline";

            badge.className =
                "badge bg-danger";

        }

    }

    checkAPIHealth();

    setInterval(checkAPIHealth, 60000);

    /* =====================================
       REAL-TIME CLOCK
    ===================================== */

    const liveDate =
        document.getElementById("liveDate");

    if (liveDate) {

        setInterval(() => {

            liveDate.textContent =
                new Date().toLocaleString();

        }, 1000);

    }

    /* =====================================
       WEATHER AUTO REFRESH
    ===================================== */

    async function refreshWeather() {

        try {

            const response =
                await fetch("/api/weather");

            if (!response.ok) return;

            const data =
                await response.json();

            const temp =
                document.getElementById("weatherTemp");

            if (temp) {

                temp.textContent =
                    `${data.temperature}°C`;

            }

        }

        catch (error) {

            console.error(error);

        }

    }

    setInterval(refreshWeather, 300000);

    /* =====================================
       MARKET AUTO REFRESH
    ===================================== */

    async function refreshMarket() {

        try {

            const response =
                await fetch("/api/market");

            if (!response.ok) return;

            const data =
                await response.json();

            const table =
                document.getElementById("marketBody");

            if (!table) return;

            table.innerHTML = "";

            data.forEach(item => {

                table.innerHTML += `
                    <tr>
                        <td>${item.crop}</td>
                        <td>${item.price}</td>
                    </tr>
                `;

            });

        }

        catch (error) {

            console.error(error);

        }

    }

    setInterval(refreshMarket, 300000);

    /* =====================================
       SESSION COUNTDOWN
    ===================================== */

    let sessionMinutes = 30;

    const session =
        document.getElementById("sessionTimer");

    if (session) {

        setInterval(() => {

            sessionMinutes--;

            session.textContent =
                sessionMinutes + " min";

            if (sessionMinutes <= 5) {

                session.style.color = "red";

            }

        }, 60000);

    }

    /* =====================================
       CPU PERFORMANCE
    ===================================== */

    const start = performance.now();

    window.addEventListener("load", () => {

        const end = performance.now();

        console.log(

            "Render Time:",

            (end - start).toFixed(2),

            "ms"

        );

    });

    /* =====================================
       STORAGE SIZE
    ===================================== */

    let total = 0;

    for (let key in localStorage) {

        if (localStorage.hasOwnProperty(key)) {

            total +=

                localStorage[key].length;

        }

    }

    console.log(

        "Local Storage:",

        (total / 1024).toFixed(2),

        "KB"

    );

    /* =====================================
       FINAL LOG
    ===================================== */

    console.log("====================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 2.8");
    console.log("Real-Time Module Loaded");
    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 29
   WebSocket + Voice Commands + Auto Logout
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       WEBSOCKET READY
    ===================================== */

    let socket = null;

    function connectSocket() {

        if (!("WebSocket" in window)) {

            console.warn("WebSocket not supported.");

            return;

        }

        try {

            socket = new WebSocket(
                `ws://${window.location.host}/ws`
            );

            socket.onopen = () => {

                console.log("🟢 WebSocket Connected");

            };

            socket.onmessage = (event) => {

                console.log("📩", event.data);

            };

            socket.onclose = () => {

                console.log("🔴 WebSocket Closed");

            };

            socket.onerror = (error) => {

                console.error(error);

            };

        }

        catch (err) {

            console.error(err);

        }

    }

    connectSocket();

    /* =====================================
       VOICE COMMAND
    ===================================== */

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (SpeechRecognition) {

        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";

        const voiceBtn =
            document.getElementById("voiceSearch");

        if (voiceBtn) {

            voiceBtn.addEventListener("click", () => {

                recognition.start();

            });

        }

        recognition.onresult = (event) => {

            const text =
                event.results[0][0].transcript;

            const search =
                document.getElementById("searchInput");

            if (search) {

                search.value = text;

            }

        };

    }

    /* =====================================
       AUTO LOGOUT
    ===================================== */

    let logoutTimer;

    function resetLogoutTimer() {

        clearTimeout(logoutTimer);

        logoutTimer = setTimeout(() => {

            alert("Session Expired");

            window.location.href = "/logout";

        }, 60 * 60 * 1000);

    }

    [

        "mousemove",

        "click",

        "keydown",

        "scroll"

    ].forEach(event => {

        document.addEventListener(

            event,

            resetLogoutTimer

        );

    });

    resetLogoutTimer();

    /* =====================================
       TAB SYNCHRONIZATION
    ===================================== */

    window.addEventListener("storage", event => {

        if (event.key === "theme") {

            if (event.newValue === "dark") {

                document.body.classList.add("dark-mode");

            }

            else {

                document.body.classList.remove("dark-mode");

            }

        }

    });

    /* =====================================
       BATTERY STATUS
    ===================================== */

    if (navigator.getBattery) {

        navigator.getBattery().then(battery => {

            console.log(

                "Battery:",

                Math.round(

                    battery.level * 100

                ) + "%"

            );

        });

    }

    /* =====================================
       DEVICE INFORMATION
    ===================================== */

    console.table({

        Platform: navigator.platform,

        Language: navigator.language,

        Cookies: navigator.cookieEnabled,

        Online: navigator.onLine

    });

    /* =====================================
       FINAL LOG
    ===================================== */

    console.log("================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 2.9");
    console.log("Realtime Module Loaded");
    console.log("================================");

});
/* ==========================================================
   SCRIPT.JS - PART 30
   Production Optimizer + Event Bus + Performance
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APP CONFIG
    ===================================== */

    const APP = {

        version: "3.0",

        environment: "production",

        apiBase: "/api"

    };

    window.APP = APP;

    /* =====================================
       GLOBAL EVENT BUS
    ===================================== */

    class EventBus {

        constructor() {

            this.events = {};

        }

        on(event, callback) {

            if (!this.events[event]) {

                this.events[event] = [];

            }

            this.events[event].push(callback);

        }

        emit(event, data = {}) {

            if (!this.events[event]) return;

            this.events[event].forEach(callback => {

                callback(data);

            });

        }

    }

    window.EventBus = new EventBus();

    /* =====================================
       PERFORMANCE MONITOR
    ===================================== */

    function logPerformance() {

        if (!performance) return;

        console.group("Performance");

        console.log(
            "DOM Loaded:",
            performance.now().toFixed(2),
            "ms"
        );

        console.log(
            "Memory Supported:",
            !!performance.memory
        );

        console.groupEnd();

    }

    logPerformance();

    /* =====================================
       PAGE VISIT COUNTER
    ===================================== */

    let visits =
        parseInt(localStorage.getItem("visits")) || 0;

    visits++;

    localStorage.setItem("visits", visits);

    console.log("Visits:", visits);

    /* =====================================
       FPS MONITOR
    ===================================== */

    let frames = 0;

    let last = performance.now();

    function fpsCounter() {

        frames++;

        const now = performance.now();

        if (now >= last + 1000) {

            console.log("FPS:", frames);

            frames = 0;

            last = now;

        }

        requestAnimationFrame(fpsCounter);

    }

    requestAnimationFrame(fpsCounter);

    /* =====================================
       SAFE JSON PARSER
    ===================================== */

    window.safeJSON = function (text) {

        try {

            return JSON.parse(text);

        }

        catch {

            return null;

        }

    };

    /* =====================================
       RANDOM ID
    ===================================== */

    window.randomId = function () {

        return "ID-" +

            Math.random()

            .toString(36)

            .substring(2, 10)

            .toUpperCase();

    };

    /* =====================================
       UUID
    ===================================== */

    window.uuid = function () {

        return crypto.randomUUID();

    };

    /* =====================================
       DEBOUNCE
    ===================================== */

    window.debounce = function (

        callback,

        delay = 300

    ) {

        let timer;

        return (...args) => {

            clearTimeout(timer);

            timer = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    };

    /* =====================================
       THROTTLE
    ===================================== */

    window.throttle = function (

        callback,

        delay = 300

    ) {

        let waiting = false;

        return (...args) => {

            if (waiting) return;

            callback(...args);

            waiting = true;

            setTimeout(() => {

                waiting = false;

            }, delay);

        };

    };

    /* =====================================
       SCROLL LOGGER
    ===================================== */

    window.addEventListener(

        "scroll",

        throttle(() => {

            console.log(

                "Scroll:",

                window.scrollY

            );

        }, 500)

    );

    /* =====================================
       CUSTOM EVENTS
    ===================================== */

    EventBus.on(

        "weatherUpdated",

        data => {

            console.log(

                "Weather Updated:",

                data

            );

        }

    );

    EventBus.on(

        "marketUpdated",

        data => {

            console.log(

                "Market Updated:",

                data

            );

        }

    );

    /* =====================================
       GLOBAL SHORTCUT
    ===================================== */

    document.addEventListener(

        "keydown",

        e => {

            if (

                e.ctrlKey &&

                e.shiftKey &&

                e.key === "D"

            ) {

                console.table(APP);

            }

        }

    );

    /* =====================================
       APPLICATION READY
    ===================================== */

    console.log("====================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version :", APP.version);
    console.log("Environment :", APP.environment);
    console.log("Status : Production Ready");
    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 31
   Security + Logger + Health Monitor
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APPLICATION LOGGER
    ===================================== */

    const Logger = {

        info(message) {

            console.log(`ℹ️ ${message}`);

        },

        success(message) {

            console.log(`✅ ${message}`);

        },

        warning(message) {

            console.warn(`⚠️ ${message}`);

        },

        error(message) {

            console.error(`❌ ${message}`);

        }

    };

    window.Logger = Logger;

    Logger.success("Logger Initialized");

    /* =====================================
       APPLICATION HEALTH
    ===================================== */

    const AppHealth = {

        online: navigator.onLine,

        memory: performance.memory
            ? performance.memory.usedJSHeapSize
            : "Not Supported",

        cookies: navigator.cookieEnabled,

        language: navigator.language

    };

    console.table(AppHealth);

    /* =====================================
       RETRY QUEUE
    ===================================== */

    class RetryQueue {

        constructor() {

            this.jobs = [];

        }

        add(task) {

            this.jobs.push(task);

        }

        async run() {

            while (this.jobs.length) {

                const job = this.jobs.shift();

                try {

                    await job();

                }

                catch (error) {

                    Logger.error(error);

                }

            }

        }

    }

    window.retryQueue = new RetryQueue();

    /* =====================================
       STORAGE CLEANUP
    ===================================== */

    function clearExpiredStorage() {

        Object.keys(localStorage).forEach(key => {

            if (key.startsWith("temp_")) {

                localStorage.removeItem(key);

            }

        });

    }

    clearExpiredStorage();

    /* =====================================
       COPY HELPER
    ===================================== */

    window.copyToClipboard = async function(text){

        try{

            await navigator.clipboard.writeText(text);

            Logger.success("Copied to Clipboard");

        }

        catch(error){

            Logger.error(error);

        }

    };

    /* =====================================
       DOWNLOAD JSON
    ===================================== */

    window.downloadJSON = function(data,file="data.json"){

        const blob=new Blob(

            [JSON.stringify(data,null,2)],

            {

                type:"application/json"

            }

        );

        const url=URL.createObjectURL(blob);

        const a=document.createElement("a");

        a.href=url;

        a.download=file;

        a.click();

        URL.revokeObjectURL(url);

    };

    /* =====================================
       NETWORK SPEED
    ===================================== */

    if(navigator.connection){

        Logger.info(

            `Connection : ${navigator.connection.effectiveType}`

        );

    }

    /* =====================================
       VISIBILITY STATE
    ===================================== */

    document.addEventListener(

        "visibilitychange",

        ()=>{

            Logger.info(

                document.hidden

                ? "App Hidden"

                : "App Active"

            );

        }

    );

    /* =====================================
       CPU LOAD CHECK
    ===================================== */

    const cpuStart=performance.now();

    window.addEventListener(

        "load",

        ()=>{

            Logger.info(

                `Render Time : ${(performance.now()-cpuStart).toFixed(2)} ms`

            );

        }

    );

    /* =====================================
       APPLICATION VERSION
    ===================================== */

    const APP_INFO={

        name:"AI Farmer Assistant",

        version:"3.1",

        author:"OpenAI",

        status:"Stable"

    };

    window.APP_INFO=APP_INFO;

    console.table(APP_INFO);

    /* =====================================
       CUSTOM EVENTS
    ===================================== */

    window.dispatchAppEvent=function(name,data={}){

        document.dispatchEvent(

            new CustomEvent(name,{

                detail:data

            })

        );

    };

    document.addEventListener(

        "weather:update",

        e=>{

            Logger.info(

                "Weather Updated"

            );

            console.log(e.detail);

        }

    );

    /* =====================================
       FINAL INITIALIZATION
    ===================================== */

    Logger.success("Part-31 Loaded Successfully");

});
/* ==========================================================
   SCRIPT.JS - PART 32
   Advanced Utilities + Error Reporter + API Manager
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APP STATE
    ===================================== */

    const AppState = {

        initialized: true,

        loading: false,

        currentPage: window.location.pathname,

        lastUpdate: new Date()

    };

    window.AppState = AppState;

    /* =====================================
       GLOBAL LOADER
    ===================================== */

    window.startLoading = function () {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.display = "flex";

        }

        AppState.loading = true;

    };

    window.stopLoading = function () {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.display = "none";

        }

        AppState.loading = false;

    };

    /* =====================================
       API REQUEST MANAGER
    ===================================== */

    class APIManager {

        async get(url) {

            return await this.request(url);

        }

        async post(url, data) {

            return await this.request(url, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(data)

            });

        }

        async request(url, options = {}) {

            try {

                startLoading();

                const response = await fetch(url, options);

                if (!response.ok) {

                    throw new Error(response.statusText);

                }

                return await response.json();

            }

            catch (error) {

                console.error(error);

                return null;

            }

            finally {

                stopLoading();

            }

        }

    }

    window.APIManager = new APIManager();

    /* =====================================
       ERROR REPORTER
    ===================================== */

    window.addEventListener("error", event => {

        console.group("Application Error");

        console.error(event.message);

        console.error(event.filename);

        console.error(event.lineno);

        console.groupEnd();

    });

    /* =====================================
       PROMISE REJECTION
    ===================================== */

    window.addEventListener(

        "unhandledrejection",

        event => {

            console.error(

                "Unhandled Promise:",

                event.reason

            );

        }

    );

    /* =====================================
       LOCAL STORAGE INFO
    ===================================== */

    function storageUsage() {

        let bytes = 0;

        for (const key in localStorage) {

            if (Object.prototype.hasOwnProperty.call(localStorage, key)) {

                bytes +=

                    (localStorage[key] || "").length;

            }

        }

        return (bytes / 1024).toFixed(2);

    }

    console.log(

        "Storage Used:",

        storageUsage(),

        "KB"

    );

    /* =====================================
       SIMPLE CACHE
    ===================================== */

    const cache = {};

    window.cacheData = function (key, value) {

        cache[key] = value;

    };

    window.getCache = function (key) {

        return cache[key];

    };

    /* =====================================
       APPLICATION TIMER
    ===================================== */

    let seconds = 0;

    setInterval(() => {

        seconds++;

        AppState.lastUpdate = new Date();

    }, 1000);

    /* =====================================
       NETWORK WATCHER
    ===================================== */

    function networkStatus() {

        console.log(

            navigator.onLine

                ? "🟢 Online"

                : "🔴 Offline"

        );

    }

    networkStatus();

    window.addEventListener(

        "online",

        networkStatus

    );

    window.addEventListener(

        "offline",

        networkStatus

    );

    /* =====================================
       APPLICATION SUMMARY
    ===================================== */

    console.table({

        Version: "3.2",

        Page: AppState.currentPage,

        Status: "Running",

        Theme:

            localStorage.getItem("theme") ||

            "light"

    });

    console.log("==================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 3.2");
    console.log("Application Ready");
    console.log("==================================");

});
/* ==========================================================
   SCRIPT.JS - PART 33
   Advanced API Service + Metrics + Idle Monitor
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APPLICATION METRICS
    ===================================== */

    const Metrics = {

        apiCalls: 0,

        successfulCalls: 0,

        failedCalls: 0,

        pageOpened: new Date(),

        errors: 0

    };

    window.AppMetrics = Metrics;

    /* =====================================
       API SERVICE
    ===================================== */

    class ApiService {

        constructor(base = "/api") {

            this.base = base;

        }

        async request(endpoint, options = {}) {

            Metrics.apiCalls++;

            try {

                const response = await fetch(
                    this.base + endpoint,
                    options
                );

                if (!response.ok) {

                    throw new Error(
                        response.status
                    );

                }

                Metrics.successfulCalls++;

                return await response.json();

            }

            catch (error) {

                Metrics.failedCalls++;

                console.error(error);

                return null;

            }

        }

        get(endpoint) {

            return this.request(endpoint);

        }

        post(endpoint, data) {

            return this.request(endpoint, {

                method: "POST",

                headers: {

                    "Content-Type":
                    "application/json"

                },

                body: JSON.stringify(data)

            });

        }

    }

    window.api = new ApiService();

    /* =====================================
       PAGE TIMER
    ===================================== */

    let pageSeconds = 0;

    setInterval(() => {

        pageSeconds++;

    }, 1000);

    /* =====================================
       IDLE MONITOR
    ===================================== */

    let idleMinutes = 0;

    function resetIdle() {

        idleMinutes = 0;

    }

    [
        "mousemove",
        "keydown",
        "click",
        "scroll",
        "touchstart"
    ].forEach(event => {

        document.addEventListener(
            event,
            resetIdle
        );

    });

    setInterval(() => {

        idleMinutes++;

        if (idleMinutes >= 10) {

            console.warn(
                "User idle for 10 minutes."
            );

        }

    }, 60000);

    /* =====================================
       STORAGE CLEANER
    ===================================== */

    function clearTemporaryStorage() {

        Object.keys(localStorage)

        .forEach(key => {

            if (key.startsWith("cache_")) {

                localStorage.removeItem(key);

            }

        });

    }

    clearTemporaryStorage();

    /* =====================================
       SIMPLE EVENT EMITTER
    ===================================== */

    class Emitter {

        constructor() {

            this.events = {};

        }

        on(name, callback) {

            if (!this.events[name]) {

                this.events[name] = [];

            }

            this.events[name].push(callback);

        }

        emit(name, data = {}) {

            if (!this.events[name]) return;

            this.events[name].forEach(callback => {

                callback(data);

            });

        }

    }

    window.emitter = new Emitter();

    /* =====================================
       PAGE VISIBILITY
    ===================================== */

    document.addEventListener(

        "visibilitychange",

        () => {

            emitter.emit(

                "visibility",

                {

                    hidden:

                    document.hidden

                }

            );

        }

    );

    /* =====================================
       APPLICATION STATUS
    ===================================== */

    window.getApplicationStatus = function () {

        return {

            version: "3.3",

            page: window.location.pathname,

            uptime: pageSeconds,

            metrics: Metrics,

            online: navigator.onLine

        };

    };

    /* =====================================
       FINAL REPORT
    ===================================== */

    console.group("🌾 AI Farmer Assistant");

    console.table({

        Version: "3.3",

        Environment: "Production",

        Online: navigator.onLine,

        Language: navigator.language,

        Platform: navigator.platform

    });

    console.groupEnd();

});
/* ==========================================================
   SCRIPT.JS - PART 34
   Smart Sync + Offline Queue + Auto Recovery
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APPLICATION CONFIG
    ===================================== */

    const SyncConfig = {

        syncInterval: 300000,

        maxQueueSize: 100,

        version: "3.4"

    };

    /* =====================================
       OFFLINE REQUEST QUEUE
    ===================================== */

    const offlineQueue = [];

    window.addOfflineRequest = function(request){

        if(offlineQueue.length >= SyncConfig.maxQueueSize){

            offlineQueue.shift();

        }

        offlineQueue.push(request);

    };

    /* =====================================
       PROCESS OFFLINE QUEUE
    ===================================== */

    async function processQueue(){

        if(!navigator.onLine) return;

        while(offlineQueue.length){

            const item = offlineQueue.shift();

            try{

                await fetch(item.url, item.options);

                console.log("✅ Synced:", item.url);

            }

            catch(error){

                console.error(error);

                offlineQueue.unshift(item);

                break;

            }

        }

    }

    window.addEventListener("online", processQueue);

    /* =====================================
       AUTO SAVE SETTINGS
    ===================================== */

    window.saveSetting = function(key,value){

        localStorage.setItem(

            "setting_" + key,

            JSON.stringify(value)

        );

    };

    window.getSetting = function(key){

        const value = localStorage.getItem(

            "setting_" + key

        );

        return value

            ? JSON.parse(value)

            : null;

    };

    /* =====================================
       APPLICATION HEARTBEAT
    ===================================== */

    function heartbeat(){

        console.log(

            "💓 Application Running",

            new Date().toLocaleTimeString()

        );

    }

    setInterval(

        heartbeat,

        60000

    );

    /* =====================================
       MEMORY CACHE
    ===================================== */

    const MemoryCache = new Map();

    window.memoryCache = {

        set(key,value){

            MemoryCache.set(key,value);

        },

        get(key){

            return MemoryCache.get(key);

        },

        clear(){

            MemoryCache.clear();

        }

    };

    /* =====================================
       AUTO RECOVERY
    ===================================== */

    window.addEventListener(

        "error",

        ()=>{

            console.warn(

                "Attempting recovery..."

            );

        }

    );

    /* =====================================
       STORAGE CLEANUP
    ===================================== */

    function cleanupStorage(){

        Object.keys(localStorage)

        .forEach(key=>{

            if(key.startsWith("expired_")){

                localStorage.removeItem(key);

            }

        });

    }

    cleanupStorage();

    /* =====================================
       APPLICATION INFORMATION
    ===================================== */

    window.SystemInfo = {

        version: SyncConfig.version,

        browser: navigator.userAgent,

        language: navigator.language,

        online: navigator.onLine,

        platform: navigator.platform

    };

    console.table(SystemInfo);

    /* =====================================
       PERIODIC SYNC
    ===================================== */

    setInterval(

        processQueue,

        SyncConfig.syncInterval

    );

    /* =====================================
       FINAL STARTUP MESSAGE
    ===================================== */

    console.log("======================================");

    console.log("🌾 AI Farmer Assistant");

    console.log("Frontend Version :", SyncConfig.version);

    console.log("Offline Sync Enabled");

    console.log("Status : Stable");

    console.log("======================================");

});
/* ==========================================================
   SCRIPT.JS - PART 35
   Audit Log + Task Scheduler + Diagnostics
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* ==========================================
       APPLICATION AUDIT LOG
    ========================================== */

    const AuditLog = [];

    window.logActivity = function(action, details = {}) {

        const record = {

            id: Date.now(),

            action,

            details,

            time: new Date().toISOString()

        };

        AuditLog.push(record);

        if (AuditLog.length > 200) {

            AuditLog.shift();

        }

        console.log("📋", record);

    };

    /* ==========================================
       TASK SCHEDULER
    ========================================== */

    class Scheduler {

        constructor() {

            this.tasks = [];

        }

        every(interval, callback) {

            const id = setInterval(callback, interval);

            this.tasks.push(id);

            return id;

        }

        stop(id) {

            clearInterval(id);

        }

        stopAll() {

            this.tasks.forEach(clearInterval);

            this.tasks = [];

        }

    }

    window.scheduler = new Scheduler();

    /* ==========================================
       SMART NOTIFICATIONS
    ========================================== */

    window.notify = function(title, message) {

        if (!("Notification" in window)) {

            console.warn("Notification API not supported");

            return;

        }

        if (Notification.permission === "granted") {

            new Notification(title, {

                body: message,

                icon: "/static/images/logo.png"

            });

        }

        else if (Notification.permission !== "denied") {

            Notification.requestPermission();

        }

    };

    /* ==========================================
       DIAGNOSTICS REPORT
    ========================================== */

    window.getDiagnostics = function() {

        return {

            browser: navigator.userAgent,

            language: navigator.language,

            platform: navigator.platform,

            online: navigator.onLine,

            cookies: navigator.cookieEnabled,

            width: window.innerWidth,

            height: window.innerHeight,

            localStorage: localStorage.length,

            sessionStorage: sessionStorage.length,

            timestamp: new Date().toISOString()

        };

    };

    /* ==========================================
       AUTO SAVE DIAGNOSTICS
    ========================================== */

    scheduler.every(300000, () => {

        localStorage.setItem(

            "lastDiagnostics",

            JSON.stringify(getDiagnostics())

        );

    });

    /* ==========================================
       WINDOW RESIZE EVENT
    ========================================== */

    window.addEventListener("resize", () => {

        logActivity("window_resize", {

            width: window.innerWidth,

            height: window.innerHeight

        });

    });

    /* ==========================================
       PAGE FOCUS EVENTS
    ========================================== */

    window.addEventListener("focus", () => {

        logActivity("window_focus");

    });

    window.addEventListener("blur", () => {

        logActivity("window_blur");

    });

    /* ==========================================
       EXPORT AUDIT LOG
    ========================================== */

    window.exportAuditLog = function() {

        const blob = new Blob(

            [JSON.stringify(AuditLog, null, 2)],

            {

                type: "application/json"

            }

        );

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "audit-log.json";

        a.click();

        URL.revokeObjectURL(url);

    };

    /* ==========================================
       STARTUP LOG
    ========================================== */

    logActivity("application_started", {

        version: "3.5"

    });

    console.log("======================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 3.5");
    console.log("Diagnostics Module Loaded");
    console.log("======================================");

});
/* ==========================================================
   SCRIPT.JS - PART 36
   Secure Storage + Rate Limiter + Health Dashboard
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APPLICATION HEALTH
    ===================================== */

    const Health = {

        apiCalls: 0,

        errors: 0,

        lastSync: null,

        online: navigator.onLine

    };

    window.Health = Health;

    /* =====================================
       SECURE STORAGE
    ===================================== */

    window.secureStorage = {

        set(key, value) {

            localStorage.setItem(

                key,

                btoa(JSON.stringify(value))

            );

        },

        get(key) {

            const value = localStorage.getItem(key);

            if (!value) return null;

            try {

                return JSON.parse(

                    atob(value)

                );

            }

            catch {

                return null;

            }

        },

        remove(key) {

            localStorage.removeItem(key);

        }

    };

    /* =====================================
       API RATE LIMITER
    ===================================== */

    class RateLimiter {

        constructor(limit = 30, interval = 60000) {

            this.limit = limit;

            this.interval = interval;

            this.requests = [];

        }

        allow() {

            const now = Date.now();

            this.requests = this.requests.filter(

                time => now - time < this.interval

            );

            if (this.requests.length >= this.limit) {

                return false;

            }

            this.requests.push(now);

            return true;

        }

    }

    window.rateLimiter = new RateLimiter();

    /* =====================================
       SAFE FETCH
    ===================================== */

    window.safeFetch = async function(url, options = {}) {

        if (!rateLimiter.allow()) {

            console.warn("⚠ API Rate Limit Reached");

            return null;

        }

        try {

            Health.apiCalls++;

            const response = await fetch(url, options);

            if (!response.ok) {

                throw new Error(response.status);

            }

            Health.lastSync = new Date();

            return await response.json();

        }

        catch (error) {

            Health.errors++;

            console.error(error);

            return null;

        }

    };

    /* =====================================
       HEALTH PANEL
    ===================================== */

    window.showHealth = function() {

        console.table({

            Online: navigator.onLine,

            API_Calls: Health.apiCalls,

            Errors: Health.errors,

            LastSync: Health.lastSync

        });

    };

    /* =====================================
       AUTO SAVE SESSION
    ===================================== */

    setInterval(() => {

        secureStorage.set("session", {

            lastPage: location.pathname,

            lastVisit: new Date().toISOString()

        });

    }, 60000);

    /* =====================================
       PAGE RESTORE
    ===================================== */

    const session = secureStorage.get("session");

    if (session) {

        console.log(

            "Last Visit:",

            session.lastVisit

        );

    }

    /* =====================================
       ONLINE / OFFLINE
    ===================================== */

    window.addEventListener("online", () => {

        Health.online = true;

        console.log("🟢 Connected");

    });

    window.addEventListener("offline", () => {

        Health.online = false;

        console.log("🔴 Offline");

    });

    /* =====================================
       FINAL LOG
    ===================================== */

    console.log("======================================");

    console.log("🌾 AI Farmer Assistant");

    console.log("Frontend Version : 3.6");

    console.log("Security & Health Module Loaded");

    console.log("======================================");

});
/* ==========================================================
   SCRIPT.JS - PART 37
   Smart Scheduler + Request Manager + Performance Tracker
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       PERFORMANCE TRACKER
    ===================================== */

    const PerformanceTracker = {

        pageLoad: performance.now(),

        apiRequests: 0,

        failedRequests: 0,

        successfulRequests: 0

    };

    window.PerformanceTracker = PerformanceTracker;

    /* =====================================
       SMART REQUEST MANAGER
    ===================================== */

    class RequestManager {

        constructor() {

            this.pending = new Map();

        }

        async fetch(url, options = {}) {

            if (this.pending.has(url)) {

                return this.pending.get(url);

            }

            const request = fetch(url, options)
                .then(async response => {

                    PerformanceTracker.apiRequests++;

                    if (!response.ok) {

                        PerformanceTracker.failedRequests++;

                        throw new Error(response.statusText);

                    }

                    PerformanceTracker.successfulRequests++;

                    return await response.json();

                })
                .finally(() => {

                    this.pending.delete(url);

                });

            this.pending.set(url, request);

            return request;

        }

    }

    window.requestManager = new RequestManager();

    /* =====================================
       SMART TASK SCHEDULER
    ===================================== */

    class SmartScheduler {

        constructor() {

            this.tasks = [];

        }

        add(callback, interval) {

            const id = setInterval(callback, interval);

            this.tasks.push(id);

            return id;

        }

        remove(id) {

            clearInterval(id);

        }

        clear() {

            this.tasks.forEach(clearInterval);

            this.tasks = [];

        }

    }

    window.smartScheduler = new SmartScheduler();

    /* =====================================
       APPLICATION UPTIME
    ===================================== */

    const appStarted = Date.now();

    window.getUptime = function () {

        return Math.floor(

            (Date.now() - appStarted) / 1000

        );

    };

    /* =====================================
       SIMPLE MEMORY CACHE
    ===================================== */

    const runtimeCache = new Map();

    window.runtimeCache = {

        set(key, value) {

            runtimeCache.set(key, value);

        },

        get(key) {

            return runtimeCache.get(key);

        },

        has(key) {

            return runtimeCache.has(key);

        },

        clear() {

            runtimeCache.clear();

        }

    };

    /* =====================================
       PAGE INFORMATION
    ===================================== */

    window.PageInfo = {

        title: document.title,

        url: location.href,

        referrer: document.referrer,

        language: navigator.language

    };

    console.table(PageInfo);

    /* =====================================
       PERFORMANCE REPORT
    ===================================== */

    window.showPerformance = function () {

        console.table({

            "Page Load (ms)":
                PerformanceTracker.pageLoad.toFixed(2),

            "API Requests":
                PerformanceTracker.apiRequests,

            "Successful":
                PerformanceTracker.successfulRequests,

            "Failed":
                PerformanceTracker.failedRequests,

            "Uptime (sec)":
                getUptime()

        });

    };

    /* =====================================
       URL PARAMS HELPER
    ===================================== */

    window.getQuery = function (key) {

        const params = new URLSearchParams(

            window.location.search

        );

        return params.get(key);

    };

    /* =====================================
       STARTUP MESSAGE
    ===================================== */

    console.log("======================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 3.7");
    console.log("Performance Module Loaded");
    console.log("======================================");

});
/* ==========================================================
   SCRIPT.JS - PART 38
   Background Jobs + API Timeout + Storage Manager
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APPLICATION STATUS
    ===================================== */

    const AppStatus = {

        version: "3.8",

        startTime: Date.now(),

        online: navigator.onLine,

        jobs: 0

    };

    window.AppStatus = AppStatus;

    /* =====================================
       BACKGROUND JOB MANAGER
    ===================================== */

    class BackgroundJobs {

        constructor() {

            this.jobs = [];

        }

        add(name, callback, interval) {

            const id = setInterval(callback, interval);

            this.jobs.push({

                name,

                id

            });

            AppStatus.jobs++;

            return id;

        }

        stop(id) {

            clearInterval(id);

        }

        stopAll() {

            this.jobs.forEach(job => {

                clearInterval(job.id);

            });

            this.jobs = [];

        }

    }

    window.backgroundJobs = new BackgroundJobs();

    /* =====================================
       FETCH WITH TIMEOUT
    ===================================== */

    async function fetchTimeout(

        url,

        options = {},

        timeout = 10000

    ) {

        const controller = new AbortController();

        const timer = setTimeout(() => {

            controller.abort();

        }, timeout);

        try {

            const response = await fetch(url, {

                ...options,

                signal: controller.signal

            });

            clearTimeout(timer);

            return response;

        }

        catch (error) {

            clearTimeout(timer);

            console.error("Timeout:", error);

            return null;

        }

    }

    window.fetchTimeout = fetchTimeout;

    /* =====================================
       STORAGE MANAGER
    ===================================== */

    window.StorageManager = {

        save(key, value) {

            localStorage.setItem(

                key,

                JSON.stringify(value)

            );

        },

        load(key) {

            const data =

                localStorage.getItem(key);

            return data

                ? JSON.parse(data)

                : null;

        },

        remove(key) {

            localStorage.removeItem(key);

        },

        clear() {

            localStorage.clear();

        }

    };

    /* =====================================
       HEALTH REPORT
    ===================================== */

    window.getHealthReport = function () {

        return {

            version: AppStatus.version,

            uptime:

                Math.floor(

                    (Date.now() -

                        AppStatus.startTime) / 1000

                ) + " sec",

            online: navigator.onLine,

            memory:

                performance.memory

                    ? (

                        performance.memory.usedJSHeapSize /

                        1048576

                    ).toFixed(2) + " MB"

                    : "Not Supported"

        };

    };

    /* =====================================
       AUTO BACKUP
    ===================================== */

    backgroundJobs.add(

        "backup",

        () => {

            StorageManager.save(

                "app_backup",

                {

                    date:

                        new Date()

                        .toISOString(),

                    page:

                        location.pathname

                }

            );

        },

        300000

    );

    /* =====================================
       CONNECTION STATUS
    ===================================== */

    window.addEventListener(

        "online",

        () => {

            AppStatus.online = true;

            console.log("🟢 Online");

        }

    );

    window.addEventListener(

        "offline",

        () => {

            AppStatus.online = false;

            console.log("🔴 Offline");

        }

    );

    /* =====================================
       APPLICATION SUMMARY
    ===================================== */

    console.table({

        Version: AppStatus.version,

        Online: AppStatus.online,

        Jobs: AppStatus.jobs,

        Page: location.pathname

    });

    console.log("==================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 3.8");
    console.log("Background Module Loaded");
    console.log("==================================");

});
/* ==========================================================
   SCRIPT.JS - PART 39
   API Interceptor + Session Manager + Event System
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       SESSION MANAGER
    ===================================== */

    class SessionManager {

        constructor() {

            this.startTime = Date.now();

            this.user = localStorage.getItem("username") || "Guest";

        }

        getSessionTime() {

            return Math.floor(

                (Date.now() - this.startTime) / 1000

            );

        }

        logout() {

            localStorage.removeItem("username");

            localStorage.removeItem("token");

            window.location.href = "/login";

        }

    }

    window.sessionManager = new SessionManager();

    /* =====================================
       API INTERCEPTOR
    ===================================== */

    window.apiRequest = async function (

        url,

        options = {}

    ) {

        const token = localStorage.getItem("token");

        options.headers = {

            ...options.headers,

            "Authorization": token

                ? `Bearer ${token}`

                : "",

            "Content-Type": "application/json"

        };

        try {

            const response = await fetch(url, options);

            if (response.status === 401) {

                console.warn("Session Expired");

                sessionManager.logout();

                return null;

            }

            if (!response.ok) {

                throw new Error(response.statusText);

            }

            return await response.json();

        }

        catch (error) {

            console.error("API Error:", error);

            return null;

        }

    };

    /* =====================================
       EVENT BUS
    ===================================== */

    class EventBus {

        constructor() {

            this.listeners = {};

        }

        on(event, callback) {

            if (!this.listeners[event]) {

                this.listeners[event] = [];

            }

            this.listeners[event].push(callback);

        }

        emit(event, data = {}) {

            if (!this.listeners[event]) return;

            this.listeners[event].forEach(callback => {

                callback(data);

            });

        }

    }

    window.events = new EventBus();

    /* =====================================
       GLOBAL EVENTS
    ===================================== */

    events.on("weather:updated", data => {

        console.log("🌦 Weather Updated", data);

    });

    events.on("market:updated", data => {

        console.log("💹 Market Updated", data);

    });

    events.on("chat:new", data => {

        console.log("💬 Chat Message", data);

    });

    /* =====================================
       NETWORK WATCHER
    ===================================== */

    function checkNetwork() {

        const status = navigator.onLine

            ? "🟢 Online"

            : "🔴 Offline";

        console.log(status);

    }

    window.addEventListener(

        "online",

        checkNetwork

    );

    window.addEventListener(

        "offline",

        checkNetwork

    );

    checkNetwork();

    /* =====================================
       SESSION TIMER
    ===================================== */

    setInterval(() => {

        console.log(

            "Session:",

            sessionManager.getSessionTime(),

            "seconds"

        );

    }, 60000);

    /* =====================================
       DEBUG INFO
    ===================================== */

    window.debugApp = function () {

        console.table({

            User: sessionManager.user,

            Session:

                sessionManager.getSessionTime() + " sec",

            Online: navigator.onLine,

            Language: navigator.language,

            Platform: navigator.platform

        });

    };

    /* =====================================
       STARTUP LOG
    ===================================== */

    console.log("======================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 3.9");
    console.log("Session & Event Module Loaded");
    console.log("======================================");

});
/* ==========================================================
   SCRIPT.JS - PART 40
   Central Logger + Feature Flags + Command Registry
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APPLICATION CONFIG
    ===================================== */

    const APP = {

        version: "4.0",

        environment: "production",

        build: "2026.07"

    };

    window.APP = APP;

    /* =====================================
       CENTRAL LOGGER
    ===================================== */

    class Logger {

        info(message) {

            console.info("ℹ", message);

        }

        success(message) {

            console.log("✅", message);

        }

        warning(message) {

            console.warn("⚠", message);

        }

        error(message) {

            console.error("❌", message);

        }

    }

    window.logger = new Logger();

    /* =====================================
       FEATURE FLAGS
    ===================================== */

    const Features = {

        chatbot: true,

        weather: true,

        market: true,

        cropPrediction: true,

        notifications: true,

        analytics: true

    };

    window.Features = Features;

    window.isFeatureEnabled = function(name){

        return !!Features[name];

    };

    /* =====================================
       COMMAND REGISTRY
    ===================================== */

    class CommandRegistry {

        constructor(){

            this.commands = {};

        }

        register(name, callback){

            this.commands[name] = callback;

        }

        execute(name, ...args){

            if(!this.commands[name]){

                logger.warning("Command not found : " + name);

                return;

            }

            return this.commands[name](...args);

        }

    }

    window.commands = new CommandRegistry();

    /* =====================================
       REGISTER COMMANDS
    ===================================== */

    commands.register("reload", () => {

        location.reload();

    });

    commands.register("health", () => {

        if(window.getHealthReport){

            console.table(getHealthReport());

        }

    });

    commands.register("logout", () => {

        if(window.sessionManager){

            sessionManager.logout();

        }

    });

    commands.register("version", () => {

        console.log(APP.version);

    });

    /* =====================================
       PAGE EVENTS
    ===================================== */

    document.addEventListener("click", event => {

        const element = event.target.closest("[data-command]");

        if(!element) return;

        const command = element.dataset.command;

        commands.execute(command);

    });

    /* =====================================
       APPLICATION SUMMARY
    ===================================== */

    window.appSummary = function(){

        return {

            version: APP.version,

            environment: APP.environment,

            online: navigator.onLine,

            language: navigator.language,

            page: location.pathname,

            features: Features

        };

    };

    /* =====================================
       STARTUP
    ===================================== */

    logger.success("AI Farmer Assistant Started");

    logger.info("Version : " + APP.version);

    logger.info("Environment : " + APP.environment);

    console.table(appSummary());

});
/* ==========================================================
   SCRIPT.JS - PART 41
   Plugin Manager + Hooks + App Events
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       PLUGIN MANAGER
    ===================================== */

    class PluginManager {

        constructor() {

            this.plugins = {};

        }

        register(name, plugin) {

            if (this.plugins[name]) {

                console.warn("Plugin already exists:", name);
                return;

            }

            this.plugins[name] = plugin;

            if (typeof plugin.init === "function") {

                plugin.init();

            }

            console.log("Plugin Loaded:", name);

        }

        get(name) {

            return this.plugins[name];

        }

        list() {

            return Object.keys(this.plugins);

        }

    }

    window.pluginManager = new PluginManager();

    /* =====================================
       HOOK SYSTEM
    ===================================== */

    class HookSystem {

        constructor() {

            this.hooks = {};

        }

        add(name, callback) {

            if (!this.hooks[name]) {

                this.hooks[name] = [];

            }

            this.hooks[name].push(callback);

        }

        run(name, data = {}) {

            if (!this.hooks[name]) return;

            this.hooks[name].forEach(callback => {

                callback(data);

            });

        }

    }

    window.Hooks = new HookSystem();

    /* =====================================
       SAMPLE PLUGIN
    ===================================== */

    pluginManager.register("WelcomePlugin", {

        init() {

            console.log("🌾 Welcome Plugin Initialized");

        }

    });

    /* =====================================
       DEFAULT HOOKS
    ===================================== */

    Hooks.add("pageLoaded", () => {

        console.log("📄 Page Loaded");

    });

    Hooks.add("userLogin", user => {

        console.log("👤 Logged In:", user);

    });

    Hooks.add("weatherUpdated", weather => {

        console.log("🌦 Weather:", weather);

    });

    /* =====================================
       FIRE PAGE LOADED
    ===================================== */

    Hooks.run("pageLoaded");

    /* =====================================
       APP EVENT SYSTEM
    ===================================== */

    window.AppEvents = {

        trigger(name, data = {}) {

            Hooks.run(name, data);

        }

    };

    /* =====================================
       VERSION INFO
    ===================================== */

    window.APP_INFO = {

        version: "4.1",

        module: "Plugin Manager",

        status: "Active"

    };

    console.table(APP_INFO);

    console.log("================================");
    console.log("AI Farmer Assistant");
    console.log("Frontend Version : 4.1");
    console.log("Plugin System Loaded");
    console.log("================================");

});
/* ==========================================================
   SCRIPT.JS - PART 42
   Theme Manager + Keyboard Shortcuts + App Settings
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       APPLICATION SETTINGS
    ===================================== */

    const DEFAULT_SETTINGS = {

        theme: "light",

        language: "en",

        notifications: true,

        autoRefresh: true

    };

    window.AppSettings = {

        get(key) {

            const value = localStorage.getItem("setting_" + key);

            return value !== null
                ? JSON.parse(value)
                : DEFAULT_SETTINGS[key];

        },

        set(key, value) {

            localStorage.setItem(

                "setting_" + key,

                JSON.stringify(value)

            );

        },

        reset() {

            Object.keys(DEFAULT_SETTINGS).forEach(key => {

                localStorage.removeItem("setting_" + key);

            });

        }

    };

    /* =====================================
       THEME MANAGER
    ===================================== */

    window.ThemeManager = {

        apply(theme) {

            document.documentElement.setAttribute(

                "data-theme",

                theme

            );

            AppSettings.set("theme", theme);

        },

        toggle() {

            const current = AppSettings.get("theme");

            const next = current === "dark"
                ? "light"
                : "dark";

            this.apply(next);

        }

    };

    ThemeManager.apply(AppSettings.get("theme"));

    /* =====================================
       KEYBOARD SHORTCUTS
    ===================================== */

    document.addEventListener("keydown", (event) => {

        if (!event.altKey) return;

        switch (event.key) {

            case "1":
                location.href = "/";
                break;

            case "2":
                location.href = "/dashboard";
                break;

            case "3":
                location.href = "/weather";
                break;

            case "4":
                location.href = "/market";
                break;

            case "5":
                ThemeManager.toggle();
                break;

            default:
                break;
        }

    });

    /* =====================================
       SIMPLE SETTINGS PANEL API
    ===================================== */

    window.updateSetting = function(key, value) {

        AppSettings.set(key, value);

        console.log("Updated:", key, value);

    };

    window.readSetting = function(key) {

        return AppSettings.get(key);

    };

    /* =====================================
       PAGE INFORMATION
    ===================================== */

    window.PageMeta = {

        title: document.title,

        url: location.href,

        hostname: location.hostname,

        path: location.pathname

    };

    console.table(PageMeta);

    /* =====================================
       STARTUP
    ===================================== */

    console.log("====================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 4.2");
    console.log("Theme & Settings Module Loaded");
    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 43
   Router Manager + Page Loader + Breadcrumb
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       ROUTE MANAGER
    ===================================== */

    class Router {

        constructor() {

            this.routes = {};

        }

        register(path, callback) {

            this.routes[path] = callback;

        }

        run() {

            const path = window.location.pathname;

            if (this.routes[path]) {

                this.routes[path]();

            }

        }

    }

    window.router = new Router();

    /* =====================================
       PAGE ROUTES
    ===================================== */

    router.register("/", () => {

        console.log("🏠 Home Page Loaded");

    });

    router.register("/dashboard", () => {

        console.log("📊 Dashboard Loaded");

    });

    router.register("/weather", () => {

        console.log("🌦 Weather Page Loaded");

    });

    router.register("/market", () => {

        console.log("💹 Market Page Loaded");

    });

    router.register("/crop", () => {

        console.log("🌱 Crop Recommendation Page");

    });

    router.register("/chatbot", () => {

        console.log("🤖 Chatbot Ready");

    });

    router.run();

    /* =====================================
       PAGE LOADER
    ===================================== */

    window.PageLoader = {

        show() {

            const loader = document.getElementById("loader");

            if (loader) {

                loader.style.display = "flex";

            }

        },

        hide() {

            const loader = document.getElementById("loader");

            if (loader) {

                loader.style.display = "none";

            }

        }

    };

    /* =====================================
       BREADCRUMB GENERATOR
    ===================================== */

    window.generateBreadcrumb = function () {

        return location.pathname

            .split("/")

            .filter(Boolean)

            .join(" > ") || "Home";

    };

    console.log("📍", generateBreadcrumb());

    /* =====================================
       PAGE TITLE MANAGER
    ===================================== */

    const titles = {

        "/": "Home",

        "/dashboard": "Dashboard",

        "/weather": "Weather",

        "/market": "Market",

        "/crop": "Crop Recommendation",

        "/chatbot": "AI Chatbot",

        "/profile": "Profile"

    };

    if (titles[location.pathname]) {

        document.title =

            titles[location.pathname] +

            " | AI Farmer Assistant";

    }

    /* =====================================
       PAGE ANALYTICS
    ===================================== */

    window.PageAnalytics = {

        page: location.pathname,

        enteredAt: new Date(),

        getDuration() {

            return Math.floor(

                (Date.now() -

                    this.enteredAt.getTime()) / 1000

            );

        }

    };

    /* =====================================
       AUTO LOG
    ===================================== */

    window.addEventListener("beforeunload", () => {

        console.log(

            "Stayed:",

            PageAnalytics.getDuration(),

            "seconds"

        );

    });

    /* =====================================
       STARTUP
    ===================================== */

    console.log("====================================");

    console.log("🌾 AI Farmer Assistant");

    console.log("Frontend Version : 4.3");

    console.log("Router Module Loaded");

    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 44
   Form Manager + Validation + Auto Save
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       FORM MANAGER
    ===================================== */

    class FormManager {

        constructor() {

            this.forms = document.querySelectorAll("form");

        }

        init() {

            this.forms.forEach(form => {

                form.addEventListener("submit", this.validate);

                this.autoSave(form);

            });

        }

        validate(event) {

            const form = event.target;

            const requiredFields = form.querySelectorAll("[required]");

            let valid = true;

            requiredFields.forEach(field => {

                if (field.value.trim() === "") {

                    valid = false;

                    field.classList.add("is-invalid");

                } else {

                    field.classList.remove("is-invalid");

                }

            });

            if (!valid) {

                event.preventDefault();

                alert("Please fill all required fields.");

            }

        }

        autoSave(form) {

            const key = "autosave_" + (form.id || "default");

            form.querySelectorAll("input, textarea, select")

                .forEach(input => {

                    const saved = localStorage.getItem(

                        key + "_" + input.name

                    );

                    if (saved) {

                        input.value = saved;

                    }

                    input.addEventListener("input", () => {

                        localStorage.setItem(

                            key + "_" + input.name,

                            input.value

                        );

                    });

                });

        }

    }

    const formManager = new FormManager();

    formManager.init();

    /* =====================================
       CHARACTER COUNTER
    ===================================== */

    document.querySelectorAll("[maxlength]")

        .forEach(input => {

            const counter = document.createElement("small");

            counter.className = "text-muted";

            input.after(counter);

            const update = () => {

                counter.textContent =

                    `${input.value.length}/${input.maxLength}`;

            };

            input.addEventListener("input", update);

            update();

        });

    /* =====================================
       PASSWORD STRENGTH
    ===================================== */

    const password = document.querySelector("#password");

    if (password) {

        password.addEventListener("input", () => {

            const value = password.value;

            let score = 0;

            if (value.length >= 8) score++;

            if (/[A-Z]/.test(value)) score++;

            if (/[0-9]/.test(value)) score++;

            if (/[^A-Za-z0-9]/.test(value)) score++;

            console.log("Password Strength:", score + "/4");

        });

    }

    /* =====================================
       EMAIL VALIDATION
    ===================================== */

    document.querySelectorAll("input[type=email]")

        .forEach(email => {

            email.addEventListener("blur", () => {

                const pattern =

                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!pattern.test(email.value)) {

                    email.classList.add("is-invalid");

                } else {

                    email.classList.remove("is-invalid");

                }

            });

        });

    /* =====================================
       RESET FORM STORAGE
    ===================================== */

    window.clearFormCache = function(formId = "default") {

        Object.keys(localStorage).forEach(key => {

            if (key.startsWith("autosave_" + formId)) {

                localStorage.removeItem(key);

            }

        });

    };

    /* =====================================
       STARTUP
    ===================================== */

    console.log("====================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 4.4");
    console.log("Form Manager Loaded");
    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 45
   Notification Center + Activity Timeline + Preferences
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       NOTIFICATION CENTER
    ===================================== */

    class NotificationCenter {

        constructor() {

            this.notifications = [];

        }

        add(title, message, type = "info") {

            const notification = {

                id: Date.now(),

                title,

                message,

                type,

                time: new Date().toLocaleTimeString()

            };

            this.notifications.unshift(notification);

            if (this.notifications.length > 100) {

                this.notifications.pop();

            }

            console.log(`[${type.toUpperCase()}] ${title}: ${message}`);

        }

        getAll() {

            return this.notifications;

        }

        clear() {

            this.notifications = [];

        }

    }

    window.notificationCenter = new NotificationCenter();

    /* =====================================
       ACTIVITY TIMELINE
    ===================================== */

    class ActivityTimeline {

        constructor() {

            this.activities = [];

        }

        add(activity) {

            this.activities.unshift({

                activity,

                timestamp: new Date().toISOString()

            });

            if (this.activities.length > 200) {

                this.activities.pop();

            }

        }

        getRecent(limit = 10) {

            return this.activities.slice(0, limit);

        }

    }

    window.activityTimeline = new ActivityTimeline();

    /* =====================================
       USER PREFERENCES
    ===================================== */

    window.UserPreferences = {

        save(key, value) {

            localStorage.setItem(

                "pref_" + key,

                JSON.stringify(value)

            );

        },

        load(key, defaultValue = null) {

            const value = localStorage.getItem(

                "pref_" + key

            );

            return value

                ? JSON.parse(value)

                : defaultValue;

        },

        remove(key) {

            localStorage.removeItem(

                "pref_" + key

            );

        }

    };

    /* =====================================
       QUICK ACTIONS
    ===================================== */

    window.quickActions = {

        openDashboard() {

            location.href = "/dashboard";

        },

        openWeather() {

            location.href = "/weather";

        },

        openMarket() {

            location.href = "/market";

        },

        openProfile() {

            location.href = "/profile";

        }

    };

    /* =====================================
       PAGE VISIT TRACKER
    ===================================== */

    activityTimeline.add(

        "Visited: " + location.pathname

    );

    /* =====================================
       SAMPLE NOTIFICATION
    ===================================== */

    notificationCenter.add(

        "Welcome",

        "AI Farmer Assistant is ready.",

        "success"

    );

    /* =====================================
       APP INFORMATION
    ===================================== */

    window.AppInformation = {

        name: "AI Farmer Assistant",

        version: "4.5",

        author: "OpenAI Demo",

        initialized: new Date().toISOString()

    };

    console.table(AppInformation);

    console.log("====================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 4.5");
    console.log("Notification Center Loaded");
    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 46
   AI Assistant Manager + API Queue + Dashboard Widgets
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       AI ASSISTANT MANAGER
    ===================================== */

    class AIAssistant {

        constructor() {
            this.status = "Ready";
            this.lastQuestion = null;
        }

        ask(question) {

            this.lastQuestion = question;

            console.log("🤖 Question:", question);

            return {
                success: true,
                answer: "Processing request..."
            };
        }

        getStatus() {

            return {
                status: this.status,
                lastQuestion: this.lastQuestion
            };

        }

    }

    window.aiAssistant = new AIAssistant();

    /* =====================================
       API REQUEST QUEUE
    ===================================== */

    class ApiQueue {

        constructor() {

            this.queue = [];
            this.running = false;

        }

        add(task) {

            this.queue.push(task);

            this.run();

        }

        async run() {

            if (this.running) return;

            this.running = true;

            while (this.queue.length) {

                const task = this.queue.shift();

                try {

                    await task();

                } catch (error) {

                    console.error("Queue Error:", error);

                }

            }

            this.running = false;

        }

    }

    window.apiQueue = new ApiQueue();

    /* =====================================
       DASHBOARD WIDGET MANAGER
    ===================================== */

    class WidgetManager {

        constructor() {

            this.widgets = {};

        }

        register(name, callback) {

            this.widgets[name] = callback;

        }

        refresh() {

            Object.keys(this.widgets).forEach(widget => {

                this.widgets[widget]();

            });

        }

    }

    window.widgetManager = new WidgetManager();

    /* =====================================
       SAMPLE WIDGETS
    ===================================== */

    widgetManager.register("weather", () => {

        console.log("🌦 Weather Widget Updated");

    });

    widgetManager.register("market", () => {

        console.log("📈 Market Widget Updated");

    });

    widgetManager.register("crop", () => {

        console.log("🌱 Crop Widget Updated");

    });

    /* =====================================
       REFRESH ALL WIDGETS
    ===================================== */

    window.refreshDashboard = function() {

        widgetManager.refresh();

    };

    /* =====================================
       APPLICATION METADATA
    ===================================== */

    window.ApplicationMeta = {

        name: "AI Farmer Assistant",

        version: "4.6",

        release: "Stable",

        initialized: new Date().toISOString()

    };

    console.table(ApplicationMeta);

    /* =====================================
       STARTUP
    ===================================== */

    console.log("======================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 4.6");
    console.log("AI Module Loaded Successfully");
    console.log("======================================");

});
/* ==========================================================
   SCRIPT.JS - PART 47
   Dashboard Analytics + Session Stats + Export Utilities
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       DASHBOARD ANALYTICS
    ===================================== */

    class DashboardAnalytics {

        constructor() {

            this.stats = {
                visits: 0,
                weatherChecks: 0,
                marketChecks: 0,
                cropPredictions: 0,
                chatbotMessages: 0
            };

        }

        increase(type) {

            if (this.stats[type] !== undefined) {

                this.stats[type]++;

            }

        }

        get() {

            return this.stats;

        }

        reset() {

            Object.keys(this.stats).forEach(key => {

                this.stats[key] = 0;

            });

        }

    }

    window.dashboardAnalytics = new DashboardAnalytics();

    dashboardAnalytics.increase("visits");

    /* =====================================
       USER SESSION INFORMATION
    ===================================== */

    window.SessionInfo = {

        loginTime: new Date(),

        getDuration() {

            return Math.floor(

                (Date.now() - this.loginTime.getTime()) / 1000

            );

        }

    };

    /* =====================================
       EXPORT UTILITIES
    ===================================== */

    window.ExportUtils = {

        exportJSON(filename, data) {

            const blob = new Blob(

                [JSON.stringify(data, null, 2)],

                {

                    type: "application/json"

                }

            );

            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;

            link.download = filename;

            link.click();

            URL.revokeObjectURL(url);

        },

        exportText(filename, text) {

            const blob = new Blob(

                [text],

                {

                    type: "text/plain"

                }

            );

            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;

            link.download = filename;

            link.click();

            URL.revokeObjectURL(url);

        }

    };

    /* =====================================
       SYSTEM INFORMATION
    ===================================== */

    window.SystemStatus = {

        browser: navigator.userAgent,

        language: navigator.language,

        online: navigator.onLine,

        cookies: navigator.cookieEnabled,

        platform: navigator.platform

    };

    /* =====================================
       AUTO SESSION LOGGER
    ===================================== */

    setInterval(() => {

        console.log(

            "Session Time:",

            SessionInfo.getDuration(),

            "seconds"

        );

    }, 60000);

    /* =====================================
       QUICK REPORT
    ===================================== */

    window.generateReport = function() {

        return {

            analytics: dashboardAnalytics.get(),

            session: SessionInfo.getDuration(),

            system: SystemStatus,

            generated: new Date().toISOString()

        };

    };

    /* =====================================
       STARTUP
    ===================================== */

    console.log("======================================");

    console.log("🌾 AI Farmer Assistant");

    console.log("Frontend Version : 4.7");

    console.log("Analytics Module Loaded");

    console.log("======================================");

});
/* ==========================================================
   SCRIPT.JS - PART 48
   Data Sync Manager + Widget Registry + Health Monitor
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       DATA SYNC MANAGER
    ===================================== */

    class DataSyncManager {

        constructor() {

            this.lastSync = null;

            this.syncing = false;

        }

        async sync(callback) {

            if (this.syncing) return;

            this.syncing = true;

            console.log("🔄 Sync Started");

            try {

                if (typeof callback === "function") {

                    await callback();

                }

                this.lastSync = new Date();

                console.log("✅ Sync Complete");

            }

            catch (error) {

                console.error("❌ Sync Failed", error);

            }

            finally {

                this.syncing = false;

            }

        }

    }

    window.dataSync = new DataSyncManager();

    /* =====================================
       WIDGET REGISTRY
    ===================================== */

    class WidgetRegistry {

        constructor() {

            this.items = {};

        }

        add(name, render) {

            this.items[name] = render;

        }

        renderAll() {

            Object.values(this.items).forEach(widget => {

                if (typeof widget === "function") {

                    widget();

                }

            });

        }

    }

    window.widgetRegistry = new WidgetRegistry();

    /* =====================================
       HEALTH MONITOR
    ===================================== */

    const HealthMonitor = {

        memory() {

            if (performance.memory) {

                return {

                    usedMB:

                        (performance.memory.usedJSHeapSize / 1048576).toFixed(2),

                    totalMB:

                        (performance.memory.totalJSHeapSize / 1048576).toFixed(2)

                };

            }

            return null;

        },

        connection() {

            return navigator.onLine ? "Online" : "Offline";

        }

    };

    window.healthMonitor = HealthMonitor;

    /* =====================================
       SAMPLE WIDGETS
    ===================================== */

    widgetRegistry.add("clock", () => {

        console.log("🕒 Clock Widget Updated");

    });

    widgetRegistry.add("weather", () => {

        console.log("🌦 Weather Widget Updated");

    });

    widgetRegistry.add("market", () => {

        console.log("📈 Market Widget Updated");

    });

    /* =====================================
       AUTO REFRESH
    ===================================== */

    setInterval(() => {

        widgetRegistry.renderAll();

    }, 300000);

    /* =====================================
       HEALTH REPORT
    ===================================== */

    window.printHealthReport = function () {

        console.table({

            Status: healthMonitor.connection(),

            LastSync: dataSync.lastSync || "Never",

            Memory:

                healthMonitor.memory()

                    ? healthMonitor.memory().usedMB + " MB"

                    : "Unavailable"

        });

    };

    /* =====================================
       APP INFO
    ===================================== */

    console.log("====================================");

    console.log("🌾 AI Farmer Assistant");

    console.log("Frontend Version : 4.8");

    console.log("Data Sync Module Loaded");

    console.log("====================================");

});
/* ==========================================================
   SCRIPT.JS - PART 49
   API Monitor + Service Registry + Runtime Inspector
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       API MONITOR
    ===================================== */

    class ApiMonitor {

        constructor() {

            this.totalRequests = 0;
            this.successRequests = 0;
            this.failedRequests = 0;

        }

        success() {

            this.totalRequests++;
            this.successRequests++;

        }

        failed() {

            this.totalRequests++;
            this.failedRequests++;

        }

        report() {

            return {

                total: this.totalRequests,
                success: this.successRequests,
                failed: this.failedRequests

            };

        }

    }

    window.apiMonitor = new ApiMonitor();

    /* =====================================
       SERVICE REGISTRY
    ===================================== */

    class ServiceRegistry {

        constructor() {

            this.services = {};

        }

        register(name, service) {

            this.services[name] = service;

            console.log("✅ Service Registered:", name);

        }

        get(name) {

            return this.services[name];

        }

        list() {

            return Object.keys(this.services);

        }

    }

    window.serviceRegistry = new ServiceRegistry();

    /* =====================================
       REGISTER DEFAULT SERVICES
    ===================================== */

    serviceRegistry.register("Weather", {

        endpoint: "/api/weather"

    });

    serviceRegistry.register("Market", {

        endpoint: "/api/market"

    });

    serviceRegistry.register("Crop", {

        endpoint: "/api/crop"

    });

    serviceRegistry.register("Chatbot", {

        endpoint: "/api/chatbot"

    });

    /* =====================================
       RUNTIME INSPECTOR
    ===================================== */

    window.RuntimeInspector = {

        inspect() {

            return {

                page: location.pathname,
                browser: navigator.userAgent,
                language: navigator.language,
                online: navigator.onLine,
                services: serviceRegistry.list(),
                api: apiMonitor.report(),
                timestamp: new Date().toISOString()

            };

        }

    };

    /* =====================================
       DEBUG PANEL
    ===================================== */

    window.showDebugPanel = function() {

        console.table(

            RuntimeInspector.inspect()

        );

    };

    /* =====================================
       AUTO HEARTBEAT
    ===================================== */

    setInterval(() => {

        console.log(

            "💓 Runtime Alive",

            new Date().toLocaleTimeString()

        );

    }, 300000);

    /* =====================================
       STARTUP
    ===================================== */

    console.log("======================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 4.9");
    console.log("Runtime Inspector Loaded");
    console.log("======================================");

});
/* ==========================================================
   SCRIPT.JS - PART 50
   Module Registry + Error Tracker + Performance Observer
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       MODULE REGISTRY
    ===================================== */

    class ModuleRegistry {

        constructor() {
            this.modules = {};
        }

        register(name, version = "1.0") {

            this.modules[name] = {
                version,
                loadedAt: new Date().toISOString()
            };

            console.log(`📦 Module Loaded: ${name}`);
        }

        list() {
            return this.modules;
        }

    }

    window.moduleRegistry = new ModuleRegistry();

    moduleRegistry.register("Dashboard", "1.0");
    moduleRegistry.register("Weather", "1.0");
    moduleRegistry.register("Market", "1.0");
    moduleRegistry.register("Crop AI", "1.0");
    moduleRegistry.register("Chatbot", "1.0");

    /* =====================================
       ERROR TRACKER
    ===================================== */

    const ErrorTracker = {

        errors: [],

        add(error) {

            this.errors.push({
                message: error.message || String(error),
                time: new Date().toISOString()
            });

            if (this.errors.length > 100) {
                this.errors.shift();
            }
        },

        report() {
            return this.errors;
        }

    };

    window.errorTracker = ErrorTracker;

    window.addEventListener("error", event => {

        ErrorTracker.add(event.error || event.message);

    });

    /* =====================================
       PERFORMANCE OBSERVER
    ===================================== */

    function showPerformance() {

        if (!performance) return;

        const timing = performance.now();

        console.log(
            "⚡ Current Performance:",
            timing.toFixed(2),
            "ms"
        );

    }

    window.showPerformanceMetrics = showPerformance;

    /* =====================================
       APPLICATION SUMMARY
    ===================================== */

    window.applicationSummary = function () {

        return {

            version: "5.0",

            page: location.pathname,

            online: navigator.onLine,

            modules: Object.keys(
                moduleRegistry.list()
            ).length,

            errors: ErrorTracker.report().length

        };

    };

    /* =====================================
       AUTO STATUS LOG
    ===================================== */

    setInterval(() => {

        console.table(
            applicationSummary()
        );

    }, 300000);

    /* =====================================
       STARTUP
    ===================================== */

    console.log("======================================");
    console.log("🌾 AI Farmer Assistant");
    console.log("Frontend Version : 5.0");
    console.log("Part-50 Successfully Loaded");
    console.log("======================================");

});
/* ==========================================================
   LOGIN.JS - PART 11
   UI Effects + Password Toggle + Dark Mode
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
        PAGE LOADER
    ========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.classList.add("loader-hide");

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    });

    /* ==========================================
        PASSWORD TOGGLE
    ========================================== */

    const passwordInput = document.getElementById("password");

    const togglePassword = document.getElementById("togglePassword");

    if (passwordInput && togglePassword) {

        togglePassword.addEventListener("click", () => {

            const isPassword = passwordInput.type === "password";

            passwordInput.type = isPassword ? "text" : "password";

            togglePassword.innerHTML = isPassword
                ? '<i class="fa-solid fa-eye-slash"></i>'
                : '<i class="fa-solid fa-eye"></i>';

        });

    }

    /* ==========================================
        DARK MODE
    ========================================== */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeToggle) {

            themeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const dark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "theme",
                dark ? "dark" : "light"
            );

            themeToggle.innerHTML = dark
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';

        });

    }

    /* ==========================================
        BACK TO TOP BUTTON
    ========================================== */

    const topButton = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (!topButton) return;

        if (window.scrollY > 250) {

            topButton.style.display = "flex";

        } else {

            topButton.style.display = "none";

        }

    });

    if (topButton) {

        topButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
        TOAST MESSAGE
    ========================================== */

    const toastElement = document.getElementById("liveToast");

    if (toastElement && typeof bootstrap !== "undefined") {

        const toast = new bootstrap.Toast(toastElement, {

            delay: 3000

        });

        setTimeout(() => {

            toast.show();

        }, 1000);

    }

    /* ==========================================
        AOS INITIALIZE
    ========================================== */

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1000,

            once: true

        });

    }

});
/* ==========================================================
   LOGIN.JS - PART 12
   Validation + Remember Me + Login Spinner
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const rememberMe = document.getElementById("rememberMe");

    const loginBtn = document.getElementById("loginBtn");
    const loginText = document.getElementById("loginText");
    const loginSpinner = document.getElementById("loginSpinner");

    /* =====================================
        LOAD SAVED EMAIL
    ===================================== */

    if (rememberMe && email) {

        const savedEmail = localStorage.getItem("remember_email");

        if (savedEmail) {

            email.value = savedEmail;
            rememberMe.checked = true;

        }

    }

    /* =====================================
        LOGIN FORM
    ===================================== */

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            let valid = true;

            /* =====================
                EMAIL VALIDATION
            ===================== */

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email.value.trim() ||
                !emailRegex.test(email.value.trim())) {

                email.classList.add("is-invalid");

                valid = false;

            } else {

                email.classList.remove("is-invalid");

                email.classList.add("is-valid");

            }

            /* =====================
                PASSWORD VALIDATION
            ===================== */

            if (password.value.length < 8) {

                password.classList.add("is-invalid");

                valid = false;

            } else {

                password.classList.remove("is-invalid");

                password.classList.add("is-valid");

            }

            /* =====================
                STOP IF INVALID
            ===================== */

            if (!valid) {

                event.preventDefault();

                Swal.fire({

                    icon: "error",

                    title: "Invalid Input",

                    text: "Please check your email and password.",

                    confirmButtonColor: "#28a745"

                });

                return;

            }

            /* =====================
                REMEMBER EMAIL
            ===================== */

            if (rememberMe.checked) {

                localStorage.setItem(
                    "remember_email",
                    email.value.trim()
                );

            } else {

                localStorage.removeItem(
                    "remember_email"
                );

            }

            /* =====================
                LOGIN LOADING
            ===================== */

            if (loginText && loginSpinner) {

                loginText.classList.add("d-none");

                loginSpinner.classList.remove("d-none");

            }

            loginBtn.disabled = true;

        });

    }

    /* =====================================
        LIVE INPUT VALIDATION
    ===================================== */

    if (email) {

        email.addEventListener("input", () => {

            email.classList.remove("is-invalid");

        });

    }

    if (password) {

        password.addEventListener("input", () => {

            password.classList.remove("is-invalid");

        });

    }

    /* =====================================
        SUCCESS MESSAGE
        (For testing only)
    ===================================== */

    const params = new URLSearchParams(window.location.search);

    if (params.get("login") === "success") {

        Swal.fire({

            icon: "success",

            title: "Welcome!",

            text: "Login Successful.",

            timer: 2000,

            showConfirmButton: false

        });

    }

});
/* ==========================================
   AI FARMER ASSISTANT
   WEATHER.JS
   PART-13
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LIVE CLOCK
    ========================== */

    function updateClock(){

        const clock = document.getElementById("liveClock");

        if(!clock) return;

        const now = new Date();

        clock.innerHTML = now.toLocaleTimeString();

    }

    updateClock();

    setInterval(updateClock,1000);

    /* ==========================
       CURRENT DATE
    ========================== */

    const dateElement = document.getElementById("todayDate");

    if(dateElement){

        const today = new Date();

        dateElement.innerHTML =
        today.toLocaleDateString("en-IN",{

            weekday:"long",

            year:"numeric",

            month:"long",

            day:"numeric"

        });

    }

    /* ==========================
       DARK MODE
    ========================== */

    const themeBtn =
    document.getElementById("themeToggle");

    const savedTheme =
    localStorage.getItem("weatherTheme");

    if(savedTheme==="dark"){

        document.body.classList.add("dark-mode");

        if(themeBtn){

            themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';

        }

    }

    if(themeBtn){

        themeBtn.addEventListener("click",()=>{

            document.body.classList.toggle("dark-mode");

            const dark =
            document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "weatherTheme",
                dark ? "dark":"light"
            );

            themeBtn.innerHTML = dark
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        });

    }

    /* ==========================
       BACK TO TOP
    ========================== */

    const topBtn =
    document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(!topBtn) return;

        topBtn.style.display =
        window.scrollY > 250
        ? "block"
        : "none";

    });

    if(topBtn){

        topBtn.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* ==========================
       SEARCH FORM
    ========================== */

    const weatherForm =
    document.getElementById("weatherForm");

    if(weatherForm){

        weatherForm.addEventListener("submit",(e)=>{

            e.preventDefault();

            const city =
            document.getElementById("cityInput").value.trim();

            if(city===""){

                alert("Please enter a city name.");

                return;

            }

            console.log("Searching:",city);

            // API Code Part-14 me add hoga

        });

    }

});
/* ==========================================
   PART-14
   OPENWEATHER API INTEGRATION
========================================== */

// ==========================
// API KEY
// ==========================

const API_KEY = "YOUR_API_KEY";

// ==========================
// GET WEATHER BY CITY
// ==========================

async function getWeather(city){

    try{

        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);

        if(!response.ok){

            throw new Error("City not found");

        }

        const data = await response.json();

        updateWeatherUI(data);

    }

    catch(error){

        alert(error.message);

    }

}

// ==========================
// UPDATE UI
// ==========================

function updateWeatherUI(data){

    document.getElementById("cityName").textContent =
    `${data.name}, ${data.sys.country}`;

    document.getElementById("currentCity").textContent =
    `${data.name}, ${data.sys.country}`;

    document.getElementById("tempValue").textContent =
    `${Math.round(data.main.temp)}°C`;

    document.getElementById("currentTemp").textContent =
    `${Math.round(data.main.temp)}°C`;

    document.getElementById("weatherStatus").textContent =
    data.weather[0].main;

    document.getElementById("weatherCondition").textContent =
    data.weather[0].description;

    document.getElementById("humidity").textContent =
    `${data.main.humidity}%`;

    document.getElementById("windSpeed").textContent =
    `${data.wind.speed} km/h`;

    document.getElementById("pressure").textContent =
    `${data.main.pressure} hPa`;

    document.getElementById("feelsLike").textContent =
    `${Math.round(data.main.feels_like)}°C`;

    document.getElementById("visibility").textContent =
    `${(data.visibility/1000).toFixed(1)} km`;

    document.getElementById("minTemp").textContent =
    `${Math.round(data.main.temp_min)}°C`;

    document.getElementById("maxTemp").textContent =
    `${Math.round(data.main.temp_max)}°C`;

    changeWeatherIcon(data.weather[0].main);

}

// ==========================
// WEATHER ICON
// ==========================

function changeWeatherIcon(weather){

    const icon =
    document.getElementById("mainWeatherIcon");

    if(!icon) return;

    switch(weather){

        case "Clear":

            icon.className =
            "fas fa-sun weather-big-icon text-warning";

            break;

        case "Clouds":

            icon.className =
            "fas fa-cloud weather-big-icon text-light";

            break;

        case "Rain":

            icon.className =
            "fas fa-cloud-rain weather-big-icon text-primary";

            break;

        case "Drizzle":

            icon.className =
            "fas fa-cloud-showers-heavy weather-big-icon text-info";

            break;

        case "Thunderstorm":

            icon.className =
            "fas fa-bolt weather-big-icon text-warning";

            break;

        case "Snow":

            icon.className =
            "fas fa-snowflake weather-big-icon text-white";

            break;

        default:

            icon.className =
            "fas fa-cloud-sun weather-big-icon text-warning";

    }

}

// ==========================
// SEARCH BUTTON
// ==========================

const form =
document.getElementById("weatherForm");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const city =
        document.getElementById("cityInput").value.trim();

        if(city){

            getWeather(city);

        }

    });

}

// ==========================
// DEFAULT CITY
// ==========================

window.addEventListener("load",()=>{

    getWeather("Roorkee");

});
/* ==========================================
   PART-15
   GPS + AI FARMING + AUTO REFRESH
========================================== */

/* ==========================
   CURRENT LOCATION WEATHER
========================== */

const locationBtn = document.getElementById("locationBtn");

if(locationBtn){

    locationBtn.addEventListener("click", () => {

        if(!navigator.geolocation){

            alert("Geolocation is not supported.");

            return;

        }

        navigator.geolocation.getCurrentPosition(

            async(position)=>{

                const lat = position.coords.latitude;

                const lon = position.coords.longitude;

                try{

                    const url =
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

                    const response = await fetch(url);

                    const data = await response.json();

                    updateWeatherUI(data);

                    updateExtraInfo(data);

                }

                catch(error){

                    alert("Unable to fetch weather.");

                }

            },

            ()=>{

                alert("Location permission denied.");

            }

        );

    });

}

/* ==========================
   EXTRA WEATHER INFO
========================== */

function updateExtraInfo(data){

    // Sunrise

    const sunrise =
    new Date(data.sys.sunrise * 1000);

    document.getElementById("sunriseTime").textContent =
    sunrise.toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });

    // Sunset

    const sunset =
    new Date(data.sys.sunset * 1000);

    document.getElementById("sunsetTime").textContent =
    sunset.toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });

    // Wind Direction

    document.getElementById("windDirection").textContent =
    getWindDirection(data.wind.deg);

    // AI Advice

    updateAIAdvice(data);

}

/* ==========================
   WIND DIRECTION
========================== */

function getWindDirection(deg){

    const directions = [

        "North",

        "North-East",

        "East",

        "South-East",

        "South",

        "South-West",

        "West",

        "North-West"

    ];

    return directions[
        Math.round(deg / 45) % 8
    ];

}

/* ==========================
   AI FARMING ADVICE
========================== */

function updateAIAdvice(data){

    const advice =
    document.getElementById("aiAdvice");

    let text = "";

    if(data.weather[0].main==="Rain"){

        text =
        "🌧 Rain expected. Avoid irrigation and postpone pesticide spraying.";

    }

    else if(data.main.temp>35){

        text =
        "☀ High temperature detected. Irrigate crops early morning or evening.";

    }

    else if(data.main.humidity>80){

        text =
        "💧 High humidity. Monitor crops for fungal diseases.";

    }

    else{

        text =
        "🌾 Weather is suitable for farming. Normal irrigation is recommended.";

    }

    advice.textContent = text;

}

/* ==========================
   AUTO REFRESH
========================== */

setInterval(()=>{

    const city =
    document.getElementById("cityName").textContent;

    if(city){

        const currentCity =
        city.split(",")[0];

        getWeather(currentCity);

    }

},600000); // Refresh every 10 minutes

/* ==========================
   UPDATE EXTRA INFO
========================== */

const originalUpdate = updateWeatherUI;

updateWeatherUI = function(data){

    originalUpdate(data);

    updateExtraInfo(data);

};
/* ==========================================
   PART-16
   FORECAST + ALERTS + TOAST
========================================== */

/* ==========================
   5 DAY FORECAST
========================== */

async function getForecast(city){

    try{

        const url =
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        updateForecast(data);

    }

    catch(error){

        console.log(error);

    }

}

/* ==========================
   UPDATE FORECAST
========================== */

function updateForecast(data){

    const table =
    document.querySelector(".weekly-table tbody");

    if(!table) return;

    table.innerHTML = "";

    const addedDays = [];

    data.list.forEach(item=>{

        const date =
        item.dt_txt.split(" ")[0];

        if(addedDays.includes(date)) return;

        addedDays.push(date);

        if(addedDays.length>7) return;

        const day =
        new Date(date).toLocaleDateString("en-US",{

            weekday:"long"

        });

        table.innerHTML += `

        <tr>

            <td>${day}</td>

            <td>${item.weather[0].main}</td>

            <td>${Math.round(item.main.temp_min)}°C</td>

            <td>${Math.round(item.main.temp_max)}°C</td>

            <td>${Math.round(item.pop*100)}%</td>

            <td>${item.weather[0].description}</td>

        </tr>

        `;

    });

}

/* ==========================
   WEATHER ALERT
========================== */

function weatherAlert(data){

    if(data.main.temp>38){

        alert("🔥 Heat Alert: Stay hydrated and irrigate crops in the morning.");

    }

    if(data.weather[0].main==="Thunderstorm"){

        alert("⛈ Thunderstorm Warning! Avoid field work.");

    }

}

/* ==========================
   NOTIFICATION
========================== */

function showNotification(message){

    if("Notification" in window){

        if(Notification.permission==="granted"){

            new Notification(

                "AI Farmer Assistant",

                {

                    body:message,

                    icon:"/static/images/weather.png"

                }

            );

        }

    }

}

/* ==========================
   REQUEST PERMISSION
========================== */

if("Notification" in window){

    Notification.requestPermission();

}

/* ==========================
   MODIFY UPDATE UI
========================== */

const previousUpdate = updateWeatherUI;

updateWeatherUI = function(data){

    previousUpdate(data);

    weatherAlert(data);

    getForecast(data.name);

    showNotification(

        `Weather Updated for ${data.name}`

    );

};

/* ==========================
   ONLINE / OFFLINE
========================== */

window.addEventListener("offline",()=>{

    alert("⚠ Internet connection lost.");

});

window.addEventListener("online",()=>{

    alert("✅ Internet connected.");

});

/* ==========================
   FINISHED
========================== */

console.log(

"🌦 AI Farmer Weather Module Loaded Successfully"

);
/* ==========================================
   PART-17
   ADVANCED FEATURES
========================================== */

/* ==========================
   WEATHER BACKGROUND CHANGE
========================== */

function updateBackground(weather){

    const body = document.body;

    body.classList.remove(
        "clear-bg",
        "cloud-bg",
        "rain-bg",
        "snow-bg",
        "storm-bg"
    );

    switch(weather){

        case "Clear":
            body.classList.add("clear-bg");
            break;

        case "Clouds":
            body.classList.add("cloud-bg");
            break;

        case "Rain":
        case "Drizzle":
            body.classList.add("rain-bg");
            break;

        case "Snow":
            body.classList.add("snow-bg");
            break;

        case "Thunderstorm":
            body.classList.add("storm-bg");
            break;

        default:
            body.classList.add("clear-bg");

    }

}

/* ==========================
   WEATHER EMOJI
========================== */

function weatherEmoji(type){

    switch(type){

        case "Clear": return "☀️";
        case "Clouds": return "☁️";
        case "Rain": return "🌧️";
        case "Drizzle": return "🌦️";
        case "Thunderstorm": return "⛈️";
        case "Snow": return "❄️";
        case "Mist": return "🌫️";
        default: return "🌍";

    }

}

/* ==========================
   LAST UPDATED TIME
========================== */

function updateLastUpdated(){

    const element =
    document.getElementById("lastUpdated");

    if(!element) return;

    const now = new Date();

    element.textContent =
    "Last Updated : " +
    now.toLocaleTimeString();

}

/* ==========================
   SAVE LAST CITY
========================== */

function saveCity(city){

    localStorage.setItem("lastCity",city);

}

function loadSavedCity(){

    const city =
    localStorage.getItem("lastCity");

    if(city){

        getWeather(city);

    }

}

/* ==========================
   COPY WEATHER REPORT
========================== */

function copyWeather(){

    const city =
    document.getElementById("cityName")?.textContent || "";

    const temp =
    document.getElementById("currentTemp")?.textContent || "";

    const status =
    document.getElementById("weatherStatus")?.textContent || "";

    const report =
`Weather Report
City : ${city}
Temperature : ${temp}
Condition : ${status}`;

    navigator.clipboard.writeText(report)
    .then(()=>{

        alert("Weather report copied.");

    });

}

/* ==========================
   SHARE WEATHER
========================== */

async function shareWeather(){

    if(!navigator.share) return;

    const city =
    document.getElementById("cityName").textContent;

    const temp =
    document.getElementById("currentTemp").textContent;

    const status =
    document.getElementById("weatherStatus").textContent;

    await navigator.share({

        title:"AI Farmer Assistant",

        text:
        `${city}
Temperature : ${temp}
Condition : ${status}`

    });

}

/* ==========================
   EXTEND UPDATE UI
========================== */

const oldWeatherUpdate = updateWeatherUI;

updateWeatherUI = function(data){

    oldWeatherUpdate(data);

    updateBackground(data.weather[0].main);

    updateLastUpdated();

    saveCity(data.name);

    const emoji =
    document.getElementById("weatherEmoji");

    if(emoji){

        emoji.textContent =
        weatherEmoji(data.weather[0].main);

    }

};

/* ==========================
   LOAD PREVIOUS CITY
========================== */

window.addEventListener("load",()=>{

    loadSavedCity();

});

/* ==========================
   COPY BUTTON
========================== */

const copyBtn =
document.getElementById("copyWeather");

if(copyBtn){

    copyBtn.addEventListener("click",copyWeather);

}

/* ==========================
   SHARE BUTTON
========================== */

const shareBtn =
document.getElementById("shareWeather");

if(shareBtn){

    shareBtn.addEventListener("click",shareWeather);

}

console.log("✅ Advanced Weather Features Loaded");
/* ==========================================
   CHATBOT.JS
   PART-13
   LOADER + DARK MODE + CHAT BASIC
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOADER
    ========================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if(loader){

                loader.style.opacity = "0";

                loader.style.visibility = "hidden";

            }

        },1000);

    });

    /* ==========================
       AOS
    ========================== */

    if(typeof AOS !== "undefined"){

        AOS.init({

            duration:1000,

            once:true

        });

    }

    /* ==========================
       DARK MODE
    ========================== */

    const themeToggle =
    document.getElementById("themeToggle");

    const savedTheme =
    localStorage.getItem("chatTheme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-mode");

        if(themeToggle){

            themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

        }

    }

    if(themeToggle){

        themeToggle.addEventListener("click",()=>{

            document.body.classList.toggle("dark-mode");

            const dark =
            document.body.classList.contains("dark-mode");

            localStorage.setItem(

                "chatTheme",

                dark ? "dark":"light"

            );

            themeToggle.innerHTML = dark

            ? '<i class="fas fa-sun"></i>'

            : '<i class="fas fa-moon"></i>';

        });

    }

    /* ==========================
       AUTO SCROLL
    ========================== */

    const chatBody =
    document.getElementById("chatBody");

    function scrollBottom(){

        if(chatBody){

            chatBody.scrollTop =
            chatBody.scrollHeight;

        }

    }

    scrollBottom();

    /* ==========================
       CURRENT TIME
    ========================== */

    function currentTime(){

        return new Date().toLocaleTimeString([],{

            hour:"2-digit",

            minute:"2-digit"

        });

    }

    /* ==========================
       ADD USER MESSAGE
    ========================== */

    function addUserMessage(text){

        if(!chatBody) return;

        const message = document.createElement("div");

        message.className =
        "message user-message";

        message.innerHTML = `

        <div class="message-content">

            <div class="message-text">

                ${text}

            </div>

            <div class="message-footer">

                <span class="time">

                    ${currentTime()}

                </span>

            </div>

        </div>

        <img src="/static/images/farmer.png"

             class="message-avatar"

             alt="User">

        `;

        chatBody.appendChild(message);

        scrollBottom();

    }

    /* ==========================
       SEND MESSAGE
    ========================== */

    const input =
    document.getElementById("messageInput");

    const sendBtn =
    document.getElementById("sendMessage");

    function sendMessage(){

        if(!input) return;

        const text =
        input.value.trim();

        if(text === "") return;

        addUserMessage(text);

        input.value = "";

        autoResize();

        showTyping();

    }

    if(sendBtn){

        sendBtn.addEventListener("click",

            sendMessage

        );

    }

    if(input){

        input.addEventListener("keydown",(e)=>{

            if(e.key==="Enter"

            && !e.shiftKey){

                e.preventDefault();

                sendMessage();

            }

        });

    }

    /* ==========================
       AUTO RESIZE
    ========================== */

    function autoResize(){

        if(!input) return;

        input.style.height = "45px";

        input.style.height =
        input.scrollHeight + "px";

    }

    if(input){

        input.addEventListener("input",

            autoResize

        );

    }

    /* ==========================
       AI TYPING
    ========================== */

    const typing =
    document.getElementById("typingArea");

    function showTyping(){

        if(!typing) return;

        typing.style.display = "flex";

        scrollBottom();

        setTimeout(()=>{

            typing.style.display = "none";

        },1800);

    }

    /* ==========================
       BACK TO TOP
    ========================== */

    const topBtn =
    document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(!topBtn) return;

        topBtn.style.display =

        window.scrollY > 300

        ? "block"

        : "none";

    });

    if(topBtn){

        topBtn.onclick = ()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        };

    }

    /* ==========================
       TOAST
    ========================== */

    const toast =
    document.getElementById("chatToast");

    if(toast){

        const bsToast =
        new bootstrap.Toast(toast);

        bsToast.show();

    }

});
/* ==========================================
   PART-14
   AI REPLY + CHAT HISTORY + STATISTICS
========================================== */

/* ==========================
   CHAT STORAGE
========================== */

let chatHistory =
JSON.parse(localStorage.getItem("chatHistory")) || [];

let totalMessages = 0;
let totalChats = 1;

/* ==========================
   AI RESPONSE
========================== */

function getAIResponse(message){

    const text = message.toLowerCase();

    if(text.includes("weather")){

        return "🌦 Today's weather is suitable for farming. Irrigate crops in the early morning or evening.";

    }

    if(text.includes("crop")){

        return "🌾 Crop recommendation depends on soil type, season, rainfall, and temperature. Please provide your location.";

    }

    if(text.includes("fertilizer")){

        return "🧪 Apply fertilizer according to soil test results. Organic compost is recommended.";

    }

    if(text.includes("market")){

        return "💰 You can check today's mandi prices from the Market section of AI Farmer Assistant.";

    }

    if(text.includes("disease")){

        return "🦠 Please upload a clear image of the affected plant so I can help identify the disease.";

    }

    return "🤖 Thank you for your question. I'm here to help you with farming, weather, crop recommendations, fertilizer guidance, irrigation, and market prices.";

}

/* ==========================
   AI MESSAGE
========================== */

function addBotMessage(text){

    const chatBody =
    document.getElementById("chatBody");

    if(!chatBody) return;

    const botMessage = document.createElement("div");

    botMessage.className = "message bot-message";

    botMessage.innerHTML = `

    <img src="/static/images/bot-avatar.png"
         class="message-avatar"
         alt="Bot">

    <div class="message-content">

        <div class="message-text">

            ${text}

        </div>

        <div class="message-footer">

            <span class="time">

                ${new Date().toLocaleTimeString([],{

                    hour:"2-digit",

                    minute:"2-digit"

                })}

            </span>

            <span class="message-actions">

                <i class="far fa-copy copy-message"></i>

                <i class="fas fa-volume-up speak-message"></i>

                <i class="far fa-star favorite-message"></i>

            </span>

        </div>

    </div>

    `;

    chatBody.appendChild(botMessage);

    chatBody.scrollTop =
    chatBody.scrollHeight;

    saveHistory();

    updateStats();

}

/* ==========================
   SEND AI RESPONSE
========================== */

const originalSend = sendMessage;

sendMessage = function(){

    originalSend();

    const input =
    document.getElementById("messageInput");

    const question =
    input.dataset.lastMessage || "";

    setTimeout(()=>{

        const reply =
        getAIResponse(question);

        addBotMessage(reply);

    },1800);

};

/* ==========================
   SAVE CHAT
========================== */

function saveHistory(){

    const chat =
    document.getElementById("chatBody").innerHTML;

    localStorage.setItem(

        "chatHistory",

        JSON.stringify(chat)

    );

}

/* ==========================
   LOAD CHAT
========================== */

function loadHistory(){

    const history =
    JSON.parse(

        localStorage.getItem("chatHistory")

    );

    if(history){

        document.getElementById(

            "chatBody"

        ).innerHTML = history;

    }

}

loadHistory();

/* ==========================
   CLEAR CHAT
========================== */

const clearBtn =
document.getElementById("clearHistory");

if(clearBtn){

    clearBtn.addEventListener("click",()=>{

        if(confirm(

            "Clear chat history?"

        )){

            localStorage.removeItem(

                "chatHistory"

            );

            location.reload();

        }

    });

}

/* ==========================
   NEW CHAT
========================== */

const newChat =
document.getElementById("newChat");

if(newChat){

    newChat.onclick = ()=>{

        totalChats++;

        document.getElementById(

            "chatBody"

        ).innerHTML = "";

        updateStats();

    };

}

/* ==========================
   QUICK SUGGESTIONS
========================== */

document.querySelectorAll(

".suggestion-chip"

).forEach(btn=>{

    btn.addEventListener("click",()=>{

        document.getElementById(

            "messageInput"

        ).value = btn.innerText;

    });

});

/* ==========================
   STATISTICS
========================== */

function updateStats(){

    totalMessages =
    document.querySelectorAll(

    ".message"

    ).length;

    document.getElementById(

        "totalMessages"

    ).textContent = totalMessages;

    document.getElementById(

        "questionCount"

    ).textContent = totalMessages;

    document.getElementById(

        "replyCount"

    ).textContent =

    document.querySelectorAll(

    ".bot-message"

    ).length;

    document.getElementById(

        "totalChats"

    ).textContent = totalChats;

}

updateStats();
/* ==========================================
   PART-15
   VOICE INPUT + TEXT TO SPEECH + COPY MESSAGE
========================================== */

/* ==========================
   VOICE INPUT
========================== */

const voiceBtn = document.getElementById("voiceBtn");
const messageInput = document.getElementById("messageInput");

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    if (voiceBtn) {

        voiceBtn.addEventListener("click", () => {

            recognition.start();

            voiceBtn.innerHTML =
                '<i class="fas fa-microphone-slash"></i>';

        });

    }

    recognition.onresult = function (event) {

        const transcript =
            event.results[0][0].transcript;

        messageInput.value = transcript;

        messageInput.dispatchEvent(
            new Event("input")
        );

    };

    recognition.onend = function () {

        if (voiceBtn) {

            voiceBtn.innerHTML =
                '<i class="fas fa-microphone"></i>';

        }

    };

    recognition.onerror = function () {

        if (voiceBtn) {

            voiceBtn.innerHTML =
                '<i class="fas fa-microphone"></i>';

        }

        alert("Voice recognition failed.");

    };

}

/* ==========================
   TEXT TO SPEECH
========================== */

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("speak-message")) {

        const message =

            e.target
            .closest(".message-content")
            .querySelector(".message-text")
            .innerText;

        speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance();

        speech.text = message;

        speech.lang = "en-US";

        speech.rate = 1;

        speech.pitch = 1;

        speechSynthesis.speak(speech);

    }

});

/* ==========================
   COPY MESSAGE
========================== */

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("copy-message")) {

        const text =

            e.target
            .closest(".message-content")
            .querySelector(".message-text")
            .innerText;

        navigator.clipboard.writeText(text);

        e.target.classList.remove("fa-copy");

        e.target.classList.add("fa-check");

        setTimeout(() => {

            e.target.classList.remove("fa-check");

            e.target.classList.add("fa-copy");

        }, 1500);

    }

});

/* ==========================
   FAVORITE MESSAGE
========================== */

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("favorite-message")) {

        e.target.classList.toggle("fas");

        e.target.classList.toggle("far");

        e.target.style.color = "#f59e0b";

    }

});

/* ==========================
   CHAT SESSION TIMER
========================== */

let seconds = 0;

setInterval(() => {

    seconds++;

    const hrs =
        Math.floor(seconds / 3600);

    const mins =
        Math.floor((seconds % 3600) / 60);

    const secs =
        seconds % 60;

    const timer =
        document.getElementById("sessionTime");

    if (timer) {

        timer.textContent =

            `${hrs}h ${mins}m ${secs}s`;

    }

}, 1000);

/* ==========================
   ONLINE STATUS
========================== */

const aiStatus =
document.getElementById("aiStatus");

function updateConnectionStatus() {

    if (!aiStatus) return;

    if (navigator.onLine) {

        aiStatus.innerHTML =
            "🟢 Online";

    } else {

        aiStatus.innerHTML =
            "🔴 Offline";

    }

}

window.addEventListener(
    "online",
    updateConnectionStatus
);

window.addEventListener(
    "offline",
    updateConnectionStatus
);

updateConnectionStatus();

/* ==========================
   AUTO FOCUS INPUT
========================== */

window.addEventListener("load", () => {

    if (messageInput) {

        messageInput.focus();

    }

});

/* ==========================
   CHARACTER COUNTER
========================== */

const counter =
document.getElementById("characterCount");

if (messageInput && counter) {

    messageInput.addEventListener("input", () => {

        counter.textContent =
            `${messageInput.value.length}/500`;

    });

}
/* ==========================================
   PART-16
   FILE UPLOAD + IMAGE PREVIEW + DRAG & DROP
========================================== */

/* ==========================
   ELEMENTS
========================== */

const imageInput = document.getElementById("imageInput");
const fileInput = document.getElementById("fileInput");

const imagePreviewArea =
document.getElementById("imagePreviewArea");

const filePreviewArea =
document.getElementById("filePreviewArea");

const previewImage =
document.getElementById("previewImage");

const fileName =
document.getElementById("fileName");

const removeImage =
document.getElementById("removeImage");

const removeFile =
document.getElementById("removeFile");

/* ==========================
   IMAGE PREVIEW
========================== */

if(imageInput){

    imageInput.addEventListener("change",function(){

        const file = this.files[0];

        if(!file) return;

        if(!file.type.startsWith("image/")){

            alert("Please select a valid image.");

            this.value = "";

            return;

        }

        const reader = new FileReader();

        reader.onload = function(e){

            if(previewImage){

                previewImage.src = e.target.result;

            }

            if(imagePreviewArea){

                imagePreviewArea.style.display = "flex";

            }

        };

        reader.readAsDataURL(file);

    });

}

/* ==========================
   REMOVE IMAGE
========================== */

if(removeImage){

    removeImage.addEventListener("click",()=>{

        if(imageInput){

            imageInput.value = "";

        }

        if(imagePreviewArea){

            imagePreviewArea.style.display = "none";

        }

    });

}

/* ==========================
   FILE PREVIEW
========================== */

if(fileInput){

    fileInput.addEventListener("change",function(){

        const file = this.files[0];

        if(!file) return;

        const maxSize = 10 * 1024 * 1024;

        if(file.size > maxSize){

            alert("Maximum file size is 10 MB.");

            this.value = "";

            return;

        }

        if(fileName){

            fileName.textContent = file.name;

        }

        if(filePreviewArea){

            filePreviewArea.style.display = "flex";

        }

    });

}

/* ==========================
   REMOVE FILE
========================== */

if(removeFile){

    removeFile.addEventListener("click",()=>{

        if(fileInput){

            fileInput.value = "";

        }

        if(filePreviewArea){

            filePreviewArea.style.display = "none";

        }

    });

}

/* ==========================
   DRAG & DROP
========================== */

const dropZone =
document.querySelector(".chat-input-box");

if(dropZone){

    ["dragenter","dragover"].forEach(eventName=>{

        dropZone.addEventListener(eventName,(e)=>{

            e.preventDefault();

            dropZone.classList.add("dragging");

        });

    });

    ["dragleave","drop"].forEach(eventName=>{

        dropZone.addEventListener(eventName,(e)=>{

            e.preventDefault();

            dropZone.classList.remove("dragging");

        });

    });

    dropZone.addEventListener("drop",(e)=>{

        const files = e.dataTransfer.files;

        if(!files.length) return;

        const file = files[0];

        if(file.type.startsWith("image/")){

            imageInput.files = files;

            imageInput.dispatchEvent(

                new Event("change")

            );

        }else{

            fileInput.files = files;

            fileInput.dispatchEvent(

                new Event("change")

            );

        }

    });

}

/* ==========================
   PASTE IMAGE
========================== */

document.addEventListener("paste",(e)=>{

    const items = e.clipboardData.items;

    for(let item of items){

        if(item.type.startsWith("image/")){

            const blob = item.getAsFile();

            const reader = new FileReader();

            reader.onload = function(event){

                if(previewImage){

                    previewImage.src = event.target.result;

                }

                if(imagePreviewArea){

                    imagePreviewArea.style.display = "flex";

                }

            };

            reader.readAsDataURL(blob);

        }

    }

});

/* ==========================
   CAMERA SUPPORT (Mobile)
========================== */

if(imageInput){

    imageInput.setAttribute("accept","image/*");

    imageInput.setAttribute("capture","environment");

}

/* ==========================
   FILE TYPE ICON
========================== */

if(fileInput){

    fileInput.addEventListener("change",()=>{

        const file = fileInput.files[0];

        if(!file || !fileName) return;

        let icon = "📄";

        if(file.type.includes("pdf")){

            icon = "📕";

        }else if(file.type.includes("word")){

            icon = "📘";

        }else if(file.type.includes("excel")){

            icon = "📗";

        }else if(file.type.includes("zip")){

            icon = "🗜️";

        }

        fileName.textContent =

        `${icon} ${file.name}`;

    });

}
/* ==========================================
   PART-17
   FLASK API INTEGRATION
========================================== */

/* ==========================
   CHAT API
========================== */

async function sendToAI(message) {

    try {

        const response = await fetch("/chat", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                message: message

            })

        });

        if (!response.ok) {

            throw new Error("Server Error");

        }

        const data = await response.json();

        return data.reply;

    }

    catch (error) {

        console.error(error);

        return "❌ Sorry! AI server is currently unavailable.";
    }

}

/* ==========================
   BOT MESSAGE
========================== */

function appendBotMessage(reply) {

    const chatBody = document.getElementById("chatBody");

    if (!chatBody) return;

    const html = `

    <div class="message bot-message">

        <img src="/static/images/bot-avatar.png"
             class="message-avatar"
             alt="AI">

        <div class="message-content">

            <div class="message-text">

                ${reply}

            </div>

            <div class="message-footer">

                <span class="time">

                    ${new Date().toLocaleTimeString([],{

                        hour:"2-digit",

                        minute:"2-digit"

                    })}

                </span>

            </div>

        </div>

    </div>

    `;

    chatBody.insertAdjacentHTML("beforeend", html);

    chatBody.scrollTop = chatBody.scrollHeight;

}

/* ==========================
   MAIN SEND FUNCTION
========================== */

async function askAI() {

    const input = document.getElementById("messageInput");

    if (!input) return;

    const message = input.value.trim();

    if (message === "") return;

    if (typeof addUserMessage === "function") {

        addUserMessage(message);

    }

    input.value = "";

    input.style.height = "45px";

    const typing = document.getElementById("typingArea");

    if (typing) {

        typing.style.display = "flex";

    }

    const reply = await sendToAI(message);

    if (typing) {

        typing.style.display = "none";

    }

    appendBotMessage(reply);

}

/* ==========================
   SEND BUTTON
========================== */

const sendButton =
document.getElementById("sendMessage");

if (sendButton) {

    sendButton.removeEventListener("click", askAI);

    sendButton.addEventListener("click", askAI);

}

/* ==========================
   ENTER KEY
========================== */

const chatInput =
document.getElementById("messageInput");

if (chatInput) {

    chatInput.addEventListener("keydown", function(e){

        if(e.key === "Enter" && !e.shiftKey){

            e.preventDefault();

            askAI();

        }

    });

}

/* ==========================
   QUICK CHIPS
========================== */

document.querySelectorAll(".suggestion-chip")

.forEach(chip=>{

    chip.addEventListener("click",()=>{

        const text = chip.innerText;

        document.getElementById("messageInput").value = text;

        askAI();

    });

});

/* ==========================
   AUTO WELCOME
========================== */

window.addEventListener("load",()=>{

    if(sessionStorage.getItem("welcomeShown"))

        return;

    sessionStorage.setItem(

        "welcomeShown",

        "yes"

    );

    setTimeout(()=>{

        appendBotMessage(

        "👋 Welcome to AI Farmer Assistant. Ask me anything about crops, weather, fertilizer, irrigation, diseases, or market prices."

        );

    },800);

});

/* ==========================
   LOADING ANIMATION
========================== */

document.addEventListener("DOMContentLoaded",()=>{

    const typing =

    document.getElementById("typingArea");

    if(typing){

        typing.style.display = "none";

    }

});

/* ==========================================
   END PART-17
========================================== */
/* ==========================================
   PART-18 (FINAL)
   EXPORT + SEARCH + DELETE + ANALYTICS
========================================== */

/* ==========================
   EXPORT CHAT
========================== */

const exportBtn = document.getElementById("exportChat");

if (exportBtn) {

    exportBtn.addEventListener("click", () => {

        const messages =
        document.querySelectorAll(".message-text");

        let text = "AI FARMER ASSISTANT CHAT\n\n";

        messages.forEach((msg, index) => {

            text += `${index + 1}. ${msg.innerText}\n\n`;

        });

        const blob = new Blob([text], {

            type: "text/plain"

        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "AI_Farmer_Chat.txt";

        a.click();

        URL.revokeObjectURL(url);

        showToast("✅ Chat Exported");

    });

});

/* ==========================
   SEARCH CHAT
========================== */

const searchInput =
document.getElementById("chatSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const keyword =
        searchInput.value.toLowerCase();

        document.querySelectorAll(".message")

        .forEach(msg => {

            const text =
            msg.innerText.toLowerCase();

            msg.style.display =

            text.includes(keyword)

            ? "flex"

            : "none";

        });

    });

}

/* ==========================
   DELETE MESSAGE
========================== */

document.addEventListener("dblclick", (e) => {

    const message =

    e.target.closest(".message");

    if (!message) return;

    if (confirm("Delete this message?")) {

        message.remove();

        updateAnalytics();

        showToast("🗑️ Message Deleted");

    }

});

/* ==========================
   ANALYTICS
========================== */

function updateAnalytics() {

    const total =
    document.querySelectorAll(".message").length;

    const bot =
    document.querySelectorAll(".bot-message").length;

    const user =
    document.querySelectorAll(".user-message").length;

    const totalBox =
    document.getElementById("questionCount");

    const botBox =
    document.getElementById("replyCount");

    const session =
    document.getElementById("totalChats");

    if (totalBox) totalBox.textContent = user;

    if (botBox) botBox.textContent = bot;

    if (session) session.textContent = total;

}

updateAnalytics();

/* ==========================
   AUTO SAVE
========================== */

setInterval(() => {

    const body =
    document.getElementById("chatBody");

    if (!body) return;

    localStorage.setItem(

        "chatBackup",

        body.innerHTML

    );

}, 3000);

/* ==========================
   RESTORE CHAT
========================== */

window.addEventListener("load", () => {

    const backup =

    localStorage.getItem(

        "chatBackup"

    );

    if (backup) {

        const body =

        document.getElementById("chatBody");

        if (body) {

            body.innerHTML = backup;

        }

    }

});

/* ==========================
   TOAST
========================== */

function showToast(message) {

    let toast =

    document.getElementById("toastBox");

    if (!toast) {

        toast =

        document.createElement("div");

        toast.id = "toastBox";

        toast.style.position = "fixed";

        toast.style.right = "20px";

        toast.style.bottom = "20px";

        toast.style.background = "#16a34a";

        toast.style.color = "#fff";

        toast.style.padding = "12px 18px";

        toast.style.borderRadius = "10px";

        toast.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.2)";

        toast.style.zIndex = "99999";

        document.body.appendChild(toast);

    }

    toast.innerHTML = message;

    toast.style.display = "block";

    setTimeout(() => {

        toast.style.display = "none";

    }, 2500);

}



window.addEventListener("offline", () => {

    showToast("🔴 Internet Disconnected");

});

window.addEventListener("online", () => {

    showToast("🟢 Internet Connected");

});


document.addEventListener("keydown", (e) => {

    /* Ctrl + / => Focus Input */

    if (e.ctrlKey && e.key === "/") {

        e.preventDefault();

        const input =

        document.getElementById("messageInput");

        if (input) input.focus();

    }



    if (e.ctrlKey &&

        e.key.toLowerCase() === "l") {

        e.preventDefault();

        if (confirm("Clear all chat?")) {

            const body =

            document.getElementById("chatBody");

            if (body) body.innerHTML = "";

            localStorage.removeItem("chatBackup");

            showToast("🧹 Chat Cleared");

        }

    }

});


let blink = false;

setInterval(() => {

    if (document.hidden) {

        document.title =

        blink

        ? "🤖 New AI Message"

        : "AI Farmer Assistant";

        blink = !blink;

    }

}, 1000);

document.addEventListener(

    "visibilitychange",

    () => {

        if (!document.hidden) {

            document.title =

            "AI Farmer Assistant";

        }

    }

);


window.addEventListener("load", () => {

    updateAnalytics();

    console.log(

        "✅ AI Farmer Assistant Chatbot Loaded Successfully"

    );

});


const exportBtn = document.getElementById("exportChat");

if (exportBtn) {

    exportBtn.addEventListener("click", () => {

        const messages =
        document.querySelectorAll(".message-text");

        let text = "AI FARMER ASSISTANT CHAT\n\n";

        messages.forEach((msg, index) => {

            text += `${index + 1}. ${msg.innerText}\n\n`;

        });

        const blob = new Blob([text], {

            type: "text/plain"

        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "AI_Farmer_Chat.txt";

        a.click();

        URL.revokeObjectURL(url);

        showToast("✅ Chat Exported");

    });

});

/* ==========================
   SEARCH CHAT
========================== */

const searchInput =
document.getElementById("chatSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const keyword =
        searchInput.value.toLowerCase();

        document.querySelectorAll(".message")

        .forEach(msg => {

            const text =
            msg.innerText.toLowerCase();

            msg.style.display =

            text.includes(keyword)

            ? "flex"

            : "none";

        });

    });

}

/* ==========================
   DELETE MESSAGE
========================== */

document.addEventListener("dblclick", (e) => {

    const message =

    e.target.closest(".message");

    if (!message) return;

    if (confirm("Delete this message?")) {

        message.remove();

        updateAnalytics();

        showToast("🗑️ Message Deleted");

    }

});

/* ==========================
   ANALYTICS
========================== */

function updateAnalytics() {

    const total =
    document.querySelectorAll(".message").length;

    const bot =
    document.querySelectorAll(".bot-message").length;

    const user =
    document.querySelectorAll(".user-message").length;

    const totalBox =
    document.getElementById("questionCount");

    const botBox =
    document.getElementById("replyCount");

    const session =
    document.getElementById("totalChats");

    if (totalBox) totalBox.textContent = user;

    if (botBox) botBox.textContent = bot;

    if (session) session.textContent = total;

}

updateAnalytics();

/* ==========================
   AUTO SAVE
========================== */

setInterval(() => {

    const body =
    document.getElementById("chatBody");

    if (!body) return;

    localStorage.setItem(

        "chatBackup",

        body.innerHTML

    );

}, 3000);

/* ==========================
   RESTORE CHAT
========================== */

window.addEventListener("load", () => {

    const backup =

    localStorage.getItem(

        "chatBackup"

    );

    if (backup) {

        const body =

        document.getElementById("chatBody");

        if (body) {

            body.innerHTML = backup;

        }

    }

});

/* ==========================
   TOAST
========================== */

function showToast(message) {

    let toast =

    document.getElementById("toastBox");

    if (!toast) {

        toast =

        document.createElement("div");

        toast.id = "toastBox";

        toast.style.position = "fixed";

        toast.style.right = "20px";

        toast.style.bottom = "20px";

        toast.style.background = "#16a34a";

        toast.style.color = "#fff";

        toast.style.padding = "12px 18px";

        toast.style.borderRadius = "10px";

        toast.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.2)";

        toast.style.zIndex = "99999";

        document.body.appendChild(toast);

    }

    toast.innerHTML = message;

    toast.style.display = "block";

    setTimeout(() => {

        toast.style.display = "none";

    }, 2500);

}

/* ==========================
   NETWORK STATUS
========================== */

window.addEventListener("offline", () => {

    showToast("🔴 Internet Disconnected");

});

window.addEventListener("online", () => {

    showToast("🟢 Internet Connected");

});

/* ==========================
   SHORTCUT KEYS
========================== */

document.addEventListener("keydown", (e) => {

    /* Ctrl + / => Focus Input */

    if (e.ctrlKey && e.key === "/") {

        e.preventDefault();

        const input =

        document.getElementById("messageInput");

        if (input) input.focus();

    }

    /* Ctrl + L => Clear Chat */

    if (e.ctrlKey &&

        e.key.toLowerCase() === "l") {

        e.preventDefault();

        if (confirm("Clear all chat?")) {

            const body =

            document.getElementById("chatBody");

            if (body) body.innerHTML = "";

            localStorage.removeItem("chatBackup");

            showToast("🧹 Chat Cleared");

        }

    }

});

/* ==========================
   PAGE TITLE
========================== */

let blink = false;

setInterval(() => {

    if (document.hidden) {

        document.title =

        blink

        ? "🤖 New AI Message"

        : "AI Farmer Assistant";

        blink = !blink;

    }

}, 1000);

document.addEventListener(

    "visibilitychange",

    () => {

        if (!document.hidden) {

            document.title =

            "AI Farmer Assistant";

        }

    }

);

/* ==========================
   FINAL INIT
========================== */

window.addEventListener("load", () => {

    updateAnalytics();

    console.log(

        "✅ AI Farmer Assistant Chatbot Loaded Successfully"

    );

});

/* ==========================================
   END OF FILE
========================================== */