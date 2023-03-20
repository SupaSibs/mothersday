import Popup from "./components/popup.lite.tsx";
import {useState} from "@builder.io/qwik"
export default function Main(props: any) {
const state = useState({
    popupShown: false,
});
 
setTimeout(() => {state.popupShown = true}, 2500)
    return (
        <main>
        <p>
Hello World
        </p>
    {state.popupShown && <Popup/>}
        </main>
    )
    }