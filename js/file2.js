const specialCards = [
    {
        "name": "Nami Alt OP-02",
        "description": "Nami Alternative Art",
        "brand": "One Piece Card Game",
        "imageUrl": "https://www.picclickimg.com/aRQAAOSw2EFkoF7T/One-Piece-TCG-Nami-OP02-036-SR-JAP.webp",
        "price": 200,
    },
    {
        "name": "Shanks Manga OP-01",
        "description": "Most rare OP-01 card",
        "brand": "One Piece Card Game",
        "imageUrl": "https://www.picclickimg.com/qoYAAOSw8shkVlkR/Manga-Shanks-OP01-120-Beckett-Black-Label.webp",
        "price": 1850,
    },
    {
        "name": "Luffy Winer SPR",
        "description": "Super Pre-Release Winner Card",
        "brand": "One Piece Card Game",
        "imageUrl": "https://www.picclickimg.com/m~AAAOSwCGZj~UPA/BGS-10-Super-Pre-Release-WINNER-MonkeyDLuffy.webp",
        "price": 2200,
    },
    {
        "name": "Black Lotus BGS 9.5",
        "description": "Black Lotus Beta 1993",
        "brand": "Magic The Gathering",
        "imageUrl": "https://scg-static.starcitygames.com/articles/2021/01/669bbc62-1500x1500_5774c2e8ed1ae539c4bc8a2ee4ebd32e2c40a44785dc4263c060e6e7.jpg",
        "price": 135000,
    },
    {
        "name": "Charizard Shadowless BGS 10",
        "description": "1999 Pokemon 1st Edition Holo Shadowless",
        "brand": "Pokemon",
        "imageUrl": "http://beckett-www.s3.amazonaws.com/news/news-content/uploads/2017/08/1999-Pokemon-Game-1st-Edition-Holo-Charizard-BGS-10-PWCC-Aug-2017-Front.jpg",
        "price": 65000,
    },
    {
        "name": "Pikachu Promo Munch",
        "description": "Promo Pikachu Munch Japanise",
        "brand": "Pokemon",
        "imageUrl": "https://pbs.twimg.com/media/F7T3FKCWEAA8sjo?format=jpg&name=medium",
        "price": 1800,
    },
    {
        "name": "Time Walk Power Nine BGS 10",
        "description": "Time Walk Beta 1993",
        "brand": "Magic The Gathering",
        "imageUrl": "https://dyn1.heritagestatic.com/lf?set=path%5B2%2F0%2F8%2F3%2F3%2F20833790%5D&call=url%5Bfile%3Aproduct.chain%5D",
        "price": 88000,
    },
    {
        "name": "Pikachu Illustrator",
        "description": "Promo Pikachu Illustrator Japanise",
        "brand": "Pokemon",
        "imageUrl": "https://i.ebayimg.com/images/g/ZMkAAOSw2gBftsUY/s-l1200.webp",
        "price": 650000,
    }
    
];

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZmJmNmZlMDMxZTAwMTliYTE0ZGUiLCJpYXQiOjE3MDIyNTI5NDUsImV4cCI6MTcwMzQ2MjU0NX0.pRGaHKpDu2E0pABd8QiiuhmysidjFLXnwCvaAJ8g3Kc";

const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

fetch("https://striveschool-api.herokuapp.com/api/product", {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Invalid token or unauthorized');
    }
    return response.json();
})
.then(products => {
    console.log('Products:', specialCards);
})
.catch(error => {
    console.error('Token validation error:', error);
});





function populateCards(cards) {
    const cardContainers = document.querySelectorAll('.cardContainer');

    cards.forEach((card, index) => {
        const cardContent = `
            <div class="card h-100 border border-warning-subtle">
                <img src="${card.imageUrl}" class="card-img-top" alt="Immagine prodotto">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">Descrizione: ${card.description}</p>
                    <p class="card-text">Prezzo: ${card.price} €</p>
                    <p><a href="#" class="link-primary">More Info</a></p>
                    <button class="btn btn-success">Modifica</button>
                    <button class="btn btn-danger">Elimina</button>
                </div>
            </div>
        `;

        if (cardContainers[index]) {
            cardContainers[index].innerHTML = cardContent;
        }
    });
}

// Chiamata alla funzione per popolare le cards
populateCards(specialCards);






 