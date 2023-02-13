import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from "react-router-dom"
import 
  { Home, NavBars }
 from "./pages/"
import { logo } from "assets"
export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/navbars" element={<NavBars />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <div className="font-opens">
      <div className="w-full mx-auto p-10 space-x-10 bg-rose-600 text-white mb-10 flex items-center justify-start text-xl">
        <img
          src={logo}
          alt="tailw logo"
          className="bg-white px-5 rounded-xl py-2 shadow"
        />
        <Link to="/" className="hover:text-black">
          Home
        </Link>
        <Link to="/navbars" className="hover:text-black">
          Navbars
        </Link>
      </div>
      <Outlet />
    </div>
  )
}