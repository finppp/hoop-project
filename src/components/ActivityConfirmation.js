import React, { Component } from 'react';
import Title from './Title';

class ActivityConfirmation extends Component {

  prevPage = () => {
    this.props.history.push('/address')
  }

  render() {


    return (
      <div className="form">
        <Title text="Confirm your details"/>
        <h2>Activity Details:</h2>
        <p>Activity name: {this.props.fields.activityName}</p>
        <p>Minimum age: {this.props.fields.minAge} month(s)</p>
        <p>Maximum age: {this.props.fields.maxAge} month(s)</p>
        <h2>Address:</h2>
        <p>{this.props.fields.buildingUnit}</p>
        <p>{this.props.fields.buildingName}</p>
        <p>{this.props.fields.streetNumber}</p>
        <p>{this.props.fields.streetName}</p>
        <p>{this.props.fields.town}</p>
        <p>{this.props.fields.postcode}</p>

        <button onClick={this.prevPage} className="form__button form__button--back">Back</button>
        <button className="form__button form__button--confirm" type="submit" value="Submit">Submit</button>

      </div>
    );
  }

}

export default ActivityConfirmation;
