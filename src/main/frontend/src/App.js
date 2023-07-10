import {useEffect} from "react";
import {useState} from "react";

function App() {
  const [test, setTest] = useState("");


  useEffect(() => {
    fetch('/api/member/sign')
    .then((res) => res.json())
    .then((data) => setTest(data));
  },[]);
  
  return (
    <div className="App">
      {test}
    </div>
  );
}

export default App;
