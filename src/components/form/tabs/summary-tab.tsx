import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CostStructureFormValues } from '../schema/costructure-schema';
import styles from './tabs.styles.scss';

interface Props {
  form: UseFormReturn<CostStructureFormValues>;
}
export default function SummaryTab({ form }: Props) {
  const { watch } = form;
  const supplyData = watch('supplyCost');
  const infrastructure = watch('infrastructures');
  const humanResource = watch('humanResourceCost');
  const annualServices = watch('annualServicesCost');
  const equipment = watch('equipmentCost');
  const publicServices = watch('publicServices');

  return (
    <section className={styles['tab-container']}>
      <div>
        <div className="cds--col">
          <h4 className="cds--heading-04">Resumen de estructura de costos</h4>
        </div>
      </div>
      {/* Tabla editable */}
      <div className="cds--row">
        <div className="cds--col cds--spacing-03">
          <table className="cds--data-table cds--data-table--compact cds--data-table--zebra">
            <thead>
              <tr>
                <th>Recursos Humanos</th>
                <th>Insumos</th>
                <th>Servicios Básicos</th>
                <th>Equipamiento</th>
                <th>Infraestructura</th>
                <th>Servicios Administrativos</th>
                <th>Servicios Generales</th>
                <th>Costo del procedimiento</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
