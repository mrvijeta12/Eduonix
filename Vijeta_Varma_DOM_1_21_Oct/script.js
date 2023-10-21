let user = {
    name: '',
    email: '',
    username: ''

};

sumOfDiceRoll = [];
numberOfDiceRoll = 0;

function showRegistrationForm() {
    document.getElementById("registration-form").style.display = "block";
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('message').style.display = 'none';
    document.getElementById('congratulations').style.display = 'none';
    document.getElementById("footer").style.display = "none";
}

function registerUser() {
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    user.username = document.getElementById('username').value;
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('message').style.display = 'none';
    document.getElementById("congratulations").style.display = "none";
    document.getElementById("footer").style.display = "none";
}

function showUserInfo() {
    document.getElementById("user-name").innerText = user.name;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-username').textContent = user.username;
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('message').style.display = 'none';
    document.getElementById("congratulations").style.display = "none";
    document.getElementById("footer").style.display = "none";
}

function diceRoll() {
    if (numberOfDiceRoll < 3) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        sumOfDiceRoll.push(diceValue);
        numberOfDiceRoll++;
        console.log(sumOfDiceRoll)
        console.log(numberOfDiceRoll)

        if (numberOfDiceRoll === 3) {
            const totalDiceValue = sumOfDiceRoll.reduce((acc, curr) => {
                return acc + curr
            }, 0)

            if (totalDiceValue > 10) {
                document.getElementById("message").style.display = "block"
                document.getElementById("message").innerText = "Your score is more than 10 . You can access further."
                document.getElementById('user-info').style.display = 'none';
                document.getElementById('registration-form').style.display = 'none';
                document.getElementById("image4").style.display = "block"
                document.getElementById("congratulations").style.display = "none";
                document.getElementById("footer").style.display = "none";
            } else {
                document.getElementById('message').textContent = 'Try again after scoring more than 10.';
                document.getElementById('message').style.display = 'block';
                document.getElementById('user-info').style.display = 'none';
                document.getElementById('registration-form').style.display = 'none';
                document.getElementById("congratulations").style.display = "none";
                document.getElementById("image4").style.display = "none"
                document.getElementById("footer").style.display = "none";
            }
        }

    } else {
        document.getElementById('message').innerText = "Bad luck refresh again.";
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById("congratulations").style.display = "none";
        document.getElementById("footer").style.display = "none";

    }
}

function generateRandomCode(){
    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    let couponCode = "";
    for (let i=0; i<12; i++){
        constRandomIndexNo = Math.floor(Math.random()*character.length);
        couponCode+= character.charAt(constRandomIndexNo);
    }
    return couponCode;

}

function generateRandomCode(){
    document.getElementById("congratulations").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("message").style.display = "none";
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("user-info").style.display = "none";
  
}
