import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from './dataProvider';

const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="leagues" list={ListGuesser} />
  </Admin>
);

export default App;
