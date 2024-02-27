import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'
import logoIgnite from '../../assets/logo-ignite.svg'
import * as T from './types'
import * as S from './styles'

export const Header: T.HeaderType = () => {
  return (
    <S.HeaderContainer>
      <img src={logoIgnite} alt='' />
      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='Histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
