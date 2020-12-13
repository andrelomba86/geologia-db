import React, { ReactElement, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { MenuItems } from './Global'

export default function TopMenu(): ReactElement {
  const TopMenuItems: MenuItems = [
    {
      title: 'Docentes',
      name: 'docentes',
      component: <ProvisoryNullComponent />,
    },
    {
      title: 'Funcionários',
      name: 'func',
      component: <ProvisoryNullComponent />,
    },
  ]

  // let activeItem: TopMenuItems = TopMenuItems.Docentes
  const [activeItem, setActiveItem] = useState(TopMenuItems[0].name)
  return (
    <Menu stackable>
      <Menu.Item>
        <img src="logo192.png" alt="" />
      </Menu.Item>
      {TopMenuItems.map((item, x) => {
        return (
          <Menu.Item
            name={item.name}
            active={activeItem === item.name}
            onClick={() => setActiveItem(item.name)}>
            {item.title}
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

function ProvisoryNullComponent(): ReactElement {
  return <div></div>
}
