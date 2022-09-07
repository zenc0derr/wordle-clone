import { useState } from 'react';
import { useEffect } from 'react';
import Word from './word'
function App() {

  let currentWord = 0;
  
  const [word, setWord] = useState([[],[],[],[],[],[]])


  const logging = (e) =>{

    let temp = [...word]
    
    if(currentWord<=4 && word[currentWord].length === 5){
    
      if(e.key==='Enter'){
        currentWord++;
      }
      else if(e.keyCode ===8){
        temp[currentWord].pop()
        setWord(temp)
      }
      else{
        return;
      }
      
    }
    
    

    if(e.keyCode>=65 && e.keyCode<=90){
      temp[currentWord].push(e.key)
      setWord(temp)
    }

    if(e.keyCode===8){
      temp[currentWord].pop()
      setWord(temp)
    }

    
  }

  useEffect(()=>{
    window.addEventListener('keydown',logging)
    if(currentWord === 6){
      return ()=>{
        window.removeEventListener('keydown',logging);
      }
    }
  },[])
  
  return (
    <div>
      <Word letters={word[0]}/>
      <Word letters={word[1]}/>
      <Word letters={word[2]}/>
      <Word letters={word[3]}/>
      <Word letters={word[4]}/>
      <Word letters={word[5]}/>
    </div>
  );
}

export default App;
