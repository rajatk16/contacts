import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import Rodal from 'rodal';
import {connect} from 'react-redux';
import 'rodal/lib/rodal.css';
import './style.css';
import { hideEditForm } from '../../redux/editForm/actions';
import {deleteContact, addContact} from '../../redux/contacts/actions';
import {storage} from '../../firebase';
class EditForm extends Component {
  state = {
    id: this.props.contact.id,
    image: this.props.contact.image,
    firstName: this.props.contact.firstName,
    lastName: this.props.contact.lastName,
    phone: this.props.contact.phone,
    email: this.props.contact.email,
    imageName: ''
  }

  formSubmit = (event) => {
    event.preventDefault();
    this.props.deleteContact(this.props.contact);
    const {imageName, id, firstName} = this.state;
    storage
      .ref(`images/${firstName}${id}`)
      .put(imageName)
      .on('state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error);
        }
      )
    this.props.addContact(this.state);
    this.props.hideEditForm();
  }

  handleImage = (event) => {
    if (event.target.files[0]) {
      const imageName = event.target.files[0];
      this.setState({imageName})
    }
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
        <Form>
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
              onClick={this.formSubmit}
              style={{ color: "rgba(61, 135, 130, 0.606488)", textAlign: 'right' }}
            >
              Save
            </Button>
          </div>
          <div className="part-1">
            <Form.Field>
              <div className="circle">
                <div className="content">
                  <Input
                    transparent
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
            <div className="part-2">
              <Form.Field>
                <Input 
                  type="text"
                  transparent 
                  placeholder="First Name" 
                  style={{marginTop: "10px"}} 
                  value={this.state.firstName}
                  required
                  onChange={(event) => this.setState({firstName: event.target.value})}
                />
                <hr/>
              </Form.Field>
              <Form.Field>
                <Input 
                  type="text" 
                  transparent
                  placeholder="Last Name" 
                  value={this.state.lastName}
                  onChange={event => this.setState({
                    lastName: event.target.value
                  })}
                />
                <hr/>
              </Form.Field>
            </div>
          </div>
          <div className="phone-email">
            <Form.Field>
              <div className="part-3">
                <label>phone:</label>
                <Input 
                  transparent
                  type="number"
                  style={{marginLeft: '10px'}} 
                  placeholder="+1 917 000 00 00"
                  value={this.state.phone}
                  onChange={event => this.setState({phone: event.target.value})} 
                />
              </div>
              <hr/>
            </Form.Field>
            <Form.Field>
              <div className="part-3">
                <label>email:</label>
                <Input 
                  transparent
                  type="email" 
                  style={{marginLeft: '20px'}}
                  placeholder="example@gmail.com" 
                  value={this.state.email}
                  onChange={event => this.setState({email: event.target.value})}
                />
              </div>
              <hr/>
            </Form.Field>
          </div>
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
