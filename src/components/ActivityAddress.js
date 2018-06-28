import React, { Component } from 'react';
import {updateField} from '../actions/actions';
import Title from './Title';
import '../App.css';

class ActivityAbout extends Component {

  nextPage = () => {
    this.props.history.push('/confirm')
  }

  prevPage = () => {
    this.props.history.push('/')
  }


  //IMPORTANT This causes a CORS error unless you allow your browser to allow cors
  //Here is a plugin that allows it in chrome https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US
  loadFromExistingActivity = () => {
    this.props.handleOpenModal();
    this.props.handleFetchAddresses();
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.nextPage}>
          <Title text="Add the address"/>
          <button type="button" className="form__button form__button--special" onClick={this.loadFromExistingActivity}>Copy from existsing activity</button>
          {/* optional */}
          <label className="form__label">Building Unit</label>
          <input
            className="form__input"
            placeholder="e.g. Room 101"
            value={this.props.fields.buildingUnit}
            onChange={(event) => this.props.handleFormChange(event)}
            type="text"
            name='buildingUnit' />

          {/* optional */}
          <label className="form__label">Building Name</label>
          <input
            className="form__input"
            placeholder="e.g. Ministry of Love"
            value={this.props.fields.buildingName}
            onChange={(event) => this.props.handleFormChange(event)}
            type="text"
            name='buildingName' />

          {/* would do type "number", but it could be "7A/7B" */}
          <label className="form__label">Street Number</label>
          <input
            className="form__input"
            required
            placeholder="e.g. 21"
            value={this.props.fields.streetNumber}
            onChange={(event) => this.props.handleFormChange(event)}
            type="text"
            name='streetNumber' />

          <label className="form__label">Street Name</label>
          <input
            className="form__input"
            required
            placeholder="e.g. Watermans"
            value={this.props.fields.streetName}
            onChange={(event) => this.props.handleFormChange(event)}
            type="text"
            name='streetName' />

          <label className="form__label">Town</label>
          <input
            className="form__input"
            required
            placeholder="e.g. Richmond"
            value={this.props.fields.town}
            onChange={(event) => this.props.handleFormChange(event)}
            type="text"
            name='town' />

          <label className="form__label">Postcode</label>
          <input
            className="form__input"
            placeholder="e.g. EC1M 7AN"
            required
            value={this.props.fields.postcode}
            onChange={(event) => this.props.handleFormChange(event)}
            name='postcode'
            pattern="([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})"
            title="e.g. EC1A 1EF" />

            <button className="form__button form__button--confirm" type="submit" value="Submit">Next</button>
          <button onClick={this.prevPage} className="form__button form__button--back">Back</button>
        </form>
      </div>
    );
  }
}

export default ActivityAbout;
