'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const navigation = {
  categories: [
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '/men/new-arrivals',
          imageSrc: '/assets/cat-7737618_1280.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '/men/artwork-tees',
          imageSrc: '/assets/woman-9264738_1280.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '/men/clothing/tops' },
            { name: 'Pants', href: '/men/clothing/pants' },
            { name: 'Sweaters', href: '/men/clothing/sweaters' },
            { name: 'T-Shirts', href: '/men/clothing/t-shirts' },
            { name: 'Jackets', href: '/men/clothing/jackets' },
            { name: 'Activewear', href: '/men/clothing/activewear' },
            { name: 'Browse All', href: '/men/clothing' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '/men/accessories/watches' },
            { name: 'Wallets', href: '/men/accessories/wallets' },
            { name: 'Bags', href: '/men/accessories/bags' },
            { name: 'Sunglasses', href: '/men/accessories/sunglasses' },
            { name: 'Hats', href: '/men/accessories/hats' },
            { name: 'Belts', href: '/men/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '/men/brands/re-arranged' },
            { name: 'Counterfeit', href: '/men/brands/counterfeit' },
            { name: 'Full Nelson', href: '/men/brands/full-nelson' },
            { name: 'My Way', href: '/men/brands/my-way' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'All Cloths', href: '/Product' },
    { name: 'Stores', href: '/stores' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
    setOpen(false) // Close mobile menu after navigation
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <button
                            onClick={() => handleNavigation(item.href)}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </button>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <button
                                onClick={() => handleNavigation(item.href)}
                                className="-m-2 block p-2 text-gray-500"
                              >
                                {item.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <button
                    onClick={() => handleNavigation(page.href)}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <button
                  onClick={() => handleNavigation('/signin')}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </button>
              </div>
              <div className="flow-root">
                <button
                  onClick={() => handleNavigation('/create-account')}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <button
                onClick={() => handleNavigation('/currency')}
                className="-m-2 flex items-center p-2"
              >
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop menu */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-6 text-sm font-bold text-white shadow-md transition-transform transform hover:scale-105 sm:px-8 lg:px-10 rounded-lg">
          INFINIA
        </p>

        <nav aria-label="Top" className="sticky mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <button onClick={() => handleNavigation('/')}>
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="assets/logos/WhatsApp Image 2025-01-09 at 23.26.16_a0316a31.jpg"
                    className="h-8 w-auto"
                  />
                </button>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <button
                                      onClick={() => handleNavigation(item.href)}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </button>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <button
                                            onClick={() => handleNavigation(item.href)}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <button
                      key={page.name}
                      onClick={() => handleNavigation(page.href)}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </button>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button
                    onClick={() => handleNavigation('/signin')}
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </button>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <button
                    onClick={() => handleNavigation('/create-account')}
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </button>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <button
                    onClick={() => handleNavigation('')}
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      alt=""
                      src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                      className="block h-auto w-5 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </button>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button
                    onClick={() => handleNavigation('/search')}
                    className="p-2 text-gray-600 bg-gray-50 rounded-full border border-gray-300 shadow-inner hover:text-brown-600 hover:bg-gray-100 transition-all duration-300"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="w-6 h-6 transform transition-transform duration-300 hover:scale-105" />
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <button
                    onClick={() => handleNavigation('/cart')}
                    className="group -m-2 flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-300 shadow-inner transition-all duration-300"
                  >
                    <ShoppingBagIcon aria-hidden="true" className="w-6 h-6 shrink-0 text-gray-600 group-hover:text-brown-600 transition-colors duration-300" />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}