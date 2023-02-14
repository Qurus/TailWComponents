import { useState } from "react"
import { logo } from "assets"
import { Tabs } from "@mantine/core"
import { Prism } from "@mantine/prism"

const NavbarVerion1 = () => {
  const navigation = [
    { link: "#", text: "Home" },
    { link: "#", text: "Services" },
    { link: "#", text: "Projects" },
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
      <Tabs
        color="red"
        variant="pills"
        defaultValue="navbar"
        className="mx-10"
      >
        <Tabs.List position="center" className="bg-zinc-900 p-5">
          <Tabs.Tab value="navbar" className="bg-white">
            Navbar
          </Tabs.Tab>
          <Tabs.Tab value="html" className="bg-white">
            Html
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="navbar" pt="xs">
          <nav className="hidden md:flex justify-between items-center mx-auto p-5 text-xl">
            <div className="flex items-center space-x-6">
              <img src={logo} alt="TailW Logo" />
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
            </div>
            <div className="hidden lg:block">
              <button className="mr-6 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition duration-700 ease-in-out">
                Sign In
              </button>
              <button className="inline-flex items-center rounded-md border border-transparent bg-sky-400 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition duration-700 ease-in-out">
                Sign Up
              </button>
            </div>
          </nav>
          <div className="sm:hidden flex justify-between items-center p-3">
            <div>
              <img src={logo} alt="TailW Logo" />
            </div>
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
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="sm:hidden">
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
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="html" pt="xs">
          <Prism colorScheme="dark" language="markup">
            {`
            <!-- JS Required -->
      <nav class="hidden md:flex justify-between items-center max-w-7xl mx-auto p-5 text-xl">
  <div class="flex items-center space-x-6">
    <img src='./logo.png' alt="TailW Logo" />
    <div>
      <ul class="hidden md:flex space-x-6 text-zinc-700">
        <li>
          <a href="#" class="hover:text-rose-600">
            Links ...
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="hidden lg:block">
    <button
      class="mr-6 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition duration-700 ease-in-out">
      Sign In
    </button>
    <button
      class="inline-flex items-center rounded-md border border-transparent bg-sky-400 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition duration-700 ease-in-out">
      Sign Up
    </button>
  </div>
</nav>
<div class="sm:hidden flex justify-between items-center p-3">
  <div>
    <img src={logo} alt="TailW Logo" />
  </div>
  <button type="button" onClick={toggle}>
    <span class="sr-only">View mobile menu</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
      class="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
      class="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>
  </button>
</div>
<!-- Mobile Nav -->
<div class="sm:hidden">
  <ul class=" bg-white p-5 space-y-3 text-xl flex flex-col justify-start items-center">
    <li>
      <a href="#" class="hover:text-rose-600">
        Links ...
      </a>
    </li>
  </ul>
</div>`}
          </Prism>
        </Tabs.Panel>
      </Tabs>
    </>
  )
}
export default NavbarVerion1
