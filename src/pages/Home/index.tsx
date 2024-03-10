import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../components/Button'
import * as T from './types'
import * as S from './styles'

export const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number({
      invalid_type_error: 'O número não pode ser nulo'
    })
    .min(5, 'O ciclo deve ser no mínimo de 5 minutos.')
    .max(60, 'O ciclo deve ser no máximo de 60 minutos.')
})

export const Home: T.HomeType = () => {
  const [cycles, setCycles] = useState<T.Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<T.NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        )
      }, 1000)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: T.NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: T.Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    setCycles(state => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

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
          <span aria-label='número do contador'>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <S.Separator aria-label='separador'>:</S.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </S.CountdownContainer>

        <Button disabled={isSubmitDisabled} />
      </form>
    </S.HomeContainer>
  )
}
