import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { environment } from '../environments/environment'

const MovieEachCardComponent = ({ title, image, vote_average, genre, cast, director, description }) => {
    return (
        <View style={styles.item}>
            <Image source={{
                uri: image
            }}
                style={{
                    height: 250,
                    width: '100%'
                }}
                resizeMode='cover'
            />
            <View style={{
                padding: 5
            }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.rating}>Rating: {parseFloat(vote_average).toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default MovieEachCardComponent

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 5,
        backgroundColor: '#353535',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight:'bold'
    },
    rating: {
        color: '#fff',
        fontSize: 20
    }
})