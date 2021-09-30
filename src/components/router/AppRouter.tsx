// Libraries
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// components
import Header from '../shared/Header/Header';
import Sidebar from '../shared/Sidebar/Sidebar';
import Dashboard from '../pages/Dashboard/Dashboard';
import Footer from '../shared/Footer/Footer';

const AppRouter: React.FC = () => {
  
  return (
    <Router>
      <Header />
      <Sidebar />
      <main className="c-main">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* 404 ERROR */}
          <Route component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;