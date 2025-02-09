import Home from "./src/screens/Home";
import { StatusBar } from "react-native";

function App() {
    return ( 
        <>
            <StatusBar 
                barStyle="light-content" 
            />
            <Home/>
        </>
    );
}

export default App;