let demo = document.querySelector("#demo");
let travel = document.querySelector(".header");
let ticket = 500 * 10650.34;
let hotel = 250 * 10650.34;
let museum = 120 * 11650.03;
let price = ticket + hotel + museum;
let money = Number(prompt("Sayohat uchun qancha mablag' ajratdingiz?"));
if (money >= price) {
  demo.textContent = "Oq yo'l, safaringiz bexatar bo'lsin!";
} else {
  demo.textContent = "Xurmatli mijoz, yana biroz sabr qilishingiz kerak!";
}
