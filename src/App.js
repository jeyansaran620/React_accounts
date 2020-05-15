import React from 'react';
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI';
import { Route } from 'react-router-dom';

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
    ContactsAPI.remove(contact);
  }
  createContact = (contact) => 
  {
   
    ContactsAPI.create(contact).then( (contact) => 
    {
      this.setState((prevState) => 
      ({
          contacts:prevState.contacts.concat([contact])
      }))
    });
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
    <Route exact path='/' render={() => 
    (
      <ListContacts contacts={this.state.contacts} removeContact={this.removeContact}/>
    )}/>    
    <Route path='/create'
      render={( { history } ) => 
        (
          <CreateContact onCreateContact={(contact) => {
            this.createContact(contact)
            history.push('/')
          }}/>
        )}/> 
  
    </div>
  );
  }
}

export default App;
