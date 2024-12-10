async function Caroussel() {
   // Récupération du fichier JSON
   const reponse = await fetch("/Portfolio/datas/images-caroussel.json");
   const images = await reponse.json();

   // Fonction pour gérer le clic sur la flèche gauche du caroussel
   function CarousselFlecheGauche(baliseArrowLeft, baliseImg, liste, total) {
      baliseArrowLeft.addEventListener("click", function (event) {
         event.preventDefault();
         let imageActuelle = ".." + new URL(baliseImg.src).pathname.replace("/Portfolio/", "");

         liste.pictures.map((element, index) => {
            element === imageActuelle
               ? imageActuelle !== liste.pictures[0]
                  ? baliseImg.setAttribute("src", liste.pictures[index - 1])
                  : baliseImg.setAttribute("src", liste.pictures[total])
               : null;
         });
      });
   }

   // Fonction pour gérer le clic sur la flèche gauche du caroussel
   function CarousselFlecheDroite(baliseArrowRight, baliseImg, liste, total) {
      baliseArrowRight.addEventListener("click", function (event) {
         event.preventDefault();
         let imageActuelle = ".." + new URL(baliseImg.src).pathname.replace("/Portfolio/", "");

         liste.pictures.map((element, index) => {
            element === imageActuelle
               ? imageActuelle !== liste.pictures[total]
                  ? baliseImg.setAttribute("src", liste.pictures[index + 1])
                  : baliseImg.setAttribute("src", liste.pictures[0])
               : null;
         });
      });
   }

   // PROJET 1 : KASA

   // Objet Kasa
   const listeKasa = images.find((i) => i.title == "Kasa");

   // Affichage de la première img dans le caroussel du P1
   const baliseImgKasa = document.querySelector(".p1__caroussel__link__img ");
   baliseImgKasa.setAttribute("src", listeKasa.pictures[0]);

   // Variable du total d'images
   const totalKasa = listeKasa.pictures.length - 1;

   // Flèche Gauche du P1
   const baliseArrowLeftKasa = document.querySelector(".p1__arrow-left");
   CarousselFlecheGauche(baliseArrowLeftKasa, baliseImgKasa, listeKasa, totalKasa);

   // Flèche Droite du P1
   const baliseArrowRightKasa = document.querySelector(".p1__arrow-right");
   CarousselFlecheDroite(baliseArrowRightKasa, baliseImgKasa, listeKasa, totalKasa);

   // PROJET 2 : Piiquante

   // Objet Piiquante
   const listePiiquante = images.find((i) => i.title == "Piiquante");

   // Affichage de la première img dans le caroussel du P2
   const baliseImgPiiquante = document.querySelector(".p2__caroussel__link__img ");
   baliseImgPiiquante.setAttribute("src", listePiiquante.pictures[0]);

   // Variables du total d'images
   const totalPiiquante = listePiiquante.pictures.length - 1;

   // Flèche Gauche du P2
   const baliseArrowLeftPiiquante = document.querySelector(".p2__arrow-left");
   CarousselFlecheGauche(baliseArrowLeftPiiquante, baliseImgPiiquante, listePiiquante, totalPiiquante);

   // Flèche Droite du P2
   const baliseArrowRightPiiquante = document.querySelector(".p2__arrow-right");
   CarousselFlecheDroite(baliseArrowRightPiiquante, baliseImgPiiquante, listePiiquante, totalPiiquante);

   // PROJET 3 : KANAP

   // Objet Kanap
   const listeKanap = images.find((i) => i.title == "Kanap");

   // Affichage de la première img dans le caroussel du P3
   const baliseImgKanap = document.querySelector(".p3__caroussel__link__img ");
   baliseImgKanap.setAttribute("src", listeKanap.pictures[0]);

   // Variables du total d'images
   const totalKanap = listeKanap.pictures.length - 1;

   // Flèche Gauche du P3
   const baliseArrowLeftKanap = document.querySelector(".p3__arrow-left");
   CarousselFlecheGauche(baliseArrowLeftKanap, baliseImgKanap, listeKanap, totalKanap);

   // Flèche Droite du P3
   const baliseArrowRightKanap = document.querySelector(".p3__arrow-right");
   CarousselFlecheDroite(baliseArrowRightKanap, baliseImgKanap, listeKanap, totalKanap);
}
Caroussel();

// Menu Hamburger

let iconeMenu = document.querySelector(".header__hamburger");
let ulMenu = document.querySelector(".header__navbar");
let liMenu = document.querySelectorAll(".header__navbar__item__link");

// Au clic sur les flèches du menu hamburger, on ajoute ou retire la classe indiquée à ul.
iconeMenu.addEventListener("click", function (event) {
   event.preventDefault();
   ulMenu.classList.toggle("header__navbar--active");
});

// Au clic sur un li, on retire la classe indiquée à ul.
for (let iteration = 0; iteration < liMenu.length; iteration++) {
   liMenu[iteration].addEventListener("click", function (event) {
      ulMenu.classList.remove("header__navbar--active");
   });
}
