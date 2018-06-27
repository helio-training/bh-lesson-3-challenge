// #Create a react class
//  Go to the landing page and copy over all of the javascript/react
//  Change the name of the class to be PyramidChallengePage

// #Add JSX(React's version of HTML) to the render's return
//  Create a div wrapper for the page like we did for the login & landing
//    Create an input with a type of number
//    Add an onChange attribute and link it up to a function on the class (you will need to create this function)
//  Create a div to hold our answer (the pyramid)
//    inside this div we will output javascript (to do this we use {} braces to tell JSX we want to execute javascript)

// #Create the class functions to handle input change
// This will be similar to what I did for you on the login page
//  with the exception that we will need to use some new javascript functions
//  the functions that we will be using are array(we will cover this in class), array.map (this is basically a for loop over the array)
//  react key attribute
//  this function should return a div for each item in the array

// #Add styles as needed

// !!!!!The point of the page
//  I should be able to enter in a number in the input and click the submit button
//  This should then render a pyramid below the input and button that has the same number of levels as
//  given in the input.

Recent
Contacts
Recent

Melissa and Zachary
7: 11 PM
Zachary: class PyramidChallenge extends Component {
    constructor(props) {
        super(props)
        Profile picture of Melissa Conn.
        Melissa Conn
        6 / 19
        Profile picture of Bryce Hayden.
        Bryce Hayden
        6 / 19
        https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-ag
        T - Bot
        2 / 12
        What can I help you with today ?

            Melissa,
        Zachary
2 participants

        Conversation
        Files






















        Zachary Hutto added Melissa Conn and Dianne Hodnet to the conversation.
        Last read
        Profile picture of Zachary Hutto.
        Zachary Hutto
        7: 11 PM



        class PyramidChallenge extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    numberOfLevels: '',
                    pyramid: []
                }
            }

            handleInputChange = (event) => {
                event.preventDefault()
                this.setState({ numberOfLevels: event.target.value })
            }
            handleButtonClick = () => {
                this.setState({ pyramid: this.creatPyramidArray() })
            }
            creatPyramidArray = () => {
                if (this.state.numberOfLevels === '') return
                const expression = '-*'
                const tempPyramid = []
                for (let i = 0; i < this.state.numberOfLevels; i++) {
                    tempPyramid.push(expression.repeat(i + 1).concat('-'))
                }
                return tempPyramid
            }

            render() {
                return (
                    <div styleName="container">
                        <h1>Build your Pyramid</h1>
                        <form id="pyramidForm">
                            <input type="number" placeholder="Enter number" value={this.state.numerOfLevels} onChange={this.handleInputChange} />
                            <button type="button" onClick={this.handleButtonClick}>Submit</button>
                            <div styleName="pyramidOutput">
                                {this.state.pyramid.map((level, index) => {
                                    return <div key={index}>{level}</div>
                                })}
                            </div>
                        </form>
                    </div>
                )
            }
        }
        export default withRouter(connected([], [])(CSSModules(PyramidChallenge, css)))
        Type a new message








        Zachary:



        class PyramidChallenge extends Component {

            constructor(props) {

                supe…