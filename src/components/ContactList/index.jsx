import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Message, List, Button} from 'semantic-ui-react';
import {deleteContact} from '../../redux/contacts/actions';
import { showEditForm} from '../../redux/editForm/actions';
import EditForm from '../EditForm';
import RenderImage from '../RenderImage';
import 'rodal/lib/rodal.css';

class ContactList extends Component {
  renderList = (contacts) => {
    const {showEditForm} = this.props;
    return contacts.map(contact => {
      return (
        <List key={contact.id} relaxed divided style={{cursor: "pointer"}}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
              <div style={{display: "flex", flexDirection: 'row'}}>
                <RenderImage contact={contact}/>
                {/* <List.Icon name="user" size="large"/> */}
                <List.Header>{contact.firstName} {contact.lastName}</List.Header>
              </div>
              <div style={{display: "flex", flexDirection: 'row', marginTop: "10px"}}>
                <List.Icon name="phone"/>
                <List.Description style={{marginLeft: "7px"}}>{contact.phone}</List.Description>
              </div>
              <div style={{display: "flex", flexDirection: 'row'}}>
                <List.Icon name="mail"/>
                <List.Description style={{marginLeft: "7px"}}>{contact.email}</List.Description>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <Button negative style={{marginBottom: "5px"}} onClick={() => this.props.deleteContact(contact)}>Delete</Button>
              <Button onClick={showEditForm}>Edit</Button>
            </div>
            <EditForm contact={contact}/>
          </div>
          <hr/>
        </List>
      )
    })
  } 

  render() {
    const {contacts} = this.props.contacts;
    if (contacts.length === 0) {
      return (
        <Message 
          floating 
          style={{
            padding: "20px", 
            width: "18vw",
            top: "10px",
          }}>
          <h4>No Contacts Found</h4>
        </Message>
      )
    } else {
      return (
        <div>
          {this.renderList(contacts)}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  showEdit: state.showEdit
})

const mapDispatchToProps = dispatch => ({
  deleteContact: (contact) => dispatch(deleteContact(contact)),
  showEditForm: () => dispatch(showEditForm())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);