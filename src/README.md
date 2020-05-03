# Mobile flash card
This application allows you to create flash card then it uses it to quize you following the instructions specified. you also get notifications for missed session of for the days which you did not or have not completed the exercise.

## Requirement.
In orther to run the project you need to have react-native installed in your invironment,
then yarn or any package manager, 
basically you can head up to the react website and follow the [setting up your environment](https://reactnative.dev/docs/environment-setup#__docusaurus)

## Installation.

First run yarn install or npm install
when you are done you should run `react-native run-ios` for developingin ios environment or `react-native run-android`if you are running on android. 
This has been fully tested in ios.
When you are done. move to the `src/` directory where you will find the `DeckList.tsx` file. In the file you will see the following 
```
useEffect(() => {
    //removeValue()
    // storeData(data)
    getData().then(data=>setDecks(data))
    setNotification()
}, [])
```
 uncomment the line `storeDate(data)`
 That line basically populate the async storage with demo questions.
 after this innitial run, you should comment back that line. make sure that you comment that line after running it.

You are now ready to use the app. 
Enjoy!
## Explore
If you are a developer then you can explore and add feature as well as moidfy the way it suits you. the sky is your limit.

# Basic functionality of the app is :
- The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.
- Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.

*The individual deck view includes (at a minimum):*

- The deck title
- Number of cards in the deck
- Option to start a quiz for that deck
- Option to add a new question to the deck
*Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.*

The New Question view includes a form with fields for a question and answer, and a submit button.
Submitting the form correctly adds the question to the deck.

- The Quiz view starts with a question from the selected deck.
- The question is displayed, along with a button to show the answer.
- Pressing the 'Show Answer' button displays the answer.
- Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
- The view displays the number of questions remaining.
- When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
- When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
- Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.

*DECK*
The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button.

Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck

- Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.

The app works correctly in either Android OR iOS devices (or emulator)
*Note*
`app has been tested on ios emulator and it works properly.`