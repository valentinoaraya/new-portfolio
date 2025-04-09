import "./Projects.css"

const Projects = () => {
    return (
        <div className="projects">
            <div className="projectsContent">
                <h3 className="titleProjects">Mi trabajo</h3>
                <div className="bentoProjects">
                    <div className="box bookify-box" style={{ gridArea: "box-1" }}>
                        <h2 className="titleProject">Bookify</h2>
                    </div>
                    <div className="box bookify-box" style={{ gridArea: "box-2" }}></div>
                    <div className="box bookify-box" style={{ gridArea: "box-3" }}></div>
                    <div className="box ventatrack-box" style={{ gridArea: "box-4" }}></div>
                    <div className="box ventatrack-box" style={{ gridArea: "box-5" }}>
                        <h2 className="titleProject">VentaTrack</h2>
                    </div>
                    <div className="box turnero-box" style={{ gridArea: "box-6" }}>
                        <h2 className="titleProject">Turnero PAMI</h2>
                    </div>
                    <div className="box turnero-box" style={{ gridArea: "box-7" }}></div>
                    <div className="box sportymaxx-box" style={{ gridArea: "box-8" }}>
                        <h2 className="titleProject">SportyMaxx</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
