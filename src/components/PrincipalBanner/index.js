import React from 'react'
import { View, Container, Content, Text, Title } from './style'
import { Image } from 'react-native'
const PrincipalBanner = props =>(
    <View>
        <Content>
            <Title>{props.title}</Title>
            <Text>{props.numberPet}</Text>
            <Text>{props.description}</Text>
        </Content>
        <Container>
            <Image 
                style={{ 
                    width: 50, 
                    height: 50, 
                    justifyContent: 'center'
                }} 
                source={{uri: 'https://img.pngio.com/mario-new-super-mario-bros-2png-mario-png-1812_2261.png'}}
            />
        </Container>
    </View>
);

export default PrincipalBanner