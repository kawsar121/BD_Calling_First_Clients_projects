import React from 'react';
import Baanner from '../../LayOuts/Baanner';
import ShowProducts from '../Products/ShowProducts';
import CategoryBanner from '../Products/CategoryBanner';
import NewProducts from '../Products/NewProducts';
import SecondBanner from '../../LayOuts/SecondBanner';
import Reviews from '../Reviews/Reviews';
import SendReview from '../Reviews/SendReview';

const Home = () => {
    return (
        <div>
            <Baanner></Baanner>
            <ShowProducts></ShowProducts>
            <CategoryBanner></CategoryBanner>
            <NewProducts></NewProducts>
            <SecondBanner></SecondBanner>
            <Reviews></Reviews>
            <SendReview></SendReview>
        </div>
    );
};

export default Home;