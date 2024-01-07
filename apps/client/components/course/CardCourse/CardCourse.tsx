'use client';

import { useState, type FC } from 'react';
import { Course } from '../../../types';
import { ChevronDown, PlusIcon } from '../../../shared-ui/Icons';
import { concatClasses } from '../../../helpers';
import { useAddToBasket } from '../../AddToBasket';

export const CardCourse: FC<Course> = ({ ...course }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addToBasket } = useAddToBasket();

  return (
    <div className={concatClasses('border p-6 rounded')}>
      <div className="relative flex justify-between">
        <div className="flex flex-col">
          <span className="mb-1 text-sm">{course.bookingCode}</span>
          <span className="font-bold">{course.title}</span>
          <span>{`Startdatum: ${new Date(
            course.startDate
          ).toLocaleString()}`}</span>
          <div className="mt-3">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {course.category}
            </span>
          </div>
          <div
            className={concatClasses(
              'flex flex-col gap-4 mt-4',
              showDetails ? 'visible' : 'hidden'
            )}
          >
            <div className="flex flex-col mb-4">
              <span>{`Alter: ${course.age} Jahre`}</span>
              <span>{course.dates}</span>
              <span>{`Zeiten: ${course.time}`}</span>
              <span>{course.level}</span>
              <span>{course.type}</span>
              <span>{course.location}</span>
              <span>{course.quarters}</span>
              <span>{`Anreise: ${course.travelDescription}`}</span>
            </div>
            <div>
              <button
                className="bg-primary rounded py-1 pl-1 pr-3 text-sm text-white font-bold"
                onClick={() => addToBasket(course.bookingCode)}
              >
                <span className="flex items-center">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Hinzufügen
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <button onClick={() => setShowDetails((prevState) => !prevState)}>
              <ChevronDown className={showDetails ? 'rotate-180' : undefined} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
