import React, { useContext } from 'react';
import { Checkbox, Label } from 'flowbite-react';
import { GlobalRurContext } from '../../contexts/GlobalRurContext';
import 'animate.css';
import rurActions from '../../actions/rurActions';

function RurCustomCheckBox() {
  const rurContext = useContext(GlobalRurContext);
  const { dispatchRurState } = rurContext;
  const handleChange = () => {
    dispatchRurState({ type: rurActions.openRurOptions });
  };

  return (
    <>
      <Checkbox
        id="rural"
        defaultChecked={false}
        value="rural"
        onChange={handleChange}
        className="cursor-pointer"
        style={{ display: 'none', cursor: 'pointer' }}
      />
      <Label
        htmlFor="rural"
        className="text-gray-700 px-12 py-5 hover:px-24 transition-all rounded-full"
        color={'success'}
        style={{
          cursor: 'pointer',
          fontSize: '24px',
          boxShadow: '2px 3px 5px 1px rgba(0,0,0,0.31)',
        }}
      >
        Tempo rural
      </Label>
    </>
  );
}

export default RurCustomCheckBox;
