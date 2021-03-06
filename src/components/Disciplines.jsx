/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function Disciplines() {
  return (
    <div className="flex flex-col lg:flex-wrap justify-center content-center align-center">
      {/* Основная таблица */}
      <h2 className="mt-10 mb-10 text-center text-3xl font-bold text-gray-900">
        Дисциплины
      </h2>
      <div className="mx-4 my-2 max-w-screen-lg overflow-x-auto sm:mx-6 lg:mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Дисциплина
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Преподаватель
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <Link to="/discipline" className="sr-only">
                      Открыть
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/1/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <Link
                          to="/discipline"
                          className="text-sm font-medium text-gray-900 hover:text-indigo-900"
                        >
                          ПОВС
                        </Link>
                        <div className="text-sm text-gray-500">
                          Администрирование
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/2/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Кочешков А.А.
                        </div>
                        <div className="text-sm text-gray-500">
                          kocheshkov@nntu.ru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to="/discipline"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Открыть
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/11/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <Link
                          to="/discipline"
                          className="text-sm font-medium text-gray-900 hover:text-indigo-900"
                        >
                          UI дизайн
                        </Link>
                        <div className="text-sm text-gray-500">
                          Создание интерфейсов
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/16/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Цыбульская Е.В.
                        </div>
                        <div className="text-sm text-gray-500">e.v@nntu.ru</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to="/discipline"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Открыть
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/24/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <Link
                          to="/discipline"
                          className="text-sm font-medium text-gray-900 hover:text-indigo-900"
                        >
                          Методы Data Mining
                        </Link>
                        <div className="text-sm text-gray-500">Оптимизация</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/25/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Суркова А.С.
                        </div>
                        <div className="text-sm text-gray-500">
                          surkova.an@nntu.ru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to="/discipline"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Открыть
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Архив */}
      <h2 className="mt-10 mb-10 text-center text-2xl font-bold text-gray-800">
        Пройденные дисциплины
      </h2>
      <div className="mx-4 my-2 max-w-screen-lg overflow-x-auto sm:mx-6 lg:mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Дисциплина
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Преподаватель
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Оценка
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Открыть</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/41/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <Link
                          to="/discipline"
                          className="text-sm font-medium text-gray-900 hover:text-indigo-900"
                        >
                          Организация ЭВМ
                        </Link>
                        <div className="text-sm text-gray-500">Основы</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/46/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Зеленский П.В.
                        </div>
                        <div className="text-sm text-gray-500">
                          zelensky@nntu.ru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 text-green-900">
                      Отлично
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to="/discipline"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Открыть
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/54/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <Link
                          to="/discipline"
                          className="text-sm font-medium text-gray-900 hover:text-indigo-900"
                        >
                          Паттерны проектирования
                        </Link>
                        <div className="text-sm text-gray-500">
                          Программирование
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/55/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Жевнерчук Д.В.
                        </div>
                        <div className="text-sm text-gray-500">
                          d.zhevn@nntu.ru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Удовлетворительно
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to="/discipline"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Открыть
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/31/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <Link
                          to="/discipline"
                          className="text-sm font-medium text-gray-900 hover:text-indigo-900"
                        >
                          Системное ПО
                        </Link>
                        <div className="text-sm text-gray-500">
                          Администрирование
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/id/32/200"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Викулова Е.Н.
                        </div>
                        <div className="text-sm text-gray-500">
                          vikulova@nntu.ru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Хорошо
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to="/discipline"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Открыть
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
