import React, { useContext } from 'react';
import { Card } from 'flowbite-react';
import SetRurBirth from './SetRurBirth';
import SetRurPeriods from './SetRurPeriods';
import SetRurEvidences from './SetRurEvidence';
import RurCustomCheckBox from './RurCustomCheckBox';
import ExtraRurOptions from './ExtraRurOptions';
import 'animate.css';
import { GlobalRurContext } from '../../contexts/GlobalRurContext';

function SetRurOptions() {
  const rurContext = useContext(GlobalRurContext);
  const {
    contextRurState: { isOpenRurOptions },
  } = rurContext;

  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Rural
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Parte requer tempo rural:
      </p>
      <div className="flex flex-col gap-4 p-4" id="checkbox">
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-start gap-3 mb-12">
            <RurCustomCheckBox />
          </div>
          <div
            className="flex-col w-11/12 animate__animated animate__fadeIn"
            style={{ display: isOpenRurOptions ? 'flex' : 'none' }}
          >
            <SetRurBirth />
            <SetRurPeriods />
            <SetRurEvidences />
            <ExtraRurOptions />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default SetRurOptions;
