const namn = "test";
const lösenord = "1234";

let root = document.getElementById("root");

//header
let header = document.createElement("header");
let headertext = document.createElement("h1");
headertext.innerText = "Inloggningssida";
header.appendChild(headertext);
root.appendChild(header);

//content
let content = document.createElement("main");
content.id = "content";
root.appendChild(content);


//text över namn inputbox
let loginNameText = document.createElement("p");
loginNameText.innerText = "Namn: ";
content.appendChild(loginNameText);

//inputbox för namn
let loginNameBox = document.createElement("input");
content.appendChild(loginNameBox);


//text över lösenord inputbox 
let loginPasswordText = document.createElement("p");
loginPasswordText.innerText = "Lösenord: ";
content.appendChild(loginPasswordText);

//inputbox för lösenord
let loginPasswordBox = document.createElement("input");
content.appendChild(loginPasswordBox);


//login knapp
let button = document.createElement("button");
button.innerText = "Logga in";
content.appendChild(button);


button.addEventListener("click", function() 
{
    nameInput = loginNameBox.value;
    passwordInput = loginPasswordBox.value;

    if(nameInput == namn && passwordInput == lösenord)
    {
        console.log(nameInput);
        console.log(passwordInput);
        button.innerText = "Logga ut";

        loginNameText.remove();
        loginNameBox.remove();
        loginPasswordText.remove();
        loginPasswordBox.remove();

        
    }
    else
    {
        console.log("w")
    }
})

