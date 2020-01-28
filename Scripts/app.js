/*
    Name: Tom Tsiliopoulos
    StudentID: 123456789
    Date Completed: January 27, 2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    // variables for Part A
    let productsLI;

    // variables for Part B
    let contactUsLI;
    let contactUsLIParent;
    let humanResroucesLI;

    // variables for Part C
    let bottomNav;
    let h4CopyRight;
    let pageBody;
    let jqueryScript;
    let jqueryScriptParent;

    // test practice variables
    let h1Delete;

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        // Part A
        // step 1 - bind / connect to the element that you wish to manipulate
        productsLI = document.getElementById("products");
        //products.innerHTML = "<a class='nav-link' href='#'><i class='fas fa-hamsa'></i> Projects</a>"
        //productsLI.firstElementChild.innerHTML = "<i class='fas fa-hamsa'></i> Projects"
        productsLI.firstElementChild.lastChild.textContent = " Projects";


        // Part B
        contactUsLI = document.getElementById('contact');
        contactUsLIParent = contactUsLI.parentNode;
        humanResroucesLI = contactUsLI.cloneNode(true);
        humanResroucesLI.id = "hr";
        //HRLI.firstElementChild.innerHTML = "<i class='fas fa-users'></i> Human Resources";

        humanResroucesLI.firstElementChild.firstElementChild.className = "fas fa-users";
        humanResroucesLI.firstElementChild.lastChild.textContent = " Human Resources";

        contactUsLIParent.insertBefore(humanResroucesLI, contactUsLI);
        
        
        // Part C
        bottomNav = document.createElement('nav');
        bottomNav.className = "navbar fixed-bottom navbar-light bg-light";
        
        h4CopyRight = document.createElement('h4');
        h4CopyRight.innerHTML = "&copy; CopyRight 2020.";

        bottomNav.appendChild(h4CopyRight);

        
        pageBody = document.getElementsByTagName('body')[0];
        //pageBody.appendChild(bottomNav);

        jqueryScript = pageBody.children[4];
        jqueryScriptParent = jqueryScript.parentNode;

        jqueryScriptParent.insertBefore(bottomNav, jqueryScript);

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        // test practice

        // delete example
       h1Delete = document.getElementsByTagName('h1')[0];
       // h1Delete.remove();

       h1Delete.addEventListener("click", function(){
           h1Delete.textContent = "Good Bye!";
       });

       h1Delete.addEventListener("mouseover", function(){
        h1Delete.style.cssText = "color: red";
        h1Delete.style.cursor = "pointer";
    });

    h1Delete.addEventListener("mouseout", function(){
        h1Delete.style.color = "black";
        h1Delete.style.cursor = "default";
    });


    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

