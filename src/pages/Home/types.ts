import * as zod from 'zod'
import { newCycleFormValidationSchema } from '.'

export type HomeType = React.FC

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}
