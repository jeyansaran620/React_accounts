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
