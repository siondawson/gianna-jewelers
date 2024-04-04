// CURRENTLY NOT IN USE
       document.addEventListener("DOMContentLoaded", async function() {
  const titles = document.querySelectorAll(".service-title");
  const textContainer = document.querySelector(".service-texts");

  // Fetch data from JSON file
  try {
    const response = await fetch("assets/json/services.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data from JSON file.");
    }
    const data = await response.json();

    // Load text for the first service item
    loadServiceText(data.services[0]);

    // Apply .selected class to the first title
    titles[0].classList.add("selected");

    // Event listeners for clicking on service titles
    titles.forEach(function(title) {
      title.addEventListener("click", function() {
        const selectedText = this.textContent;
        const selectedService = data.services.find(service => service.title === selectedText);

        // Remove underline from all titles
        titles.forEach(function(title) {
          title.classList.remove("selected");
        });

        // Underline the selected title
        this.classList.add("selected");

        // Fade out the previous text
        textContainer.classList.remove("active");

        // After a short delay, load and fade in the new text
        setTimeout(function() {
          loadServiceText(selectedService);
          textContainer.classList.add("active");
        }, 50); // Just a short delay to ensure the previous text has faded out before loading and fading in the new text
      });
    });
  } catch (error) {
    console.error(error);
  }

  // Function to load service text
  function loadServiceText(service) {
    // Clear existing text
    textContainer.innerHTML = "";

    // Append text for selected service
    const titleElement = document.createElement("h2");
    titleElement.textContent = service.title;
    textContainer.appendChild(titleElement);
 
    const paragraph = document.createElement("p");
    paragraph.textContent = service.text;
    textContainer.appendChild(paragraph);
  }
});