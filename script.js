function volume_sphere() {
    //Write your code here

	  const radius = document.getElementById("radius").value;
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(2);
  
} 

const form = document.getElementById("MyForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting
  volume_sphere(); // call the volume_sphere function
});

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
