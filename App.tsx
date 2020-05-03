import React from 'react';
import { StyleSheet, } from 'react-native';
import { Router, Stack, Scene,} from 'react-native-router-flux'
import DeckList from './src/views/DeckList'
import NewDeck from './src/views/NewDeck'
import DeckView from './src/views/DeckView'
import QuizView from './src/views/QuizView';
import NewQuestion from './src/views/NewQuestion';
export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="info" component={DeckList} title="Decks" />
        <Scene key="newdeck" component={NewDeck} title="New Deck" />
        <Scene key="deckview" component={DeckView} title="Deck Details" />
        <Scene key="quizeview" component={QuizView} title="Quize" />
        <Scene key="addcard" component={NewQuestion} title="Add Card" />

      </Stack>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: "flex-start",
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})