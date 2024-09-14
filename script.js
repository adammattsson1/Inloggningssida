const namn = "test";
const lösenord = "1234";

let startscreen;
let failedLoginScreen;
let successfulLoginScreen;

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


console.log("beginning");

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
let buttondiv = document.createElement("div");
let button = document.createElement("button");
button.id = "button";
button.innerText = "Logga in";
buttondiv.style.margin = "10%";
buttondiv.append(button);
content.appendChild(buttondiv);



startscreen = true;

button.addEventListener("click", function() 
{
    console.log("event listener")

    if(startscreen)
    {
        nameInput = loginNameBox.value;
        passwordInput = loginPasswordBox.value;

        if(nameInput == namn && passwordInput == lösenord)
        {
            console.log("success");
            
            headertext.innerText = "Välkommen";

            button.innerText = "Logga ut";
    
            loginNameText.remove();
            loginNameBox.remove();
            loginPasswordText.remove();
            loginPasswordBox.remove();

            successfulLoginScreen = true;
            startscreen = false;
        }
        else
        {
            console.log("fail");

            headertext.innerText = "Inloggning misslyckades";

            button.innerText = "Försök igen";

            loginNameText.remove();
            loginNameBox.remove();
            loginPasswordText.remove();
            loginPasswordBox.remove();

            failedLoginScreen = true;
            startscreen = false;
        }
    }
    else
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

        
        content.insertAdjacentElement("beforeend", buttondiv);
        button.innerText = "Logga in";
        

        startscreen = true;
        failedLoginScreen = false;
        successfulLoginScreen = false;
    }
})

