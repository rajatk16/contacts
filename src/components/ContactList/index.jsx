import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Message, List, Button } from 'semantic-ui-react';
import { deleteContact } from '../../redux/contacts/actions';


class ContactList extends Component {
  
  renderList = (contacts) => {
    return contacts.map(contact => {
      return (
        <List key={contact.id} relaxed divided style={{cursor: "pointer"}}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
              <div style={{display: "flex", flexDirection: 'row'}}>
                <List.Icon name="user" size="large"/>
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
              <Button>Edit</Button>
            </div>
          </div>
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
        this.renderList(contacts)
      );
    }
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  deleteContact: (contact) => dispatch(deleteContact(contact))
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);