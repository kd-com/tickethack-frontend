const departure = document.querySelector(".departure");
const arrival = document.querySelector(".arrival");
const hour = document.querySelector(".hour");
const price = document.querySelector(".price");
const btnDelete = document.querySelector(".btnDelete");
const totalPrice = document.querySelector(".totalPrice");
const btnPourchase = document.querySelector(".btnPourchase");
const tripRows = document.querySelector(".container-trajet");
fetch("http://localhost:3000/cart")
  .then((response) => response.json())
  .then((data) => {
    tripRows.innerHTML = ""
    if(data.result === true) {
        for (trip of data.cart.trips) {
        
        let montPrice = 0
          console.log(trip);
          montPrice = montPrice + trip.price;
    
          let date = new Date(trip.date);
          const tripDateHour = date.getHours();
          const tripDateMinutes = date.getMinutes();
          const tripRow = document.createElement("div");
    
          tripRow.classList.add("rowTrips");
          tripRow.innerHTML = `
            <p><span>${trip.departure}</span> > <span>${trip.arrival}</span></p>
            <p>${tripDateHour}:${tripDateMinutes}</p>
            <p>${trip.price} €</p>
            <button>X</button>
            `;
          tripRows.appendChild(tripRow);
        }
    } else {
        const paragraphe = document.createElement('p')
        paragraphe.textContent = "Aucun trajet dans le panier"
        tripRows.appendChild(paragraphe);
    }
  });

// fetch('http://localhost:3000/cart')
// .then(response => response.json())
// .then(data =>{
//     console.log(data.cart)
//    tripRows.innerHTML = ""
//    let montPrice = 0

//     for (let i = 0; i<data.cart.length; i++){
//         for(let trip of data.cart[i].trips){
//         console.log(trip[0])

//         montPrice = montPrice + trip.price

//         let date = new Date(trip.date)
//         const tripDateHour = date.getHours()
//         const tripDateMinutes = date.getMinutes()
//         const tripRow = document.createElement("div")

//         tripRow.classList.add('rowTrips')
//         tripRow.innerHTML = `
//         <p><span>${trip.departure}</span> > <span>${trip.arrival}</span></p>
//         <p>${tripDateHour}:${tripDateMinutes}</p>
//         <p>${trip.price} €</p>
//         <button>X</button>
//         `;
//         tripRows.appendChild(tripRow);
//     }
//     totalPrice.textContent = montPrice
//     console.log(montPrice)
// }
// })

// Supprimer un voyage dans le panier
