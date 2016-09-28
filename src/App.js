import React from 'react';

import { Provider } from 'react-redux';

// We'll create this in step 3.
import store from './store.js';

// We'll create this in step 4.
import UserForm from './components/UserForm.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <UserForm />
      </Provider>
    );
  }
}

export default App;
