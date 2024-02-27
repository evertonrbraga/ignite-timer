import { Play } from 'phosphor-react'
import * as T from './types'
import * as S from './styles'

export const Button: T.ButtonType = ({ disabled = false }: T.ButtonProps) => {
  return (
    <S.ButtonContainer disabled={disabled}>
      <Play size={24} aria-label='ícone de play' />
      Começar
    </S.ButtonContainer>
  )
}
