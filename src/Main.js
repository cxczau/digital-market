import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  HomePage,
  ContactPage,
  IdeasPage,
  WorkPage,
  AboutPage,
  ServicesPage,
  BrandingPage, 
  ContentCreationPage,
  DesignPage,
  SeoPage ,
  SmmPage ,
  WddPage ,
} from "./Pages";

/**
 * The Switch decides which component to show based on the current URL.
 */
const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/meet-us' component={AboutPage}></Route>
      {/* <Route exact path='/our-work' component={WorkPage}></Route> */}
      <Route exact path='/our-work' component={IdeasPage}></Route>
      <Route exact path='/contact' component={ContactPage}></Route>
      <Route exact path='/services' component={ServicesPage}></Route>
      <Route exact path='/branding' component={BrandingPage}></Route>
      <Route exact path='/content-creation' component={ContentCreationPage}></Route>
      <Route exact path='/graphic-design' component={DesignPage}></Route>
      <Route exact path='/seo' component={SeoPage}></Route>
      <Route exact path='/social-media-mgmt' component={SmmPage}></Route>
      <Route exact path='/web-development' component={WddPage}></Route>
    </Switch>
  );
}

export default Main;