document.addEventListener("DOMContentLoaded", function () {
    const buyerGuideContainer = document.getElementById("buyerGuide");

    // Fetch JSON data
    fetch("assets/json/buyers-guide.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(cardData => {
                const card = createCard(cardData);
                buyerGuideContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching buyer's guide data:", error));

    // Function to create a card
    function createCard(cardData) {
        const card = document.createElement("div");
        card.classList.add("card", "mb-4");

        card.innerHTML = `
            <div class="row">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="${cardData.imageSrc}" class="img-fluid buyers-guide-card-img" alt="${cardData.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${cardData.title}</h5>
                        <p class="card-text">${cardData.text}</p>
                        <div class="text-center">
                            <img src="${cardData.chartSrc}" class="img-fluid" alt="Chart Image">
                        </div>
                    </div>
                </div>
            </div>
        `;

        return card;
    }
});
