const registerLink = document.getElementById('registerLink');
const registerForm = document.getElementById('registerForm');

registerLink.addEventListener('click', () => {//arrow function
    registerForm.style.display = block;
});

const registeredCustomers = [];

function register() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let password = document.getElementById('password').value;
// creating an object new customer
    let newCustomer = { 
        newCustomerFirstName: firstName,
        newCustomerLastName: lastName,
        newCustomerPassword: password,
       
    };
    registeredCustomers.push(newCustomer);
    alert(`New customer ${firstName} ${lastName}, has been registered`);
    
    clearForm()
}
function clearForm() {
    document.getElementById('firstName').value ='';
    document.getElementById('lastName').value ='';
    document.getElementById('regNumber');
    
}
// function clearForm() {
//     document.getElementById('firstName').value = '';
//     document.getElementById('lastName').value = '';
//     document.getElementById('password').value = '';
// }



function cancelRegister() {
    registerForm.style.display = "none";
}

const LoginButton = document.getElementById('LoginButton');
const LoginForm = document.getElementById('LoginForm');

LoginButton.addEventListener('click', () => {
    LoginForm.style.display = "block";
});

const users = [];

function Login() {
    let userName = document.getElementById('UserName').value;
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value; // Corrected ID

    let newUser = {
        userName: userName,
        email: email,
        password: password
    };

    users.push(newUser);

    alert(`New User ${userName} ${email}, logged in`);
    clearForm();
    LoginForm.style.display = "none";
}

function clearForm() {
    document.getElementById('UserName').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Password').value = ''; 
}

function cancelLogin() {
    LoginForm.style.display = "none";
}


const contactLink = document.getElementById('contactLink');
const contactForm = document.getElementById('contactForm');

contactLink.addEventListener('click', () => { 
    contactForm.style.display = "block"; 
});

const customerFeedback = [];

function feedback() {
    let name = document.getElementById('customerName').value;
    let email = document.getElementById('Email').value; 
    let feedback = document.getElementById('feedback').value;

    let newUser = {
        userName: name,
        userEmail: email, 
        userFeedback: feedback 
    };

    customerFeedback.push(newUser);  

    alert(`New User ${name} ${email}, your feedback submitted`); 
    clearForm();
    contactForm.style.display = "none";
}

function clearForm() {
    document.getElementById('customerName').value = '';
    document.getElementById('Email').value = ''; 
    document.getElementById('feedback').value = '';
}

function cancelcontact() {
    contactForm.style.display = "none";
}

