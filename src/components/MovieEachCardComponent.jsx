import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { getColor } from '../utils/utils'

const MovieEachCardComponent = ({ title, image, thumbnail, vote_average, genre, popularity, release_date, description }) => {
    const navigation = useNavigation()

    return (
        <Pressable style={styles.item} onPress={() => {
            navigation.navigate('MovieDetails', {
                title,
                image,
                thumbnail,
                vote_average,
                genre,
                description,
                popularity,
                release_date
            })
        }}>
            <Image source={{
                uri: image
            }}
                style={{
                    height: 250,
                    width: '100%',
                    borderRadius: 10
                }}
                resizeMode='cover'
            />
            <View style={{
                padding: 5
            }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.rating}>Rating: <Text style={[styles.rating, { color: getColor(parseFloat(vote_average)) }]}>{parseFloat(vote_average).toFixed(2)}</Text></Text>
            </View>
        </Pressable>
    )
}

export default MovieEachCardComponent

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 5,
        backgroundColor: '#353535',
        borderRadius: 10
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    rating: {
        color: '#fff',
        fontSize: 20
    }
})