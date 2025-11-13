import { Outlet } from "react-router-dom";
import { NavigationContextProvider } from "../contexts/NavigationContext";
import { MAX_DESKTOP_WIDTH } from "../lib/definitions";

const WebLayout: React.FC = () => {

    return (
        <NavigationContextProvider>

            <main
                style={{width: "100%", maxWidth: `${MAX_DESKTOP_WIDTH}px`, margin: "auto" }}
            >
                <div>
                    <Outlet />
                </div>
            </main>
        </NavigationContextProvider>
    )
}


export default WebLayout