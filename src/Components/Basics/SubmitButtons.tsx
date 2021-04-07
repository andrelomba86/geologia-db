import React from "react"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { SubmitButtonsProps } from "./types"

export const SubmitButtons: React.FC<SubmitButtonsProps> = ({
  onClickSave,
  onClickCancel,
  disabled,
}) => {
  return (
    <>
      <Divider />
      <div className="p-d-flex p-flex-column p-flex-md-row p-col-12 p-md-6">
        <Button
          label="Salvar"
          disabled={disabled}
          onClick={onClickSave}
          className="p-mr-3 p-mb-2"
        />
        <Button
          label="Cancelar"
          disabled={disabled}
          onClick={onClickCancel}
          className="p-button-danger p-mb-2"
        />
      </div>
    </>
  )
}
