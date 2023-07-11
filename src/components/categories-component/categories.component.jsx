import { useRef, useState } from "react";
import NavbarTemplate from "../sidebar-template/sidebar-template.component";

import "./categories.component.css"

const slides = [
    {
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        title: "Pizza"
    },
    {
        url: "https://media.istockphoto.com/id/1332013247/photo/tasty-hamburger-with-french-fries.webp?b=1&s=170667a&w=0&k=20&c=quLpaNbLuuAZT6GD2gNwlHej0DANXUYtbvKJPpct1nY=",
        title: "Burger"
    },
    {
        url: "https://media.istockphoto.com/id/1470349295/photo/vegetarian-mediterranean-linguine.webp?b=1&s=170667a&w=0&k=20&c=sLukARpBi0sGVhqcdw5hM2wM1o4OChjPliMr4Nckxtk=",
        title: "Pasta"
    },
    {
        url: "https://media.istockphoto.com/id/1305451864/photo/biryani.webp?b=1&s=170667a&w=0&k=20&c=Fp3oADBQnW0qSJ94qKDCf2W-_kTVd3vN_a7TnNnK4BQ=",
        title: "Biryani"
    },
    {
        url: "https://media.istockphoto.com/id/1483876742/photo/t-bone-beef-steak-cooked-to-perfection-over-a-flame-grill-and-topped-with-a-dollop-of-butter.webp?b=1&s=170667a&w=0&k=20&c=4XSZdY_IisL4q9tNjqQ7Wt1fNSnRWjwASsgmpQzyc7U=",
        title: "BBQ"
    },
    {
        url: "https://media.istockphoto.com/id/501047641/photo/chapli-kabab-1.webp?b=1&s=170667a&w=0&k=20&c=YgwyWn6gBO0m7uPa07-R-3M7HuP_8rd8OGEZEvkqwaY=",
        title: "Kabab"
    },
    {
        url: "https://media.istockphoto.com/id/1305451864/photo/biryani.webp?b=1&s=170667a&w=0&k=20&c=Fp3oADBQnW0qSJ94qKDCf2W-_kTVd3vN_a7TnNnK4BQ=",
        title: "Biryani"
    }
]

const Categories = () => {
    const elementRef = useRef(null);

    const [arrowDisable, setArrowDisable] = useState(true);




    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;

        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);

            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };

    return (
        <NavbarTemplate>
            <div className="w-screen bg-gray-200 shadow-sm h-screen">
                <h1 className="font-extrabold text-2xl mx-6 mt-2">Categories</h1>
                <div className="w-screen h-full flex justify-between 
                gap-2">
                    <div className="flex justify-around w-screen overflow-hidden gap-2 mt-10" ref={elementRef}>
                        <button className="" onClick={() => {
                            handleHorizantalScroll(elementRef.current, 25, 100, -10);
                        }} disabled={arrowDisable}>previous</button>

                        {slides.map((s, index) => {
                            return (
                                <div key={index} className="h-fit w-screen shadow-lg">
                                    <div className="w-52 h-52 bg-white rounded ">
                                        <div className="w-52 h-3/4">
                                            <img src={s.url} className="h-full rounded-t" />
                                        </div>
                                        <p>{s.title}</p>
                                    </div>
                                </div>
                            )
                        })}

                        <button onClick={() => {
                            handleHorizantalScroll(elementRef.current, 25, 100, 10);
                        }}
                        >next</button>
                    </div>
                </div>
            </div>
        </NavbarTemplate>
    )
}

export default Categories;



