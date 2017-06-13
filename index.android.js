import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class nativebase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            speed: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    speed: position.coords.speed,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 1 },
        );
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Nought</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text></Text>
                        <Text></Text>
                        <Text>Speed M/S: {Math.round(this.state.speed)}</Text>
                        <Text>Speed KPH: {Math.round(this.state.speed * 3.6)}</Text>
                        <Text>Speed MPH: {Math.round(this.state.speed * 2.2369)}</Text>
                        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                    </View>          
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text style={{ color: "#ffffff" }}>Alpha 0.0.1</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}


AppRegistry.registerComponent('nativebase', () => nativebase);