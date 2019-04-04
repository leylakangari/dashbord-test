import React from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions'
import { reduxForm, Field } from 'redux-form';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import styles from './index.module.scss';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: styles.errorMessage
        }
      }

    renderTextField(field){
        return(
            <Form.Group as={Row} md="3">
                <Form.Label sm={2}>{field.label}</Form.Label>
                <Col sm={10}>
                    <Form.Control type={field.type} {...field.input} />
                    <Form.Control.Feedback type="invalid" className={styles.isInvalide}>
                    {field.meta.touched ? field.meta.error : '' }
                    </Form.Control.Feedback>
                </Col>
          </Form.Group>
        )
    }

    onSubmit(values){
        this.props.userLogin(values)
        this.setState({message: styles.errorMessage})
        setTimeout(
            function() {
                this.setState({message: styles.fadeoutMessage});
            }
            .bind(this),
            3000
        );
    }    
    
    render(){
        return(
            <div className="dashboardContent">
            <Container>
                <h3 className={this.state.message} >
                    {this.props.auth.message}
                </h3>
                <Form 
                onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))} 
                >

                    <Field 
                        label ="Username"
                        name="username"
                        type="email"
                        component= {this.renderTextField}  
                    />

                    <Field 
                        label ="Password"
                        name="password"
                        type="password"
                        component= {this.renderTextField}   
                    />
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Login</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </div>
        )
    }
}


function validate(values){

    const errors = {};

    if(!values.username){
        errors.username="Please enter valid email address"
    }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
            errors.username = 'Invalid email address'
        }
        if(!values.password){
            errors.password="Please enter your password"
    }

    return errors;
}

function mapStateToProps(state){
    return {
      form: state.form,
      auth: state.auth
    }   
}

export default reduxForm({
    validate,
    form: 'signin'
})(
    connect(mapStateToProps,actions)(LoginForm)
)