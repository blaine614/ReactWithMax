export const CoreConcept = ({image, title, description}) => {
    return (
        <li key={image.toString() + title.toString() + description.toString()}>
            <img src={image} />
            <h1>{title}</h1>
            <p>{description}</p>
        </li>
    );
};