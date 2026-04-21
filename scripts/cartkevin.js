


const cart = document.getElementById('updatedCart');
fetch('http://localhost:3000/cart')
.then(response => response.json())
.then(data => {
    if(data.result === true) {
        cart.innerHTML = '';
        let sumPrice = 0;
        for(trip of data.cart.trips) {
            sumPrice = sumPrice + trip.price;
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
            price.classList.add('price')
            price.textContent = `${trip.price}€`;
            const btnDelete = document.createElement('button')
            btnDelete.setAttribute('id', `${trip._id}`);
            btnDelete.textContent= 'X';
            btnDelete.classList.add('deletebtn');
            btnDelete.addEventListener('click', function() {
                fetch(`http://localhost:3000/cart/${this.id}`, {method: 'DELETE'})
                .then(response => response.json())
                .then(data => {
                    if(data.result) {
                        tripRow.remove();
                    }
                })
            })

            cart.appendChild(tripRow);
            tripRow.appendChild(divDepAr);
            divDepAr.appendChild(departure);
            divDepAr.appendChild(sep);
            divDepAr.appendChild(arrival);
            tripRow.appendChild(hours);
            tripRow.appendChild(price);
            tripRow.appendChild(btnDelete);


            
        }
        const totalRow = document.createElement('div');
            totalRow.classList.add('totalrow');
            const priceTotal = document.createElement('p');
            priceTotal.classList.add('pricetotal');
            priceTotal.textContent = `TOTAL : ${sumPrice}€`
            const purchasebtn = document.createElement('button');
            purchasebtn.classList.add('purchasebtn');
            purchasebtn.textContent='Purchase'
            cart.appendChild(totalRow)
            totalRow.appendChild(priceTotal);
            totalRow.appendChild(purchasebtn);
    }
})
deleteTrajet()