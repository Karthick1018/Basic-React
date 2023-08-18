import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Fab, Paper, Typography } from "@mui/material";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { MoonLoader } from 'react-spinners'
// import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';

const ImgScroll = () => {
    const [img, setImg] = useState([]);
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    // const [imgview, setImgview] = useState(null);

    // const handleOpen = (img) => {
    //     setImgview(img)
    // };
    // const handleClose = () => {
    //     setImgview(null)
    // };

    const fetchData = async () => {
        try {
            const apiurl = `https://api.unsplash.com/photos/?client_id=kYeg7I5ZCIquQ1nXOnbGFhK4b6ISrI7H52N1huJ1x0A&page=${page}`;
            const response = await axios.get(apiurl);
            const newImages = response.data;
            console.log(newImages);

            if (page === 1) {
                setImg(newImages);
            } else {
                setImg(prevImages => [...prevImages, ...newImages]);
            }
        } catch (error) {
            console.error('Error fetching image URLs:', error);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 100);
        return () => clearTimeout(timer);
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const fabStyle = {
        position: 'fixed',
        bottom: 30,
        right: 30,
        bgcolor: 'green'
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    // };

    return (
        <>
            <div className="container-fluid bg_color_div">
                <div className="row justify-content-around">
                    {img?.map((data, index) => (
                        <Card key={index} className="card col-lg-3 m-1" component={Paper} >
                            <CardMedia
                                component="img"
                                height="400"
                                image={data.urls.regular}
                                alt="Image"
                                loading='lazy'
                            />
                        </Card>

                    ))}
                </div>
                <Fab
                    size="large"
                    aria-label='Expand'
                    color='inherit'
                    style={{ ...fabStyle, display: visible ? 'inline' : 'none', backgroundColor: 'blue' }}
                    onClick={scrollToTop}
                >
                    <UpIcon sx={{ fontSize: 30, fontWeight: 'bolder', color: 'red' }} />
                </Fab>
            </div>
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <MoonLoader color="#1e5bbd" />
            </div>
            {/* {imgview &&
                <div>
                    <Modal
                        open={true}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>} */}
        </> 
    );
};

export default ImgScroll;
