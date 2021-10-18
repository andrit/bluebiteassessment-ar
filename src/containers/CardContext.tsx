import React, { useState } from 'react';

//Initial impulse...create a container that feeds a component cycler...4 UI-Base components
import Card from '../components/CardList';

interface AppProps {
    currentPage: string;
}
 // CardStack component that determines the page and renders the correct Card layout
       
const CardContext = ({currentPage}: AppProps) => {
    // this is the current page data which we map through in the render function and assign to Card components
    const [cardData, setCardData] = useState({}); //ie: props.processName
    const [currentWeatherLocation, handleWeatherUpdate] = useState('New York');
    //renderchildren according to the page
    // handle the weather location update
    // context: cardData: {
    //     type: (weather | city | boolOpen | boolClose | advert)
    // }

    // /page/:id
    // /integrations/weather?lat=<lat>&lon=<lon>
    const getCardsDataFromPage = () => {
        fetch(`/page/${currentPage}`)
        .then(response => response.json())  //try/catch
        .then(data => setCardData(data))
        .then(data => console.log(data));
    }

    // we pass this down in props and if the card is a weather card, it is added as a onClick event
 
    return (
        <>
            <div>Render the cards </div>
            {/* <Card carddata={cardData}></Card>
            <Card></Card> */}
        </>
    );
};

export default CardContext;