import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import InputMask from 'react-input-mask';
import { Label } from 'flowbite-react';
import { GlobalRurContext } from '../../contexts/GlobalRurContext';
import moment from 'moment';
import rurActions from '../../actions/rurActions';

// Register the pt-BR locale
registerLocale('pt-BR', ptBR);

// Set pt-BR as the default locale
setDefaultLocale('pt-BR');

function SetRurBirth() {
  const rurContext = useContext(GlobalRurContext);
  const { dispatchRurState } = rurContext;
  const [date, setDate] = useState('');
  const [strDate, setStrDate] = useState('');

  const handleDateChange = (date) => {
    if (date) {
      const str = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      setDate(date);
      setStrDate(str);
      setBirthLimits(date);
    } else return;
  };

  const setBirthLimits = (date) => {
    const momentDate = moment(date, 'DD/MM/YYYY');
    const datePlus12Years = momentDate.add(12, 'years');
    const dateMinus1Day = momentDate.subtract(1, 'days');
    const limitsByAge = {
      complete: moment(datePlus12Years, 'DD/MM/YYYY'),
      uncomplete: moment(dateMinus1Day, 'DD/MM/YYYY'),
    };
    dispatchRurState({
      type: rurActions.birth,
      payload: {
        birth: momentDate,
        birthLimits: limitsByAge,
      },
    });
  };

  return (
    <div className="w-full">
      <Label htmlFor="rural" color={'success'}>
        Nascimento
      </Label>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        placeholder="dd/mm/aaaa"
        customInput={
          <InputMask
            mask="99/99/9999"
            maskChar={null}
            value={strDate}
            onChange={handleDateChange}
            className={`block w-full m-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              date && 'bg-green-100'
            }`}
          />
        }
      />
      <hr className="w-full h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    </div>
  );
}

export default SetRurBirth;
