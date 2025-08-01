import styled from 'styled-components'

import { Props } from './index'
import { Theme } from '../../themes/dark'

export const Titulo = styled.h3<Props>`
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: ${(Props) => (Props.fontSize ? Props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  max-width: 100%;
  width: 100%;
`
