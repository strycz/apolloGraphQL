import React from 'react';
import { Text, FlatList, Pressable, StyleSheet, View } from 'react-native';
import HomeScreen from './HomeScreen';
import Todo from '../components/Todo';
import TodoChildren from '../components/TodoChildren';


export type Stuff = {
    id: number,
    b: number,
    c: number
}

const items: Stuff[] = [{
    id: 1,
    b: 2,
    c: 3
}, {
    id: 11,
    b: 22,
    c: 33
}, {
    id: 111,
    b: 2222,
    c: 3333
}]

const Home: React.FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>My Countries App</Text>
            <HomeScreen />
            <Todo items={items} />
            <TodoChildren items={items}>
                <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold' }}>Passing Child Component</Text>
            </TodoChildren>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    wrapperCustom: {
        margin: 2,
        borderRadius: 8,
        padding: 6,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
});

export default Home;
