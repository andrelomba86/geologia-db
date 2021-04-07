import { ButtonProps } from "primereact/button"

export interface SubmitButtonsProps extends ButtonProps {
  onCLickSave: () => void
  onClickCancel: () => void
}
