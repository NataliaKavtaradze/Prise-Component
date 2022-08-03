const slider = document.getElementById("select");
const output = document.getElementById("price");
const outputMob = document.getElementById("price-mob");
const filledSlide = document.getElementById("progress");
const switcher = document.getElementById("white-circle");
const mobMonth = document.getElementById("mob-month");
const desktopMonth = document.getElementById("desktop-month");
let stage = "month";

output.innerHTML = "$" + slider.value + ".00";
outputMob.innerHTML = "$" + slider.value + ".00";

slider.addEventListener("input", function () {
  filledSlide.style.width = (this.value / 32) * 100 + "%";

  if (stage == "month") {
    output.textContent = "$" + this.value + ".00";
    outputMob.textContent = "$" + this.value + ".00";
  } else {
    output.textContent = "$" + (this.value * 12 * 3) / 4 + ".00";
    outputMob.textContent = "$" + (this.value * 12 * 3) / 4 + ".00";
  }
});

switcher.addEventListener("click", function () {
  if (stage == "month") {
    switcher.style.marginLeft = "20px";
    stage = "year";
    output.textContent = "$" + (slider.value * 12 * 3) / 4 + ".00";
    outputMob.textContent = "$" + (slider.value * 12 * 3) / 4 + ".00";
    mobMonth.textContent = "year";
    desktopMonth.textContent = "year";
  } else {
    switcher.style.marginLeft = "0px";
    stage = "month";
    output.textContent = "$" + slider.value + ".00";
    outputMob.textContent = "$" + slider.value + ".00";
    mobMonth.textContent = " month";
    desktopMonth.textContent = "month";
  }
});
