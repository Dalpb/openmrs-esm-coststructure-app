import { Button, Select, Search, Pagination } from '@carbon/react';
import React from 'react';
import styles from './styles.scss';
import HomeTable from '../../components/tables/home/table.component';
import { Add, Filter } from '@carbon/icons-react';
const CostStructureSearch: React.FC = () => {
  return (
    <div>
      <h1>Estructura de Costos de CPMS</h1>
      <article className={styles.card}>
        <div className={styles.container}>
          <h3>Costeo de Procedimientos médicos Guardados</h3>
          <Button renderIcon={Add}>Añadir</Button>
        </div>
        <div>
          <div className={styles.search}>
            <Search labelText="" placeholder="Ejm: 00906 o Anestesia para vulvectomía" />
            <Button hasIconOnly kind="ghost" renderIcon={Filter} iconDescription="Filter button" />
          </div>
          <HomeTable />
          <Pagination pageSizes={[10, 15, 20, 25]} />
        </div>
      </article>
    </div>
  );
};

export default CostStructureSearch;
