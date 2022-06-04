export default function ProductDescription({ description }) {
    return (
        <section className="description">
            <header>
                <h4>Description</h4>
            </header>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: description.html }}></p>
        </section>
    )
}