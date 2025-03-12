export default function NoticeContent(props: { p1:string, p2:string, p3:string, p4:string | undefined, p5:string | undefined }) {
    return(
        
        <section className="w-5/6 text-2xl font-fredoka font-slim text-justify p-4 mx-auto ">
            <p className="mb-4">
                {props.p1}
            </p>
            <p className="mb-4">
            {props.p2}
            </p>
            <p className="mb-4">
            {props.p3}
            </p>
            <p className="mb-4">
            {props.p4}
            </p>
            <p>
            {props.p5}
            </p>
        </section>
        
    )
}