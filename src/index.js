import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/*
TO-DO:
Nasa Image API
Loading State (ternary: isLoading ? <Loading /> : <all of our posts>)
Shareable links for each image
*/

// async function getNasaContent(){
//     let API_KEY = "";
//     let response = await fetch(`https://images-api.nasa.gov?api_key=${API_KEY}&media_type="image"`);
//     console.log(response);
//     let data = await response.json();
//     console.log("data: " + data);
//     console.log( {
//         title: data.collection,
//         date: data.date,
//         image: data.url,
//         description: data.explanation
//     });
// }

//getNasaContent();
ReactDOM.render(<App />, document.getElementById("root"));
