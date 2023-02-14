import React from "react"
import {
  NavbarVerion1,
  NavbarVerion2,
  NavbarVerion3,
  NavbarVerion4,
} from "../components/navbars"

export default function Navbars() {
  return (
    <div className="space-y-14 border shadow rounded-xl mx-3 py-4">
      <NavbarVerion1 />
      <NavbarVerion2 />
      <NavbarVerion3 />
      <NavbarVerion4 />
    </div>
  )
}
