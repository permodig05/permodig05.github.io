var products = [
    {
      id: 1,
      title: "Produkt 1",
      description: "Detaljerad information om Produkt 1."
    },
    {
      id: 2,
      title: "Produkt 2",
      description: "Detaljerad information om Produkt 2."
    },
    {
      id: 3,
      title: "Produkt 3",
      description: "Detaljerad information om Produkt 3."
    },
    {
      id: 4,
      title: "Produkt 4",
      description: "Detaljerad information om Produkt 4."
    },
    {
      id: 5,
      title: "Produkt 5",
      description: "Detaljerad information om Produkt 5."
    },
    {
      id: 6,
      title: "Produkt 6",
      description: "Detaljerad information om Produkt 6."
    },
    {
      id: 7,
      title: "Produkt 7",
      description: "Detaljerad information om Produkt 7."
    },
    {
      id: 8,
      title: "Produkt 8",
      description: "Detaljerad information om Produkt 8."
    }
  ];
  
  // Lägg till klickhändelsehanterare för varje produkt-kort
  var productCards = document.querySelectorAll(".product-card");
  productCards.forEach(function(card) {
    card.addEventListener("click", function() {
      var productId = parseInt(this.id.replace("product", ""));
      showDetails(productId);
    });
  });
  
  function showDetails(productId) {
    var modal = document.getElementById("details-modal");
    var title = document.getElementById("modal-title");
    var description = document.getElementById("modal-description");
  
    // Hitta rätt produkt baserat på produkt-ID
    var product = products.find(function(item) {
      return item.id === productId;
    });
  
    // Uppdatera modalinnehållet med produktinformation
    if (product) {
      title.innerHTML = product.title;
      description.innerHTML = product.description;
      modal.style.display = "block";
    }
  }
  
  function closeModal() {
    var modal = document.getElementById("details-modal");
    modal.style.display = "none";
  }