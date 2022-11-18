import ReactDOM from "react-dom";
import App from "./components/App";

//Aviso: eu não sei por que, mas há um warning para usar "className" ao invés de "class" no React.
//Sei que ainda vai ser ensinado, mas como, aparentemente, o correto é usar "className", eu decidi usar.

const root = document.querySelector(".root");
ReactDOM.render(<App />, root);