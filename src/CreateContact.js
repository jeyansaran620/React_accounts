import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContacts extends Component
{  
    static propTypes = {
        onCreateContact : PropTypes.func.isRequired
    }
    handleSubmit = (e) =>
    {
       e.preventDefault();
       const values= serializeForm( e.target , {hash : true})
        this.props.onCreateContact(values)
    }
render()
{
    return(
   <div>
   <Link to='/' className='close-create-contact'>
   Close
   </Link>
   <form  onSubmit={this.handleSubmit} className='create-contact-form'>
   <ImageInput
   className='create-contact-avatar-input'
   name='avatarURL'
   maxHeight={64}
   />
   <div className='create-contact-details'>
   <input name='name' type='text' placeholder='name' />
   <input name='handle' type='text' placeholder='handle' />
   <button>Add Contact</button>
   </div>
   </form>
   </div>
    )
}
}
export default CreateContacts