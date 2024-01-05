import { Course } from '../app/course/page';

export const TAG_COURSES = 'courses';

export async function getCourses(): Promise<Course[]> {
  // @TODO: Put base url into env
  const response = await fetch('http://localhost:3000/api/course', {
    next: { tags: [TAG_COURSES] },
  });

  return response.json();
}
