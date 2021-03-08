import { StrictTableProps, SemanticWIDTHS } from "semantic-ui-react"

export interface ListViewProps extends StrictTableProps {
  label: string
  width: SemanticWIDTHS
  headers: string[]
  value: string
}
