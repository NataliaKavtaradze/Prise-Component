const slider = document.getElementById("select");
const output = document.getElementById("price");
output.inerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = "$" + this.value + ".00";
};

const yearly = document.getElementById("switcher");
yearly.oninput = function () {
  output.innerHTML = this.value * 12 - (this.value * 25) / 100;
};
