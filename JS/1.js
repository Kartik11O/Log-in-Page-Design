var boxWelcome = document.getElementById("box_Welcome")
var boxLog = document.getElementById("box_Log")
var p = document.getElementById("p")
var h = document.getElementById("H")
var Use = document.getElementById("Use_id")
var Hl = document.getElementById("HL")
var Name = document.getElementById("Name")
var btn = document.getElementById("btn")
var Icon = document.getElementById("Icon")


function Sign(){

    // Frist click animation ADD (container)
    boxWelcome.classList.add("Ani-left")
    boxLog.classList.add("Ani-right")

    // Second click animation Remove (container)
    boxWelcome.classList.remove("B_right")
    boxLog.classList.remove("B_left")

    //Function Btn
    document.getElementById("Sp").style.display = "none"
    document.getElementById("Sp2").style.display = "block"
    

    // Second Container Text Added
    p.innerText = "Enter your personal details and start journey with us"
    Use.innerText = "or use your account"
    h.innerText = "Hello, Friend!"
    Hl.innerText = "Sign in"
    btn.innerText = "Sign Up"

    // First click Animation ADD (contant)
    p.classList.add("Left_C")
    h.classList.add("Left_C")
    Use.classList.add("Right_C")
    Hl.classList.add("Right_C")
    btn.classList.add("Right_C")
    Icon.classList.add("Right_C")
    Name.classList.add("Hide")
    Name.style.display = "none"
    //

    // Second click Animation Remove (contant)
    p.classList.remove("Left_Back")
    h.classList.remove("Left_Back")
    Use.classList.remove("Right_Back")
    Hl.classList.remove("Right_Back")
    btn.innerText = "Sign Up"
    btn.classList.remove("Right_Back")
    Icon.classList.remove("Right_Back")
    Name.classList.remove("Hide")

}

function BS(){

    //First click animation remove (container)
    boxWelcome.classList.remove("Ani-left")
    boxLog.classList.remove("Ani-right")
    //

    //Second click animation ADD (container)
    boxWelcome.classList.add("B_right")
    boxLog.classList.add("B_left")
    //

    //Functions Btn
    document.getElementById("Sp2").style.display = "none"
    document.getElementById("Sp").style.display = "block"


    // First Container Text added
    p.innerText = "To keep connected with us please login with your personal info"
    Use.innerText = "or use your email for regstration"
    Hl.innerText = "Create Account"
    h.innerText = "Welcome Back!"
    btn.innerText = "Sign Up"
    //

    // Second Click Animation ADD (contant)
    p.classList.add("Left_Back")
    h.classList.add("Left_Back")
    Use.classList.add("Right_Back")
    Hl.classList.add("Right_Back")
    btn.classList.add("Right_Back")
    Icon.classList.add("Right_Back")
    Name.classList.add("Hide")
    Name.style.display = "block"
    //

    // First click Animation Remove (contant)
    p.classList.remove("Left_C")
    h.classList.remove("Left_C")
    Use.classList.remove("Right_C")
    Hl.classList.remove("Right_C")
    btn.classList.remove("Right_C")
    Icon.classList.remove("Right_C")
    Name.classList.remove("Hide")
    //
}