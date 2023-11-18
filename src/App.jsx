import "./App.css";
import React from "react";

function Arama() {
  const [aramametni, setaramametni] = React.useState();

  function handleChange(event) {
    setaramametni(event.target.value);
    console.log("1");
  }

  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={handleChange} />
      <p>
        <strong>{aramametni} aranıyor...</strong>
      </p>
    </div>
  );
}
function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}


function App() {
  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React");
  const yaziListesi = [
    {
      baslik: "Veri Madenciliği",
      url: "www.sdu.edu.tr",
      yazar: "Ecir hoca",
      yorum_sayisi: 3,
      puan: 3,
      id: 0,
    },
    {
      baslik: "dfdsfdsf",
      url: "wwww.google.com.tr",
      yazar: "dfdsfdsf",
      yorum_sayisi: 2,
      puan: 3,
      id: 1,
    },
    {
      baslik: "gthgfdhgfh",
      url: "www.example.com/js",
      yazar: "ererfdgfs",
      yorum_sayisi: 8,
      puan: 10,
      id: 2,
    },
    {
      baslik: "tyuthjg",
      url: "www.example.com/frontend",
      yazar: "sadvhvuydysf",
      yorum_sayisi: 5,
      puan: 8,
      id: 3,
    },
  ];
    
    const arananYazilar=yaziListesi.filter(
      function (yazi){
        return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
        yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
         ;
      }
    );
  
    function handleSearch(event){
      setAramaMetni(event.target.value);
    }
    React.useEffect(()=>{
      localStorage.setItem("aranan",aramaMetni)
    },[aramaMetni])
  
    return (
      <>
        <h1>Yazılar</h1>
        <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
        <strong>{aramaMetni} aranıyor...</strong>
        <hr />
        <Liste yazilar={arananYazilar}/>
      </>
    );
  
}

export default App;
