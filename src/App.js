import './App.css';

import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent someText={"Hello World!"} />
      <MyNewComponent someText={"Goodbye World!"} />
    </div>
  );
}

export default App;
