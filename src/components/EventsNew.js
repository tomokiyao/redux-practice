import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { createEvent } from '../actions';

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    );
  }

  async onSubmit(values) {
    await this.props.createEvent(values);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const buttonStyle = { margin: 12 };

    return (
      <>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              label="Title"
              name="title"
              type="text"
              component={this.renderField}
            />
          </div>
          <div>
            <Field
              label="Body"
              name="body"
              type="text"
              component={this.renderField}
            />
          </div>
          <RaisedButton
            label="Submit"
            type="submit"
            style={buttonStyle}
            disabled={pristine || submitting || invalid}
          />
          <RaisedButton
            label="Cancel"
            style={buttonStyle}
            containerElement={<Link to="/" />}
          />
        </form>
      </>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) errors.title = 'Enter a title, please';
  if (!values.body) errors.body = 'Enter a body, please';

  return errors;
};

const mapDispatchProps = { createEvent };
// 別の書き方
// const mapDispatchProps = (dispatch) => ({
//   createEvent: () => dispatch(createEvent()),
// });
export default connect(
  null,
  mapDispatchProps
)(reduxForm({ validate, form: 'eventsNewForm' })(EventsNew));
