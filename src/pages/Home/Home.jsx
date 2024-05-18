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
  };

  const loadGenres = async () => {
    const genreList = await fetchGenres();
    setGenres(genreList);
  };
  const handleGenreChange = (genreId) => {
    console.log(selectedGenres,genreId)

    setSelectedGenres(prevGenres =>
      prevGenres.includes(genreId)
        ? prevGenres.filter(id => id !== genreId)
        : [...prevGenres, genreId]
    );
  };

  const renderItem = ({ item }) => (
    <MovieEachCardComponent
      title={item?.title}
      image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
      genre={item.genre_ids.join(', ')}
      cast="N/A"
      director="N/A"
      description={item.overview}
      vote_average={item?.vote_average}
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
      const nextYear = year + 1;
      if (nextYear <= new Date().getFullYear()) {
        setYear(nextYear);
      }
    } else if (isCloseToTop(nativeEvent)) {
      const prevYear = year - 1;
      if (prevYear >= 1900) { // Assuming movies data starts from 1900
        setYear(prevYear);
      }
    }
  };

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;
  };

  const isCloseToTop = ({ contentOffset }) => {
    return contentOffset.y === 0;
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', columnGap: 8, marginBottom: 10 }}>
        <Chip
          style={{
            backgroundColor: '#d44040',
            height: 40,
            justifyContent: 'center'
          }}
          onPress={() => console.log('Pressed')}>
          <Text style={{ color: 'white' }}>All</Text>
        </Chip>
        <FlatList
          data={genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: 'row', columnGap: 8 }}
          renderItem={({ item }) =>
            <Chip
              style={{
                backgroundColor: '#d44040',
                height: 40,
                justifyContent: 'center'
              }}
              onPress={() => {
                handleGenreChange(item.id)
              }}>
              <Text style={{ color: 'white' }}>{item.name}</Text>
            </Chip>
          }
          keyExtractor={item => item.name.toString()}
        />
      </View>
      {/* {loading && <ActivityIndicator size="large" color="#0000ff" />} */}
      <FlatList
        data={Object.keys(moviesByYear).map(y => ({ year: y, movies: moviesByYear[y] }))}
        renderItem={({ item }) => renderYearSection(item)}
        keyExtractor={item => item.year.toString()}
        onScroll={handleScroll}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
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