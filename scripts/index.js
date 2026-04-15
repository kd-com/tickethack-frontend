console.log('✅ script index chargé')

// recherche de trajet
const btnSearch = document.getElementById('searchBtn')
btnSearch.addEventListener('click', function() {
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const calendrier = document.querySelector('#calendrier').value;
    console.log(departure, arrival, calendrier)
    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${calendrier}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.filteredTrips.length === 0) {
            const resultNull = document.getElementById('result-null')
            resultNull.innerHTML = ''
            const img = document.createElement('img');
            img.src = './images/notfound.png';
            img.classList.add('img');
            const sep = document.createElement('span')
            sep.classList.add('separator')
            const paragraphe = document.createElement('p')
            paragraphe.classList.add('paragraphe')
            paragraphe.innerText = 'No trip found.'

            resultNull.appendChild(img)
            resultNull.appendChild(sep)
            resultNull.appendChild(paragraphe)
            
        } else {
            const tripsList = document.getElementById('result-null')
            tripsList.classList.add('search-result')
            tripsList.innerHTML = ''
            for(let i = 0; i < data.filteredTrips.length; i++) {
                const trip = data.filteredTrips[i];
                const tripRow = document.createElement('div');
                tripRow.classList.add('triprow');
                const tripContent = document.createElement('p')
                tripContent.textContent = `${trip.departure} → ${trip.arrival}`
                const tripHour = document.createElement('p')
                const convertHour = new Date(`${trip.date}`);
                let hour = convertHour.getHours()
                let min = convertHour.getMinutes()
                tripHour.textContent = `${hour}h${min}`;
                const tripPrice = document.createElement('p');
                tripPrice.classList.add('price')
                tripPrice.textContent = `${trip.price}€`;
                const tripBtn = document.createElement('button');
                tripBtn.id = `${trip._id}`;
                tripBtn.textContent = 'Book';
                
                tripsList.appendChild(tripRow);
                tripRow.appendChild(tripContent);
                tripRow.appendChild(tripHour);
                tripRow.appendChild(tripPrice);
                tripRow.appendChild(tripBtn);

            }
            

        }
    })
    
})