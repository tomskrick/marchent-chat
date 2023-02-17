import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
import './ShareModal.css'
import PostShare from '../PostShare/PostShare';
const ShareModal = ({ modalOpend, setModalOpend }) => {
    const theme = useMantineTheme();
    return (
        <div>
            <Modal
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                size='55%'
                opened={modalOpend}
                onClose={() => setModalOpend(false)}
            >
                <PostShare></PostShare>
            </Modal>
        </div>
    );
};

export default ShareModal;