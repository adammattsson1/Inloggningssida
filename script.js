//variabler är globala så att varje funktion kan kalla dem
const namn = "test";
const lösenord = "1234";

let loginScreen;
let userLogged;
userLogged = localStorage.getItem("loggeduser");

let root = document.getElementById("root");

//header
let header = document.createElement("header");
let headertext = document.createElement("h1");
header.appendChild(headertext);
root.appendChild(header);

//content div
let content = document.createElement("main");
content.id = "content";
root.appendChild(content);

//element inom content div
let loginNameText = document.createElement("p");
let loginNameBox = document.createElement("input");
let loginPasswordText = document.createElement("p");
let loginPasswordBox = document.createElement("input");
let buttondiv = document.createElement("div");
let button = document.createElement("button");
button.id = "button";
button.innerText = "Logga in";
buttondiv.style.margin = "10%";
buttondiv.appendChild(button);
content.insertAdjacentElement("beforeend", buttondiv);


//kollar om användaren har loggat in tidigare
//om "userLogged" inte existerar i localStorage byggs inloggningssidan
if(userLogged != null)
{
    successfulLogin();
}
else
{   
    loginScreenBuild();
}

//eventListener lyssnar efter klick
//när användaren klickar på knappen kollar if-satsen om användaren är på inloggningssidan
//det indikeras av bool variabeln "loginScreen"
//när "loginScreen" är "true" kollar en annan if-sats om namn/lösenord är korrekt 
//när uppgifterna är korrekt byggs sidan för lyckad inloggning, annars byggs sidan för misslyckad inloggning.
//"loginScreen" växlar till "false" och programmet går tillbaka till eventListener 
//när användaren inte är på inloggningssidan byggs inloggningssidan automatiskt efter klick

//eventListener används som en loop
//efter varje knapp klick går programmet tillbaka till eventListener
//på detta sätt byts sidan när användaren klickar på knappen

//dem enda elementen som tas bort eller lägs till när sidan byts är input-boxarna och texten ovanför
//knappen och rubriken återanvänds med ny text och position
//tanken är att återanvända så mycket som möjligt så att datorn sparar resurser genom att göra så lite som möjligt

//funktioner, "nameInput" och "passwordInput" används för att göra koden prydligare
button.addEventListener("click", function() 
{
    if(loginScreen)
    {
        nameInput = loginNameBox.value;
        passwordInput = loginPasswordBox.value;

        if((nameInput == namn && passwordInput == lösenord))
        {
            successfulLogin();
        }
        else
        {
            failedLogin();
        }
    }
    else
    {
        loginScreenBuild();
    }
})


//bygger inloggningssidan
function loginScreenBuild()
{
    headertext.innerText = "Inloggningssida";


    loginNameText.innerText = "Namn: ";
    content.appendChild(loginNameText);

    loginNameBox.value = "";
    content.appendChild(loginNameBox);



    loginPasswordText.innerText = "Lösenord: ";
    content.appendChild(loginPasswordText);

    loginPasswordBox.value = "";
    content.appendChild(loginPasswordBox);



    buttondiv.appendChild(button);
    content.insertAdjacentElement("beforeend", buttondiv);
    button.innerText = "Logga in";

    
    localStorage.clear();

    loginScreen = true;
}

//bygger sida för lyckad inloggning
function successfulLogin()
{
    headertext.innerText = "Välkommen";

    button.innerText = "Logga ut";

    loginNameText.remove();
    loginNameBox.remove();
    loginPasswordText.remove();
    loginPasswordBox.remove();

    localStorage.setItem("loggeduser", true);

    loginScreen = false;
}

//bygger sida för misslyckad inloggning
function failedLogin()
{
    headertext.innerText = "Inloggning misslyckades";

    button.innerText = "Försök igen";

    loginNameText.remove();
    loginNameBox.remove();
    loginPasswordText.remove();
    loginPasswordBox.remove();

    loginScreen = false;
}