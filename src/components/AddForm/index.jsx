import React, { Component } from 'react';
import { Form, Input, Label, Button } from 'semantic-ui-react';
import uuid from 'uuid'
import {connect} from 'react-redux';
import {addContact} from '../../redux/contacts/actions';
import './style.css';
import { hideModal } from '../../redux/modal/actions';
import {storage} from '../../firebase'

class AddForm extends Component {
  state = {
    id: '',
    image: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    imageName: ''
  }

  handleImage = event => {
    if (event.target.files[0]) {
      const imageName = event.target.files[0];
      this.setState({imageName})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {imageName, firstName} = this.state;
    const uploadTask = storage.ref(`images/${firstName}`).put(imageName);
    uploadTask.on('state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      }
    )
    this.props.addContact(this.state);
    this.setState({
      id: '',
      image: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      imageName: ''
    })
    this.props.hideModal()
  }
  render() {
    const {onCancel} = this.props;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div className="button-group">
            <Button
              inverted
              fluid
              style={{ color: "rgba(61, 135, 130, 0.606488)", textAlign: 'left' }}
              onClick={onCancel}
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
                  required
                  className="image-upload" 
                  style={{cursor: "pointer"}} 
                  type="file" accept="image/*" 
                  placeholder="Add Photo"
                  onChange={this.handleImage}
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
              onFocus={() => this.setState({id: uuid.v4()})}
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
  hideModal: () => dispatch(hideModal())
})

export default connect(null, mapDispatchToProps)(AddForm);
