import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import './style.css';
import { showModal } from '../../redux/modal/actions';

class Header extends Component {
  render() {
    const {showModal} = this.props;
    return (
      <div>
        <h3 style={{color: "rgba(0,0,0,0.967957)"}}>
          My Contacts
          <Icon 
            name="add" 
            style={{ float: 'right', cursor: 'pointer', color: '#757575' }}
            onClick={showModal} 
          />
        </h3>
        <hr />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal())
})

export default connect(null, mapDispatchToProps)(Header);