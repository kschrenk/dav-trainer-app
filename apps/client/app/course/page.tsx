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
  type: string;
  level: string;
  quarters: string;
  location: string;
  travelDescription: string;
  category: string;
};

async function getCourses(): Promise<Course[]> {
  // @TODO: Put base url into env
  const response = await fetch('http://localhost:3000/api/course');
  return response.json();
}

// @TODO: Make it real
async function getCategories() {
  // const response = await fetch('http://localhost:3000/api/category');
  // return response.json();

  return [
    { id: '1', name: 'sportklettern' },
    { id: '2', name: 'winter-alpin' },
    { id: '3', name: 'skischule' },
  ];
}

export default async function Index() {
  const courses = await getCourses();
  const categories = await getCategories();

  return (
    <Container>
      <Section>
        <h1 className="font-bold text-3xl mb-4">Kurse</h1>
        <Card>
          <div className="flex gap-4">
            <Link textDecoration="underline" href={'/course/upload'}>
              Neue Liste hochladen
            </Link>
          </div>
        </Card>
      </Section>
      <Section>
        <Card>
          <CourseOverview courses={courses} categories={categories} />
        </Card>
      </Section>
    </Container>
  );
}
