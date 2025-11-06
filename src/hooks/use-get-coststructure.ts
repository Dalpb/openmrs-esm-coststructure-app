import useSWR from "swr";
import { AnnualServiceCost, CostStructure, EquipmentCost, HumanResourceCost, InfrastructureCost, Procedure } from "../types";
import { openmrsFetch } from "@openmrs/esm-framework";

const API_URL =
  "/ws/module/coststructure/list";
interface CostStructureResponse extends CostStructure {
    procedure: Procedure | null
    anualServiceCost: AnnualServiceCost | null
    humanResourceCosts: Array<HumanResourceCost> 
    equipmentCosts: Array<EquipmentCost>
    infrastructureCosts:Array<InfrastructureCost>
}
const useGetCostStructure = () => {
  const { data, error, isLoading } = useSWR<any>(
    API_URL,
    openmrsFetch
  );

  return {
    costStructures: data ?? [],
    isLoading,
    isError: error,
  };  
}
export default useGetCostStructure;