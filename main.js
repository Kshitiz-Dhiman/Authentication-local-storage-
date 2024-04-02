let emailValue = document.querySelector("#email");
let passwordValue = document.querySelector("#password");
let btn = document.querySelector("#button");
let signEmail = document.querySelector("#email2");
let signPassword = document.querySelector("#password2");
let btn2 = document.querySelector("#button2");

let users = JSON.parse(localStorage.getItem("users")) || [];

let char =
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let key =
  " lhsuEtfgprimnoaywxBCDGJKLNOPQRTVWXYZ0235678941#%$&'()*+,-./:;<=>?@[]^_`{|}~";
let charArray = char.split("");
let keyArray = key.split("");

btn.addEventListener("click", () => {
  let cypherText = "";
  let encrypt = (text) => {
    for (const letter of text) {
      let index = char.indexOf(letter);
      cypherText += key[index];
    }
    return cypherText;
  };
  let encryptedPassword = encrypt(passwordValue.value);
  users.push({
    email: emailValue.value,
    password: encryptedPassword,
  });
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
  emailValue.value = "";
  passwordValue.value = "";
  alert("User registered successfully");
});

btn2.addEventListener("click", () => {
  let cypherText = "";
  let decrypt = (text) => {
    for (const letter of text) {
      let index = char.indexOf(letter);
      cypherText += key[index];
    }
    return cypherText;
  };
  let encryptedPassword = decrypt(signPassword.value);
  let user = users.find((user) => user.email === signEmail.value);
  if (user.password === encryptedPassword) {
    alert("Login successful");
  } else {
    alert("Login failed");
  }
});

