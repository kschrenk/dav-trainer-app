'use client';

import { useState, type FC } from 'react';
import { CardCourse } from './CardCourse/CardCourse';
import { CourseFilter } from './CourseFilter';
import { Heading } from '../../shared-ui';
import { Course } from '../../types';

type CourseOverviewProps = {
  courses: Course[];
  categories: { id: string; name: string }[];
};

export const CourseOverview: FC<CourseOverviewProps> = ({
  courses,
  categories,
}) => {
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);

  const handleCategoryFilter = (categoryName: string) => {
    if (categoryFilter.includes(categoryName)) {
      setCategoryFilter(categoryFilter.filter((c) => c !== categoryName));
    } else {
      setCategoryFilter([...categoryFilter, categoryName]);
    }
  };

  if (courses.length === 0) {
    return (
      <p>
        <span className="text-red-500">Keine Kurse vorhanden.</span>
        <br />
        Bitte laden Sie eine neue Liste hoch.
      </p>
    );
  }

  const filteredCourses = courses.filter((course) => {
    if (categoryFilter.length === 0) {
      return true;
    }
    return categoryFilter.includes(course.category);
  });

  return (
    <>
      <Heading tag="h2">{`Übersicht (${filteredCourses.length})`}</Heading>
      <div className="mb-4">
        <CourseFilter
          categoryFilter={categoryFilter}
          categories={categories}
          handleCategoryFilter={handleCategoryFilter}
        />
      </div>
      <div className="flex flex-col gap-3">
        {filteredCourses.map((course) => (
          <CardCourse key={course.bookingCode} {...course} />
        ))}
      </div>
    </>
  );
};
