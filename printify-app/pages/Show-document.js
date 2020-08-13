import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import { Card, Icon, Badge } from "react-native-elements";

export default function Scanned({ document }) {
    return (
        <View >
            <Card style={styles.container} title={document.name}>
                <View >
                    <Icon
                        name='file-text'
                        type='font-awesome'
                        color='#00aced'
                        size={32}
                    />
                    <Text>{document.name}</Text>
                    <Text>{document.subtitle}</Text>
                    <View>
                        <Text>Status :  </Text>

                        <Badge value={document.status} status={document.status === 'Printed' ? 'success' : 'warning'} />

                    </View>
                </View>

            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
