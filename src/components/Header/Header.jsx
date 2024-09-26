import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    return (
        <Disclosure as="nav" className="bg-[#07332F]">
        {/* bg-[#07332F] hover:bg-[#143D3A] bg-gray-800 */}
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* bars3Icon div starts */}
                    <div className="bars3Icon absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button ( bars3Icon )*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#143D3A] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        {/* text-gray-400 */}
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                    {/* logo and navLinks div starts */}
                    <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                        {/* logo div starts */}
                        <div className="logo flex flex-shrink-0 items-center ml-2 sm:mr-0">
                            <Link to="/"><img alt="Your Company" src={logo} className="h-8 w-auto" /></Link>
                        </div>

                        {/* nav links for large devices */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} aria-current={item.current ? 'page' : undefined} className={classNames(item.current ? 'bg-[#07332F] text-white' : 'text-gray-300 hover:bg-[#143D3A] hover:text-white',
                                            'rounded-md px-3 py-2 text-sm')}>
                                        {item.name}
                                        {/* hover:bg-gray-700 */}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* notification bellIcon and profile picture for large devices */}
                    <div className="absolute inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
                        {/* notification bellIcon */}
                        <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ms-2">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Profile dropdown starts */}
                        <Menu as="div" className="relative ml-3">
                            {/* profile picture div starts */}
                            <div className="profilePicture">
                                <MenuButton className="relative flex rounded-full bg-[#143D3A] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="h-8 w-8 rounded-full" />
                                </MenuButton>
                            </div>
                            
                            {/* profile links */}
                            <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                <MenuItem><Link className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 rounded-t-md">Your Profile</Link></MenuItem>
                                <MenuItem><Link className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">Settings</Link></MenuItem>
                                <MenuItem><p className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 rounded-b-md cursor-pointer">Sign out</p></MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* navLinks and userProfile for small devices */}
            <DisclosurePanel className="smallDeviceNavLinks sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link key={item.name} aria-current={item.current ? 'page' : undefined} className={classNames(
                                item.current ? 'text-white' : 'text-gray-300 hover:bg-[#143D3A] hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                        )}>
                        {/* bg-gray-900 */}
                            {item.name}
                        </Link>
                    ))}
                </div>

                <hr className='w-full h-[1px] bg-white  outline-none my-5' />

                {/* userProfile and profileLinks */}
                <div className='space-y-1 px-2 pb-3 pt-2'>
                    <div className="profilePicture_notificationIcon flex items-center justify-between mb-4">
                        {/* Profile dropdown starts */}
                        <Menu as="div" className="relative ml-3">
                            {/* profile picture div starts */}
                            <div className="profilePicture">
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="h-10 w-10 rounded-full" />
                                </MenuButton>
                            </div>
                        </Menu>

                        {/* notification bellIcon */}
                        <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    
                    <div className="profileLinks">
                        <Link className='text-gray-300 hover:bg-[#143D3A] hover:text-white block rounded-md px-3 py-2 text-base font-medium'>Your Profile</Link>
                        <Link className='text-gray-300 hover:bg-[#143D3A] hover:text-white block rounded-md px-3 py-2 text-base font-medium'>Settings</Link>
                        <p className='text-gray-300 hover:bg-[#143D3A] hover:text-white block rounded-md px-3 py-2 text-base font-medium cursor-pointer'>Sign out</p>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default Header;