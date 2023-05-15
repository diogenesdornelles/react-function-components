import { Label, Textarea } from 'flowbite-react';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import rurActions from '../../actions/rurActions';
import { GlobalRurContext } from '../../contexts/GlobalRurContext';
import TablePeriods from './TablePeriods';
import arrangeInOrderPeriods from './modules/arrangeInOrderPeriods';
import getPeriodsUnfeasiblesByAge from './modules/getPeriodsUnfeasiblesByAge';
import parsePeriods from './modules/parsePeriods';

const indemnifyLimits = {
  last: moment('31/10/1991', 'DD/MM/YYYY'),
  after: moment('01/11/1991', 'DD/MM/YYYY'),
};

// elevate periods
function SetRurPeriods() {
  const rurContext = useContext(GlobalRurContext);
  const {
    contextRurState: { birth, birthLimits },
    dispatchRurState,
  } = rurContext;
  const [birthIsValid, setBirthIsValid] = useState(birth);
  // getDerivedProps
  useEffect(() => {
    if (birth && birth._isValid) {
      setBirthIsValid(birth._isValid);
    } else {
      setBirthIsValid(null);
    }
  }, [birth]);

  const handleGetPeriods = (e) => {
    const { value } = e.target;
    const selectedPeriodsParsed = parsePeriods(value);
    console.log(selectedPeriodsParsed);
    if (selectedPeriodsParsed.length % 2 === 0) {
      const indemnifyPeriodsFormated = arrangeInOrderPeriods(
        selectedPeriodsParsed,
        indemnifyLimits,
      );
      const unfeasiblesPeriods = getPeriodsUnfeasiblesByAge(
        indemnifyPeriodsFormated,
        birthLimits,
      );
      dispatchRurState({
        type: rurActions.periods,
        payload: {
          periods: indemnifyPeriodsFormated,
          unfeasiblesByAge: unfeasiblesPeriods,
        },
      });
    }
  };
  return (
    <>
      <div id="textarea" className="w-full mb-8">
        {birthIsValid && (
          <div className="block">
            <Label htmlFor="pers" value="Períodos" color={'success'} />
          </div>
        )}
        {birthIsValid && (
          <Textarea
            id="pers"
            placeholder="dd/mm/aaaa ou dd.mm.aaaa"
            required={true}
            rows={8}
            onChange={handleGetPeriods}
            className="w-full"
          />
        )}
      </div>
      <div className="w-full h-full">
        <TablePeriods />
      </div>
    </>
  );
}

export default SetRurPeriods;
