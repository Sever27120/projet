var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",

};

var booksList = new Array();

var authorsList = new Array();

var categoriesList = new Array();

// on lance le chargement
const loader=document.querySelector("loader");



window.addEventListener("load", jasonOnLoad());
// On lance le filtre par auteur quand on change sur la liste déroulante
document.getElementById("listAuthors").addEventListener("change", function () {
    ChargeByAuthor();
});
// on lance le filtre par categorie quand on change sur la liste déroulante
document.getElementById("listCategories").addEventListener("change", function () {
    ChargeByCategorie();
});


// fonction pour pouvoir mettre le json
function jasonOnLoad() {

    fetch("books.json")
        .then((response) => {
            return response.json();
        })
        .then((booksData) => {
            console.log(booksData);
            createListe(booksData);
        });
}
//fonction création de nos liste déroulante
function createListe(_data) {
    for (var x = 0; x < _data.length; x++) {
        var book = _data[x];
        booksList.push(book);

        // on créer la liste des auteurs 
        for (var y = 0; y < book.authors.length; y++)
            var author = book.authors[y];

        if (authorsList.indexOf(author) == -1) {
            authorsList.push(author);
        }

        //on créer la liste des catégories
        for (var z = 0; z < book.categories.length; z++)
            var categorie = book.categories[z];

        if (categoriesList.indexOf(categorie) == -1) {
            categoriesList.push(categorie);
        }


    }
    //trier la liste par ordre alphabétique
    booksList.sort();
    authorsList.sort();
    categoriesList.sort();

    for (var a = 0; a < authorsList.length; a++) {
        var option = document.createElement("option");
        option.value = authorsList[a];
        option.innerText = authorsList[a];
        document.getElementById("listAuthors").appendChild(option);
    }

    for (var b = 0; b < categoriesList.length; b++) {
        var option = document.createElement("option");
        option.value = categoriesList[b];
        option.innerText = categoriesList[b];
        document.getElementById("listCategories").appendChild(option);
    }

    showBooks(booksList);
}
// pour afficher les images
function showBooks(_booksList) {
    document.getElementById("booksList").innerHTML ="";
// création des cartes pour chaque livres 
    for (var i = 0; i < _booksList.length; i++) {
        var bookCard = document.createElement("div");
        bookCard.setAttribute("class", "card mb-4");
// pour afficher les images
        if (_booksList[i].thumbnailUrl == undefined ||
            _booksList[i].thumbnailUrl == null) {
            _booksList[i].thumbnailUrl =
                "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
        }
        // conditions pour pouvoir afficher  les titres avec conditions de 20 caractères sinon ect
        var titre;
        if (_booksList[i].title.length > 20) {
            titre = _booksList[i].title.substring(0, 20) + "(..)"

        }
        else {
            titre = _booksList[i].title;
        }

        // conditions pour avec les nombre de pages
        
        var nbrpage

        if (_booksList[i].pageCount == undefined ||
            _booksList[i].pageCount == 0) 
            
            {
               nbrpage="le nombre de page n'est pas indiquer";
            }

            else{
                nbrpage =_booksList[i].pageCount;
            }
            
        // conditions  afficher isbn       
        var ISBN;


        ISBN = _booksList[i].isbn;

        // conditions pour  les description inférieur à 20 caractéreur sinon ect     
        var description;
        var descriptionshort;

        if
            (_booksList[i].shortDescription == undefined ||
            _booksList[i].shortDescription == null) {
            description = "";
            descriptionshort = "";
        }
        else {
            if (booksList[i].shortDescription.length > 20) {

                descriptionshort = _booksList[i].shortDescription.substring(0, 20) + "(..)";
                description = _booksList[i].shortDescription;
            }
            else {
                descriptionshort = _booksList[i].shortDescription;
                description = _booksList[i].shortDescription;
            }
            // mettre la date publication en français comme lundi 9 avril 2009

            var datePubli;
            try {
                datePubli = new Date(_booksList[i].publishedDate.dt_txt)
                    .toLocaleDateString("fr-FR", options);

            } catch (error) {
                datePubli = "Pas date de publication";
            }
// afficher sur le html donc sur la page web vue par l'utilisatuer 
            bookCard.innerHTML = "<img src='" + _booksList[i].thumbnailUrl + "'/>" +
                // afficher pas plus de 20 caractère du titre
                //afficher dans une infobulle le titre des mots qui manque
                "<h1 class='bookTitle'><span class='infobulle' title='" +
                _booksList[i].title + "'>" +
                titre + "</span></h1>" +
                // AFfficher isbn
                "<h2>"+ ISBN + "</h2>" +
                // afficher nombre de pages
                "<h3>"+ nbrpage + "</h3>" +
                "<h4>" + datePubli + "</h4>";
// afficher dans une bulle le reste des descriptions pour voir la suite indiquer avec (..)
            if (description != "") {
                bookCard.innerHTML += "<h4> <span class='infobulle' title='" +
                    _booksList[i].shortDescription + "'>" + description + "</span></h4>";
            }
            document.getElementById("booksList").appendChild(bookCard);
        }

    }

}
//fonction pour afficher les livres par auteurs avec la liste déroulante
function ChargeByAuthor() {
    var e = document.getElementById("listAuthors");
    var strAuthors = e.options[e.selectedIndex].innerText;

    var booksByAuthorsList = new Array();
    if (strAuthors == "") {
        showBooks(booksList);
    }
    else {
        for (var x = 0; x < booksList.length; x++) {
            var bookByAuthor = booksList[x];
            if (bookByAuthor.authors.indexOf(strAuthors) != -1) {
                booksByAuthorsList.push(bookByAuthor);
            }
        }
    }
    booksByAuthorsList.sort();
    showBooks(booksByAuthorsList);
    Time(booksByAuthorsList);

}
// fonction pour afficher les livres par cathégories avec la liste déroulante
function ChargeByCategorie() {
    var e = document.getElementById("listCategories");
    var strCategories = e.options[e.selectedIndex].innerText;

    var booksByCategoriesList = new Array();
    if (strCategories == "") {
        showBooks(booksList);
    }
    else {
        for (var y = 0; y < booksList.length; y++) {
            var bookByCategorie = booksList[y];
            if (bookByCategorie.categories.indexOf(strCategories) != -1) {
                booksByCategoriesList.push(bookByCategorie);
            }
        }
    }
    booksByCategoriesList.sort();
    showBooks(booksByCategoriesList);
    Time(booksByCategoriesList);

}

/*function Time(){

document.getElementsByClassName("loader").setTimeout(() => {
    alert("Aucune recherche à votre demande")
    
}, 4000);
} cette fonction ne fonctionne pas pour indiquer que dès 
le dépassemnt de 4 s de chargement indiquer un message d'erreur que les info demander pas trouver*/
