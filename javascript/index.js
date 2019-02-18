/* Le css aura besoin de JS pour détecter l'article 
   précédemment sélectionné quand l'utilisateur sélectionne
   un élément de navigation JS tient note de la section actuelle
   et cherche à détecter l'événement "popstate" dans lequel l'URL
   change.

   Une fois qu'il repère, tout attribut "data-previous" existant
   sera détruit et un nouveau sera placé sur l'article
   sélectionné avant le changement d'URL.
*/

window.addEventListener("load", function () {
    let target = "#" + document.querySelector("[id]").getAttribute("id");
    window.addEventListener("popstate", function () {
        if (target != "" && target != window.location.hash) {
            let node = document.querySelector('[data-previous]');
            if (node != null) node.removeAttribute("data-previous");
            document.querySelector(target).setAttribute("data-previous", "");
        }
        target = window.location.hash;

    });
});