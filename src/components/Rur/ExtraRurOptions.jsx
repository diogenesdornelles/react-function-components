import React from 'react';
import { Checkbox, Label } from 'flowbite-react';

function ExtraRurOptions() {
  return (
    <>
      <Label
        htmlFor="extra-area"
        value="Informações adicionais"
        color={'success'}
        className="text-start"
      />
      <div
        className="w-full grid grid-cols-2 gap-6 p-8 border-solid border-4 border-gray-200 rounded-lg"
        id="extra-area"
      >
        <div className="flex items-center gap-2">
          <Checkbox id="pai-urb" defaultChecked={false} />
          <Label htmlFor="pai-urb" color={'success'}>
            Pai urbano
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="autor-urb" defaultChecked={false} />
          <Label htmlFor="autor-urb" color={'success'}>
            Autor urbano
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="autodeclaracao"
            defaultChecked={false}
            color={'success'}
          />
          <Label htmlFor="autodeclaracao" color={'success'}>
            Autodeclaracão
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="justificacao" defaultChecked={false} />
          <Label htmlFor="justificacao" color={'success'}>
            Justificacão Administrativa
          </Label>
        </div>
      </div>
    </>
  );
}

export default ExtraRurOptions;
