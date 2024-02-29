import { STATUS_COLORS } from './styles'

export type HistoryType = React.FC

export interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}
