import { useState, useEffect, useRef} from 'react'

import './App.css'

function App() {
  
  const [isModelLoading, setIsMoedlLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [model, setModel] = useState(null);
  const [results, setResults] = useState ([]);
  const imageRef = useRef();

  const loadModel = async () => {
  setIsModelLoading(true);
  try {
    const model = await mobilenet.load();
    setModel(model);
    setIsModelLoading(false);
  } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
};

useEffect(() => {
  loadModel();
}, []);

if (isModelLoading) {
  return <h1 style={{textAlign: "center"}}>로딩중</h1>;
}


 const uploadImage=(e) => {
  const {files} = e.target;
  if (files.length >0) {
    const url = URL.createObjectURL(files[0]);
    console.log("files", files)
    console.log("url", url)
    setImageURL (url);
  } else {
    setImageURL (null);
  }

 }  

  const hdetectImage= async ()=>{

    const results = await model.classify(imageRef.current);
    setResult (results);
    console.log ('results',resulrs)
  }
  return (
    <>
     <h1>GPT서비스 기반 유기동물 추천 플랫폼</h1>
     <input
      type='file'
      accept='image/*'
      onChange={uploadImage}></input>


      <div>
       {imageURL &&
       <img
       src = {imageURL}
       ref = {imageRef}
       width = "300px"
       height = "300px"/>}

      </div>
      {imageURL &&
      <button
      onClick={hdetectImage}>정보찾기</button>  
}  

{results.length > 0 &&
        results.map(
          (result, index) => (
            <p key={index}>
              {result.className} <br />
              {Math.floor(100 * result.probability)} %
            </p>
          )
        )
      }
    </>
  )
}

export default App
