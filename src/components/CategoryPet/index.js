import React from 'react'
import { Container, Circle } from './style'
import { View, Text } from 'react-native'

const CategoryPet = () => (
    <Container>
        <View style={{ marginLeft: "auto", marginRight: "auto"}}>
            <Circle />
            <Text style={{ textAlign: "center"}}>Dogs</Text>
        </View>
        <View style={{ marginLeft: "auto", marginRight: "auto"}}>
            <Circle />
            <Text style={{ textAlign: "center"}}>Cats</Text>
        </View>
        <View style={{ marginLeft: "auto", marginRight: "auto"}}>
            <Circle />
            <Text style={{ textAlign: "center"}}>Birds</Text>
        </View>
        <View style={{ marginLeft: "auto", marginRight: "auto"}}>
            <Circle />
            <Text style={{ textAlign: "center"}}>Other</Text>
        </View>
    </Container>
);

export default CategoryPet