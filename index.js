let menuDiv = document.getElementById("menu");

// Read data from menu.json
fetch("index.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        // Save JSON data in localStorage
        localStorage.setItem("menu", JSON.stringify(data));

        // Display menu items
        for (let i = 0; i < data.length; i++) {

            menuDiv.innerHTML += `
                <div>
                    <h2>${data[i].name}</h2>
                    <p>Price: ${data[i].price} JD</p>
                    <p>Availability: ${data[i].availability ? "Available" : "Not Available"}</p>
                    <hr>
                </div>
            `;
        }

    })
    .catch(function(error) {
        console.log("Error:", error);
    });