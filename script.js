function addUser() {
    var firstname = document.getElementsByName("firstname")[0].value;
    var lastname = document.getElementsByName("lastname")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var country = document.getElementsByName("country")[0].value;
    var city = document.getElementsByName("city")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var retypepassword = document.getElementsByName("retypepassword")[0].value;

    if (password !== retypepassword) {
        alert("Passwords do not match! Please make sure your passwords match.");
        return;
    }

    const userObject = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        country: country,
        city: city,
        password: password
    };

    var storedUsers = localStorage.getItem("users");
    var users = storedUsers ? JSON.parse(storedUsers) : [];

    users.push(userObject);

    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully!");


    if (!firstname || !lastname || !email || !phone || !country || !city || !password || !retypepassword) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    window.location.href = "login.html";
}

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addUser();
});

function login() {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return; 
    }

    var storedUsers = localStorage.getItem("users");
    var users = storedUsers ? JSON.parse(storedUsers) : [];

    var user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
        document.getElementsByName("password")[0].value = "";
    }
}











































































































// Taapsee Pannu
// 03206498755    Gulalai Khan
// 03236899325   facbook friend 1
// 0310864663371  Bisma Quarashi
// 03319162993   Saima Doli
// 03446221276  AYESHA SHEHZADI
