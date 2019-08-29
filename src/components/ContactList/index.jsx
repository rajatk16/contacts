import React, {Component} from 'react';
import {connect} from 'react-redux';
import { List} from 'semantic-ui-react';
import {deleteContact} from '../../redux/contacts/actions';
import { showEditForm} from '../../redux/editForm/actions';
import EditForm from '../EditForm';
import RenderImage from '../RenderImage';

import 'rodal/lib/rodal.css';
import './style.css';

class ContactList extends Component {
  renderList = (contacts) => {
    const {showEditForm} = this.props;
    return contacts.map(contact => {
      return (
        <List key={contact.id} relaxed divided className="contact-list">
          <div className="contact">
            <div className="left">
              <RenderImage contact={contact}/>
              <div className="info">
                <List.Header>{contact.firstName} {contact.lastName}</List.Header>
                <List.Description>{contact.phone}</List.Description>
                <List.Description>{contact.email}</List.Description>
              </div>
            </div>
            <div className="button-group">
              <i name="edit" className="button edit icon" onClick={showEditForm}></i>
              <i name="delete" className="button delete icon" onClick={() => this.props.deleteContact(contact)}></i>
            </div>
          </div>
          <EditForm contact={contact}/>
        </List>
      )
    })
  } 

  render() {
    const {contacts} = this.props.contacts;
    return (
      <div>
        {this.renderList(contacts)}
      </div>
    );
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