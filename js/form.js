let form = document.querySelector('.js-form'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputName = document.querySelector('.js-input-name');
    


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateName(name) {
    let re = /^[a-zA-Z0-9]+$/;
    return re.test(String(name));
}

function validatePhone(phone) {
    let re = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
    return re.test(String(phone));
}
function resetForm() {
    form.reset();
 }

form.addEventListener('submit', function(e){     
    e.preventDefault();
    
    const name = form.username.value;    
    const phone = form.phone.value;
    const email = form.email.value;
                
    if (name == '' || phone == '' || email == '') {
       
        inputName.classList.add('error');
        inputPhone.classList.add('error');
        inputEmail.classList.add('error');
        
        return alert ('Усі поля обовязкові для заповнення');
       
    }    
    
    else if (!validateEmail(email)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return alert('Не вірна адреса електронної пошти');
    } else {
        inputEmail.classList.remove('error');
        inputEmail.classList.add('success');

    }

    if (validateName(name)) {
        console.log('name not valid');
        inputName.classList.add('error');
        return alert('Не вірне імя');
    } else {
        inputName.classList.remove('error');
    }

    if (!validatePhone(phone)) {
        console.log('phone not valid');
        inputPhone.classList.add('error');
        return alert('Не вірний формат номеру телефона, необхідні 10 або 12 цифр');
    } else {
        inputPhone.classList.remove('error');
    }   
    resetForm();
    return alert('Ваші данні прийняті, ми вам зателефонуємо найближчим часом')
});