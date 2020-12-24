/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Calendar as CiCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendar() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="sm:w-full md:w-2/3 lg:w-1/2 m-3 mt-20 max-w-screen-2lg justify-self-center self-center overflow-hidden sm:rounded-lg"
      >
        <CiCalendar value={value} />
      </div>

      <div className="sm:w-full md:w-2/3 lg:w-1/2 m-3 mt-20 max-w-screen-2lg justify-self-center self-center overflow-hidden shadow sm:rounded-lg">
        <h2 className="mt-10 mb-10 text-center text-2xl font-bold text-gray-900">
          Занятий нет
        </h2>
      </div>
    </>
  );
}
