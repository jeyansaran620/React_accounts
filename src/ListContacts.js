import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ListContacts extends Component {
    static propTypes = {
        contacts : PropTypes.array.isRequired,
        removeContact : PropTypes.func.isRequired
    }
    state = {
        query:''
    }
    handleSearchChange = (value) => 
    {
     this.setState(() => 
      ({
         query:value.trim()
        }))
    }
   
    render() {
        const ShowingContacts = this.props.contacts.filter((contact) =>
        {
            return contact.name.toUpperCase().includes(this.state.query.toUpperCase())
        })
  return (
      
      <div className='list-contacts'>
      <div className='list-contacts-top'>
      <input className='search-contacts'
      type='text' placeholder='search contacts' value={this.state.query}
      onChange={(e) => this.handleSearchChange(e.target.value) }
      />
      <Link
      to='/create' className='add-contact'>Add Contact</Link>
      </div>
      {this.state.query !=='' && <div className='showing-contacts'>
      <span>showing {ShowingContacts.length} of {this.props.contacts.length}</span>
      <button onClick={() => this.handleSearchChange('')}>show all</button>
      </div>
    }
         <ol className='contact-list'>
         {ShowingContacts.map((contact) => 
             <li key={contact.id} className='contact-list-item'>
             <div className='contact-avatar' 
             style={{backgroundImage:`url(${contact.avatarURL})`}}></div>
             <div className='contact-details'>
             <p>{contact.name}</p>
             <p>{contact.handle}</p>
             </div>
             <button onClick={() => this.props.removeContact(contact)} className='contact-remove'>Remove</button>
             </li>

         )}
         </ol>
         </div>
     );
         }
}

export default ListContacts