document.getElementById('carbon-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const device = document.getElementById('device').value;
  const usage = parseFloat(document.getElementById('usage').value);
  const days = parseFloat(document.getElementById('days').value);
  const amount = parseFloat(document.getElementById('amount').value);
  let carbonEmission = 0;

  const emissionFactors = {
      smartphone: 0.01,  
      laptop: 0.05,     
      tv: 0.1,           
      refrigerator: 0.2,
      ricecooker: 0.1
  };

  if (!emissionFactors[device]) {
      alert("Pilih perangkat yang valid!"); 
      return;
  }

  if (!isNaN(usage) && !isNaN(days) && !isNaN(amount) && usage > 0 && days > 0 && amount > 0) {
      carbonEmission = amount * usage * days * emissionFactors[device];
      document.getElementById('carbon-result').textContent = carbonEmission.toFixed(2) + "";
  } else {
      alert("Harap masukkan nilai yang valid!");
  }
});
