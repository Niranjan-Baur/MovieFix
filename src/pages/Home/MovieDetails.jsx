import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { dateFormatter, getColor } from '../../utils/utils'

const MovieDetails = ({ route }) => {
    const {
        title,
        thumbnail,
        vote_average,
        genre,
        description,
        popularity,
        release_date
    } = route?.params
    console.log(thumbnail)
    return (
        <ScrollView style={styles.container}>
            <View >
                <Image source={{
                    uri: thumbnail
                }}
                    style={{
                        height: 250,
                        width: '100%'
                    }}
                    resizeMode='contain'
                />
                <View style={{ margin: 10 }}>
                    <Text style={styles.title}>{title}</Text>

                    <Text style={styles.relDate}>Release Date: {dateFormatter(release_date)} </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.popularity}>Popularity:{parseFloat(popularity).toFixed(0)}</Text>
                        <Text style={styles.rating}>Rating: <Text style={[styles.rating, { color: getColor(parseFloat(vote_average)) }]}>{parseFloat(vote_average).toFixed(2)}</Text></Text>
                    </View>

                    <Text style={[styles.desc, { fontSize: 20, fontWeight: 'bold' }]}>Overview:</Text>
                    <Text style={[styles.desc, { marginTop: 0 }]}>{description}</Text>
                </View>
            </View>
        </ScrollView>

    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202124',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    rating: {
        marginTop: 15,
        color: 'white',
        fontSize: 18
    },
    relDate: {
        marginTop: 15,
        color: 'white',
        fontSize: 18
    },
    popularity: {
        marginTop: 15,
        color: 'white',
        fontSize: 18
    },
    desc: {
        marginTop: 15,
        color: 'white',
        fontSize: 18

    }
})