import {z} from "zod";

export const costStructureSchema = z.object({
  procedure: z.object({
    conceptId: z.number(),
    nameFull: z.string().min(1, "Debe ingresar un procedimiento válido"),
    code: z.string().optional(),
  }),
  resources: z.array(z.any()).optional(),
})


export type CostStructureFormValues = z.infer<typeof costStructureSchema>