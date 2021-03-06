import React from 'react';
import { Connect } from 'redux-auto-actions';
import { Switch, Route } from 'react-router-dom';

import { Radar } from '../radar/Radar';
import { GlobalState } from '../store/state';
import { Filter } from '../components/radar/Filter';
import { TechList } from '../components/tech/TechList';
import { BlipPage } from '../components/blip/BlipPage';
import { selectors } from '../store/radar/radar.actions';
import { DataLists } from '../components/lists/DataLists';
import { QuadrantPage } from '../components/quadrant/QuadrantPage';
import { TechOrBlipDescription } from '../components/tech/TechDescription';

import './App.scss';
import { Layout } from './layout/Layout';
import { LeftColumn } from './layout/LeftColumn';
import { RightColumn } from './layout/RightColumn';
import { CenterColumn } from './layout/CenterColumn';

export const App = Connect<GlobalState>()
  .stateAndDispatch(
    (state) => ({
      selectedItem: selectors(state).selectedItem,
      selectedQuadrant: selectors(state).selectedQuadrant,
    }),
    {}
  )
  .withComp(({ selectedItem, selectedQuadrant }) => (
    <div className="App">
      {!selectedQuadrant && !selectedItem && (
        <Layout>
          <LeftColumn>
            <Switch>
              <Route exact path="/" component={TechList} />
            </Switch>

            <Switch>
              <Route exact path="/" component={Filter} />
            </Switch>
          </LeftColumn>

          <CenterColumn>
            <Radar />
            <TechOrBlipDescription />
          </CenterColumn>

          <RightColumn>
            <DataLists />
          </RightColumn>
        </Layout>
      )}
      {!selectedQuadrant && selectedItem && <BlipPage />}
      {selectedQuadrant && <QuadrantPage />}
    </div>
  ));
