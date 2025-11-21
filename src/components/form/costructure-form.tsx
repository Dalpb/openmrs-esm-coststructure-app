import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { costStructureSchema, CostStructureFormValues } from './schema/costructure-schema';
import { Button, Tabs, Tab, TextInput, TabList, TabPanels, TabPanel } from '@carbon/react';
import { ProcedureAutocomplete } from './autocomplete/procedure-autocomplete';
import React from 'react';
import { Procedure } from '../../hooks/use-get-procedures';
import InfrastructureTab from './tabs/infrastructure-tab';
import PublicServicesTab from './tabs/public-service-tab';
import { useState } from 'react';
import GeneralServiceTab from './tabs/general-service-tab';
import HumanResourceTab from './tabs/humanresource-tab';
export default function CostStructureForm() {
  const [selectedTab, setSelectedTab] = useState(0);

  const form = useForm<CostStructureFormValues>({
    resolver: zodResolver(costStructureSchema),
    defaultValues: {
      procedure: { conceptId: 0, nameFull: '', code: '' },
      infrastructures: [],
      publicServices: [],
    },
  });
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;
  const onSubmit = (data: CostStructureFormValues) => {
    console.log('💾 Datos enviados:', data);
  };
  const handleTanbChange = (state: { selectedIndex: number }) => {
    setSelectedTab((index) => state.selectedIndex);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-xl font-semibold">Estructura de Costos - CPMS</h1>
      <div style={{ backgroundColor: 'white' }} className="p-4 space-y-4 rounded-md shadow-md">
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
          <Tabs selectedIndex={selectedTab} onChange={handleTanbChange}>
            <TabList>
              <Tab>Infraestructura</Tab>
              <Tab>Servicios Públicos</Tab>
              <Tab>Servicios Generales</Tab>
              <Tab>Recursos Humanos</Tab>
              <Tab>Materiales</Tab>
              <Tab>Equipos</Tab>
              <Tab>Instrumental</Tab>
              <Tab>Medicinas</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <InfrastructureTab form={form} />
              </TabPanel>
              <TabPanel>
                <PublicServicesTab form={form} />
              </TabPanel>
              <TabPanel>
                <GeneralServiceTab form={form} />
              </TabPanel>
              <TabPanel>
                <HumanResourceTab form={form} />
              </TabPanel>
              <TabPanel>taab</TabPanel>
              <TabPanel>taab</TabPanel>
              <TabPanel>taab</TabPanel>
              <TabPanel>taab</TabPanel>
            </TabPanels>
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
      </div>
    </form>
  );
}
