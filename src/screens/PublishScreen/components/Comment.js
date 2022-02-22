import React, { useState } from 'react';
import Spacing from '../../../utils/Spacing';
import Colors from '../../../utils/Colors';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export const Comment = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.item}>
            <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder='사진에 대한 이야기를 적어보세요'
                onChangeText={text => setText(text)}
                value={text}
                style={styles.textInput}
                maxLength={200}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        marginRight: Spacing.spacing.sm,
        marginTop: Spacing.spacing.sm,
        marginBottom: Spacing.spacing.sm,
        marginLeft: Spacing.spacing.md,
        borderColor: Colors.horizontalRule,
        borderWidth: 1,
        borderRadius: 6,
    },
    textInput: {
        fontSize: Spacing.fontSize.xs,
        color: Colors.articleText,
        textAlignVertical: 'top',
        padding: Spacing.spacing.sm
    },
});