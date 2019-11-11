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
                    width: 100, 
                    height: 100, 
                    justifyContent: 'center'
                }} 
                source={require('../../resources/img/cat.png')}
            />
        </Container>
    </View>
);

export default PrincipalBanner