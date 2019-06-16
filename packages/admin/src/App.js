import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import jsonServerProvider from './dataProvider';

import { PlayerCreate, PlayerEdit, PlayerList } from './players';

const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="leagues" list={ListGuesser} />
    <Resource name="teams" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="players" list={PlayerList} create={PlayerCreate} edit={PlayerEdit} />
  </Admin>
);

export default App;
