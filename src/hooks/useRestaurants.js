import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


export  default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    const searchApi = async (searchTerm) => {
        //https://fakestoreapi.com/products
        console.log('Hi there!');
        try{
        const response = await fetch("https://fakestoreapi.com/products");
        //console.log(response);
        {
            params: {
            limit: 50
            term: searchTerm

        }
    };
        const jsonData=await response.json();
        //console.log(jsonData)
        setResults(jsonData);
        setResults(response.data.businesses);
    } catch (err) {
        setErrorMessage(response.data.businesses);
    }
   };


    //Call searchApi when component
    // is first rendered. B BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta');

    }, []);
    

    return[searchApi, results, errorMessage];

};