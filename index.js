document.getElementById('sc').style.display = "none"
document.getElementById('fl').style.display = "none"

function validateEmail() {
        const email = document.getElementById("input").value
        document.getElementById("input").value = ""
        // var re = /\S+@\S+\.\S+/;
        const isValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
        if (isValidate) {
            document.getElementById('fl').style.display = "none"
            document.getElementById('sc').style.display = "block"
        }else{
            document.getElementById('sc').style.display = "none"
            document.getElementById('fl').style.display = "block"
        }
    }
    





