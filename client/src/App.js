import './App.css';
import { useEffect, useRef , useState} from 'react';
import { uploadFile } from './services/api';
import logo from "./logo.jpg";

function App() {

  const [file,setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  // const logo = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  useEffect(() => {
    const getImage = async () => {
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        
        // console.log(response);
        if(response)
          setResult(response.path);
      }
    }
    getImage();
  },[file]);

  //using useRef hook to open file input on click of button
  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className="container">
        <img src={logo} alt="banner"/>
        <div className='wrapper'>
          <h1>ShareHub</h1>
          <p>Upload and share the download link.</p>

          <button onClick={onUploadClick}> Upload</button>
          <input type="file" 
            ref = {fileInputRef}
            style={{display:"none"}}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result}>
              {result}
          </a>
        </div>
    </div>
  );
}

export default App;
