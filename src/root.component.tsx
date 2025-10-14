/**
 * From here, the application is pretty typical React, but with lots of
 * support from `@openmrs/esm-framework`. Check out `Greeter` to see
 * usage of the configuration system, and check out `PatientGetter` to
 * see data fetching using the OpenMRS FHIR API.
 *
 * Check out the Config docs:
 *   https://openmrs.github.io/openmrs-esm-core/#/main/config
 */

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './root.scss';
import CostStructureSearch from './pages/cost-structure-search';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { baseName } from './constants';
import { LeftNavMenu, setLeftNav, unsetLeftNav } from '@openmrs/esm-framework';
const RootComponent: React.FC = () => {
  const { t } = useTranslation();
  const spaBasePath = window.spaBase;
  
  useEffect(()=>{
    const navName = "cost-structure-left-panel-slot"
    setLeftNav({
      name:navName,
      basePath:spaBasePath
    })
    return ()=> unsetLeftNav(navName)
  },[spaBasePath]);

  return (
    <Router basename={baseName}>
      <LeftNavMenu />
      <Routes>
        <Route path='/' element={<CostStructureSearch/>}/>
        <Route path='/add' element={<div>Añadir</div>}/>
        <Route path='/reports' element={<div>Reportes</div>}/>
      </Routes>
    </Router>
  );
};

export default RootComponent;
