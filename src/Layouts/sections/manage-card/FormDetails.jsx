import { useState } from 'react';
import { Input, InputLabel, Box, Button, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { IoMdHome } from 'react-icons/io';
import { FaPhoneAlt, FaSave } from 'react-icons/fa';

export default function FormDetails({ title, buttonTitle }) {
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
                display: 'grid',
                gap: '20px',
            }}
            dir="rtl"
        >
            <Typography variant="h6">{title}</Typography>
            <Box sx={{ display: 'flex', gap: '20px' }}>
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
            <TextareaAutosize
                sx={{ '&:focus': { border: 'none', outline: 'none' } }}
                variant="contained"
                color="primary"
                placeholder="توضیحات"
                id="my-input"
                aria-describedby="my-helper-text"
            />
            <hr />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                }}
            >
                <Button
                    onClick={handleContactClick}
                    sx={{
                        color: '#626270',
                        borderBottom: showContact ? '2px solid black' : 'none',
                        paddingBottom: '5px',
                    }}
                >
                    <Typography className="pr-3 pl-1">اطلاعات تماس</Typography>
                    <FaPhoneAlt className="text-lg" />
                </Button>
                <Button
                    onClick={handleAddressClick}
                    sx={{
                        color: '#626270',
                        borderBottom: !showContact ? '2px solid black' : 'none',
                        paddingBottom: '5px',
                    }}
                >
                    <Typography className="pr-3 pl-1">اطلاعات آدرس</Typography>
                    <IoMdHome className="text-xl" />
                </Button>
            </Box>
            <hr />
            {showContact ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        marginTop: '25px',
                    }}
                >
                    <FormControl>
                        <InputLabel htmlFor="my-input">نام شرکت</InputLabel>
                        <Input
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">شماره تلفن</InputLabel>
                        <Input
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">ایمیل</InputLabel>
                        <Input
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        marginTop: '25px',
                    }}
                >
                    <FormControl>
                        <InputLabel htmlFor="my-input">آدرس</InputLabel>
                        <Input
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">کدپستی</InputLabel>
                        <Input
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">شهر</InputLabel>
                        <Input
                            id="my-input"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                </Box>
            )}
            <Button
                variant="contained"
                className="font-semibold text-white bg-slate-700 text-start px-4 py-2 rounded-md flex items-center gap-3 w-fit"
                startIcon={<FaSave className="text-lg" />}
            >
                <Box sx={{ fontSize: '0.875rem' }}>{buttonTitle}</Box>
            </Button>
        </Box>
    );
}
