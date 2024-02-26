document.addEventListener("DOMContentLoaded", function () {
    // Fetch product data
    fetch("assets/json/categories.json")
        .then(response => response.json())
        .then(data => {
            const productCardsContainer = document.getElementById("product-cards-container");

            data.forEach(product => {
                const card = createCard(product);
                productCardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching product data:", error));

    // Fetch brand logos data
    fetch("assets/json/logos.json") // Updated file path
        .then(response => response.json())
        .then(data => {
            const brandLogosContainer = document.getElementById("brand-logos-container");

            data.forEach(logo => {
                const logoElement = createLogo(logo);
                brandLogosContainer.appendChild(logoElement);
            });
        })
        .catch(error => console.error("Error fetching brand logos data:", error));

    // Function to create a product card
    function createCard(product) {
        const card = document.createElement("div");
        card.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");

        // Check if a link is provided in the JSON data
        const cardLink = product.link ? `href="${product.link}"` : 'href="#"';

        card.innerHTML = `
            <a ${cardLink} class="card-link">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                    </div>
                </div>
            </a>
        `;

        return card;
    }

    // Function to create a brand logo
    function createLogo(logo) {
        const logoElement = document.createElement("div");
        logoElement.classList.add("col-6", "col-md-3", "mb-4", "text-center");

        logoElement.innerHTML = `
            <img src="${logo.image}" alt="${logo.title}" class="brand-logo img-fluid">
        `;

        return logoElement;
    }
});
