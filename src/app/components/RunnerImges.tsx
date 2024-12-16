import Image from "next/image"
import img1 from "../media/runners/Duranguesa_91.jpg"
import img2 from "../media/runners/Duranguesa_98.jpg"
import img3 from "../media/runners/Duranguesa_111.jpg"

export default function RunnerImages() {
    return(
        <>
        <section className="section mx-auto">
            <Image src={img1} alt="Runner" className="image rounded-l-lg"/>
            <Image src={img3} alt="Runner" className="image" />
            <Image src={img2} alt="Runner" className="image" />
            <Image src={img1} alt="Runner" className="image" />
            <Image src={img2} alt="Runner" className="image" />
            <Image src={img3} alt="Runner" className="image" />
            <Image src={img1} alt="Runner" className="image" />
            <Image src={img2} alt="Runner" className="image" />
            <Image src={img3} alt="Runner" className="image" />
            <Image src={img1} alt="Runner" className="image" />
            <Image src={img1} alt="Runner" className="image" />
            <Image src={img1} alt="Runner" className="image rounded-r-lg" />
        </section>
        </>
    )
}