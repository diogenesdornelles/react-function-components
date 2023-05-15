import React, { useState } from 'react';
import { Card, Checkbox, Label } from 'flowbite-react';

function Esp() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(!isChecked);
    console.log(e.target.value);
  };

  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Especial
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Parte requer tempo especial:
      </p>
      <div className="flex flex-col gap-4 p-8" id="checkbox">
        <div className="flex items-center gap-2">
          <Checkbox
            id="especial"
            defaultChecked={false}
            onChange={handleChange}
            value="especial"
          />
          <Label htmlFor="especial">Tempo especial</Label>
        </div>
      </div>
    </Card>
  );
}

export default Esp;
