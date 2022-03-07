import React, { Component } from 'react'
import Input from '../../components/Input/Input'
import { connect } from 'react-redux'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import * as actions from '../../store/actions/index'



class Auth extends Component {
  state = {
         controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false
          }
        },
        isSignup: true
    }
  
   inputChangeHandler = (event, inputIdentifier) => {
     const clonedFormElements = {
       ...this.state.controls
     }

     const clonedElement = {
       ...clonedFormElements[inputIdentifier]
     }
     clonedElement.value = event.target.value
     clonedFormElements[inputIdentifier] = clonedElement
     this.setState({ controls: clonedFormElements})

    }

    submitHandler = (event) => {
      event.preventDefault();
      this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)

    }

    switchAuthModeHandler = () => {
      this.setState( prevState => {
        return{ isSignup: !prevState.isSignup}

      })
    }
    
    
  render() {
    const elementFormArray = []
    for (let key in this.state.controls)  {
      elementFormArray.push({
        id: key,
        formVal: this.state.controls[key]
        
      })
    } 

    let form = elementFormArray.map(formElement => (
              <Input 
              key={formElement.id}
              elementType={formElement.formVal.elementType}
              elementConfig={formElement.formVal.elementConfig}
              value={formElement.formVal.value}
              validation={formElement.formVal.validation}
              changed={(event) => this.inputChangeHandler(event, formElement.id)}
      
              />
        )
      
      )

    let errorMessage = null;

      if (this.props.error) {
        errorMessage = (
        <p>{this.props.error.message}</p>
        )
      };


    return (
      <div className={classes.Auth}>
        {errorMessage}
        <h1>Let's Authenticate you</h1>
        <form onSubmit={this.submitHandler}>
          {form }
          <Button btnType='Success'>SUBMIT</Button>
        </form>
        <Button 
        clicked={this.switchAuthModeHandler}
        btnType='Danger'>Switch TO {this.state.isSignup ? 'Login': 'SignUp'}</Button>
      </div>
    )
  }
}






const mapStateToProps = state => {
  return {
    //  error: state.error

  }

}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);