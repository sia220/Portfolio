async function recupererImages() {
   const reponse = await fetch("/datas/images-caroussel.json");
   const images = await reponse.json();

   const listeKasa = images.find((i) => i.title == "Kasa");
   console.log(listeKasa.pictures);

   const listePiiquante = images.find((i) => i.title == "Piiquante");
   console.log(listePiiquante.pictures);

   const listeKanap = images.find((i) => i.title == "Kanap");
   console.log(listeKanap.pictures);
}
recupererImages();
