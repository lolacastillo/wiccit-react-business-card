import React, {Component} from 'react';
import "../styling/navbar.css";
import $ from "jquery";

class Navbar extends Component {

    componentDidMount() {
        window.addEventListener('scroll', function () {
            if ($(window).scrollTop() > $('#logo').height()) {
                document.querySelector("#nav_bar").classList.add('navbar-fixed')
            }
            if ($(window).scrollTop() < $('#logo').height() + 1) {
                document.querySelector("#nav_bar").classList.remove('navbar-fixed')
            }

        })
    }

    render() {
        return (

        <nav id="nav_bar" className="bg-white shadow-lg">
            <div className="">
                <div className="">
                    <div className="flex">
                        <div className="mr-auto">
                            <a href="#" className="flex items-center py-4 px-2">
                                <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
                                <span className="font-semibold text-gray-500 text-lg"
                                >wiccit</span
                                >
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-1 nav_links">
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300 font-semibold"
                            ><i className="fab fa-facebook-square"></i> Facebook</a
                            >
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-red-500 transition duration-300"
                            ><i className="fab fa-bandcamp"></i> Bandcamp</a
                            >
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300"
                            ><i className="fab fa-soundcloud"></i> SoundCloud</a
                            >
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                            ><i className="fas fa-address-card"></i> Address Card</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
    }
    }

    export default Navbar