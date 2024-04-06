import React, { useState } from "react";
import { Button, View, Text } from "react-native";

export default() =>{
    const [pressCount, setPressCount] = useState(0);

    return(
        <View style ={{alignItems: 'center', marginTop: 20}}>
            <Text>You've pressed the button: {pressCount} time(s)</Text>
            <Button
                title={`Pressed ${pressCount} time(S)`}
                onPress={() => setPressCount(pressCount + 1)}
            ></Button>
        </View>
    );
};