const newUser = {
    email: undefined,
};

document.getElementById("submit_form").addEventListener('click', validation);

function validation(e) {
    e.preventDefault();

    newUser.email = document.getElementById("email").value;

    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailReg.test(newUser.email) === false) {
        document.getElementById("error_text").classList.remove('hidden');
        document.getElementById("error_icon").classList.remove('hidden');        
        document.getElementById("email").classList.add('error')
    } else {
        document.getElementById("emailError").classList.add('hidden');
        document.getElementById("error_icon").classList.add('hidden');    
        document.getElementById("email").classList.remove('error')
        document.getElementById("email").value = "";
    }
   
}
