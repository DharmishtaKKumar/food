import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';
import {searchData} from '../data'

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useRestaurants();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      
        
        <ResultsList 
        results={searchData} 
        title="Bit Pricier" />
      
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;