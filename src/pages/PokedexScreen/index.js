import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import { ItemFlatList, ListSeparator, ListFooter } from '../../components';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=5';

const PokedexScreen = ({ navigation }) => {
  const [pokedex, setPokedex] = useState([]);
  const [nextUrl, setNextUrl] = useState(URL);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = ({ item }) => <ItemFlatList pokemon={item} />;

  const handleRefresh = () => {
    setNextUrl(URL);
    setPokedex([]);
    loadInitialPokedex();
  };

  const handleLoadMore = () => {
    loadInitialPokedex();
  };

  const loadInitialPokedex = async () => {
    const url = nextUrl;
    setLoading(true);
    await axios
      .get(url)
      .then((res) => {
        const pokemons = res.data.results;
        setNextUrl(res.data.next);
        setPokedex([...pokedex, ...pokemons]);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    loadInitialPokedex();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={pokedex}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <ListSeparator />}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => <ListFooter loading />}
      />
    </SafeAreaView>
  );
};

export { PokedexScreen };
