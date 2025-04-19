import "./Technologies.css"
import { ReactIcon, NodeIcon, TypeScriptIcon, MongoDBIcon, ExpressIcon, FirebaseIcon, SQLIcon } from "../Icons/Icons";

interface Props {
    technologies: string[];
    position: string;
    borderRadius: string;
    noPadding?: boolean;
    sizeIcons?: string
}

const Technologies: React.FC<Props> = ({ technologies, position, borderRadius, noPadding, sizeIcons }) => {
    const getIcon = (tech: string) => {
        switch (tech.toLowerCase()) {
            case 'react':
                return <ReactIcon width={sizeIcons ? sizeIcons : "30"} height={sizeIcons ? sizeIcons : "30"} />;
            case 'node':
                return <NodeIcon width={sizeIcons ? sizeIcons : "30"} height={sizeIcons ? sizeIcons : "30"} />;
            case 'typescript':
                return <TypeScriptIcon width={sizeIcons ? sizeIcons : "30"} height={sizeIcons ? sizeIcons : "30"} />;
            case 'mongodb':
                return <MongoDBIcon width={sizeIcons ? sizeIcons : "30"} height={sizeIcons ? sizeIcons : "30"} />;
            case 'express':
                return <ExpressIcon width={sizeIcons ? sizeIcons : "30"} height={sizeIcons ? sizeIcons : "30"} />;
            case 'firebase':
                return <FirebaseIcon width={sizeIcons ? sizeIcons : "30"} height={sizeIcons ? sizeIcons : "30"} />
            case "mysql":
                return <SQLIcon width={sizeIcons ? sizeIcons : "30"} height={sizeIcons ? sizeIcons : "30"} />
            default:
                return null;
        }
    };

    return (
        <div
            className="technologies-container"
            style={{ justifyContent: position, borderRadius, padding: noPadding ? "0" : "" }}
        >
            {technologies.map((tech, index) => (
                <div key={index} className="technology-icon">
                    {getIcon(tech)}
                </div>
            ))}
        </div>
    );
}

export default Technologies;
