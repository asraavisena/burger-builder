import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error:null
        };

        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req=> {
                this.setState({error:null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res , error => {
                this.setState({error:error});
            });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        };

        errorConfirmHandler = () => {
            this.setState({error:null})
        };

        render(){
            return(
                <Aux>
                    <Modal 
                        modalClosed= {this.errorConfirmHandler}
                        show= {this.state.error}>
                            {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    } 
};

export default withErrorHandler