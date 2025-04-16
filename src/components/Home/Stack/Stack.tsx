import "./Stack.css"
import { ReactIcon, NodeIcon, TypeScriptIcon, MongoDBIcon, FirebaseIcon, GitIcon, ExpressIcon } from "../../../common/Icons/Icons";

const Stack = () => {
    return (
        <div className="stack">
            <h2 className="titleStack">Mi stack</h2>
            <div className="stackIcons">
                <ReactIcon
                    width="100"
                    height="100"
                />
                <NodeIcon
                    width="100"
                    height="100"
                />
                <ExpressIcon
                    width="100"
                    height="100"
                />
                <TypeScriptIcon
                    width="100"
                    height="100"
                />
                <MongoDBIcon
                    width="100"
                    height="100"
                />
                <FirebaseIcon
                    width="100"
                    height="100"
                />
                <GitIcon
                    width="100"
                    height="100"
                />
            </div>
        </div>
    );
}

export default Stack;
