import "./App.css";
import {Provider} from "react-redux";
import Body from "./components/Body";
import Header from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
    <div >
       <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
