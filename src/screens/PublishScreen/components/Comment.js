import React, { useState } from 'react';
import { Box, TextArea, VStack } from 'native-base';

export const Comment = () => {
    const [text, setText] = useState('');
    return (
        <VStack space={2}>
            <Box alignItems="center" w="100%">
                <TextArea h={20}
                    placeholder="사진에 대한 이야기를 적어보세요"
                    w="100%"
                    onChange={e => setText(e.currentTarget.value)}
                    value={text}
                    numberOfLines={4}
                    multiline={true}
                />
            </Box>
        </VStack>
    );
};