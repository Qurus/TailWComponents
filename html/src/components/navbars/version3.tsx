import { useState } from "react"
import { logo } from "assets"
const NavbarVerion3 = () => {
  const navigation = [
    { link: "#", text: "Home" },
    { link: "#", text: "Services" },
    { link: "#", text: "Projects" },
  ]
  const navigation1 = [
    { link: "#", text: "Docs" },
    { link: "#", text: "About" },
    { link: "#", text: "Contact" },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const hide = () => setIsOpen(false)
  const show = () => setIsOpen(true)
  return (
    <>
      <nav className="hidden md:flex justify-center items-center max-w-6xl mx-auto p-5 text-xl bg-gray-200 rounded-full space-x-20">
        <div>
          <ul className="hidden md:flex space-x-6 text-zinc-700">
            {navigation.map((nav) => (
              <li key={nav.text}>
                <a href={nav.link} className="hover:text-rose-600">
                  {nav.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          <img src={logo} alt="TailW Logo" />
        </div>
        <div>
          <ul className="hidden md:flex space-x-6 text-zinc-700">
            {navigation1.map((nav) => (
              <li key={nav.text}>
                <a href={nav.link} className="hover:text-rose-600">
                  {nav.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="sm:hidden flex justify-between items-center px-5 py-2 bg-gray-200 rounded-full">
        <div>
          <img src={logo} alt="TailW Logo" />
        </div>

        <div>
          <button type="button" onClick={toggle}>
            <span className="sr-only">View mobile menu</span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen ? (
        <ul className=" bg-white p-5 space-y-3 text-xl flex flex-col justify-start items-center">
          {navigation.map((nav) => (
            <li key={nav.text}>
              <a
                href={nav.link}
                onClick={toggle}
                onBlur={hide}
                onFocus={show}
                className="hover:text-rose-400"
              >
                {nav.text}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}
export default NavbarVerion3