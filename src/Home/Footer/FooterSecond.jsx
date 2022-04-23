import React from 'react';
import { Container } from 'react-bootstrap';
import './FooterSecond.scss';


const FooterSecond = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <Container className='bg text-center'>
            <p className="h6 p-1 desc">ALL RIGHTS RESERVED {year}| DEVELOPER MD KHALID HOSSAIN.</p>
        </Container>
    );
};

export default FooterSecond;