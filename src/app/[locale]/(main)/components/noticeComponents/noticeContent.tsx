export default function NoticeContent(props: { p1:string, p2:string, p3:string }) {
    return(
        
        <section className="w-5/6 text-2xl font-fredoka font-slim text-justify p-4 mx-auto ">
            <p className="mb-4">
                {props.p1}
            </p>
            <p className="mb-4">
            {props.p2}
            </p>
            <p>
            {props.p3}
            </p>
        </section>
        
    )
}