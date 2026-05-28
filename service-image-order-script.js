const entries = {
    repair: [
        {text: "Refretage d'une Jacobacci Studio 2 de 1977.", images:["images/repair/Refret-jaco2-1.jpeg", "images/repair/Refret-jaco2-2.jpeg"]},
        {text: "Révision d'une Stratocaster Serie L Fiesta Red refin.", images:["images/repair/rep-strat-Lserie.jpg", "images/repair/rep-strat-Lserie2.jpg", "images/repair/rep-strat-pickup.jpg"]},
        {text: "Réparation d'une tête de Taylor GS mini cassée.", images:["images/repair/rep-taylor-gsmini1.jpg", "images/repair/rep-taylor-gsmini2.jpg", "images/repair/rep-taylor-gsmini3.jpg", "images/repair/rep-taylor-gsmini4.jpg", "images/repair/rep-taylor-gsmini5.jpg", "images/repair/rep-taylor-gsmini6.jpg"]},
        {text: "Ajustage et recollage du manche d'une Rogand.", images:["images/repair/rep-manche-decolle-rogand.jpg", "images/repair/rep-manche-decolle.jpg"]},
        {text: "Planif frettes Lag.", images:["images/repair/manche-sur-banc.jpeg"]},
        {text: "Réparation et rebobinage micro d'une Hofner 500-1 de 1964.", images:["images/repair/rep-hofner-500-1-65.jpg"]},
        {text: "Rebobinage d'un micro Hofner.", images:["images/repair/rep-micro1.jpg", "images/repair/rep-micro2.jpg", "images/repair/rep-micro3.jpg", "images/repair/rep-micro4.jpg", "images/repair/restoration-hofner-173.jpg"]},
        {text: "Réparation d'un manche décollé sur Ibanez classique.", images:["images/repair/rep-manche-arrache1.jpg", "images/repair/rep-manche-arrache2.jpg"]},
        {text: "Sauvetage des mécaniques d'une Rogand.", images:["images/repair/restoration-buttons.jpg", "images/repair/restoration-buttons2.jpg"]},
        {text: "Quelques autres réparations.", images:["images/repair/rep-elec.jpg", "images/repair/rep-pickup.jpg", "images/repair/strat-squier-jv.jpg"]}
    ]
}

document.querySelectorAll(".service-image-order").forEach(function (imageOrder) {
    const orderName = imageOrder.dataset.imageOrder;
    const orderEntries = entries[orderName] || [];

    orderEntries.forEach(function (entry, index) {
        var addButtons = false;
        let prevButton;
        let nextButton;
        if (entry.images.length > 3) {
            addButtons = true;
            prevButton = document.createElement("button");
            prevButton.className = "prev-button";
            prevButton.textContent = "<";

            nextButton = document.createElement("button");
            nextButton.className = "next-button";
            nextButton.textContent = ">";
     
        }
        
        const gallery = document.createElement("div");
        gallery.className = "gallery-track";
        for (let i=0; i < 3; i++) {
            if (i == entry.images.length) break
            const image = document.createElement("img");
            image.src = entry.images[i];
            image.className = "gallery-image";
            if (addButtons && i == 0) {
                gallery.appendChild(prevButton);
            }
            gallery.appendChild(image);
            if (addButtons && i == 2) {
                gallery.appendChild(nextButton);
            }
        }
        const imageText = document.createElement("p");
        imageText.className = "image-text-order";
        imageText.textContent = entry.text;
        imageOrder.appendChild(imageText);
        
        imageOrder.appendChild(gallery);
        

        
    });
});