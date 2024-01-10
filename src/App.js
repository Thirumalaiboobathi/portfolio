import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Add Routes import

import Homepage from './screens/home/home';
import ContactScreen from './screens/contacts/contact';
import { AllRoutes } from './router/router';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Routes */}
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={AllRoutes.contact} element={<ContactScreen />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
