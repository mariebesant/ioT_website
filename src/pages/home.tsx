
import './home.css'

function Home() {

    const now = new Date();
    const date = now.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // function updateDateTime() {


    //     const now = new Date();
    //     date = now.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    //     const time = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    //   }
      
    //   const apiUrl = 'http://192.168.178.231:8087'; // Simple API URL
    //   const objectID = 'fronius.0.site.P_PV';        // Dein Datenpunkt
  
    //   async function updateValue() {
    //     try {
    //       const res = await fetch(`${apiUrl}/get/${objectID}`);
    //       const data = await res.json();
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   }
    //     updateValue();
    //     setInterval(updateValue,10000);
  
    //   updateDateTime();
    //   setInterval(updateDateTime, 1000);

    return(
        <>
            <nav>
            <a href="#heiko-michaela">Heiko und Michaela</a>
            <a href="#paul-marie">Paul und Marie</a>
            <a href="garagenübersicht.html">Garten</a>
            </nav>
        
            <main>
            <div className="info-box">
                <h2>Datum</h2>
                <p id="date">{date}</p>
                <h2>Zeit</h2>
                <p id="time"></p>
            </div>
        
            <h1>Zuhause - Schalten und Walten</h1>
        
            <div className="status-panel">
                <h2>Systemstatus</h2>
                <p>Alle Module laufen stabil. Letzte Aktualisierung: <span id="timestamp"></span></p>
            </div>
                
                <div className="status-panel">
                <h2>Test API</h2>
                <p> hier schreib ich jetzt die aktuelle Watt der PV Anlage rein:</p>
                    <p><span id="wert">Lade...</span></p>
            </div>
                <div>
                    <img src="test%20garage%20icon%202.png"/>
                    
                
                </div>
            </main>
        </>
    )
}

export default Home

