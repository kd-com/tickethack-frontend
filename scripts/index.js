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
        if(data.filteredTrips > 0) {
            const tripsList = document.getElementById('result-null')
            tripsList.innerHTML = ''
            for(let i = 0; i < data.filteredTrips.length; i++) {
                const trip = data.filteredTrips[i];
                const tripRow = document.createElement('div');
                tripRow.classList.add('triprow');
                // Ajoute du contenu dans tripRow selon ta structure de données
                tripRow.innerHTML = `
                    <p>${trip.departure} → ${trip.arrival}</p>
                    <p>${trip.date}</p>
                `;
                tripsList.appendChild(tripRow);

            }
        } else {
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

        }
    })
    
})