let emailValue = document.querySelector("#email");
let passwordValue = document.querySelector("#password");
let btn = document.querySelector("#button");
let signEmail = document.querySelector("#email2");
let signPassword = document.querySelector("#password2");
let btn2 = document.querySelector("#button2");
let users = [
  {
    email: "kshitiz",
    password: "kshitiz",
  },
];
let char =
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let key =
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
key = key
  .split("")
  .sort(() => Math.random() - 0.5)
  .join("");
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
  console.log(users);
  emailValue.value = "";
  passwordValue.value = "";
  alert("User registered successfully");
});

btn2.addEventListener("click", () => {
  let cypherText = "";
  let encrypt = (text) => {
    for (const letter of text) {
      let index = char.indexOf(letter);
      cypherText += key[index];
    }
    return cypherText;
  };
  let encryptedPassword = encrypt(signPassword.value);
  let user = users.find((user) => user.email === signEmail.value);
  if (user.password === encryptedPassword) {
    alert("Login successful")
  } else {
    alert("Login failed")
  }
});
