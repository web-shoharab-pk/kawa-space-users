import React from 'react';
import './ShowPeople.css';

const ShowPeople = ({ people }) => {

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="details_show py-3">
                {
                    people?.name ?
                        <div style={{ width: '100%', height: '100%' }} className="row p-3 d-flex justify-content-around align-items-center">
                            <div className="col-md-4 d-flex justify-content-around align-items-center">
                                <div>
                                    <img className="show_img" src={people?.picture?.large} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8  d-flex justify-content-center">
                                <div>
                                    <h1 className="show_name">{people?.name?.title} {people?.name?.first} {people?.name?.last}</h1>
                                    <p className="address">
                                        <span style={{ color: '#A259FF' }}>{people?.location?.street?.number}{people?.location ? ',' : null}</span>
                                        <span> {people?.location?.street?.name}{people?.location ? ',' : null}</span>
                                        <span> {people?.location?.city}{people?.location ? ',' : null}</span>
                                        <span> {people?.location?.state}{people?.location ? ',' : null}</span>
                                        <span style={{ color: '#000' }}> {people?.location?.country}{people?.location ? ',' : null}</span>
                                        <span> {people?.location?.postcode}</span>
                                    </p>
                                    <p className="address">
                                        <span>{people?.location?.timezone?.offset}</span>
                                        <span> {people?.location?.timezone?.description}</span>
                                    </p>
                                    <p className="gender">{people?.gender}</p>
                                </div>

                            </div>
                        </div>
                        :
                        <h1 className="welcom_title">Welcome To Kawa Space!</h1>
                }
            </div>
        </div>

    );
};

export default ShowPeople;