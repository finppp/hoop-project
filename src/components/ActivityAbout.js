import React, { Component } from 'react';
import {updateField} from '../actions/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import Title from './Title';
import '../App.css';

class ActivityAbout extends Component {


  nextPage = () => {
    this.props.history.push('/address')
  }

  // TODO: Don't allow them to enter a negative range.
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.nextPage}>
          <Title text="About your activity"/>
          <label className="form__label">Activity Name</label>
          <input className="form__input"required placeholder="Enter name" value={this.props.fields.activityName} onChange={(event) => this.props.handleFormChange(event)} type="text" name='activityName' />

          <label className="form__label">Recommended Age</label>
          <select className="form__select" required value={this.props.fields.minAge} name="minAge" onChange={(event) => this.props.handleFormChange(event)}>
            <option value="" selected disabled hidden>Minimum age</option>
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
            <option value="4">4 Months</option>
            <option value="5">5 Months</option>
            <option value="6">6 Months</option>
            <option value="7">7 Months</option>
            <option value="8">8 Months</option>
            <option value="9">9 Months</option>
            <option value="10">10 Months</option>
            <option value="11">11 Months</option>
            <option value="12">12 Months</option>
          </select>

          <select className="form__select" required value={this.props.fields.maxAge} name="maxAge" onChange={(event) => this.props.handleFormChange(event)} >
            <option value="" selected disabled hidden>Maximum age</option>
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
            <option value="4">4 Months</option>
            <option value="5">5 Months</option>
            <option value="6">6 Months</option>
            <option value="7">7 Months</option>
            <option value="8">8 Months</option>
            <option value="9">9 Months</option>
            <option value="10">10 Months</option>
            <option value="11">11 Months</option>
            <option value="12">12 Months</option>
          </select>
          <button className="form__button form__button--confirm" type="submit" value="Submit">Next</button>
        </form>

      </div>
    );
  }

}



export default ActivityAbout;
