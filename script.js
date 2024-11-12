const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if (bar)
{
    bar.addEventListener('click',()=>
    {
        nav.classList.add('active');
    })
}

if (Close)
{
    close.addEventListener('click',()=>
    {
        nav.classList.remove('active');
    })
}


function SignUp() {
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let emaill = document.getElementById("email");
    let age = document.getElementById("age");

    if (name.value == "") {
        alert("Please Enter Name")
    } else if (number.value == "") {
        alert("Please Enter Number")
    } 
    else if (emaill.value == "") {
        alert("Please Enter email")
    }
    else if (age.value == "") {
        alert("Please Enter age")
    }
    else {
        alert("Thanks For Joining : " + name.value)
    }
}