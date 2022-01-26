const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener("submit" , (event)=>{
  console.log("Validating")
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  let request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/authorize");
  //request.send(new FormData(formElement));
  console.log("Validated")

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(`user=${user}&password=${password}`);

  event.preventDefault()
})