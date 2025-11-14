import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import { CostStructureFormValues } from '../schema/costructure-schema';
import { NumberInput } from '@carbon/react';
import { calculateAsignedCostGeneral } from '../../../utils/publicservices';
interface Props {
  form: UseFormReturn<CostStructureFormValues>;
}
export default function GeneralServiceTab({ form }: Props) {
  const { control, setValue, watch } = form;

  const annualServices = watch('annualServicesCost');
  const infrastructures = watch('infrastructures');
  const publicServices = watch('publicServices');
  const totalAreaM2 = infrastructures.reduce((acc, curr) => acc + curr.areaM2, 0);
  return (
    <section className="cds--grid cds--spacing-05">
      <div>
        <div className="cds--col">
          <h4 className="cds--heading-04">Servicios Generales</h4>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Controller
          name={`annualServicesCost.annualAdministrativeCost`}
          control={control}
          render={({ field }) => (
            <NumberInput
              hideSteppers
              label="Costo Anual de Administración General"
              helperText="Ingrese el costo anual de administración general"
              id={`annual-administrative-cost`}
              value={field.value}
              onChange={(_, { value }) => field.onChange(Number(value))}
            />
          )}
        />
        <Controller
          name={`annualServicesCost.annualGeneralCost`}
          control={control}
          render={({ field }) => (
            <NumberInput
              hideSteppers
              label="Costo Anual de Servicios Generales"
              helperText="Ingrese el costo anual de servicios generales"
              id={`annual-general-cost`}
              value={field.value}
              onChange={(_, { value }) => field.onChange(Number(value))}
            />
          )}
        />
      </div>
      <hr />
      <div className="cds--row">
        <div className="cds--col cds--spacing-03">
          <table className="cds--data-table cds--data-table--compact cds--data-table--zebra">
            <thead>
              <th>Unidad Productora de Servicios (UPSS)</th>
              <th>Costo de Administración General</th>
              <th>Costo de Servicios Generales</th>
              <th>Producción proyectada de procedimientos</th>
              <th>Costo Administratio Estandar Unitario Indirecto</th>
              <th>Costo Servicios Generales Estandar Unitario Indirecto</th>
            </thead>
            <tbody>
              {infrastructures.map((infrastructure, index) => {
                const generalCost = annualServices.annualGeneralCost || 0;
                const administrativeCost = annualServices.annualAdministrativeCost || 0;
                const AdminCostUnit = generalCost / publicServices[index]?.productionProyected || 0;
                const GenCostUnit = administrativeCost / publicServices[index]?.productionProyected || 0;
                return (
                  <tr key={index}>
                    <td>{infrastructure.infrastructureName}</td>
                    <td>{calculateAsignedCostGeneral(generalCost, totalAreaM2, infrastructure.areaM2)}</td>
                    <td>{calculateAsignedCostGeneral(administrativeCost, totalAreaM2, infrastructure.areaM2)}</td>
                    <td>
                      <Controller
                        name={`publicServices.${index}.productionProyected`}
                        control={control}
                        render={({ field }) => (
                          <NumberInput
                            hideSteppers
                            id={`phone-${index}`}
                            value={field.value}
                            onChange={(_, { value }) => {
                              field.onChange(Number(value));
                            }}
                            min={0}
                          />
                        )}
                      />
                    </td>
                    <td>{AdminCostUnit}</td>
                    <td>{GenCostUnit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
