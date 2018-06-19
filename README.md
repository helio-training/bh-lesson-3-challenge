# bh-lesson-3-challenge
This is a challenge that we will continue to work on throughout the class
you will be graded on checkpoints as we progress. Make sure to follow all of the instructions and to push your changes up to your branch as we will be pulling down from your branch, running tests, and comparing your results.

### Challenges

1. Complete the login page. (Login creds for now are ```username - bryce@helio.com  password - 123```)
    - This should be both the css and the JSX(React's version of html)
    - Make sure to hook up the jsx to the correct onClick, onChange, etc.
1. Setup the landing page and complete the pyramid challenge
    - Look under the secured folder
        - Finish the index.js files under the landing folder and the pyramid-challenge folder
        - Add css as needed to get them to look right.
1. Complete the header and footer
    - You will complete the header and footer components in this challenge.
    - Use the image in teams to view how the webpage should look when finished.
    - You will be required to move your old css used for the pages over to a file located in the public folder and call it default.css
    - You will also be required to create a default.html file and recreate the whole login page in pure html (a lot of copy pasting and small tweaks). It link in the head to the default.css above so your styles carry over.
    - instead of your previous css you will create new css code using flexbox (we will go over this in class)
### Clone down the project (don't fork)
1. Clone this repo down
1. Create a branch with the following syntax ```<lastname>/<firstname>-react-challenge```
    - ```git checkout -b hayden/bryce-react-challenge```
1. Make some changes and commit your work
    - ```git status``` (to see changes)
    - ```git add .``` (to add all changes)
    - ```git commit -m "<yourmessage>"```
1. Push your branch up
    - ```git push origin <nameOfBranch> -u``` (only do it this way for the first time)
    - ```git push``` (do it this way all other times)

### Running the project
1. Make sure you have Docker CE installed
1. Open up your terminal
1. cd into the project
1. Run ```docker-compose up -d```
1. Go to localhost:3000 to see your
