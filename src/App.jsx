import React, {Component} from 'react';
import { Container} from 'semantic-ui-react';
import Header from './components/Header';
import "./App.css";
import Modal from './components/Modal';
import ContactList from './components/ContactList';
class App extends Component {

  componentDidUpdate() {
    console.log("Update!")
  }
  render() {
    return (
      <Container style={{ marginTop: '50px' }}>
        <Header />
        <Modal/>
        <ContactList/>
      </Container>
    );
  }
};

export default App;
