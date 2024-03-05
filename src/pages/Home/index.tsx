import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../components/Button'
import * as T from './types'
import * as S from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number({
      invalid_type_error: 'O número não pode ser nulo'
    })
    .min(5, 'O ciclo deve ser no mínimo de 5 minutos.')
    .max(60, 'O ciclo deve ser no máximo de 60 minutos.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const Home: T.HomeType = () => {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0
      }
    })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(task)
    reset()
  }

  const task = watch('task')
  const minutesAmount = watch('minutesAmount')
  const isSubmitDisabled = !task || !minutesAmount

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action=''>
        <S.FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <S.TaskInput
            id='task'
            list='task-suggestions'
            placeholder='Dê um nome para o seu projeto'
            {...register('task')}
          />

          <datalist
            id='task-suggestions'
            aria-label='lista de sugestões de projeto'
          >
            <option value='Projeto 1' />
            <option value='Projeto 2' />
            <option value='Projeto 3' />
            <option value='Banana' />
          </datalist>

          <label htmlFor='minutesAmount'>durante</label>
          <S.MinutesAmountInput
            type='number'
            id='minutesAmount'
            placeholder='00'
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer aria-label='container do contador'>
          <span aria-label='número do contador'>0</span>
          <span>0</span>
          <S.Separator aria-label='separador'>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <Button disabled={isSubmitDisabled} />
      </form>
    </S.HomeContainer>
  )
}
