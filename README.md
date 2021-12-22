# Slider Nav

This is the repo where the submission for the Slider Nav test by April Morales can be found. 

I have left comments throughout my code to help give an explaination of what was being done.

## Challenges

I spent time looking into a pure CSS solution and even experimenting with a few different things (borders, content, etc.). Unfortunately none of the pure CSS solutions I came up with worked exactly as I had hoped. Most felt semi close but still not right. Admittedly some were a bit janky.

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

This was all completed with HTML, CSS and JavaScript. There were no use of libraries so this is all vanilla versions of CSS and JavaScript.

I first set up a basic HTML file for the structure of the nav and it's elements. Then I created my JavaScript file so I could first pull in the nav items from the JSON object / file. After iterating through, accessing the items in the JSON object and the creating elements for the items I then styled everything.

A tutorial was used to help with the sliding underline for the nav. I stumbled upon this tutotrial when looking into a CSS and JavaScript solution or something to point me in the right direction. Notes giving credit to the author and the link to the tutoral can be found in nav-bar.js file.

Adding credit here for good measure as well: 

[How to Build a Shifting Underline Hover Effect With CSS and JavaScript by George Martsoukos](https://webdesign.tutsplus.com/tutorials/how-to-build-a-shifting-underline-hover-effect-with-css-and-javascript--cms-28510)

While the tutorial was followed, the code was modified to fit with in the structure I had created. Granted it was already similar. The main difference is that the nav items are being brought in dynamically from the JSON file in my set up. Overall it was modified to fit the requirements and functionality of the scenario given as well.

I took time to look up the documentation for the things I was not familiar with. I felt it was important to read a bit deeper into and understand them. The tutorial gives a high level overview of what is happening and how things work. However, I felt it wasn't enough so I added in detailed comments of what each part is doing based on what I learned and investigated.

## Bonus
I was going to try to tackle the Bonus next. However, for the sake of time I will stop here. 

Summary of potential next steps: 

- I would make use of a free timezone API(s) I found. 
- I would add onto or take advantage of my active class selection
- I would iterate through both the li elements and the timezone object brought in from the API
- In the iteration I would search for the li text content to match a city or location from the timezone object (generally speaking)
- If they match, I would then create an element (say a paragraph). Then append it to the span (underline) and pass in the current time from the timezone object to be displayed

### Thank You

If you made it in reading down this far, thank you for your time and consideration. I wanted to add some insight and some detail about my process here. Overall this was a fun but challanging test. I learned new things and I'm happy to have had the opportunity to be tested!
