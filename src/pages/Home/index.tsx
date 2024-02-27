import * as T from './types'
import * as S from './styles'
import { Button } from '../../components/Button'

export const Home: T.HomeType = () => {
  return (
    <S.HomeContainer>
      <form action=''>
        <S.FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <S.TaskInput
            id='task'
            list='task-suggestions'
            placeholder='Dê um nome para o seu projeto'
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

        <Button />
      </form>
    </S.HomeContainer>
  )
}
