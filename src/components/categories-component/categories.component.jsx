import NavbarTemplate from "../sidebar-template/sidebar-template.component";
import Carousel from "../carousel-component/Carousel.camponent";

const slides = [
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
]

const Categories = () => {
    return (
        <NavbarTemplate>
            <div className="w-screen bg-gray-200 shadow-sm h-screen">

                <Carousel>
                    {slides.map((s) => (
                        <img src={s} />
                    ))}
                </Carousel>
            </div>
        </NavbarTemplate>
    )
}

export default Categories;