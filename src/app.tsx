import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import CardContext from './containers/CardContext'; move away from essentially an extra component
import CardList from './components/CardList';

interface ListShape {
    id: number,
    components: number[],
}

const App = () => {
    const { id } = useParams<{ id: string }>();
     // this is the current page data which we map through in the render function and assign to Card components
     const [cardData, setCardData] = useState({}); //ie: props.processName
     const [listApiData, setListApiData] = useState({
        id: 0,
        components: []
     });
     const [componentApiData, setComponentApiData] = useState({
        id: 0,
        type: '',
        options: '',
     });
     const [variableApiData, setVariableApiData] = useState({
        name: '',
        type: '',
        initialValue: '',
     });
     const [currentWeatherLocation, handleWeatherUpdate] = useState('New York');

     useEffect(() => {
        console.log("useEffect" + id);
        getCardsDataFromPage()
      }, [id]);
     //renderchildren according to the page
     // handle the weather location update
     // context: cardData: {
     //     type: (weather | city | boolOpen | boolClose | advert)
     // }
 
     // /page/:id
     // /integrations/weather?lat=<lat>&lon=<lon>
     
     function getCardsDataFromPage() {
         fetch(`http://localhost:3030/page/${id}`, {
            method: 'GET'
         })
         .then(response => {
             if(response.ok){ 
                 return response.json()
             }
             console.error("response not ok")
         })  //try/catch
         .then(data => {
             let listApiData = data.data.lists;
             let componentApiData= data.data.components;
             let variableApiData= data.data.variables ? data.variables : {};
             console.log("data: " + JSON.stringify(data))
             console.log("listApidata: " + JSON.stringify(listApiData))
             console.log("componentApiData: " + JSON.stringify(componentApiData))
             console.log("variableApiData: " + JSON.stringify(variableApiData))
             setListApiData(listApiData)
             setComponentApiData(componentApiData)
             setVariableApiData(variableApiData)
            //  setCardData(data)
            })
         .catch(err => console.log("error getting data " + err));
     }
   
  
    return (
        <>
         <CardList pageId={id} listData={listApiData} componentData={componentApiData} variableData={variableApiData}></CardList>
            <div>Render {id}</div>
        </>
    );
};

export default App;
