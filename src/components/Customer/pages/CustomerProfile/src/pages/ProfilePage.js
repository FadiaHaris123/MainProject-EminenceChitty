import { Fragment } from "react";
import { TableContainer,TableHead,Table,TableBody,TableRow,TableCell,Paper} from "@mui/material";
import React, { useState,useEffect } from 'react';
import UserList from "./UserList";
import './UserList.css'

const ProfilePage = () => {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    // const userdetails = async () => {
        
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         const response = await fetch(
    //             'https://userdetai-default-rtdb.firebaseio.com/users.json'
    //         );

    //         if (!response.ok) {
    //             throw new Error('Something went wrong!');
    //         }
    //         const data = await response.json();
    //         const loadeddetails = [];
    //         // const newItemList = [...data._embedded.chittyaccountdetails]

    //         for (const key in data) {
    //             loadeddetails.push({
    //                 id: key,
    //                 userid: data[key].userid,
    //                 name: data[key].name,
    //                 place: data[key].place,
    //                 email: data[key].email,
    //             });
    //         }
    //         //----------------- FOR DEMO -----------------//
            
    //             // const response = await fetch('https://assignchits-default-rtdb.firebaseio.com/assignedchits.json');
    //             // if (!response.ok) {
    //             //     throw new Error('Something went wrong!');
    //             // }

    //             // const data = await response.json();

    //             // const loadedChit = [];

    //             // for (const key in data) {
    //             //     loadedChit.push({
    //             //         id: key,
    //             //         amount: data[key].amount,
    //             //         chitNumber: data[key].chitNumber,
    //             //         chitType: data[key].chitType,
    //             //         days: data[key].days,
    //             //         members: data[key].members,
    //             //         startDate: data[key].startDate,
    //             //     });
    //             // }

    //             //----------------- DEMO CLOSE ------------------//
    //             setDetails(loadeddetails);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    //     setIsLoading(false);
    // }, []);


    useEffect(() => {
        const userdetails = async () => {
          const response = await fetch(
            'https://userdetai-default-rtdb.firebaseio.com/users.json'
          );
      
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
      
          const responseData = await response.json();
      
          const loadeddetails = [];
        //   const newItemList = [...responseData._embedded.manager]
          //manager is the classname
      
          for (const key in responseData) {
            loadeddetails.push({
                id: key,
                userid: responseData[key].userid,
                name: responseData[key].name,
                place: responseData[key].place,
                email: responseData[key].email,
            });
          }
      
          setDetails(loadeddetails);
          setIsLoading(false);
        };
      
        userdetails().catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
      }, []);
      
    let content;
      console.log("Sreeni"+details.userid)
    if (details.length > 0) {
        content = <UserList details={details} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }
      
      if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }
      
      if (error) {
        return (
          <section>
            <p>{error}</p>
          </section>
        );
      }
    return (
        <div className="main-wrapper">
            {content}
        </div>
   )
}
export default ProfilePage;