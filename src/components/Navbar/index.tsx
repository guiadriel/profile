import React from "react";
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

export function Navbar() {
    return (
        <div className="container mx-auto items-center py-10 flex justify-between relative">
            <div className="text-2xl text-white">
                <a href="#">
                    guiadriel<strong className="text-primary">.dev</strong>
                </a>
            </div>
            <ul className="flex gap-8">
                <li>
                    <a href="" className="text-primary text-2xl tracking-tight">
                        About
                    </a>
                </li>
                <li>
                    <a href="" className="text-primary text-2xl tracking-tight">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="" className="text-primary text-2xl tracking-tight">
                        Contact
                    </a>
                </li>
                <li className="pl-6">
                    <div className="flex gap-4 text-primary">
                        <a href="https://github.com/guiadriel"><FaGithub size={32} /></a>
                        <a href="https://instagram.com/guiadriel"><FaInstagram size={32} /></a>
                        <a href="https://facebook.com/guiadriel"><FaFacebook size={32} /></a>
                    </div>
                </li>
            </ul>
        </div>
    );
}
