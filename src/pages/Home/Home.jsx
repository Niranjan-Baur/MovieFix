import { View, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Chip, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/slices/todoSlice';
import { fetchGenres, fetchMovies, getAllMovieData } from '../../api/api';
import { allMovies } from '../../redux/slices/movieSlice';
import MovieEachCardComponent from '../../components/MovieEachCardComponent';

const Home = ({ navigation }) => {

  const [moviesByYear, setMoviesByYear] = useState({});
  const [year, setYear] = useState(2012);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [loadingDirection, setLoadingDirection] = useState(null); // "up" or "down"
  const [selected, setSelected] = useState('All')

  useEffect(() => {
    loadMovies(year);
    loadGenres();
  }, [year, selectedGenres]);

  const loadMovies = async (year) => {
    if (moviesByYear[year]) return; // Skip loading if movies for the year are already loaded
    setLoading(true);
    const newMovies = await fetchMovies(year, selectedGenres);
    setMoviesByYear(prevMoviesByYear => ({
      ...prevMoviesByYear,
      [year]: newMovies
    }));
    setLoading(false);
    setLoadingDirection(null);
  };

  const loadGenres = async () => {
    const genreList = await fetchGenres();
    setGenres(genreList);
  };
  
  const handleGenreChange = (genreId) => {
    console.log(selectedGenres, genreId)

    setSelectedGenres(genreId)
    setMoviesByYear({});
    loadMovies(year); // Reload movies based on the new genre filter
  };

  const renderItem = ({ item }) => (
    <MovieEachCardComponent
      title={item?.title}
      image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
      genre={item.genre_ids.join(', ')}
      release_date={item?.release_date}
      popularity={item?.popularity}
      description={item.overview}
      vote_average={item?.vote_average}
      thumbnail={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
    />
  );

  const renderYearSection = ({ year, movies }) => (
    <View key={year}>
      <Text style={styles.yearText}>{year}</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );

  const handleScroll = ({ nativeEvent }) => {
    if (isCloseToBottom(nativeEvent)) {
      console.log("down")
      const nextYear = year + 1;
      if (nextYear <= new Date().getFullYear()) {
        setYear(nextYear);
        setLoadingDirection('down');
      }
    } else if (isCloseToTop(nativeEvent)) {
      console.log("top")
      const prevYear = year - 1;
      if (prevYear >= 1900) { // Assuming movies data starts from 1900
        setYear(prevYear);
        setLoadingDirection('up');
      }
    }
  };

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 500;
  };

  const isCloseToTop = ({ contentOffset }) => {
    return contentOffset.y === 0;
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', columnGap: 8, marginBottom: 10 }}>
        <FlatList
          data={[{ id: 'all', name: 'All' }, ...genres]}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: 'row', columnGap: 8 }}
          renderItem={({ item }) =>
            <Chip
              style={{
                backgroundColor: item.name === selected ? '#d44040' : '#353535',

                height: 40,
                justifyContent: 'center'
              }}
              onPress={() => {
                if (item?.name === 'All') {
                  setSelected('All')
                  handleGenreChange(null)
                } else {
                  handleGenreChange(item.id)
                  setSelected(item.name)
                }
              }}>
              <Text style={{ color: 'white' }}>{item.name}</Text>
            </Chip>
          }
          keyExtractor={item => item.name.toString()}
        />
      </View>

      {
        loading && loadingDirection === null &&
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202124' }}>
          <ActivityIndicator size="small" color="#d44040" />
        </View>
      }

      {loading && loadingDirection === 'up' && <ActivityIndicator size="small" color="#d44040" />}
      <FlatList
        data={Object.keys(moviesByYear).map(y => ({ year: y, movies: moviesByYear[y] }))}
        renderItem={({ item }) => renderYearSection(item)}
        keyExtractor={item => item.year.toString()}
        onScroll={handleScroll}
        ListFooterComponent={
          loading && loadingDirection === 'down' ? (
            <ActivityIndicator size="small" color="#d44040" />
          ) : null
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#202124',
  },
  loader: {
    marginVertical: 20,
    alignItems: 'center',
  },
  yearText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white'
  },
})