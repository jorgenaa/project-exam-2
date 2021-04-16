const ContentHeading = ({content, data}) => {
    return(
        <section className="heading">
            <h3 className="heading--h3 heading--content">{content} {data}</h3>   
        </section>
    )   
}

export  default ContentHeading;