import React, { useEffect, useState, useContext } from 'react';
import { Card, Label, TextInput } from 'flowbite-react';
import InputMask from 'react-input-mask';
import parseProcessNumber from './parseProcessNumber';
import moment from 'moment';
import './css/GeneralInfo.css';
import { GlobalGeneralContext } from '../../contexts/GlobalGeneralContext';
import generalActions from '../../actions/generalActions';

function GeneralInfo() {
  const [isValidNumber, setIsValidNumber] = useState(false);
  const generalContext = useContext(GlobalGeneralContext);
  const {
    dispatchGeneralState,
    contextGeneralState: { number, parte, difficulty, register },
  } = generalContext;

  const handleChangeProcessNumber = (e) => {
    const { value } = e.target;
    dispatchGeneralState({ type: generalActions.number, payload: value });
    const isValid = parseProcessNumber(value);
    if (isValid) {
      setIsValidNumber(true);
    } else {
      setIsValidNumber(false);
    }
  };

  useEffect(() => {
    dispatchGeneralState({
      type: generalActions.register,
      payload: moment().locale('pt-BR').format('DD/MM/YYYY'),
    });
  }, [dispatchGeneralState]);

  const handleChangeParteName = (e) => {
    const { value } = e.target;
    dispatchGeneralState({ type: generalActions.parte, payload: value });
  };

  const handleChangeDifficulty = (e) => {
    const { value } = e.target;
    dispatchGeneralState({ type: generalActions.difficulty, payload: value });
  };

  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Novo processo
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Entre com os dados do processo:
      </p>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-col items-center gap-2">
          <div className="mb-2 block self-start">
            <Label htmlFor="processo" value="Número do processo" />
          </div>
          <InputMask
            id="processo"
            mask="9999999-99.9999.9.99.9999"
            maskChar={null}
            value={number}
            onChange={handleChangeProcessNumber}
            className={`block text-base w-full m-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              isValidNumber && 'bg-green-100'
            }`}
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="parte" value="Parte" />
        </div>
        <TextInput
          id="parte"
          type="text"
          placeholder=""
          required={true}
          value={parte}
          onChange={handleChangeParteName}
        />
        <div className="mb-2 block">
          <Label htmlFor="data" value="Data de registro" />
        </div>
        <TextInput
          id="data"
          type="text"
          placeholder=""
          required={true}
          value={register}
          disabled
        />
        <div className="mb-2 block mt-4">
          <Label htmlFor="difficulty-slider" value={`Nível ${difficulty}:`} />
        </div>
        <input
          id="difficulty-slider"
          type="range"
          value={difficulty}
          step={1}
          min="1"
          max="5"
          onChange={handleChangeDifficulty}
          className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </Card>
  );
}

export default GeneralInfo;
