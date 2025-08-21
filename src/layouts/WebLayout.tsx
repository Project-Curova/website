import { Outlet } from "react-router-dom";
import { NavigationContextProvider } from "../contexts/NavigationContext";

const WebLayout: React.FC = () => {

    return (
        <NavigationContextProvider>

            <main
                // style={{width: `${MAX_DESKTOP_WIDTH}px`, margin: "auto"}}
            >
                <div>
                    <Outlet />
                </div>
            </main>
        </NavigationContextProvider>
    )
}


export default WebLayout