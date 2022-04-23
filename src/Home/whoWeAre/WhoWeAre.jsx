import { Container } from '@mui/material';
import React from 'react';
import { WhoWeare } from '../../Data';
import Cards from './Cards';

const WhoWeAre = () => {
    return (
        <Container className='mt-5 mb-5'>
            <h1 className='text-center'>
                {WhoWeare.heading}
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint necessitatibus, amet consequuntur quibusdam commodi maxime doloribus impedit ab aliquam dolor? Doloremque laudantium delectus molestias eaque? Nam ipsum sit delectus?
            </p>
            <div className="cards mt-5 ">
                    <Cards/>
            </div>
        </Container>
    );
};

export default WhoWeAre;