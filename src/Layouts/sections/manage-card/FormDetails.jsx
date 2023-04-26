import { useState } from 'react';

import {
    Input,
    InputLabel,
    Box,
    Button,
    Stack,
    Typography,
    TextField,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/base/TextareaAutosize';

// icons
import { IoMdHome } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';

export default function FormDetails() {
    const [showContact, setShowContact] = useState(true);

    const handleContactClick = () => {
        setShowContact(true);
    };

    const handleAddressClick = () => {
        setShowContact(false);
    };

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                borderRadius: '10px',
                width: '100%',
                height: 'max-content',
                textAlign: 'right',
                padding: '20px',
                fullWidth: true,
                display: 'grid',
            }}
        >
            <Box className="mb-5">
                <Typography variant="h6">مشخصات شرکت / سازمان</Typography>
            </Box>
            <Box className="space-x-10 mb-10 flex flex-row-reverse justify-between">
                <FormControl>
                    <InputLabel htmlFor="my-input">شماره ثبت</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">نام شرکت</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">عنوان شرکت</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
            </Box>
            <Box>
                <TextField
                    label="توضیحات"
                    variant="outlined"
                    multiline
                    rows={1}
                    placeholder="توضیحات"
                    fullWidth
                />
            </Box>
            <hr />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10px',
                    marginTop: '10px',
                }}
            >
                <Button
                    onClick={handleContactClick}
                    sx={{
                        color: '#626270',
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: '2px solid black',
                        paddingBottom: '5px',
                    }}
                >
                    <Typography className="pr-3">اطلاعات تماس</Typography>
                    <FaPhoneAlt className="text-md sm:text-md lg:text-xl" />
                </Button>
                <Button
                    onClick={handleAddressClick}
                    sx={{
                        color: '#626270',
                        textWeight: '10rem',
                        borderBottom: '2px solid black',
                        paddingBottom: '5px',
                        marginLeft: '20px',
                    }}
                >
                    <Typography className="pr-3">اطلاعات آدرس</Typography>
                    <IoMdHome className="text-md sm:text-md lg:text-xl" />
                </Button>
            </Box>
            <hr />
            {!showContact ? (
                <Box className="items-center flex flex-col space-y-10 mt-[25px]">
                    <Box className="space-x-20">
                        {' '}
                        <FormControl>
                            <InputLabel htmlFor="my-input">
                                عنوان شرکت
                            </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">
                                عنوان شرکت
                            </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">
                                عنوان شرکت
                            </InputLabel>
                            <TextareaAutosize
                                maxRows
                                id="my-input"
                                aria-describedby="my-helper-text"
                            />
                        </FormControl>
                    </Box>
                    <Box className="space-x-10" style={{ marginBottom: '50x' }}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">
                                عنوان شرکت
                            </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">
                                عنوان شرکت
                            </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                            />
                        </FormControl>
                    </Box>
                </Box>
            ) : (
                <Box className="items-center flex flex-col space-y-10 mt-[25px]">
                    <Box className="space-x-20">
                        <Box
                            className="space-x-10"
                            style={{ marginBottom: '50x' }}
                        >
                            <FormControl>
                                <InputLabel htmlFor="my-input">
                                    عنوان شرکت
                                </InputLabel>
                                <Input
                                    id="my-input"
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">
                                    عنوان شرکت
                                </InputLabel>
                                <Input
                                    id="my-input"
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}
