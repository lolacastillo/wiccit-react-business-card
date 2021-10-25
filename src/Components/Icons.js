import React, {Component} from 'react';
import "../styling/index.css";
import $ from "jquery";

class Icons extends Component {
    componentDidMount (){
        window.addEventListener('scroll',function () {
            console.log($(window).scrollTop())
            if ($(window).scrollTop() > 280) {
                document.querySelector("#nav_bar").classList.add('navbar-fixed')}
            if ($(window).scrollTop() < 281) {
                document.querySelector("#nav_bar").classList.remove('navbar-fixed')}

        })
    }




    render(){
    return (
        <nav id="nav_bar">
            <ul className="nav_links">
                <li><i className="fab fa-facebook-square fa-7x"></i>Facebook</li>
                <li><i className="fab fa-bandcamp fa-7x"></i> Bandcamp</li>
                <li><i className="fab fa-soundcloud fa-7x"></i>SoundCloud</li>
                <li><i className="fas fa-address-card fa-7x"></i>Address Card</li>
            </ul>
        </nav>
    )
    }
}

export default Icons