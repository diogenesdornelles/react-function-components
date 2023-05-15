import React from 'react';
import { Card, Checkbox, Label } from 'flowbite-react';

function AditionalOptions() {
  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Adicionais
      </h5>
      <div className="flex flex-col gap-4 p-8" id="checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="reafirmacao" defaultChecked={false} />
          <Label htmlFor="reafirmacao">Reafirmação da DER</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="tutela" defaultChecked={false} />
          <Label htmlFor="tutela">Antecipação de tutela</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="danos" defaultChecked={false} />
          <Label htmlFor="danos">Danos morais</Label>
        </div>
      </div>
    </Card>
  );
}

export default AditionalOptions;
