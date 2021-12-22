// Looping through the JSON response object and creating HTML elements for the cities
function populateNavList(obj){
    const ul = document.querySelector('ul');
    const cities = obj['cities'];
    for(let i = 0; i < cities.length; i++){
        const li = document.createElement('li');
        const a = document.createElement('a');
        const listItem = li.appendChild(a);
        listItem.textContent = cities[i].label;
        ul.appendChild(li);
    }
}

// Getting the JSON file contents to work with it
// Treating it as if was coming from a server (even though it is local in this case)
let request = new XMLHttpRequest();
request.open('GET', './navigation.json');
request.responseType = 'json';
request.send();
request.onload = function(){
    // Saving response object in a variable for easy access
    const navItems = request.response;

    // Adding the city elements on the page (passing in the navItems to be handled by populateNavList function above)
    populateNavList(navItems);

    // Underline Animation
    /*
    Making use of an extremely helpful tutorial I found by George Martsoukos on EnvatoTuts+.
    Found while looking for something to point me in the right direction to implement the sliding underline for nav.
    Tutorial link: https://webdesign.tutsplus.com/tutorials/how-to-build-a-shifting-underline-hover-effect-with-css-and-javascript--cms-28510

    Modified:
    - To work on click instead of mouseenter (or removal of the hover look effect)
    - To omit orginal changing of underline colors via an array
    - To omit unnecessary event listener
    - To be styled based on example of slider-nav.mov
    */

    // Make span with the class of underline available
    const underline = document.querySelector('.underline');
    // Select all a elements to make them available
    const navLinks = document.querySelectorAll('a');
    // Create a function to pass into the event listener to handle what to do on click
    function handleClick(){
        // Loop through all a elements (navLinks) parents (li in this case) to see if there is a class of active
        // IF there is a class of active remove it from the parent (li)
        if(!this.parentElement.classList.contains('active')){
            for(let i = 0; i < navLinks.length; i++){
                if(navLinks[i].parentElement.classList.contains('active')){
                    navLinks[i].parentElement.classList.remove('active');
                }
            }
        }
        // Add the class of active to the parent li
        this.parentElement.classList.add('active');

        // getBoundingClientRect() provides info about the size of an element and its position realtive to the viewport
        // Get the width of the element using the info returned from getBoundingClientRect()
        const width = this.getBoundingClientRect().width;
        // Get the height of the element using the info returned from getBoundingClientRect()
        const height = this.getBoundingClientRect().height;
        // Get the top boundary edge of the element using the info returned from getBoundingClientRect()
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        // Get the left boundary edge of the element using the info returned from getBoundingClientRect()
        const left = this.getBoundingClientRect().left + window.pageXOffset;

        // Styling the underline element based on the info gathered above
        // These styles make the underline be the size of the li
        underline.style.width = `${width}px`;
        underline.style.height = `${height}px`;
        underline.style.top = `${top}px`;
        underline.style.left = `${left}px`;
        underline.style.borderColor = "black";
        underline.style.transform = "none";
    }
    // Looping through the navLinks once more but this time to add click event listener and pass in handleClick function from above
    for(let i = 0; i < navLinks.length; i++){
        navLinks[i].addEventListener('click', handleClick);
    }
    // Create function to handle the recalculating of the left and top on resizing of the browser window
    function resizeUnderline() {
        // Making elements (li) with the class of active available
        const hasActive = document.querySelector('.active');
        // IF the element has the class of active recalculate (or get updated info)
        if (hasActive) {
            // Get updated left and top plus however much the document is currently scrolled along both the X axis and y axis
            const leftReCalc = hasActive.getBoundingClientRect().left + window.pageXOffset;
            const topReCalc = hasActive.getBoundingClientRect().top + window.pageYOffset;
            // Update the top and left styles applied to underline accordingly
            underline.style.top = `${topReCalc}px`;
            underline.style.left = `${leftReCalc}px`;
        }
    }
    // Add rezise event listener to the window and pass in resizeUnderline function
    window.addEventListener("resize", resizeUnderline);
};
