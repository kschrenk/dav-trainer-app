import { CardLink } from '../../../shared-ui/CardLink';
import { Course } from '../../../app/course/page';
import type { FC } from 'react';

export const CardCourse: FC<Course> = ({ ...course }) => {
  return (
    <CardLink>
      <div className="flex flex-col">
        <span>{course.bookingCode}</span>
        <span className="font-bold">{course.title}</span>
        <span>{`Startdatum: ${new Date(
          course.startDate
        ).toLocaleString()}`}</span>
        <span>{`Alter: ${course.age} Jahre`}</span>
        <span>{course.dates}</span>
        <span>{`Zeiten: ${course.time}`}</span>
        <span>{`Kategorie: ${course.category}`}</span>
        <span>{course.level}</span>
        <span>{course.type}</span>
        <span>{course.location}</span>
        <span>{course.quarters}</span>
        <span>{`Anreise: ${course.travelDescription}`}</span>
      </div>
      <CardLink.Link href={`/course/${course.bookingCode}`} />
    </CardLink>
  );
};
