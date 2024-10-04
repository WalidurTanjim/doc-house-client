import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import useAuth from '../../hooks/useAuth';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Appointment', href: '/appointment', current: false },
    { name: 'Reviews', href: '/reviews', current: false },
    { name: 'Contact Us', href: '/contact', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const { user, logOut } = useAuth();

    // logOutHandler
    const logOutHandler = () => {
        logOut()
        .then(() => {
            console.log('Logout successfully')
        })
        .catch(err => {
            console.error(err);
        })
    }


    return (
        <Disclosure as="nav" className="bg-[#07332F]">
        {/* bg-[#07332F] hover:bg-[#143D3A] bg-gray-800 */}
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* bars3Icon div starts */}
                    <div className="bars3Icon absolute inset-y-0 right-0 flex items-center md:hidden">
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
                    <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-between">
                        {/* logo div starts */}
                        <div className="logo flex flex-shrink-0 items-center ml-2 md:mr-0">
                            <Link to="/"><img alt="Your Company" src={logo} className="h-8 w-auto" /></Link>
                        </div>

                        {/* nav links for large devices */}
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex">
                                {navigation.map((item) => (
                                    <Link key={item.name} to={item.href} aria-current={item.current ? 'page' : undefined} className={classNames(item.current ? 'bg-[#07332F] text-white' : 'text-gray-300 hover:bg-[#143D3A] hover:text-white',
                                            'rounded-md px-3 py-2 text-sm')}>
                                        {item.name}
                                        {/* hover:bg-gray-700 */}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* notification bellIcon and profile picture for large devices */}
                    {
                        user ?
                            <div className="absolute inset-y-0 right-0 md:flex items-center pr-2 md:static md:inset-auto md:pr-0 hidden">
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
                                        <MenuItem><Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 rounded-t-md">Your Profile</Link></MenuItem>
                                        <MenuItem><Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">Dashboard</Link></MenuItem>
                                        <MenuItem><p className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 rounded-b-md cursor-pointer" onClick={logOutHandler}>Sign out</p></MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div> :
                            <Link to="/signIn"><button className='py-2 px-5 rounded-md border-none outline-none text-sm text-white bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582] absolute inset-y-0 right-0 md:flex items-center md:static md:inset-auto hidden'>Sign In</button></Link>
                    }
                </div>
            </div>

            {/* navLinks and userProfile for small devices */}
            <DisclosurePanel className="smallDeviceNavLinks md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link to={item.href} key={item.name} aria-current={item.current ? 'page' : undefined} className={classNames(
                                item.current ? 'text-white' : 'text-gray-300 hover:bg-[#143D3A] hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                        )}>
                        {/* bg-gray-900 */}
                            {item.name}
                        </Link>
                    ))}
                </div>

                <hr className='w-full h-[1px] bg-white  outline-none my-5' />

                {/* userProfile, notificationIcon & sign in button */}
                {
                    user ?
                        <div className='space-y-1 px-2 pb-3 pt-2'>
                            {/* profilePicture_notificationIcon div */}
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
                                <Link to="/profile" className='text-gray-300 hover:bg-[#143D3A] hover:text-white block rounded-md px-3 py-2 text-base font-medium'>Your Profile</Link>
                                <Link to="/dashboard" className='text-gray-300 hover:bg-[#143D3A] hover:text-white block rounded-md px-3 py-2 text-base font-medium'>Dashboard</Link>
                                <p className='text-gray-300 hover:bg-[#143D3A] hover:text-white block rounded-md px-3 py-2 text-base font-medium cursor-pointer' onClick={logOutHandler}>Sign out</p>
                            </div>
                        </div> :
                        <div className='px-3 pb-6'>
                            <Link to="/signIn"><button className='w-full py-2 px-5 rounded-md border-none outline-none text-sm text-white bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582]'>Sign In</button></Link>
                        </div>
                }
            </DisclosurePanel>
        </Disclosure>
    );
};

export default Header;