import React from 'react';
import greenLogo from '../../assets/images/Group36.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full text-slate-500">
            {/* main footer */}
            <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
                <div className="container mx-auto px-6">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-10">
                        <div className='md:col-span-2 lg:col-span-4' aria-labelledby="footer-header">
                            <Link to='/'><img src={greenLogo} alt="Logo Icon" className='w-[150px] h-[40px]' /></Link>

                            <p className='my-5'>Medical treatment is essential for diagnosing, managing, and curing illnesses, ensuring overall health and well-being. It helps prevent complications and improves the quality of life.</p>

                            <button className='py-2 px-5 rounded-md text-[#F7A582] hover:text-white active:text-[#F7A582] border border-[#F7A582] hover:bg-[#F7A582] active:bg-white text-sm'>Appointment</button>
                        </div>

                        <nav className='md:col-span-1 lg:col-span-2' aria-labelledby="footer-product-5-logo">
                            <h3 className="mb-3 text-lg font-semibold text-slate-900" id="footer-quickLinks-5-logo">Quick Links</h3>

                            <ul>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">About Us</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Doctors</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Services</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Departments</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Online Payment</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Contact Us</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">My Account</Link></li>
                            </ul>
                        </nav>

                        <nav className='md:col-span-1 lg:col-span-2' aria-labelledby="footer-docs-5-logo">
                            <h3 className="mb-3 text-lg font-semibold text-slate-900" id="footer-docHouseServices-5-logo">Doc House Services</h3>

                            <ul>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Pediatric Clinic</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Diagnosis Clinic</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Cardiac Clinic</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Laboratory Analysis</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Gynecological Clinic</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Personal Counseling</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Dental Clinic</Link></li>
                            </ul>
                        </nav>

                        <nav className='md:col-span-1 lg:col-span-2' aria-labelledby="footer-about-5-logo">
                            <h3 className="mb-3 text-lg font-semibold text-slate-900" id="footer-workingHours-5-logo">Working Hours</h3>

                            <ul>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Monday - 10 am to 7 pm</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Tuesday - 10 am to 7 pm</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Wednesday - 10 am to 7 pm</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Thursday - 10 am to 7 pm</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Friday - 10 am to 7 pm</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Saturday - 10 am to 7 pm</Link></li>
                                <li className="mb-2 leading-6"><Link className="transition-colors duration-300">Sunday - 10 am to 7 pm</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* sub footer */}
            <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <Link to='/'><img src={greenLogo} alt="Logo Icon" className='w-[100px] h-[25px]' /></Link>
                        <nav className="col-span-3 md:col-span-4 lg:col-span-6" aria-labelledby="subfooter-links-3-sub">
                            <h3 className="sr-only" id="subfooter-links-3-sub">Get in touch</h3>

                            <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                            <li className="leading-6"> <Link className="transition-colors duration-300">T&C</Link></li>

                            <li className="leading-6"> <Link className="transition-colors duration-300">Privacy</Link></li>

                            <li className="leading-6"> <Link className="transition-colors duration-300">Cookies</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;