import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button
} from "react-native";
import { Card, Input } from "react-native-elements";
import * as DocumentPicker from 'expo-document-picker';

export default function NewDocument() {

    const [form, setForm] = useState({
        name: "",
        file: null
    })
    const pickDocument = async () => {
        let file = await DocumentPicker.getDocumentAsync({});
        setForm({ ...form, file })
        alert(file.uri);
        console.log(file);
    }
    return (
        <View >
            <Card style={styles.container} title="New order">
                <Input
                    placeholder="Name"
                    onChangeText={value => setForm({ ...form, name: value })}
                />

                <Button
                    title="Select Document"
                    onPress={pickDocument}
                />

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
