import {z} from "zod";

export const costStructureSchema = z.object({
  procedure: z.object({
    conceptId: z.number(),
    nameFull: z.string().min(1, "Debe ingresar un procedimiento válido"),
    code: z.string().optional(),
  }),
  infrastructures: z.array(
    z.object({
      infrastructureId: z.number(),
      areaM2: z.number().nonnegative(),
      infrastructureName: z.string(),
      constructionCost: z.number().nonnegative(),
      timePerformanceMinutes: z.number().nonnegative()
    })
  ),
  publicServices: z.array(
    z.object({
      ups: z.string(),
      energyConsumption: z.number().nonnegative(),
      waterConsumption: z.number().nonnegative(),
      phoneNetConsumption: z.number().nonnegative(),
      energyInductor: z.number().nonnegative(),
      waterInductor: z.number().nonnegative(),
      phoneNetInductor: z.number().nonnegative(),
      totalCostEnergy: z.number().nonnegative(),
      totalCostWater: z.number().nonnegative(),
      totalCostPhoneNet: z.number().nonnegative(),
      totalCost: z.number().nonnegative(),
      productionProyected: z.number().nonnegative()
    })),
  annualServicesCost: z.object({
      annualEnergyCost: z.number().nonnegative(),
      annualWaterCost: z.number().nonnegative(),
      annualPhoneNetCost: z.number().nonnegative(),
      annualAdministrativeCost: z.number().nonnegative(),
      annualGeneralCost: z.number().nonnegative()
  })
})


export type CostStructureFormValues = z.infer<typeof costStructureSchema>