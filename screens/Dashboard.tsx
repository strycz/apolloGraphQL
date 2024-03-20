import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, FlatList, Pressable, StyleSheet, View, Button } from 'react-native';
import { MyStackParamsList } from '../navigation/navigators';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../gql/Query';


type Props = NativeStackNavigationProp<MyStackParamsList, 'Dashboard'>;

const Dashboard = (props: MyStackParamsList & { route: any }): JSX.Element => {
    const { route } = props

    const [countries, setCountries] = useState('')

    const [getCountries, { data: myData, loading: loading2, error: lazyError }] = useLazyQuery(GET_COUNTRY)

    const { data, loading, error } = useQuery(GET_COUNTRY, {
        variables: { code: route.params.continentCode },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first',
    });

    // const [getCountries, { data, loading, error }] = useLazyQuery(GET_COUNTRY);


    function func(): void {
        // const result = getCountries({ variables: { code: route.params.continentCode } })
        // console.log(JSON.stringify(data));
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'column' }}>
            <Button title="Print Details" onPress={func} />
            <View style={styles.logBox}>
                <Text>{JSON.stringify(data?.continent.name)}</Text>

                <FlatList
                    data={data?.continent?.countries}
                    keyExtractor={(item: any, index: any) => index}
                    renderItem={({ item }) => {
                        return <CountryItem country={item} />
                    }}
                />

            </View>
        </View>
    );
}

interface CountryItemProps {
    country: {
        currency: string;
        name: string;
        code: string;
    };
}

const CountryItem = (props: CountryItemProps): JSX.Element => {
    const { name, code, currency } = props.country; //get the name of continent


    return (
        <View style={{ ...styles.logBox, backgroundColor: 'red' }}>
            <Text>{name} :: {code} :: {currency}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default Dashboard;
