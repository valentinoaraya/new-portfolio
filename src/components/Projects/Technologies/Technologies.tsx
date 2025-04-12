import "./Technologies.css"
import { ReactIcon, NodeIcon, TypeScriptIcon, MongoDBIcon, ExpressIcon, FirebaseIcon, SQLIcon } from "../../../common/Icons/Icons";

interface Props {
    technologies: string[];
    position: string;
    borderRadius: string;
}

const Technologies: React.FC<Props> = ({ technologies, position, borderRadius }) => {
    const getIcon = (tech: string) => {
        switch (tech.toLowerCase()) {
            case 'react':
                return <ReactIcon width="30" height="30" />;
            case 'node':
                return <NodeIcon width="30" height="30" />;
            case 'typescript':
                return <TypeScriptIcon width="30" height="30" />;
            case 'mongodb':
                return <MongoDBIcon width="30" height="30" />;
            case 'express':
                return <ExpressIcon width="30" height="30" />;
            case 'firebase':
                return <FirebaseIcon width="30" height="30" />
            case "mysql":
                return <SQLIcon width="30" height="30" />
            default:
                return null;
        }
    };

    return (
        <div
            className="technologies-container"
            style={{ justifyContent: position, borderRadius }}
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
