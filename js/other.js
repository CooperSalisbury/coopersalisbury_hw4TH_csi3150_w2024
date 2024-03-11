// ChatGpt assisted me in making this code
document.getElementById("filters").addEventListener("submit", function (event) {
  event.preventDefault();
  var minCarYear = document.getElementById("minCarYear").value;
  var maxCarYear = document.getElementById("maxCarYear").value;
  var maxMile = document.getElementById("maxMile").value;
  var minCarPrice = document.getElementById("minCarPrice").value;
  var maxCarPrice = document.getElementById("maxCarPrice").value;
  const makeButtons = document.querySelectorAll('input[name="make"]');
  const colorButtons = document.querySelectorAll('input[name="color"]');
  const selectedMake = Array.from(makeButtons)
    .filter((radio) => radio.checked)
    .map((radio) => radio.value);
  const selectedColor = Array.from(colorButtons)
    .filter((radio) => radio.checked)
    .map((radio) => radio.value);
  minCarYear = minCarYear ? parseInt(minCarYear) : 0;
  maxCarYear = maxCarYear ? parseInt(maxCarYear) : Infinity;
  maxMile = maxMile ? parseInt(maxMile) : Infinity;
  minCarPrice = minCarPrice ? parseInt(minCarPrice) : 0;
  maxCarPrice = maxCarPrice ? parseInt(maxCarPrice) : Infinity;
  var filteredCars = usedCars.filter(function (car) {
    return (
      car.year >= minCarYear &&
      car.year <= maxCarYear &&
      (selectedMake.length === 0 || selectedMake.includes(car.make)) &&
      (selectedColor.length === 0 || selectedColor.includes(car.color)) &&
      car.mileage <= maxMile &&
      car.price >= minCarPrice &&
      car.price <= maxCarPrice
    );
  });
  displayCars(filteredCars);
});
function displayCars(cars) {
  console.log("displayCars called");
  var carList = document.getElementById("carList");
  var noCars = document.getElementById("noCars");
  noCars.style.display = cars.length === 0 ? "block" : "none";
  carList.innerHTML = "";
  cars.forEach(function (car) {
    let carImg = `./assets/img/${car.image}`;
    var carElement = document.createElement("div");
    carElement.classList.add("car");
    carElement.innerHTML = `
        <img src="${carImg}" alt="${car.make} ${car.model}">
        <div class="car-details">
            <div><h1>${car.make} ${car.model}</h1></div>
            <div class="car-details-2">
                <p>Year: ${car.year}</p>
                <p>Mileage: ${car.mileage}</p>
                <p>Price: $${car.price}</p>
                <div class="car-color-section">
                    <p>Color: ${car.color}</p>
                    <span class="color-container" style="background-color: ${car.color}"></span>
                </div>
            </div>
        </div>
        `;
    carList.appendChild(carElement);
  });
}
displayCars(usedCars);
