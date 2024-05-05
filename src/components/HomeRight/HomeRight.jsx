import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import PopularUserCard from "./PopularUserCard";
import { Card } from "@mui/material";
import { useSelector } from "react-redux";

const popularUser = [1, 1, 1, 1, 1];
const HomeRight = () => {
  const { auth } = useSelector((store) => store);
  return (
    <div className="pr-5">
      <SearchUser />
      <Card className="p-5">
        <div className="flex items-center justify-between py-5">
          <p className="font-semibold opacity-70">Suggestions for you</p>
          <p className="text-xs font-semibold opacity-95">View All</p>
        </div>
        <div className="">
          {auth.users.map((user) => (
            <PopularUserCard user={user} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
