import styled from 'styled-components'

import { Props } from './index'

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(Props) => (Props.fontSize ? Props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  max-width: 100%;
  width: 100%;
`
