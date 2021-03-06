import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import AddForm from '../AddForm';
import {connect} from 'react-redux';
import {hideModal} from '../../redux/modal/actions'

const Modal = ({visible, hideModal}) => {
  return (
    <Rodal
      visible={visible}
      onClose={hideModal}
      height={400}
      showCloseButton={false}
      customStyles={{
        background: 'rgba(255, 255, 255, 0.970024)',
        border: '1px solid #FFFFFF',
        boxSizing: 'border-box',
        borderRadius: '15px'}}
    >
      <AddForm 
        onCancel={hideModal}/>
    </Rodal>
  )
}

const mapStateToProps = (state) => ({
  visible: state.modal.visible
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);