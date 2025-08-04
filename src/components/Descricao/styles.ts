import styled from 'styled-components'

import { Props } from './index'
import { Theme } from '../../themes/dark'

export const DescricaoStyle = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) => (props.theme as Theme).corPrincipal};
`
