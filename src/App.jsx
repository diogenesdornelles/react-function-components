import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SetRurOptions from './components/Rur/SetRurOptions';
import EspOptions from './components/Esp/EspOptions';
import UrbOptions from './components/Urb/UrbOptions';
import AditionalOptions from './components/Add/AditionalOptions';
import GeneralInfo from './components/General/GeneralInfo';
import { RurContext } from './contexts/GlobalRurContext';
import { GeneralContext } from './contexts/GlobalGeneralContext';

function App() {
  return (
    <div className="bg-slate-50 mb-80">
      <NavBar />
      <div className="App flex flex-col gap-y-8 overflow-hidden w-11/12 md:w-10/12 lg:w-9/12 2xl:w-8/12 m-auto mt-12">
        <GeneralContext>
          <GeneralInfo />
        </GeneralContext>
        <RurContext>
          <SetRurOptions />
        </RurContext>
        <EspOptions />
        <UrbOptions />
        <AditionalOptions />
      </div>
    </div>
  );
}

export default App;
