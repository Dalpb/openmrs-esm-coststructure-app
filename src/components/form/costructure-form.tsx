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
import EquipmentTab from './tabs/equipment-tab';
import SupplyTab from './tabs/supply-tab';
import PageHeader from '../ui/PageHeader/pageHeader';
import { WhitePaper } from '@carbon/react/icons';
import SummaryTab from './tabs/summary-tab';
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
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <PageHeader icon={<WhitePaper size={48} />} title="Crear Estructura de Costos – CPMS" subtitle="Costeo" />
      <div className="">
        <section className="cds--space-y-2 cds--space-x-2">
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
          <h3 className="">Estructura de Costos Detallada</h3>
          <Tabs selectedIndex={selectedTab} onChange={handleTanbChange}>
            <TabList>
              <Tab>Insumos y Medicamentos</Tab>
              <Tab>Equipamiento</Tab>
              <Tab>Recursos Humanos</Tab>
              <Tab>Infraestructura</Tab>
              <Tab>Servicios Públicos</Tab>
              <Tab>Servicios Generales</Tab>
              <Tab>Resumen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SupplyTab form={form} />
              </TabPanel>
              <TabPanel>
                <EquipmentTab form={form} />
              </TabPanel>
              <TabPanel>
                <HumanResourceTab form={form} />
              </TabPanel>
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
                <SummaryTab form={form} />
              </TabPanel>
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
