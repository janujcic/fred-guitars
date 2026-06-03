const entries = {
    repair: [
        {
            text: {
                fr: "Refretage d'une Jacobacci Studio 2 de 1977.",
                en: "Refret of a 1977 Jacobacci Studio 2."
            },
            images: ["images/repair/Refret-jaco2-1.jpeg", "images/repair/Refret-jaco2-2.jpeg"]
        },
        {
            text: {
                fr: "Révision d'une Stratocaster Serie L Fiesta Red refin.",
                en: "Service work on a refin Fiesta Red L-Series Stratocaster."
            },
            images: ["images/repair/rep-strat-Lserie.jpg", "images/repair/rep-strat-Lserie2.jpg", "images/repair/rep-strat-pickup.jpg"]
        },
        {
            text: {
                fr: "Réparation d'une tête de Taylor GS mini cassée.",
                en: "Repair of a broken Taylor GS Mini headstock."
            },
            images: ["images/repair/rep-taylor-gsmini1.jpg", "images/repair/rep-taylor-gsmini2.jpg", "images/repair/rep-taylor-gsmini3.jpg", "images/repair/rep-taylor-gsmini4.jpg", "images/repair/rep-taylor-gsmini5.jpg", "images/repair/rep-taylor-gsmini6.jpg"]
        },
        {
            text: {
                fr: "Ajustage et recollage du manche d'une Rogand.",
                en: "Neck adjustment and reglue on a Rogand."
            },
            images: ["images/repair/rep-manche-decolle-rogand.jpg", "images/repair/rep-manche-decolle.jpg"]
        },
        {
            text: {
                fr: "Planif frettes Lag.",
                en: "Fret levelling on a Lag."
            },
            images: ["images/repair/manche-sur-banc.jpeg"]
        },
        {
            text: {
                fr: "Réparation et rebobinage micro d'une Hofner 500-1 de 1964.",
                en: "Pickup repair and rewind on a 1964 Hofner 500-1."
            },
            images: ["images/repair/rep-hofner-500-1-65.jpg"]
        },
        {
            text: {
                fr: "Rebobinage d'un micro Hofner.",
                en: "Rewinding a Hofner pickup."
            },
            images: ["images/repair/rep-micro1.jpg", "images/repair/rep-micro2.jpg", "images/repair/rep-micro3.jpg", "images/repair/rep-micro4.jpg", "images/repair/restoration-hofner-173.jpg"]
        },
        {
            text: {
                fr: "Réparation d'un manche décollé sur Ibanez classique.",
                en: "Repair of a loose neck on a classical Ibanez."
            },
            images: ["images/repair/rep-manche-arrache1.jpg", "images/repair/rep-manche-arrache2.jpg"]
        },
        {
            text: {
                fr: "Sauvetage des mécaniques d'une Rogand.",
                en: "Rescuing the tuners on a Rogand."
            },
            images: ["images/repair/restoration-buttons.jpg", "images/repair/restoration-buttons2.jpg"]
        },
        {
            text: {
                fr: "Quelques autres réparations.",
                en: "A few other repairs."
            },
            images: ["images/repair/rep-elec.jpg", "images/repair/rep-pickup.jpg", "images/repair/strat-squier-jv.jpg"]
        }
    ]
}


function getVisibleCount() {
    if (window.matchMedia("(max-width: 640px)").matches) return 1;
    if (window.matchMedia("(max-width: 900px)").matches) return 2;
    return 3;
}

function createImageOrderGallery(entry, options) {
    const state = {
        entry: entry,
        galleryTrack: options.galleryTrack,
        prevButton: options.prevButton,
        nextButton: options.nextButton,
        currentIndex: 0,

        render: function () {
            const visibleCount = getVisibleCount();

            state.galleryTrack.replaceChildren();

            const overflow = getVisibleCount() < entry.images.length;
            if (!overflow) {
                state.nextButton.style.display = "none";
                state.prevButton.style.display = "none";
            }
            else {
                state.nextButton.style.display = "block";
                state.prevButton.style.display = "block";
            }

            if (state.currentIndex < 0) {
                state.currentIndex = state.entry.images.length - 1;
            }


            for (let i = 0; i < visibleCount; i += 1) {

                if (i == entry.images.length) break;
                const imageIndex = (state.currentIndex + i) % state.entry.images.length;

                const image = document.createElement("img");
                image.src = state.entry.images[imageIndex];
                image.className = "gallery-image";
                image.alt = state.entry.text + imageIndex;
                state.galleryTrack.appendChild(image);
            }



        },

        next: function () {
            state.currentIndex += 1;
            state.render();
        },
        prev: function () {
            state.currentIndex -= 1;
            state.render();
        }
    };

    state.prevButton.addEventListener("click", function () {
        state.prev();
    });

    state.nextButton.addEventListener("click", function () {
        state.next();
    });

    return state;
}

function createGallery() {
    const galleryInstances = [];
    const currentLanguage = document.documentElement.lang === "en" ? "en" : "fr";

    document.querySelectorAll(".service-image-order").forEach(function (imageOrder) {
        const orderName = imageOrder.dataset.imageOrder;
        const entryOrder = entries[orderName] || [];

        entryOrder.forEach(function (entry, index) {

            const textElement = document.createElement("p");
            textElement.className = "image-text-order";
            textElement.textContent = entry.text[currentLanguage] || entry.text.fr;

            const galleryContainer = document.createElement("div");
            galleryContainer.className = "gallery-container";

            const prevButton = document.createElement("button");
            prevButton.className = "prev-button";
            prevButton.textContent = "<";

            const galleryTrack = document.createElement("div");
            galleryTrack.className = "gallery-track";

            const nextButton = document.createElement("button");
            nextButton.className = "next-button";
            nextButton.textContent = ">";

            galleryContainer.appendChild(prevButton);
            galleryContainer.appendChild(galleryTrack);
            galleryContainer.appendChild(nextButton);

            imageOrder.appendChild(textElement);
            imageOrder.appendChild(galleryContainer);

            const gallery = createImageOrderGallery(entry, {
                galleryTrack: galleryTrack,
                prevButton: prevButton,
                nextButton: nextButton,
            });
            gallery.render();
            galleryInstances.push(gallery);
        });


    });

    window.addEventListener("resize", function () {
        galleryInstances.forEach(function (gallery) {
            gallery.render();
        });
    });
}

createGallery();



