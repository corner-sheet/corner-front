import React from 'react';
import Spacing from '../../../utils/Spacing';
import Colors from '../../../utils/Colors';
import { StyleSheet, View, Text } from 'react-native';

export const SectionHeader = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>
            {title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        marginRight: Spacing.spacing.sm,
        marginTop: Spacing.spacing.sm,
        marginBottom: Spacing.spacing.xs,
        marginLeft: Spacing.spacing.md,
    },
    title: {
        fontWeight: Spacing.fontWeight.normal,
        fontSize: Spacing.fontSize.lg,
        color: Colors.articleText,
    },
});