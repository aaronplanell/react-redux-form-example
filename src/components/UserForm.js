// ./components/UserForm.js

import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(user) {
    const { dispatch } = this.props;

    // Creando una promesa.
    let promise = new Promise( (resolve, reject) => {
      if (!user.firstName || !user.lastName || !user.email) {
        // Realiza la función "rechazar" when this.status es diferente de 200
        reject(console.log('Wrong :/'));
      } else {
        // Realiza la función "resolver" cuando this.status es igual a 200
        resolve(console.log('And the user is,... ', user));
      }
    });

    dispatch(actions.submit('user', promise));
  }
  render() {
    let widthOfForm = 300;

    return (
      <Form model="user" className='form-horizontal' style={{width: widthOfForm}}
        onSubmit={(user) => this.handleSubmit(user)}>

        <div className='form-group'>
          <label className='col-sm-4 control-label' >First name:</label>
          <div className="col-sm-8">
            <Control.text className='form-control' model="user.firstName" placeholder="First name"/>
          </div>
        </div>

        <div className='form-group'>
          <label className='col-sm-4 control-label'>Last name:</label>
          <div className="col-sm-8">
            <Control.text className='form-control' model="user.lastName" placeholder="Last name"/>
          </div>
        </div>

        <div className='form-group'>
          <label className='col-sm-4 control-label'>Email:</label>
          <div className="col-sm-8">
            <Control.text className='form-control' model="user.email" placeholder="Email"/>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-4 col-sm-8">
            <button className='btn btn-default' type="submit">
              Finish registration!
            </button>
          </div>
        </div>

      </Form>
    );
  }
}

export default connect()(UserForm);
