import React, { Component } from 'react';
import Title from './Title';

class AddressModal extends Component {

  cancel = () => {
      this.props.handleCloseModal()
  }

  render() {

    let addressJSX = this.props.addresses.map(address =>
      <div>
        <p className="address-text">{address.buildingUnit}</p>
        <p className="address-text">{address.buildingName}</p>
        <p className="address-text">{address.streetNumber}</p>
        <p className="address-text">{address.streetName}</p>
        <p className="address-text">{address.town}</p>
        <p className="address-text">{address.postcode}</p>
        <button className="form__button form__button--confirm" onClick={() => this.props.copyAddressIntoState(address)}>Select</button>
      </div>
    )

    return (
      <div className="modal">
        <div className="form form--modal">
          <h2>Select address:</h2>
          {addressJSX}
          <button className="form__button form__button--back" onClick={this.cancel}>Cancel</button>
        </div>
      </div>
    );
  }

}

export default AddressModal;
