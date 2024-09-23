document.addEventListener("DOMContentLoaded", function() {
    const catalogGrid = document.getElementById("catalog-grid");
    const imageCount = 26; // Number of images available (hik2 to hik27)
    const imagePath = "prod/";
    
    // Function to create a product card
    function createProductCard(index) {
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Determine the image number (cycle through available images)
        const imageNumber = (index % imageCount) + 2; // Start from hik2 to hik27
        const imageName = `hik${imageNumber}.jpg`;
        const productTitle = `Product ${index + 1}`; // Use a placeholder title
        const productPrice = `$${(Math.random() * 100 + 10).toFixed(2)}`;

        card.innerHTML = `
            <img src="${imagePath}${imageName}" alt="Product Image">
            <h3>${productTitle}</h3>
            <p>${productPrice}</p>
        `;

        return card;
    }

    // Generate all product cards
    for (let i = 0; i < 100; i++) {
        const card = createProductCard(i);
        catalogGrid.appendChild(card);
    }
});
