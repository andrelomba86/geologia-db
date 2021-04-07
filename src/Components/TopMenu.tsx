import React, { ReactElement, useState } from "react"
// import { Menu } from "semantic-ui-react"
import { Menubar, MenubarProps } from "primereact/menubar"
import { MenuItem } from "primereact/api"
import { useHistory } from "react-router-dom"

// import { MenuItems } from "./GlobalTypes"

export default function TopMenu(): ReactElement {
  let history = useHistory()
  const items: MenuItem[] = [
    {
      label: "Docentes",
      command: (event) => history.push("/Docentes"),
    },
    {
      label: "Funcionários",
      command: (event) => history.push("/Funcionarios"),
    },
  ]

  const icon = (
    <img
      src="logo192.png"
      width="48px"
      style={{ padding: "0px 10px", width: "48px" }}
      alt=""
    />
  )
  return <Menubar model={items} start={icon} />
}
