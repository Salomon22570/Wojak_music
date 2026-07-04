//-------------------------------------------------------------------------------------------------
// déclaration des variables
// -------------------------------------------------------------------------------------------------
const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");
const boredBtn = document.getElementById("boredBtn");
const angryBtn = document.getElementById("angryBtn");


// gestion modal popup
const modal = document.getElementById("myModal"); /* fenêtre qui s'afficeh */
const span = document.getElementsByClassName("close")[0]; /* croix pour fermé la modale */

//gestion d'image

const happyImg = document.getElementById("happyImg");
const sadImg = document.getElementById("sadImg"); 
const boredImg = document.getElementById("boredImg"); 
const angryImg = document.getElementById("angryImg"); 



function hideAllImages() {
  happyImg.hidden = true;
  sadImg.hidden = true;
  boredImg.hidden = true;
  angryImg.hidden = true;
}




// declaration des listes
// Attention le nom de l'élément doit être le nom d'un fichier présent dans le repetoire Media
const list_sad = [ "Joji - Glimpse of Us", "Lou Reed - Perfect Day ", "Juice WRLD - Lucid Dreams ", "Nirvana - Something In The Way ","Nirvana - The Man Who Sold The World ", "Pixies - Where Is My Mind ","Radiohead - Creep ", "Red Hot Chili Peppers - Under The Bridge ", "Sum 41 - Pieces - Sum 41 " ];
const list_happy = [ "Smash Mouth - All Star", "Ice Cube - It Was A Good Day ", "The Notorious B.I.G. - Juicy ", "Outkast - Hey Ya! ", "Weezer - Buddy Holly", "Weezer - Island In The Sun ", "lil peep w yung bruh - white tee - ", "KiD CuDi - Cudderisback ", "Yung Lean ♦ Ginseng Strip ", "bladee - Be Nice To Me"];
const list_bored = [ "Crystal Castles - Vanished", "Born Slippy - Underworld ", "Dead By 30", "I Need Caffeine - Negative XP - ","KennyHoopla - how will i rest in peace","THE ANXIETY, WILLOW","Sum 41 - In Too Deep","1996 They Call Me Sonic ","Iggy Pop - Lust For Life - Iggy Pop "];
const list_angry = [ "Bring Me To Life - Evanescence", "Still Waiting - Sum 41", "Freak On a Leash - KoRn", "Smells Like Teen Spirit - Nirvana ","Last Resort - Papa Roach","Duality - Slipknot ","My Own Summer (Shove It) - Deftones ","Break Stuff - limpbizkit","I Hate Everything About You","One Step Closer - Linkin Park","Die MF Die - Dope Band"];

//-------------------------------------------------------------------------------------------------
// Gestion des événements
//-------------------------------------------------------------------------------------------------
happyBtn.addEventListener("click", () => {
   hideAllImages();
  FnMusic(list_happy,5);  
  modal.style.display = "block"; /*css */
  happyImg.hidden = false;
});

sadBtn.addEventListener("click", () => {
    hideAllImages();
  FnMusic(list_sad,5);  
  modal.style.display = "block"; /*css */
  sadImg.hidden = false;
});

boredBtn.addEventListener("click", () => {
    hideAllImages();
  FnMusic(list_bored,5);  
  modal.style.display = "block"; /*css */
  boredImg.hidden = false;
});

angryBtn.addEventListener("click", () => {
    hideAllImages();
  FnMusic(list_angry,5);  
  modal.style.display = "block"; /*css */
  angryImg.hidden = false;
});

// evenement pour la gestion du popup
span.onclick = () => { modal.style.display = "none"; }; /* appuyé croix caché */

//-------------------------------------------------------------------------------------------------
//fonction qui affiche  une liste de music
// parametres d'entrées: 
// - arr_choix : liste de chaines de caracteres, contenant les noms des fichiers mp3 à afficher
// - int_nb ; nobre d'éléments de la liste à afficher
function  FnMusic(arr_choix, int_nb) {
  
  // déclaration et initialisation des variables
      
  // text : chaines de caracteres contenant le html à afficher
  var str_text="<ul>";  
  
  // variable de gestion du choix randomisé
  var int_choix;
    
  //compteur & initialisation
  let z = 0;
   //variable de gestion des doublons
  let int_ok = 0;
  
  // longueur de liste
  let len_choix = arr_choix.length;
  
  // tableau des exclusions
   const list_exc = [];
  let len_exc = list_exc.length;
 
  //construction de la liste 
  // int_nb arguments d'entrée de la foncion ; nb d"éléments à afficher 
    while (z <  int_nb){

      // parours la liste passé en arguments
      for (let i = 1; i < len_choix; i++) {
        // tirage du choix aléatoie 
        int_choix = Math.floor(Math.random() * len_choix);  

        // gestion des doublons
        // on parcours la iste des choix precedents
        for (let j = 0; j < len_exc; j++) {
         
          // si présent dans la liste alors int_ok = 1
          if (int_choix ==  list_exc[j]){ 
            int_ok=1;
            }
          }
      //si int_ok differents de 1 => il n'est pas fdéjà dans la liste
       if (int_ok != 1){
         
          str_text += " <li> ";
         
          // construcion de l'élément audio à afficher 
          // Attention le nom de l'élément doit être le nom d'un fichier présent dans le repetoire Media
            str_text += " <audio controls> ";
            str_text += '<source src="./Media/'+ arr_choix[int_choix] +'.mp3" type="audio/mpeg">';
            str_text += "</audio>";
          
         str_text += "</li>";
         
          // incremente compteur
          z ++;    
          if (z==5){
            break;
          }

          }
             
        //ajout du choix dns la liste à exclure
        list_exc.push(int_choix);
        len_exc = list_exc.length;
        
        //initialise le compteur de doublon
        int_ok=0;
       
      }
    }
  // fin de liste
  str_text += "</ul>";
  z=0;
  
  // affichage dans l'élément mood
  document.getElementById("mood").innerHTML = str_text;
}


