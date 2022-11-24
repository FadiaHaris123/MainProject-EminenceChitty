import { Fragment } from "react";
import React, { useState, useEffect, useCallback } from 'react';
import Header from "../foreman/Header/Header";
import ManagerNav from "./ManagerNav";
import "./ManagerPage.css";
import ChitList from './ChitList';


const ManagerPage = () => {
    const [chits, setChit] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const assignchits = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://assignchits-default-rtdb.firebaseio.com/assignedchits.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const loadedChit = [];

            for (const key in data) {
                loadedChit.push({
                    id: key,
                    amount: data[key].amount,
                    chitNumber: data[key].chitNumber,
                    chitType: data[key].chitType,
                    days: data[key].days,
                    members: data[key].members,
                    startDate: data[key].startDate,
                });
            }

            setChit(loadedChit);
        } catch (error) {
            setError(error.message);
            }
        setIsLoading(false);
    }, []);
    let content = <p>No chits found</p>;

    if (chits.length > 0) {
        content = <ChitList chits={chits} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }
    return (
        <Fragment>
            <div className="header_nav">
                <Header></Header>
                <ManagerNav></ManagerNav>
            </div>
            {/* <div className="manager_class">
                <img src={Image}></img>
                <p>Hi manager</p>
            </div> */}
            <div className="button-group">
                <section>
                    <button onClick={assignchits}>Assigned Chits</button> {content} 
                </section>
               
                <section>
                    <button>Manage Chits</button>
                </section>
                <section>
                    <button>Notifications</button>
                </section>
            </div>
        </Fragment>)
}
export default ManagerPage;