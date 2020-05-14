import React from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI';

class App extends React.Component {
  state = {
    contacts : []
  } 
  removeContact = (contact) => 
  {
    this.setState((currentState)=>
    ({
      contacts:currentState.contacts.filter((cont) => cont!==contact)
    }))
  }
  componentDidMount ()
  {
    ContactsAPI.getAll().then((contacts) =>
    {
     this.setState({
       contacts:contacts
     })
    })
  }
  render(){
  return (
    <div className="App">
    <ListContacts contacts={this.state.contacts} removeContact={this.removeContact}/>
    </div>
  );
  }
}

export default App;
