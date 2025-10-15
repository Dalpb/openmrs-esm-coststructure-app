import { Button, Select, TextInput } from '@carbon/react';
import React from 'react';
import styles from './styles.scss';
import HomeTable from '../../components/tables/home/table.component';
const CostStructureSearch: React.FC = () => {
  return (
    <div>
      <h1>Estructura de Costos de CPMS</h1>
      <article className={styles.card}>
        <h3>Procedimientos médicos Guardados</h3>
        <div>
          <TextInput
            labelText="Buscar por nombre o código CPMS"
            id="ds"
            placeholder="Ejm: 00906 o Anestesia para vulvectomía"
          />
        </div>
        <HomeTable />
      </article>
    </div>
  );
};

export default CostStructureSearch;
