document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");

  const imagePaths = [
    "../hikikomari-kyuuketsuki-no-monmon-1695739927.jpg",
    "js/hikikomari-kyuuketsuki-no-monmon-1695739927.jpg",
    "../../../desktop/ivy.png",
    "../../../downloads/447836738_473092078427489_4822331069405878266_n.jpg"
  ];

  imagePaths.forEach((path) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const imageElement = document.createElement("img");
    imageElement.src = path;
    imageElement.classList.add("w-full", "h-auto", "object-cover");

    const copyButton = document.createElement("button");
    copyButton.textContent = "Copiar ruta";
    copyButton.classList.add("copy-path-button");

    const copyMessageElement = document.createElement("span");
    copyMessageElement.classList.add("copy-message");
    copyMessageElement.textContent = "Ruta copiada";
    copyMessageElement.style.display = "none"; // Initially hide the message

    // Attach click event listener to the button
    copyButton.addEventListener("click", function () {
      const imagePath = imageElement.src;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(imagePath)
          .then(() => {
            copyMessageElement.style.display = "inline"; // Show message
            setTimeout(() => {
              copyMessageElement.style.display = "none"; // Hide message after delay
            }, 2000);
          })
          .catch(error => {
            console.error("Error al copiar la ruta:", error);
          });
      } else {
        // Fallback for browsers that don't support navigator.clipboard
        const clipboard = new ClipboardJS('.copy-path-button', {
          text: () => imagePath
        });

        clipboard.on('success', () => {
          copyMessageElement.style.display = "inline"; // Show message
          setTimeout(() => {
            copyMessageElement.style.display = "none"; // Hide message after delay
          }, 2000);
        });

        clipboard.on('error', (error) => {
          console.error("Error al copiar la ruta:", error);
        });

        // Cleanup clipboard instance to prevent memory leaks
        clipboard.destroy();
      }
    });

    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(copyButton);
    imageContainer.appendChild(copyMessageElement); // Add message element

    galleryContainer.appendChild(imageContainer);
  });
});
