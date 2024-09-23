
document.addEventListener("DOMContentLoaded", function() {
    
   
    // Variables for products and modal functionality
    const productGrid = document.getElementById("product-grid");
    const searchBox = document.getElementById("search-box");
    const searchBtn = document.getElementById("search-btn");
    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const closeModal = document.getElementById("close-modal");
    const registerBtn = document.getElementById('register-btn');
    const formSection = document.getElementById('form-section');
    const submitBtn = document.getElementById('submit-btn');
    const registeredCustomers = [];

    
    // Product constants
    const totalCards = 200;
    const imageCount = 25;
    const imagePath = "prod/";
    let cart = [];

    
    const cameraNames = [
        'Hikvision DS-2CD2087G2-L', 'Dahua N52A', 'AXIS M2026-LE', 'Lorex LNB8005',
        'Arlo Ultra 4K', 'Nest Cam Outdoor', 'Ring Floodlight Cam', 'Swann SWPRO-4K',
        'Amcrest ProHD', "Reolink RLC-511", "Samsung Wisenet PNF-9010", "TP-Link Tapo C310",
        'AXIS P1427-LE', 'Bosch DINION IP starlight 7000 HD', 'Uniview IPC3235ER3-DVZ',
        'Hikvision DS-2CD2385FWD-I', 'Dahua IPC-HDW4631C-A', 'AXIS Q6075-E', 'Lorex LNB8005B',
        'Arlo Pro 4', 'Nest Cam Indoor', 'Ring Indoor Cam', 'Swann SWNHD-888MSB', 'Amcrest UltraHD 4K',
        'Reolink RLC-410', 'Samsung SmartCam HD', 'TP-Link Tapo C200', 'Vivotek FD9360-HV',
        'Bosch FLEXIDOME IP 5000', 'Uniview IPC3634SR3-DPZ', 'Hikvision DS-2CD2347G1-L',
        'Dahua IPC-HDW3441C', 'AXIS P1427-LE', 'Lorex LNB4422', 'Arlo Q Plus',
        'Nest Cam IQ Outdoor', 'Ring Stick Up Cam', 'Swann NHD-865MSB', 'Amcrest IP8M-T2499EW',
        'Reolink RLC-423', 'Samsung Wisenet TNO-6030', 'TP-Link Tapo C400', 'Vivotek IB9360-HT',
        'Bosch AUTODOME IP 5000', 'Uniview IPC3614ER3-DPZ', 'Hikvision DS-2CD2585FWD-I',
        'Dahua IPC-HDW4831EM-ASE', 'AXIS Q1798-LE', 'Lorex LNB8105', 'Arlo Essential Spotlight',
        'Nest Cam IQ Indoor', 'Ring Video Doorbell Pro 2', 'Swann SWWHD-865MSB', 'Amcrest IP5M-T1179EW',
        'Reolink RLC-520', 'Samsung SmartCam HD Plus', 'TP-Link Tapo C500', 'Vivotek IB8371-E',
        'Bosch FLEXIDOME IP 7000', 'Uniview IPC3235LR3-DVZ', 'Hikvision DS-2CD2745FWD-IZS',
        'Dahua IPC-HDW4831H-AS', 'AXIS Q6215-LE', 'Lorex LNB9974B', 'Arlo Pro 2',
        'Nest Cam Outdoor IQ', 'Ring Stick Up Cam Elite', 'Swann SWNHD-869MSB', 'Amcrest IP8M-2496EB',
        'Reolink RLC-810A', 'Samsung Wisenet PNM-9320VQP', 'TP-Link Tapo C110', 'Vivotek IB8350-H',
        'Bosch DINION IP 5000', 'Uniview IPC3238SR3-D', 'Hikvision DS-2CD2086G2-I',
        'Dahua IPC-HDW4231EM-ASE', 'AXIS P3717-PLE', 'Lorex LNB8552', 'Arlo Pro 3 Floodlight',
        'Nest Cam Indoor IQ', 'Ring Video Doorbell 3', 'Swann SWNHD-880MSB', 'Amcrest IP8M-2496EB',
        'Reolink RLC-423', 'Samsung SmartCam HD Pro', 'TP-Link Tapo C320', 'Vivotek FD9365-HV',
        'Bosch FLEXIDOME IP 7000i', 'Uniview IPC3635ER3-DPZ', 'Hikvision DS-2CD2123G0-I',
        'Dahua IPC-HDW5631EM-ASE', 'AXIS Q6128-E', 'Lorex LNB9174', 'Arlo Essential Spotlight Cam',
        'Nest Cam Indoor IQ', 'Ring Video Doorbell Pro', 'Swann SWNHD-881MSB', 'Amcrest IP8M-2596EW',
        'Reolink RLC-511W'
    ];

    
    // Create product cards
    function createProductCard(index) {
        const card = document.createElement("div");
        card.className = "product-card";
        const imageNumber = (index % imageCount) + 2;
        const imageName = `hik${imageNumber}.jpg`;
        const productTitle = cameraNames[index % cameraNames.length];
        const productPrice = `$${(Math.random() * 100 + 10).toFixed(2)}`;

       
        card.innerHTML = `
            <img src="${imagePath}${imageName}" alt="Product Image">
            <h3>${productTitle}</h3>
            <p>${productPrice}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

       
        card.setAttribute("data-title", productTitle);
        card.setAttribute("data-price", productPrice);
        card.setAttribute("data-image", `${imagePath}${imageName}`);

        return card;
    }

    
    // Generate all product cards using a loop specifically the for.
    for (let i = 0; i < totalCards; i++) {
        const card = createProductCard(i);
        productGrid.appendChild(card);
    }
  

    // Filter products based on search query
    function filterProducts(query) {
        const cards = document.querySelectorAll(".product-card");
        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = title.includes(query.toLowerCase()) ? "" : "none";
        });
    }

    
    // Event listeners for search functionality
    searchBtn.addEventListener("click", () => {
        filterProducts(searchBox.value);
    });

   
    searchBox.addEventListener("input", () => {
        filterProducts(searchBox.value);
    });

   
    // Add products to cart
    productGrid.addEventListener("click", function(e) {
        if (e.target.classList.contains("add-to-cart")) {
            const card = e.target.closest(".product-card");
            const productTitle = card.getAttribute("data-title");
            const productPrice = card.getAttribute("data-price");
            const productImage = card.getAttribute("data-image");

            addToCart(productTitle, productPrice, productImage);
        }
    });

    
    function addToCart(title, price, image) {
        cart.push({ title, price, image });
        updateCartDisplay();
        alert(`${title} has been added to the cart.`);
    }

    
    function updateCartDisplay() {
        const cartLink = document.querySelector(".cart");
        cartLink.textContent = `Cart (${cart.length})`;
    }

    // Modal functionality
    productGrid.addEventListener("click", function(e) {
        if (e.target.closest(".product-card")) {
            const card = e.target.closest(".product-card");
            modalImg.src = card.querySelector("img").src;
            modalTitle.textContent = card.querySelector("h3").textContent;
            modalPrice.textContent = card.querySelector("p").textContent;

            modal.style.display = "block";
        }
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Registration form functionality
    registerBtn.addEventListener('click', function() {
        formSection.classList.remove('hidden');
    });

    // Register user and hide the form
    submitBtn.addEventListener('click', function() {
        let fullName = document.getElementById('fullName').value;
        let emailAddress = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        let newCustomer = {
            fullName: fullName,
            email: emailAddress,
            password: password
        };
        
        registeredCustomers.push(newCustomer);
        alert(`New customer ${fullName} has been registered`);

        clearForm();
        formSection.classList.add('hidden');
    });

    function clearForm() {
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
    }

    // Cancel registration and hide form
    document.getElementById('cancel-btn').addEventListener('click', function() {
        formSection.classList.add('hidden');
        clearForm();
    });
});
// google maps

  // Initialize the map and set its view to a geographical location and zoom level
  var map = L.map('map').setView([51.505, -0.09], 13);

  // Load and display tile layers from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a marker at the center of the map
  var marker = L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('<b>Hello world!</b><br />I am a popup.')
    .openPopup();

