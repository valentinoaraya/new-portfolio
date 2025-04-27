import "./NavigationMenu.css"
import { useState } from "react";

interface Props {
    color: string
    menu1: {
        title: string;
        element: React.ReactNode
    }
    menu2: {
        title: string;
        element: React.ReactNode
    }
}

const NavigationMenu: React.FC<Props> = ({ menu1, menu2, color }) => {

    const [activeComponent, setActiveComponent] = useState<'menu1' | 'menu2'>('menu1');

    return (
        <>
            <div
                className="divWithMaxWidth navigation-menu"
                style={{ "--nav-color": color } as React.CSSProperties}
            >
                <button

                    className={`nav-button ${activeComponent === 'menu1' ? 'active' : ''}`}
                    onClick={() => setActiveComponent('menu1')}
                >
                    {menu1.title}
                </button>
                <button
                    className={`nav-button ${activeComponent === 'menu2' ? 'active' : ''}`}
                    onClick={() => setActiveComponent('menu2')}
                >
                    {menu2.title}
                </button>
            </div>
            {
                activeComponent === 'menu1' ? menu1.element : menu2.element
            }
        </>
    );
}

export default NavigationMenu;
