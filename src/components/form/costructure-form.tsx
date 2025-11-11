import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { costStructureSchema, CostStructureFormValues } from './schema/costructure-schema';
import { Button, Tabs, Tab, TextInput, TabList } from '@carbon/react';
import { ProcedureAutocomplete } from './autocomplete/procedure-autocomplete';
import React from 'react';
import { Procedure } from '../../hooks/use-get-procedures';

export default function CostStructureForm() {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CostStructureFormValues>({
    resolver: zodResolver(costStructureSchema),
    defaultValues: {
      procedure: { conceptId: 0, nameFull: '', code: '' },
    },
  });

  const onSubmit = (data: CostStructureFormValues) => {
    console.log('💾 Datos enviados:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-xl font-semibold">Estructura de Costos - CPMS</h1>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">Información del procedimiento</h3>

        <Controller
          name="procedure"
          control={control}
          render={({ field }) => (
            <ProcedureAutocomplete
              value={field.value as Procedure}
              onChange={(proc) => setValue('procedure', proc)}
              error={errors.procedure?.nameFull?.message}
            />
          )}
        />
      </section>

      {/* Tabs de costos */}
      <section>
        <h3 className="text-lg font-medium">Estructura de Costos Detallada</h3>
        <Tabs>
          <TabList>
            <Tab>Recursos Humanos</Tab>
            <Tab>Materiales</Tab>
            <Tab>Equipos</Tab>
            <Tab>Instrumental</Tab>
            <Tab>Medicinas</Tab>
          </TabList>
        </Tabs>
      </section>

      <div className="flex gap-2">
        <Button kind="primary" type="submit">
          Guardar estructura
        </Button>
        <Button kind="secondary" type="reset">
          Limpiar
        </Button>
      </div>
    </form>
  );
}
