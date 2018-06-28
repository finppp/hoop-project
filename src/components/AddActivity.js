import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ActivityAbout from './ActivityAbout';
import ActivityAddress from './ActivityAddress';
import ActivityConfirmation from './ActivityConfirmation';
import AddressModal from './AddressModal';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { updateField, openModal, closeModal, fetchAddresses } from '../actions/actions';


//converts redux store to props
const mapStateToProps = function(state){
  return {
    fields: state.fields,
    modalIsOpen: state.modalIsOpen,
    addresses: state.addresses
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    updateField: (fieldName, value) => updateField(fieldName, value),
    openModal: () => openModal(),
    closeModal: () => closeModal(),
    fetchAddresses: (addresses) => fetchAddresses(addresses)
  }, dispatch)
}

class AddActivity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {}
    };
  }

  render() {
    return (
      <div>
        {this.props.modalIsOpen &&
        <AddressModal
          copyAddressIntoState={(address) => this.handleCopyAddressIntoState(address)}
          addresses={this.props.addresses}
          handleCloseModal={this.handleCloseModal}/>}

        <Router>
          <div>
            {/* First Page */}
            <Route exact path="/" render={(props)=>
              <ActivityAbout {...props}
                fields={this.props.fields}
                handleFormChange={(event) => this.handleFormChange(event)}/>
            }/>

            {/* Second Page */}
            <Route path="/address" render={(props)=>
              <ActivityAddress {...props}
                fields={this.props.fields}
                handleOpenModal={(event) => this.handleOpenModal(event)}
                handleFetchAddresses={(event) => this.handleFetchAddresses(event)}
                handleFormChange={(event) => this.handleFormChange(event)}/>
            }/>

            {/* Confirmation Page */}
            <Route path="/confirm" render={(props)=>
              <ActivityConfirmation {...props} fields={this.props.fields} handleFormChange={(event) => this.handleFormChange(event)}/>
            }/>

          </div>
        </Router>
      </div>
    );
  }

  handleOpenModal = () => {
    this.props.openModal()
  }

  handleCloseModal = () => {
    this.props.closeModal()
  }

  handleFetchAddresses = () => {
    let self = this;
    axios.get('http://files.hoop.co.uk/addresses.json')
      .then(function (response) {
        self.props.fetchAddresses(response.data)
      })
      .catch(function (error) {
        //TODO add some error checking
        console.log(error);
      });
  }

  //loop through each part of the address and copy into state + close modal.
  handleCopyAddressIntoState = (address) => {
    let self = this;
    Object.keys(address).forEach(function(fieldName) {
      console.log(fieldName, address[fieldName]);
      self.props.updateField(fieldName, address[fieldName])
    })
    this.props.closeModal()
  }

  //copy form data to state
  handleFormChange = (event) => {
    const target = event.target;
    const fieldName = target.name;
    const value = target.value;
    this.props.updateField(fieldName, value)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddActivity)
