import React,{Component} from 'react';

class ContactList extends Component
{
  render( ){ 
     const people =[
       {name:'jeyan'},
       {name:'saran'},
       {name:'BMW'}
      ]
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
   <ContactList />
    </div>
  );
}

export default App;
