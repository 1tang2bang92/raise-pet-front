import { useState, useEffect, useRef } from 'react';
import './App.css';
import * as mobilenet from '@tensorflow-models/mobilenet'; // mobilenet 모듈을 import 해줍니다.

function App() {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [model, setModel] = useState(null);
  const [results, setResults] = useState([]);
  const imageRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const detectImage = async () => {
    if (model && imageRef.current) {
      const predictions = await model.classify(imageRef.current);
      setResults(predictions);
      console.log('results', predictions);
    }
  };

  if (isModelLoading) {
    return <h1 style={{ textAlign: "center" }}>로딩중</h1>;
  }

  return (
    <>
      <h1>GPT서비스 기반 새로운 시작을 기다리는 동물 추천 플랫폼</h1>
      <input
        type='file'
        accept='image/*'
        onChange={uploadImage}
      />
      <div>
        {imageURL && (
          <div>
            <img
              src={imageURL}
              ref={imageRef}
              alt="Uploaded"
              width="300px"
              height="300px"
            />
            <button onClick={detectImage}>분류</button>
          </div>
        )}
      </div>
      {results.length > 0 && (
        results.map((result, index) => (
          <p key={index}>
            {result.className} <br />
            {Math.floor(result.probability * 100)}%
          </p>
        ))
      )}
    </>
  );
}

export default App;
