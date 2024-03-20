import React from 'react';
import { Text, FlatList, Pressable, StyleSheet, View, Button } from 'react-native';
import { useLazyQuery, useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MyStackParamsList } from '../navigation/navigators';

interface ContinentItemProps {
    continent: {
        name: string;
        code: string;
    };
}

const ContinentItem = (props: ContinentItemProps): JSX.Element => {
    const { name, code } = props.continent; //get the name of continent
    const nav = useNavigation<NativeStackNavigationProp<MyStackParamsList>>();

    const printName = (msg: string) => {
        nav.navigate('Dashboard', { continentCode: props.continent.code })
        console.log(msg);
    }

    return (
        <Pressable
            onPress={() => {
                nav.navigate('Dashboard', { continentCode: props.continent.code })
                printName(props.continent.code)
            }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'palegoldenrod' },
                styles.wrapperCustom,
            ]}>
            <Text>{name} :: {code}</Text>
        </Pressable>
    );
};

const HomeScreen: React.FC = (): JSX.Element => {
    // const { data, loading, error } = useQuery(CONTINENT_QUERY); //execute query
    const { data, loading, error } = useQuery(CONTINENT_QUERY);


    const func = () => {
        // getDog();
    }

    if (loading) {
        return <Text>Fetching data...</Text> //while loading return this
    }

    return (
        <View>
            <Button title="Click me" onPress={func} />
            <FlatList
                data={data?.continents}
                keyExtractor={(item: any, index: any) => index}
                renderItem={({ item }) => {
                    return <ContinentItem continent={item} />
                }}
            />
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

export default HomeScreen;
