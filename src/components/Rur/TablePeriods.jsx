import { Select, Table, Textarea } from 'flowbite-react';
import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import rurActions from '../../actions/rurActions';
import { GlobalRurContext } from '../../contexts/GlobalRurContext';
import parsePeriods from './modules/parsePeriods';

const TableHead = () => {
  return (
    <Table.Head>
      <Table.HeadCell>N.</Table.HeadCell>
      <Table.HeadCell>Início</Table.HeadCell>
      <Table.HeadCell>Fim</Table.HeadCell>
      <Table.HeadCell>Tempo líquido</Table.HeadCell>
      <Table.HeadCell>Indenizar</Table.HeadCell>
      <Table.HeadCell>Recolhido?</Table.HeadCell>
      <Table.HeadCell>Idade inviabiliza</Table.HeadCell>
    </Table.Head>
  );
};

// elevate depositedPeriod, byAgeInviable
function TablePeriods() {
  const rurContext = useContext(GlobalRurContext);
  const {
    contextRurState: { periods, unfeasiblesByAge },
    dispatchRurState,
  } = rurContext;
  const [deposited, setDeposited] = useState('');
  const [showDeposited, setShowDeposited] = useState(false);
  const [selectColor, setSelectColor] = useState('#FDE8E8');
  const handleChangeSelect = (e) => {
    const { value } = e.target;
    let deposited = '';
    setDeposited(value);
    switch (value) {
      case '':
        setSelectColor('#FDE8E8');
        setShowDeposited(false);
        setDeposited('');
        dispatchRurState({ type: rurActions.deposited, payload: deposited });
        break;
      case 'partial':
        setSelectColor('#def7ec');
        setShowDeposited(true);
        break;
      default:
        setSelectColor('#a4cafe');
        setShowDeposited(false);
        deposited = parsePeriods(value);
        dispatchRurState({ type: rurActions.deposited, payload: deposited });
    }
  };

  const handleGetPartialPeriodsIndemnify = (e) => {
    const { value } = e.target;
    const fPeriods = parsePeriods(value);
    dispatchRurState({ type: rurActions.deposited, payload: fPeriods });
  };

  return (
    <>
      <Table>
        <TableHead />
        <Table.Body className="divide-y">
          {periods &&
            periods.length > 0 &&
            periods.map((date, index) => {
              return (
                <Table.Row
                  key={nanoid(7)}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{Math.ceil(index + 1)}</Table.Cell>
                  <Table.Cell>
                    {date.start.locale('pt-BR').format('DD/MM/YYYY')}
                  </Table.Cell>
                  <Table.Cell>
                    {date.end?.locale('pt-BR').format('DD/MM/YYYY')}
                  </Table.Cell>
                  <Table.Cell>{date.end && date.range}</Table.Cell>
                  <Table.Cell>
                    {date.indemnify && 'Sim'}
                    {!date.indemnify && 'Não'}
                  </Table.Cell>
                  <Table.Cell>
                    {date.indemnify && (
                      <>
                        <div id="select flex gap-y-6">
                          <Select
                            id="recolhido"
                            required={true}
                            onChange={handleChangeSelect}
                            value={deposited}
                            className="w-36 "
                            style={{ background: `${selectColor}` }}
                          >
                            <option value={''}>Não</option>
                            <option value={'partial'}>Em parte</option>
                            <option
                              value={`${date.start
                                .locale('pt-BR')
                                .format('DD/MM/YYYY')}-${date.end
                                ?.locale('pt-BR')
                                .format('DD/MM/YYYY')}`}
                            >
                              Sim
                            </option>
                          </Select>
                          {showDeposited && (
                            <Textarea
                              id="pers"
                              placeholder="dd/mm/aaaa ou dd.mm.aaaa"
                              required={true}
                              rows={2}
                              onBlur={handleGetPartialPeriodsIndemnify}
                              className="w-full mt-4"
                              name="rur-indemnify"
                            />
                          )}
                        </div>
                      </>
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-red-600">
                    {unfeasiblesByAge[index] && unfeasiblesByAge[index]}
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    </>
  );
}

export default TablePeriods;
