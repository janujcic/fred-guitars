const entries = {
    repair: [
        {text: "We start the guitar creation by doing xy and then proceed by doing yz. This really improves everything after we have ............................................................", image:"images/guitars_in_workshop.png"},
        {text: "blabla2", image:"images/workshop.png"},
        {text: "blabla3", image:"images/workshops-guitars.png"}
    ]
}

document.querySelectorAll(".service-image-order").forEach(function (imageOrder) {
    const orderName = imageOrder.dataset.imageOrder;
    const images = entries[orderName] || [];

    images.forEach(function (imageInfo, index) {
        const imageText = document.createElement("div");
        imageText.className = "image-text-order";
        const text = document.createElement("p");
        const image = document.createElement("img");
        image.src = imageInfo.image;
        image.alt = "Gallery image " + (index + 1);
        image.className = "image-order";
        text.textContent = imageInfo.text;
        text.className = "text-order";
        imageText.appendChild(image);
        imageText.appendChild(text);
        imageOrder.appendChild(imageText);

    });
});