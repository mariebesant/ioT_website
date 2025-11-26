
import InfoBox from '../components/InfoBox'
import './home.css'
import garageClosed from '../assets/garage/garage_geschlossen.png'
import garageLeftOpen from '../assets/garage/garage_offen_links.png'
import garageRightOpen from '../assets/garage/garage_offen_rechts.png'
import garageOpen from '../assets/garage/garage_offen_zwei.png'


function Home() {
    

    return(
        <>
            <InfoBox image={garageClosed} description='k' title='c'></InfoBox>
        </>
    )
}

export default Home