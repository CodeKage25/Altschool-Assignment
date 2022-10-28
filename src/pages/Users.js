import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../components/User";
import { UsersFooter } from "../components/UsersFooter";
import Navbar from "../components/Navbar";
import NavbarMobile from '../components/NavbarMobile'



function UsersProfile({ users }) {
  return users.map((user) => {
    return <User key={user.email} user={user} />;
  });
}

const Users = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  const getData = async (page) => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=7&page=${page}`
    );

    const details = data.results;
    if (page > 1 || details.length > 0) {
      setUsers((prev) => [...prev, ...details]);
    } else {
      setUsers(details);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (users.length / 6 < pageNumber) {
      getData(pageNumber);
    }
  }, [pageNumber, users.length]);

  const onClickNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const onClickPreviousPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  const getCurrentPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 6;
    const endIndex = startIndex + 6;
    return users.slice(startIndex, endIndex);
  };

  const currentPageUsers = getCurrentPageData(pageNumber);
  const pageDataExists = currentPageUsers.length > 0;

  if (!pageDataExists && !isLoading) {
    return <div className="error">No data found</div>;
  }

  if (isLoading) {
    return (
      <div className="loading">
        Please wait, your request is being processed....
      </div>
    );
  }

  return (
    <div className="User-Page">
      <Navbar />
      <div className="left">
      
        <div className="user-container">
          <UsersProfile users={getCurrentPageData(pageNumber)} />
        </div>
        <UsersFooter
          pageNumber={pageNumber}
          onClickNextPage={onClickNextPage}
          onClickPreviousPage={onClickPreviousPage}
          hasNextPage={pageNumber < 8}
          hasPreviousPage={pageNumber > 1}
        />
      <NavbarMobile />
      </div>

    </div>
  );
};

export default Users;
