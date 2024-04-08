const url = 'https://jacuancum.github.io/wdd230/final project Scoots/data/rental_pricing.json';
const cards = document.querySelector('#cards');

async function getRentalData() {
    const response = await fetch(url);
    const data = await response.json();
    displayRentals(data.rentals);
}
getRentalData();

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let maxPersonsInfo = document.createElement('p');
        let resHD = document.createElement('p');
        let resFD = document.createElement('p');
        let walHD = document.createElement('p');
        let walFD = document.createElement('p');

        fullName.textContent = rental.name;
        portrait.setAttribute('src', rental.image);
        portrait.setAttribute('alt', `Portrait of ${rental.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '333');      
        maxPersonsInfo.textContent = `Max person: ${rental.maxPersons}`;
        resHD.textContent = `Reservation Half Day (3hrs): ${rental.reservationHalfDay}`;

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(maxPersonsInfo);
        card.appendChild(resHD);
        cards.appendChild(card);
    });
  };