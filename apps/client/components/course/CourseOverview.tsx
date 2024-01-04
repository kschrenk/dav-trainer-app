import { Course } from '../../app/course/page';
import type { FC } from 'react';
import { CardCourse } from './CardCourse/CardCourse';

type CourseOverviewProps = {
  courses: Course[];
};

export const CourseOverview: FC<CourseOverviewProps> = ({ courses }) => {
  return (
    <div className="flex flex-col gap-3">
      {courses.map((course) => (
        <CardCourse key={course.bookingCode} {...course} />
      ))}
    </div>
  );
};
