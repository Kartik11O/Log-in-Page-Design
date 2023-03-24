var boxWelcome = document.getElementById("box_Welcome")
var boxLog = document.getElementById("box_Log")
var p = document.getElementById("p")
var h = document.getElementById("H")
var Use = document.getElementById("Use_id")
var Hl = document.getElementById("HL")
var Name = document.getElementById("Name")
var btn = document.getElementById("btn")
var Icon = document.getElementById("Icon")



function Sign() {
    
  
        boxWelcome.classList.add("Ani-left")
        boxLog.classList.add("Ani-right")




    p.innerText = "Enter your personal details and start journey with us"
    p.classList.add("Left_C")

    h.innerText = "Hello, Friend!"
    h.classList.add("Left_C")



    Use.innerText = "or use your account"
    Use.classList.add("Right_C")

    Hl.innerText = "Sign in"
    Hl.classList.add("Right_C")

    btn.innerText = "Sign Up"
    btn.classList.add("Right_C")

    
    Icon.classList.add("Right_C")

    Name.classList.add("Hide")
    Name.style.display = "none"


}