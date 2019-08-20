import React, { Component } from 'react';
import { Form, Input, Label, Button } from 'semantic-ui-react';
import Rodal from 'rodal';
import {connect} from 'react-redux';
import 'rodal/lib/rodal.css';
import './style.css';
import { hideEditForm } from '../../redux/editForm/actions';
import {deleteContact, addContact} from '../../redux/contacts/actions';

class EditForm extends Component {
  state = {
    id: this.props.contact.id,
    image: this.props.contact.image,
    firstName: this.props.contact.firstName,
    lastName: this.props.contact.lastName,
    phone: this.props.contact.phone,
    email: this.props.contact.email
  }

  formSubmit = (event) => {
    event.preventDefault();
    this.props.deleteContact(this.props.contact);
    this.props.addContact(this.state);
    this.props.hideEditForm();
  }

  render() {
    const {showEdit, hideEditForm} = this.props;
    return (
      <Rodal 
        visible={showEdit} 
        onClose={hideEditForm} 
        height={500}
        showCloseButton={false}
      >
        <Form onSubmit={this.formSubmit}>
          <div className="button-group">
          <Button
              inverted
              fluid
              style={{ color: "rgba(61, 135, 130, 0.606488)", textAlign: 'left' }}
              onClick={hideEditForm}
            >
              Cancel
            </Button>
            <Button
              fluid
              inverted
              style={{ color: "rgba(61, 135, 130, 0.606488)", textAlign: 'right' }}
            >
              Save
            </Button>
          </div>
          <Form.Field>
            <div className="circle">
              <div className="content">
                <Input
                  className="image-upload" 
                  style={{cursor: "pointer"}} 
                  type="file" accept="image/*" 
                  placeholder="Add Photo"
                  onChange={(event) => {
                    const {files} = event.target;
                    const localImageUrl = window.URL.createObjectURL(files[0])
                    this.setState({image: localImageUrl})
                  }}
                  />
                <span>Add Photo</span>
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <Input 
              type="text" 
              placeholder="First Name" 
              style={{marginTop: "10px"}} 
              value={this.state.firstName}
              required
              onChange={(event) => this.setState({firstName: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <Input 
              type="text" 
              placeholder="Last Name" 
              value={this.state.lastName}
              onChange={event => this.setState({
                lastName: event.target.value
              })}
            />
          </Form.Field>
          <Form.Field>
            <Label>Phone</Label>
            <Input 
              type="number" 
              placeholder="+1 917 000 00 00"
              value={this.state.phone}
              onChange={event => this.setState({phone: event.target.value})} 
            />
          </Form.Field>
          <Form.Field>
            <Label>Email</Label>
            <Input 
              type="email" 
              placeholder="example@gmail.com" 
              value={this.state.email}
              onChange={event => this.setState({email: event.target.value})}
            />
          </Form.Field>
        </Form>
      </Rodal>
    );
  }
}

const mapStateToProps = (state) => ({
  showEdit: state.editForm.showEdit
})

const mapDispatchToProps = dispatch => ({
  addContact: (contact) => dispatch(addContact(contact)),
  deleteContact: (contact) => dispatch(deleteContact(contact)),
  hideEditForm: () => dispatch(hideEditForm())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
