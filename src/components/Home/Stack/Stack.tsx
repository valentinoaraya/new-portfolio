import "./Stack.css"
import { ReactIcon, NodeIcon, TypeScriptIcon, MongoDBIcon, FirebaseIcon, GitIcon, ExpressIcon } from "../../../common/Icons/Icons";

const Stack = () => {
    return (
        <div className="stack">
            <h2 className="titleStack">Mi stack</h2>
            <div className="stackIcons">
                <ReactIcon
                    width={window.innerWidth >= 960 ? "100" : "70"}
                    height={window.innerWidth >= 960 ? "100" : "70"}
                />
                <NodeIcon
                    width={window.innerWidth >= 960 ? "100" : "70"}
                    height={window.innerWidth >= 960 ? "100" : "70"}
                />
                <ExpressIcon
                    width={window.innerWidth >= 960 ? "100" : "70"}
                    height={window.innerWidth >= 960 ? "100" : "70"}
                />
                <TypeScriptIcon
                    width={window.innerWidth >= 960 ? "100" : "70"}
                    height={window.innerWidth >= 960 ? "100" : "70"}
                />
                <MongoDBIcon
                    width={window.innerWidth >= 960 ? "100" : "70"}
                    height={window.innerWidth >= 960 ? "100" : "70"}
                />
                <FirebaseIcon
                    width={window.innerWidth >= 960 ? "100" : "70"}
                    height={window.innerWidth >= 960 ? "100" : "70"}
                />
                <GitIcon
                    width={window.innerWidth >= 960 ? "100" : "70"}
                    height={window.innerWidth >= 960 ? "100" : "70"}
                />
            </div>
        </div>
    );
}

export default Stack;
