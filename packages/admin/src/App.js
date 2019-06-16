import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import jsonServerProvider from './dataProvider';

const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="leagues" list={ListGuesser} />
    <Resource name="teams" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
  </Admin>
);

export default App;
