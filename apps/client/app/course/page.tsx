import { Card } from '../../shared-ui/Card';
import { Section } from '../../shared-ui/Section';
import { Link, Container } from '../../shared-ui';
import { CourseOverview } from '../../components/course/CourseOverview';

// @TODO: Find a way to get the types from the API
export type Course = {
  bookingCode: string;
  startDate: string;
  dates: string;
  time: string;
  age: string;
  title: string;
  area: string;
  type: string;
  level: string;
  quarters: string;
  location: string;
  travelDescription: string;
};

async function getCourses(): Promise<Course[]> {
  // @TODO: Put base url into env
  const response = await fetch('http://localhost:3000/api/course');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Index() {
  const courses = await getCourses();

  return (
    <Container>
      <Section>
        <h1 className="font-bold text-3xl mb-4">Kurse</h1>
        <Card>
          <Link textDecoration="underline" href={'/course/upload'}>
            Neue Liste hochladen
          </Link>
        </Card>
      </Section>
      <Section>
        <Card>
          <h2 className="font-bold text-lg mb-4">Übersicht</h2>
          <CourseOverview courses={courses} />
        </Card>
      </Section>
    </Container>
  );
}
