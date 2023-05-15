import React, { useState, useRef, useEffect, useContext } from 'react';
import { Label, Textarea } from 'flowbite-react';
import 'animate.css';
import './css/SetRurEvidences.css';
import { GlobalRurContext } from '../../contexts/GlobalRurContext';
import rurActions from '../../actions/rurActions';

// elevate evidences
function SetRurEvidences() {
  const rurContext = useContext(GlobalRurContext);
  const { dispatchRurState } = rurContext;
  const [textareaHeight, setTextareaHeight] = useState('auto');
  const textarea = useRef(null);

  const textareaStyle = {
    minHeight: textareaHeight,
  };

  useEffect(() => {
    setTextareaHeight(`${textarea.current?.scrollHeight}px`);
  }, [textareaHeight]);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setTextareaHeight(`${textarea.current?.scrollHeight}px`);
    dispatchRurState({ type: rurActions.evidences, payload: value });
  };

  return (
    <div id="textarea" className="w-full mb-8 mt-11">
      <div className="block">
        <Label htmlFor="evidences" value="Provas" color={'success'} />
      </div>
      <Textarea
        ref={textarea}
        id="evidences"
        placeholder="Cole aqui a prova"
        required={true}
        rows={2}
        onChange={onChangeHandler}
        className="w-full"
        style={textareaStyle}
      />
      <hr className="w-full h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    </div>
  );
}

export default SetRurEvidences;
