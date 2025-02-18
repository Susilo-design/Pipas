document
  .getElementById("carbon-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let totalCarbonEmission = 0;
    const devices = document.querySelectorAll(".device-row");

    devices.forEach((deviceRow) => {
      const device = deviceRow.querySelector(".device").value;
      const usage = parseFloat(deviceRow.querySelector(".usage").value);
      const days = parseFloat(deviceRow.querySelector(".days").value);
      const amount = parseFloat(deviceRow.querySelector(".amount").value);

      const emissionFactors = {
        smartphone: 0.01,
        laptop: 0.05,
        tv: 0.1,
        refrigerator: 0.2,
        ricecooker: 0.1,
      };

      if (!emissionFactors[device]) {
        alert("Pilih perangkat yang valid!");
        return;
      }

      if (
        !isNaN(usage) &&
        !isNaN(days) &&
        !isNaN(amount) &&
        usage > 0 &&
        days > 0 &&
        amount > 0
      ) {
        totalCarbonEmission += amount * usage * days * emissionFactors[device];
      } else {
        alert("Harap masukkan nilai yang valid!");
      }
    });

    document.getElementById("carbon-result").textContent =
      totalCarbonEmission.toFixed(2) + " kg CO2";
  });

document.getElementById("add-device").addEventListener("click", function () {
  const deviceRow = document.querySelector(".device-row").cloneNode(true);
  deviceRow.querySelectorAll("input").forEach((input) => (input.value = ""));
  document.getElementById("devices").appendChild(deviceRow);
  document.getElementById("carbon-form").reset();
  document.getElementById("carbon-result").textContent = "0 kg CO2";
});
