import React from 'react';
import ListContacts from './ListContacts'

class App extends React.Component {
  state = {
    contacts : [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
  } 
  removeContact = (contact) => 
  {
    this.setState((currentState)=>
    ({
      contacts:currentState.contacts.filter((cont) => cont!==contact)
    }))
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
