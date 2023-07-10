/* eslint-disable react/prop-types */
import { useState } from 'react'

import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = ({ children: slides }) => {
    const [current, setCurrent] = useState(0);


    const prev = () =>
        setCurrent((current) => current === 0 ? slides.length - 1 : current - 1);

    const next = () =>
        setCurrent((current) => current === slides.length - 1 ? 0 : current + 1);


    return (
        <>
            <div className="overflow-hidden relative">
                <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>{slides}</div>
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <div className='flex absolute justify-between left-72 top-52 w-9/12'>
                <button className='' onClick={prev}><GrPrevious /></button>
                <button className='' onClick={next}><GrNext /></button>
            </div>
        </>




    )
}

export default Carousel;
