import { useState } from "react"
import { logo } from "assets"
import { Tabs } from "@mantine/core"
import { Prism } from "@mantine/prism"

const NavbarVerion4 = () => {
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
          <nav className="hidden md:flex justify-between items-center max-w-7xl mx-auto p-5 md:text-sm lg:text-xl shadow bg-white">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="TailW Logo" />
              </div>
            </div>
            <div className="relative md:w-1/2 md:ml-10">
              <div className="w-full sm:max-w-xs">
                <label className="sr-only">Search</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-full border border-gray-700 py-2 pl-10 pr-1 text-sm placeholder-gray-400 focus:border-rose-600 focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="relative z-10 flex items-center">
              <ul className="hidden md:flex md:space-x-3 lg:space-x-6 text-zinc-700">
                {navigation.map((nav) => (
                  <li key={nav.text}>
                    <a href={nav.link} className="hover:text-rose-600">
                      {nav.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="sm:hidden flex justify-between items-center p-3">
            <div>
              <img src={logo} alt="TailW Logo" />
            </div>
            <div className="relative mx-4">
              <div className="w-full sm:max-w-xs">
                <label className="sr-only">Search</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-full border border-gray-700 py-2 pl-10 pr-1 text-sm placeholder-gray-400 focus:border-rose-600 focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
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
              <ul className=" bg-white p-5 space-y-3 text-xl flex flex-col justify-start items-center -mt-16">
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
     <nav class="hidden md:flex justify-between items-center max-w-7xl mx-auto p-5 md:text-sm lg:text-xl shadow bg-white">
  <div class="relative z-10 flex px-2 lg:px-0">
    <div class="flex flex-shrink-0 items-center">
      <img src="./logo.png" alt="TailW Logo" />
    </div>
  </div>
  <div class="relative md:w-1/2 md:ml-10">
    <div class="w-full sm:max-w-xs">
      <label class="sr-only">Search</label>
      <div class="relative">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" class="w-6 h-6 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <input id="search" name="search"
          class="block w-full rounded-full border border-gray-700 py-2 pl-10 pr-1 text-sm placeholder-gray-400 focus:border-rose-600 focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
          placeholder="Search" type="search" />
      </div>
    </div>
  </div>
  <div class="relative z-10 flex items-center">
    <ul class="hidden md:flex md:space-x-3 lg:space-x-6 text-zinc-700">
      <li key={nav.text}>
        <a href="#" class="hover:text-rose-600">
          Links ...
        </a>
      </li>
    </ul>
  </div>
</nav>
<div class="sm:hidden flex justify-between items-center p-3">
  <div>
    <img src="./logo.png" alt="TailW Logo" />
  </div>
  <div class="relative mx-4">
    <div class="w-full sm:max-w-xs">
      <label class="sr-only">Search</label>
      <div class="relative">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" class="w-6 h-6 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <input id="search" name="search"
          class="block w-full rounded-full border border-gray-700 py-2 pl-10 pr-1 text-sm placeholder-gray-400 focus:border-rose-600 focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
          placeholder="Search" type="search" />
      </div>
    </div>
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
<div class="sm:hidden">
  <ul class=" bg-white p-5 space-y-3 text-xl flex flex-col justify-start items-center -mt-16">
    <li>
      <a href="#" class="hover:text-rose-400">
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
export default NavbarVerion4
