import {z} from "zod";
import { time } from "zod/v4/core/regexes.cjs";

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
      constructionCost: z.number().nonnegative(),
      timePerformanceMinutes: z.number().nonnegative()
    })
  ),
})


export type CostStructureFormValues = z.infer<typeof costStructureSchema>