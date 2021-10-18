import { kill } from 'process';
import React, { useState} from 'react';
// import Cardtypes here
import ImageEl from './ImageEl';
import {ConditionEl} from './ConditionEl';
interface AppProps {
    pageId: string;
    listData: object;
    componentData: object;
    variableData: object;
}

const CardList = ({pageId, listData, componentData, variableData}:AppProps) => {
    const [imgData, setImgData] = useState({});
    // {
    //     lists: Array<{
    //         id, // ID used to look up the list
    //         components, // Ordered list of component ids
    //     }>;
    //     components: Array<{
    //         id, // ID used to look up component
    //         type, // The type of the component (ex: `image`, `weather`)
    //         options, // An object with options specific to the component type
    //     }>;
    //     variables?: Array<{
    //         name, // Variable name
    //         type, // Variable type (ex: `string`)
    //         initialValue, // Value the variable starts at
    //     }> // optional not used on page-one. Should be page specific.
    // }

    const handleSwitchCardType = (type:string, index:number) => {
        const CardTypes =()=>({
            "weather":  `{<WeatherEl index={index}></WeatherEl>}`,
            "button":  `{<ButtonEl index={index}></ButtonEl>}`,
            "condition": `{<ConditionEl index={index}></ConditionEl>}`,
            "image": `{<ImageEl index={index}></ImageEl>}`
        })

        // .hasProtoype
        // if type === i.hasPropertyOf(return k.value)
            switch(type) {
                case 'weather':
                    //get the waether data and show..call the handleWeatherUpdate() in parent and take the props
                    // return the component<weather> 
                    //F=F(d)...I=I(d) the interface is a function of the data
                    //the Card component only takes in the data necessary to render and returns the Card Visual Component
                    //To add more you'd just add a new case here...or even create a queue or Map...or
                   
                    // return <WeatherEl index={index}></WeatherEl>
                    console.log('weather are $0.59 a pound.');
                    break;
                case 'button':
                    //take the city from the prop 'button'
                    //return the component<city>
                    
                    // return <ButtonEl index={index}></ButtonEl>
                    console.log('city are $0.59 a pound.');
                    break;
                case 'condition': //condition
                    //take the prop toggleDirective: show/hide
                    // return the component<alphachannel>

                    // return <ConditionEl index={index}></ConditionEl>
                    console.log('alphachannel are $0.59 a pound.');
                    break; 
                case 'image': //image
                    // take the img as a picture
                    // return the component<advert>
                    // setImgData()
                    // return <ImageEl index={index}></ImageEl>
                    console.log('advert are $0.59 a pound.');
                    break; 
                default:
     
            }
       } 
  
       const renderCard = (relevantState: string) => {
            console.log("in renderCard " + relevantState)
            // data.map((i,k)=>handleSwitchCardType(i.type, k))
            // if is page 3:
            // {pageId==3&&variableData.map(variables => mapTolayout(variables))}

            // run process of listdata or components data
            // listsData.map(lists => mapTolayout(lists)
            // componentsData.map(components => mapTolayout(components)

        }

        // renderCard().then( () => {/*run process of listdata...save it in the app*/} )

    
        
    return (
       <section className="card-wrapper">Render the proper conditional renderCard
            {/* {renderCard} */}
            {/* {imgDate && <ImageEl attr={}></ImageEl>} */}
       </section>

       
    );
};

export default CardList;
