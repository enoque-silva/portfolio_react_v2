import { Paragrafo as ParagrafoEstilo } from './styles'
import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <ParagrafoEstilo fontSize={fontSize} tipo={tipo}>
    {children}
  </ParagrafoEstilo>
)

export default Paragrafo
