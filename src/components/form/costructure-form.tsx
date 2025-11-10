import React, { useState } from 'react';
import { Tabs, Tab, Button, TextInput, TabList } from '@carbon/react';
const CostStructureForm: React.FC = () => {
  const [procedureName, setProcedureName] = useState('');
  const [procedureCode, setProcedureCode] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSave = () => {
    console.log('Guardando estructura de costos...');
    setIsDisabled(true); // deshabilita los inputs
  };

  const handleEdit = () => {
    setIsDisabled(false); // vuelve a habilitar edición
  };

  return (
    <div>
      <h1>Estructura de Costos - CPMS</h1>

      {/* Información del procedimiento */}
      <section>
        <h3>Información del procedimiento</h3>
        <div>
          <TextInput
            id="procedureName"
            labelText="Nombre del procedimiento"
            value={procedureName}
            onChange={(e) => setProcedureName(e.target.value)}
            disabled={isDisabled}
            placeholder="Ingrese el nombre del procedimiento"
          />
          <TextInput
            id="procedureCode"
            labelText="Código CPMS"
            value={procedureCode}
            onChange={(e) => setProcedureCode(e.target.value)}
            disabled={isDisabled}
            placeholder="Ej: 00906"
          />
        </div>
      </section>

      {/* Tabs de costos */}
      <section>
        <h3>Estructura de Costos Detallada</h3>
        <Tabs>
          <TabList></TabList>
        </Tabs>
      </section>

      {/* Botones de acción */}
      <div>
        {!isDisabled ? (
          <Button kind="primary" onClick={handleSave}>
            Guardar estructura
          </Button>
        ) : (
          <Button kind="secondary" onClick={handleEdit}>
            Editar estructura
          </Button>
        )}
      </div>
    </div>
  );
};

export default CostStructureForm;
