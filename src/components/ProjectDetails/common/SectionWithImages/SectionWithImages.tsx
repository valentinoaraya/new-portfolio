import "./SectionWithImages.css"

interface Props {
    title: string;
    description: string;
    images: string[];
    color: string;
}

const SectionWithImages: React.FC<Props> = ({ title, description, images, color }) => {
    return (
        <div className="sectionWithImages divWithMaxWidth">
            <div className="sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">{title}</h2>
                </div>
                <div className="descriptionAndImages">
                    <div className="descriptionSectionContainer">
                        {
                            description.split("\n").map((parraf, index) => {
                                return <p key={index} className="parrafDescription">{parraf}</p>
                            })
                        }
                    </div>
                    <div className="imagesSection">
                        {images.map((image, index) => {
                            return <p key={index}>{image}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionWithImages;
