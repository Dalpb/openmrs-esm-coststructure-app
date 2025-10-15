import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CostStructureLayout from '../components/layout/layout.component';
import CostStructureSearch from '../pages/cost-structure-home';
import { baseName } from '../constants';

export const Router: React.FC = () => {
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/" element={<CostStructureLayout />}>
          <Route index element={<CostStructureSearch />} />
          <Route path="add" element={<div>Añadir</div>} />
          <Route path="report" element={<div>Reportes</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
