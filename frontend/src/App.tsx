import { Component, ReactNode } from 'react';
import Navbar from 'components/navbar';

class App extends Component {
  render(): ReactNode {
      return( 
        <div>
          <Navbar /> 
        </div>
      );
  }
};

export default App;
