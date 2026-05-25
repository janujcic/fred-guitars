const galleries = {
  "custom-shop": [
    "images/custom-shop/Fabrication-strat1.jpg",
    "images/custom-shop/Fb-chilicaster.jpg",
    "images/custom-shop/archtop-matisse1.jpg",
    "images/custom-shop/archtop-matisse2.jpg",
    "images/custom-shop/archtop-matisse3.jpg",
    "images/custom-shop/archtop-matisse4.jpg",
    "images/custom-shop/es330-fb-2.jpeg",
    "images/custom-shop/es330-fb-no-face.jpeg",
    "images/custom-shop/es330-fb.jpeg",
    "images/custom-shop/fab-2guitars-chaise.jpg",
    "images/custom-shop/fab-ES1.jpg",
    "images/custom-shop/fab-ES2.jpg",
    "images/custom-shop/fab-ES3.jpg",
    "images/custom-shop/fab-ES4.jpg",
    "images/custom-shop/fab-ES5.jpg",
    "images/custom-shop/fab-ES6.jpg",
    "images/custom-shop/fab-ES7.jpg",
    "images/custom-shop/fab-ES8.jpg",
    "images/custom-shop/fab-basse-5-flammed-walnut1.jpg",
    "images/custom-shop/fab-basse-5-flammed-walnut2.jpg",
    "images/custom-shop/fab-basse5-1.jpg",
    "images/custom-shop/fab-basse5-2.jpg",
    "images/custom-shop/fab-basse5-3.jpg",
    "images/custom-shop/fab-basse5-4.jpg",
    "images/custom-shop/fab-basse5-5.jpg",
    "images/custom-shop/fab-chilicaster1.jpg",
    "images/custom-shop/fab-chilicaster2.jpg",
    "images/custom-shop/fab-chilicaster3.jpg",
    "images/custom-shop/fab-flammed-lespaul.jpg",
    "images/custom-shop/fab-lespaul.jpg",
    "images/custom-shop/fab-lespaul2.jpg",
    "images/custom-shop/fab-neck-strat.jpg",
    "images/custom-shop/fab-telecaster-thinline.jpg",
    "images/custom-shop/fab-telejunior1.jpg",
    "images/custom-shop/fab-telejunior2.jpg",
    "images/custom-shop/fab-telejunior3.jpg",
    "images/custom-shop/guitar-drying.jpeg",
    "images/custom-shop/lp-dc-flammed-walnut.jpg",
    "images/custom-shop/lp-dc-flammed-walnut2.jpg",
    "images/custom-shop/strat-noyer.jpg"
  ],
  "customization": [
    "images/customization/fender-telecaster-thinline.jpg",
    "images/customization/gibson-lespaul.jpg",
    "images/customization/new-body-for-steinberger.jpg",
    "images/customization/rep-new-pickup.jpg",
    "images/customization/strat-flammed-walnut.jpg",
    "images/customization/strat-surf-green.jpg"
  ]
}

document.querySelectorAll(".service-gallery").forEach(function (gallery) {
  const galleryName = gallery.dataset.gallery;
  const images = galleries[galleryName] || [];

  images.forEach(function (src, index) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = "Gallery image " + (index + 1);
    image.className = "service-gallery-image";
    gallery.appendChild(image);
  });
});
