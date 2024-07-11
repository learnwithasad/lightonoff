let button = document.getElementById("btn");
let blub1 = document.getElementById("blub1");
let blub2 = document.getElementById("blub2");
let blub3 = document.getElementById("blub3");

let change = 0;

let arry = [blub1, blub2, blub3];

button.addEventListener("click", () => {
  if (change === 0) {
    blub1.style.boxShadow =
      "0 0 25px yellow, 0 0 50px yellow, 0 0 100px yellow, 0 0 150px yellow, 0 0 200px yellow";
    blub2.style.boxShadow =
      "0 0 25px rgb(0, 242, 255), 0 0 50px rgb(0, 242, 255), 0 0 100px rgb(0, 242, 255), 0 0 150px rgb(0, 242, 255), 0 0 200px rgb(0, 242, 255)";
    blub3.style.boxShadow =
      "0 0 25px rgb(255, 56, 89), 0 0 50px rgb(255, 56, 89), 0 0 100px rgb(255, 56, 89), 0 0 150px rgb(255, 56, 89), 0 0 200px rgb(255, 56, 89)";
    button.innerText = "OFF";
    button.style.backgroundColor = "rgb(229, 29, 29)";
    change = 1;
  } else {
    blub1.style.boxShadow = "none";
    blub2.style.boxShadow = "none";
    blub3.style.boxShadow = "none";
    button.innerText = "ON";
    button.style.backgroundColor = "rgb(33, 166, 33)";
    change = 0;
  }
});
