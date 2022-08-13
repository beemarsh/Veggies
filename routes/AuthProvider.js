import React, {createContext} from 'react';
// import * as auth from 'firebase/auth';
export const AuthContext = createContext();
import {NavigationRef} from './Route';

function navigate(name, params) {
  if (NavigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    NavigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}
export default class AuthProvider extends React.Component {
  state = {
    loading: true,
  };

  // This Function is used to display message
  render() {
    return (
      <AuthContext.Provider
        value={{
          loading: this.state.loading,
          setLoading: v => this.setState({loading: v}),
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
