/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Profile() {
  return (
    <div className="h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
          <img src="https://i.imgur.com/MV97Xtc.jpeg" className="w-full" />
          <div className="flex justify-center -mt-8">
            <img
              src="https://picsum.photos/id/112/100"
              className="rounded-full border-solid border-white border-2 -mt-3"
            />
          </div>
          <div className="text-center px-3 pb-6 pt-2">
            <h3 className="text-center text-3xl font-bold text-gray-900">
              Ivan Smirnov
            </h3>
            <p className="mt-2 font-sans font-light text-grey-dark">
              Группа: 17В-1
            </p>
          </div>
          <div className="flex justify-center pb-3 text-grey-dark">
            <div className="text-center mr-3 border-r pr-3">
              <h2>34</h2>
              <span>ЛР. зачтено</span>
            </div>
            <div className="text-center">
              <h2>42</h2>
              <span>Всего ЛР</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
