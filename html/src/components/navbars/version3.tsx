//Version 3
import { useState } from "react"
import { logo } from "assets"
import { Tabs } from "@mantine/core"
import { Prism } from "@mantine/prism"

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
      <Tabs color="red" variant="pills" defaultValue="navbar" className="mx-10">
        <Tabs.List position="center" className="bg-zinc-900 p-5">
          <Tabs.Tab value="navbar" className="bg-white">
            Navbar
          </Tabs.Tab>
          <Tabs.Tab value="html" className="bg-white">
            Html
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="navbar" pt="xs">
          <nav className="hidden md:flex justify-center items-center max-w-6xl mx-auto p-5 text-xl bg-gray-200 rounded-full space-x-20 shadow">
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
        </Tabs.Panel>
        <Tabs.Panel value="html" pt="xs">
          <Prism colorScheme="dark" language="markup">
            {`
            <!-- JS Required -->
     <nav
  class="hidden md:flex justify-center items-center max-w-6xl mx-auto p-5 text-xl bg-gray-200 rounded-full space-x-20 shadow">
  <div>
    <ul class="hidden md:flex space-x-6 text-zinc-700">
      <li>
        <a href="#" class="hover:text-rose-600">
          Links ...
        </a>
      </li>
    </ul>
  </div>
  <div class="flex items-center space-x-6">
    <img src="./logo.png" alt="TailW Logo" />
  </div>
  <div>
    <ul class="hidden md:flex space-x-6 text-zinc-700">
      <li>
        <a href="#" class="hover:text-rose-600">
          Links ...
        </a>
      </li>
    </ul>
  </div>
</nav>
<div class="sm:hidden flex justify-between items-center px-5 py-2 bg-gray-200 rounded-full">
  <div>
    <img src="./logo.png" alt="TailW Logo" />
  </div>

  <div>
    <button type="button" onClick={toggle}>
      <span class="sr-only">View mobile menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
        class="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
        class="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
</div>
<ul class=" bg-white p-5 space-y-3 text-xl flex flex-col justify-start items-center">
  <li>
    <a href="#" onClick={toggle} onBlur={hide} onFocus={show} class="hover:text-rose-400">
      Links ...
    </a>
  </li>
</ul>`}
          </Prism>
        </Tabs.Panel>
      </Tabs>
    </>
  )
}
export default NavbarVerion3