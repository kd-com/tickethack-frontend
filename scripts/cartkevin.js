const cart = document.getElementById('updatedCart');
fetch('http://localhost:3000/cart')
.then(response => response.json())
.then(data => {
    if(data.result === true) {
        cart.innerHTML = '';
        for(trip of data.cart.trips) {
            let totalPrice = 0;
            totalPrice = totalPrice + trip.price;
            let date = new Date(trip.date);
            const tripDateHour = date.getHours();
            const tripDateMinute = date.getMinutes();
            const tripRow = document.createElement('div')
            tripRow.classList.add('rowTrips');
            const divDepAr = document.createElement('div')
            divDepAr.classList.add('depArr')
            const departure = document.createElement('span');
            departure.textContent = `${trip.departure}`;
            departure.classList.add('town');
            const sep = document.createElement('span');
            sep.textContent = ">"
            const arrival = document.createElement('span');
            arrival.textContent = `${trip.arrival}`;
            arrival.classList.add('town');
            const hours = document.createElement('div')
            hours.textContent = `${tripDateHour}:${tripDateMinute}`
            const price = document.createElement('div')
            price.textContent = `${trip.price}€`;

            cart.appendChild(tripRow);
            tripRow.appendChild(divDepAr);
            divDepAr.appendChild(departure);
            divDepAr.appendChild(sep);
            divDepAr.appendChild(arrival);
            tripRow.appendChild(hours);
            tripRow.appendChild(price);
        }
    }
})