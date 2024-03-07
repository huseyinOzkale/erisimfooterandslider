
import './navbar.css';
import React, { useState, useEffect } from 'react';

function Navbar() {
    const [itemActive, setItemActive] = useState(0);

    useEffect(() => {
        const items = document.querySelectorAll('.slider .list .item');
        const thumbnails = document.querySelectorAll('.thumbnail .item');
        const next = document.getElementById('next');
        const prev = document.getElementById('prev');

        const handleNext = () => {
            setItemActive((prevItemActive) => (prevItemActive + 1) % items.length);
        };

        const handlePrev = () => {
            setItemActive((prevItemActive) =>
                prevItemActive === 0 ? items.length - 1 : prevItemActive - 1
            );
        };

        const handleThumbnailClick = (index) => {
            setItemActive(index);
        };

        next.addEventListener('click', handleNext);
        prev.addEventListener('click', handlePrev);

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => handleThumbnailClick(index));
        });

        return () => {
            next.removeEventListener('click', handleNext);
            prev.removeEventListener('click', handlePrev);
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.removeEventListener('click', () => handleThumbnailClick(index));
            });
        };
    }, [itemActive]);

    return (
        <div className="nav">
            <header className='he'>
                <div className="brand"><a href="#"><img src="https://erisimkablo.com.tr/wp-content/uploads/2023/06/erisim_logo_white2.png.webp" alt="logo" /></a></div>
                <div className="menu-btn"></div>
                <div className="navigation">
                    <div className="navigation-items">
                        <a href="#">Hakkında</a>
                        <a href="#">Ürünler</a>
                        <a href="#">Kataloglar</a>
                        <a href="#">Kalite</a>
                        <a href="#">Referanslar</a>
                        <a href="#">İletişim</a>
                    </div>
                </div>
            </header>

            <div className="slider">
                <div className="list">
                    <div className={`item ${itemActive === 0 ? 'active' : ''}`}>
                        <img src="/src/assets/naslovna_dalekovod-2.jpg" alt="Slider 01"></img>
                        <div className="content">
                            <p>Tasarım</p>
                            <h2>Slider 01</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                            </p>
                        </div>
                    </div>
                    <div className={`item ${itemActive === 1 ? 'active' : ''}`}>
                        <img src="/src/assets/naslovna_data_cables.jpg" alt="Slider 02"></img>
                        <div className="content">
                            <p>Tasarım</p>
                            <h2>Slider 02</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                            </p>
                        </div>
                    </div>
                    <div className={`item ${itemActive === 2 ? 'active' : ''}`}>
                        <img src="/src/assets/naslovna_esg.jpg" alt="Slider 03"></img>
                        <div className="content">
                            <p>Tasarım</p>
                            <h2>Slider 03</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <button id="prev">Geri</button>
                    <button id="next">İleri</button>
                </div>
                <div className="thumbnail">
                    <div className={`item ${itemActive === 0 ? 'active' : ''}`} onClick={() => setItemActive(0)}>
                        <img src="/src/assets/naslovna_dalekovod-2.jpg" alt="Slider 01"></img>
                        <div className="content">
                            Name Slider
                        </div>
                    </div>
                    <div className={`item ${itemActive === 1 ? 'active' : ''}`} onClick={() => setItemActive(1)}>
                        <img src="/src/assets/naslovna_data_cables.jpg" alt="Slider 02"></img>
                        <div className="content">
                            Name Slider
                        </div>
                    </div>
                    <div className={`item ${itemActive === 2 ? 'active' : ''}`} onClick={() => setItemActive(2)}>
                        <img src="/src/assets/naslovna_esg.jpg" alt="Slider 03"></img>
                        <div className="content">
                            Name Slider
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
