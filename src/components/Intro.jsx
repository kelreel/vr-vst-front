import React from "react";
import devices from '../assets/devices.svg'
import bg from '../assets/bg.svg'
import {Link} from "react-router-dom";

export default function Intro() {
  return (
    <div
      className="h-screen pb-14 bg-right bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/*Main*/}
      <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/*Left Col*/}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-gray-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Онлайн-платформа кафедры ВСТ
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            Выполняйте задания и просматривайте материалы с любого устройства!
          </p>
          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
            Продолжите работу:
          </p>
          <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            <Link
              to="/login"
              className="h-12 px-6 pt-2 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Вход
            </Link>
            <Link
              to="/register"
              className="h-12 px-6 pt-2 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Регистрация
            </Link>
          </div>
        </div>
        {/*Right Col*/}
        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img
            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
            src={devices}
          />
        </div>
      </div>
    </div>
  );
}
