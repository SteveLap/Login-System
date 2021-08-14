let loginData = [];
// example {id:1592304983049, email: 'steve@example.com', password: 12345}

const addUser = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    
    if (document.getElementById('name').value === ""){
        alert("Please enter you name")
    } else if (document.getElementById('email').value === ""){
        alert("Please enter you email")
    } else if (document.getElementById('password').value === ""){
        alert("Please enter you password")
    } else {
        let user = {
            id: Date.now(), //number of milliseconds since Jan 1, 1970, 12:00:00
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
            loginData.push(user);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            // console.warn('added' , {loginData} );
            // let pre = document.querySelector('#msg pre');
            // pre.textContent = '\n' + JSON.stringify(loginData, '\t', 2);

            //saving to localStorage
            localStorage.setItem('userList', JSON.stringify(loginData) );

            //saving to a downloadable javascript file
            

        } else {
            alert("Please ensure the password is same as the confirm password")
        }        
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('create').addEventListener('click', addUser);
});