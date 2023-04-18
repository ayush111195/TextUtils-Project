
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
<Navbar title="TextUtils" aboutText="About TextUtils" />
{/*<Navbar/>*/}
<div className='container my-3'>

<TextForm heading="Enter The Text Here " />

</div>
    </>
  );
}

export default App;
