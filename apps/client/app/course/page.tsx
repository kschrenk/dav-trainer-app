import { Card } from '../../shared-ui/Card';
import { Section } from '../../shared-ui/Section';
import { Link, Container } from '../../shared-ui';
import { CourseOverview } from '../../components/course/CourseOverview';
import { getCourses } from '../../lib/course';
import { getCategories } from '../../lib/category';

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
