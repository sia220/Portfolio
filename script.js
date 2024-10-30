async function Caroussel() {
   // Récupération du fichier JSON
   const reponse = await fetch("/datas/images-caroussel.json");
   const images = await reponse.json();

   // Objet Kasa
   const listeKasa = images.find((i) => i.title == "Kasa");

   // Objet Piiquante
   const listePiiquante = images.find((i) => i.title == "Piiquante");

   // Objet Kanap
   const listeKanap = images.find((i) => i.title == "Kanap");

   // Affichage de la première img dans le caroussel du P1
   let baliseImg = document.querySelector(".p1__caroussel__link__img ");
   baliseImg.setAttribute("src", listeKasa.pictures[0]);

   // Variables du total d'images
   const totalKasa = listeKasa.pictures.length - 1;
   const totalPiiqaunte = listePiiquante.pictures.length - 1;
   const totalKanap = listeKanap.pictures.length - 1;

   // Flèche Gauche du P1
   let baliseArrowLeft = document.querySelector(".p1__arrow-left");
   baliseArrowLeft.addEventListener("click", function (event) {
      event.preventDefault();
      let imageActuelle = baliseImg.src;

      listeKasa.pictures.map((element, index) => {
         element === imageActuelle
            ? imageActuelle !== listeKasa.pictures[0]
               ? baliseImg.setAttribute("src", listeKasa.pictures[index - 1])
               : baliseImg.setAttribute("src", listeKasa.pictures[totalKasa])
            : null;
      });
   });

   // Flèche Droite du P1
   let baliseArrowRight = document.querySelector(".p1__arrow-right");
   baliseArrowRight.addEventListener("click", function (event) {
      event.preventDefault();
      let imageActuelle = baliseImg.src;

      listeKasa.pictures.map((element, index) => {
         element === imageActuelle
            ? imageActuelle !== listeKasa.pictures[totalKasa]
               ? baliseImg.setAttribute("src", listeKasa.pictures[index + 1])
               : baliseImg.setAttribute("src", listeKasa.pictures[0])
            : null;
      });
   });
}
Caroussel();
