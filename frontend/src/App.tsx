import { Component, ReactNode } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from 'components/navbar';
import Listing from 'pages/listing';
import Form from 'pages/form';

class App extends Component {
  render(): ReactNode {
      return( 
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/form">
              <Route path=":movieId" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
  }
};

export default App;
