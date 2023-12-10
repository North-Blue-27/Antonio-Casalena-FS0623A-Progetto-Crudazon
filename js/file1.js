const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZmJmNmZlMDMxZTAwMTliYTE0ZGUiLCJpYXQiOjE3MDIwMzQ3MjQsImV4cCI6MTcwMzI0NDMyNH0.vtirrfnWXDk260ecBWWt1_LDpRw1Fd_oU-5CXv5pW2c";

// Funzione per ottenere tutti i prodotti e mostrarli sulla pagina
function getProducts() {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      return response.json();
    })
    .then(products => {
      // Manipolazione dei dati ottenuti e aggiornamento della pagina
      const productsContainer = document.getElementById("products-container");

      products.forEach(product => {
        // Crea un elemento HTML per ogni prodotto e aggiungilo al container
        const productElement = document.createElement("div");
        productElement.innerHTML = `
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>Prezzo: ${product.price}</p>
          <img src="${product.imageUrl}" alt="${product.name}" />
          <button onclick="addToCart('${product._id}')">Aggiungi al carrello</button>
          <hr>
        `;
        productsContainer.appendChild(productElement);
      });
    })
    .catch(error => {
      console.error("Errore nella richiesta:", error);
      // Gestisci gli errori in modo appropriato
    });
}

// Funzione per creare un nuovo prodotto
function createProduct() {
  const newProduct = {
    name: "Iphone 15 Pro",
    description: "Top Smartphone",
    brand: "Apple",
    imageUrl: "https://example.com/15Pro.jpg",
    price: "1350"
    // Altri campi richiesti secondo le specifiche dell'API
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nella creazione del prodotto');
      }
      return response.json();
    })
    .then(createdProduct => {
      console.log("Nuovo prodotto creato:", createdProduct);
      // Puoi gestire la risposta come preferisci, ad esempio aggiornando la lista dei prodotti
      getProducts();
    })
    .catch(error => {
      console.error("Errore nella creazione del prodotto:", error);
      // Gestisci gli errori in modo appropriato
    });
}

// Funzione per aggiungere un prodotto al carrello
function addToCart(productId) {
  // Implementa il codice per aggiungere il prodotto al carrello
  console.log(`Prodotto ${productId} aggiunto al carrello`);
}

// Chiama la funzione per ottenere i prodotti al caricamento della pagina
window.onload = function() {
  getProducts();
};