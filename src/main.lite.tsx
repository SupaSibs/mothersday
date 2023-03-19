import Popup from "./components/popup.lite.tsx";
import {useState} from "@builder.io/qwik"
export default function Main(props: {}) {
const state = useState({
    popupShown: false,
})
const showPopup = () => state.popupShown = true;
setTimeout(() => showPopup(), 2500)
    return (
        <main>
        <p>
Hello World
        </p>
    {state.popupShown && <Popup/>}
        </main>
    )
    }