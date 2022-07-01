"use script";
// ACCOUNTS
const accounts1 = {
  name: "John Thompson Felix",
  age: 19,
  password: 2009,
  hobbies: "Reading books",
  status: "Single",
  messages: [],
  phone: "09045392022",
  src: "image-colton.jpg",
};

const accounts2 = {
  name: "Fred Simon David",
  age: 22,
  password: 1999,
  hobbies: "Watching Football",
  status: "Married",
  messages: [],
  phone: "08145392011",
  src: "fred.jpg",
};

const accounts3 = {
  name: "Sarah Smith",
  age: 24,
  password: 9999,
  hobbies: "Dancing",
  status: "Married",
  messages: [],
  phone: "09045002011",
  src: "image-irene.jpg",
};

const accounts4 = {
  name: "Tolulope Simon",
  age: 25,
  password: 2222,
  hobbies: "Cooking",
  status: "Single",
  messages: [],
  phone: "09045392011",
  src: "PICTURE.jpg",
};

const accounts = [accounts1, accounts2, accounts3, accounts4];

const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const Login = document.getElementById("btn2");
const errorMsg = document.getElementById("error");
const currentName = document.getElementById("currentName");
const currentNumber = document.getElementById("currentNo");
const plus = document.querySelector(".fa-plus");
const clicked = document.getElementById("send");
const info = document.querySelector(".info");
const chatUi = document.getElementById("chat-page");
const icons = document.querySelector(".icon");
const profile = document.querySelector(".chatname");
const hobbies = document.getElementById("hobbies");
const text = document.getElementById("text");

chatUi.style.display = "none";
plus.style.cursor = "pointer";
clicked.style.cursor = "pointer";
profile.style.cursor = "pointer";
errorMsg.style.opacity = 0;

// GENERATE USERNAME

function userName(person) {
  person.forEach((value) => {
    const name = value.name;
    value.userName =
      name
        .toLowerCase()
        .split(" ")
        .map((value) => value[0])
        .join("") + value.age;
  });
}

userName(accounts);

let currentAccount;
Login.addEventListener("click", function () {
  const user = inputUsername.value;
  const pin = Number(inputPassword.value);
  currentAccount = accounts.find((value) => value.userName === user);

  if (currentAccount?.password === pin) {
    errorMsg.style.opacity = 0;

    app.style.display = "none";
    chatUi.style.display = "block";
    currentName.textContent = currentAccount.name;
    currentNumber.textContent = currentAccount.phone;
    hobbies.textContent = `Hobby: ${currentAccount.hobbies}`;

    img.src = currentAccount.src;
  } else {
    errorMsg.style.opacity = 100;
    errorMsg.style.color = "red";
  }
  inputUsername.value = inputPassword.value = "";
});

plus.addEventListener("click", function () {
  icons.classList.toggle("show");
});

profile.addEventListener("click", function () {
  info.classList.toggle("show2");
});

// SEND BUTTON
clicked.addEventListener("click", function () {
  let newSec = document.createElement("section");
  const message = document.getElementById("message");
  newSec.textContent = text.value;
  newSec.classList.add("message");
  currentAccount.messages.push(text.value);
  if (text.value == "") {
    newSec.style.padding = "0px";
  }
  text.value = "";
  message.appendChild(newSec);
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    let newSec = document.createElement("section");
    const message = document.getElementById("message");
    newSec.textContent = text.value;
    newSec.classList.add("message");
    currentAccount.messages.push(text.value);
    if (text.value == "") {
      newSec.style.padding = "0px";
    }
    text.value = "";
    message.appendChild(newSec);
  } else {
    e.key = false;
  }
});
