import React from "react";
import { Button, View } from "react-native";

const name: React.FC<{ children?: React.ReactNode }> = ({ children }): JSX.Element => {
    return (
        <View>
            {children}
        </View>
    )
};

export default name;
