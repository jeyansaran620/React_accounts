import React,{Component} from 'react';

class ContactList extends Component
{
  render( ){ 
     const people =this.props.contacts
      return (
       <ol>{people.map((person,i) => 
       <li key={i}>{person.name}</li>)
      }</ol>
      )
    
      }  
}

const contacts = [
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
 ];

function App() {
  return (
    <div className="App">
   <ContactList contacts={[
    {name:'jeyan'},
    {name:'saran'},
    {name:'BMW'}
   ]}/>
   <ContactList contacts={[
    {name:'me'},
    {name:'you'},
    {name:'we'}
   ]}/>
    </div>
  );
}

export default App;
