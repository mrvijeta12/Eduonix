function logIn(){
    document.getElementById("loginForm-container").style.display="block";
    document.getElementById("signupForm-container").style.display="none";

   }
   function signUp(){
    document.getElementById("loginForm-container").style.display="none";
    document.getElementById("signupForm-container").style.display="block";

   }
   

    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {            
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Signup successful:', data);
          
        })
        .catch(error => {
            alert('Error during signup:', error);
         
        });
    });

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        fetch(`https://reqres.in/api/users?page=2`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Login successful:', data);
          
        })
        .catch(error => {
            alert('Error during login:', error);
      
        });
    });