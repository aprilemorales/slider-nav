# Slider Nav

This is the repo where my submission for the Slider Nav test by April Morales can be found.

I have left comments in my code to help give a quick explaination of what was being done / built.

## Challenges

I spent time looking into a pure CSS solution and experimenting with a few different things (borders, content, etc.).

See one example I came up with in action on JSFiddle: [https://jsfiddle.net/fywvxue1](https://jsfiddle.net/fywvxue1)

Here is the code of the linked example above. This is making use of content to create a sliding underline:

CSS:

                nav{
                max-width: 500px;
                display: flex;
                justify-content: space-around;
                }
                nav a {
                font-family: sans-serif;
                text-decoration: none;
                color: gray;
                }
                nav a::focus {
                transition: 1s ease-in-out;
                }
                nav a::after {
                content: "";
                display: block;
                margin-bottom: 11px;
                border-bottom: solid 1px blue;
                transform: scaleX(0);
                transform-origin: 200%;
                transition: transform 1s cubic-bezier(0.57, 0.21, 0.7, 1.25);
                }
                nav a.active::after {
                transform: scaleX(1);
                transform-origin: -200%;
                transition: transform 1s cubic-bezier(0.57, 0.21, 0.7, 1.25);
                }

HTML:

                <nav>
                    <a href="#">Item 1</a>
                    <a href="#">Item 2</a>
                    <a href="#">Item 3</a>
                    <a href="#">Item 4</a>
                </nav>

JavaScript:

                const navList = document.querySelector('nav');
                function handleClick(e){
                  const listItems = document.querySelectorAll('.active');
                  listItems.forEach(item => {
                    item.classList.remove('active');
                  });
                  e.target.classList.add('active');
                }
                navList.addEventListener('click', handleClick);
                
## Notes

This was completed with HTML, CSS and JavaScript. There were no use of libraries so this is all vanilla versions of CSS and JavaScript.

A tutorial was used to help with the sliding underline for the nav. I stumbled upon this tutotrial when looking into a CSS and JavaScript solution or something to point me in the right direction. Notes giving credit to the author and the link to the tutoral can be found in nav-bar.js file.

Adding credit here for good measure as well:
[How to Build a Shifting Underline Hover Effect With CSS and JavaScript by George Martsoukos](https://webdesign.tutsplus.com/tutorials/how-to-build-a-shifting-underline-hover-effect-with-css-and-javascript--cms-28510)

While the tutorial was followed, the code was modified to fit with in the structure I had created. Granted it was already similar. The main difference the nav items are being brought in dynamically from the JSON file in my set up. Overall it was modified to fit the requirements / functionality of the scenario given as well.
