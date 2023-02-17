import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModel.css'
const ProfileModel = ({ modalOpend, setModalOpend }) => {
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
                <form action="" className='InfoForm'>
                    <h3 className='text-2xl'>Your Info</h3>
                    <div>
                        <input
                            type="text"
                            className='infoInput'
                            name="FirstName"
                            id=""
                            placeholder='First Name' />

                        <input
                            type="text"
                            className='infoInput'
                            name="lastName"
                            id=""
                            placeholder='Last Name' />
                    </div>

                    <div>
                        <input
                            type="text"
                            className='infoInput'
                            name="worksAt"
                            id=""
                            placeholder='Works at' />
                    </div>
                    <div>
                        <input
                            type="text"
                            className='infoInput'
                            name="LivesIn"
                            id=""
                            placeholder='Lives in' />

                        <input
                            type="text"
                            className='infoInput'
                            name="Country"
                            id=""
                            placeholder='Country' />
                    </div>
                    <div>
                        <input
                            type="text"
                            className='infoInput'
                            id=""
                            placeholder='Relationship Status' />
                    </div>
                    <div>
                        Profile Image 
                        <input type="file" name="profileImg" id="" />
                        Cover Image
                        <input type="file" name="coverImg" id="" />
                    </div>
                    <button className="button w-40 p-2 update">Update</button>
                </form>
            </Modal>
        </div>
    );
};

export default ProfileModel;