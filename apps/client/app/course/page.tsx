import { Card } from '../../shared-ui/Card';
import { Section } from '../../shared-ui/Section';
import { Link, Container } from '../../shared-ui';
import { CourseOverview } from '../../components/course/CourseOverview';
import { getCourses } from '../../lib/course';
import { getCategories } from '../../lib/category';
import { AddToBasket } from '../../components/AddToBasket';

export default async function Index() {
  const courses = await getCourses();
  const categories = await getCategories();

  return (
    <Container>
      <Section>
        <h1 className="font-bold text-3xl mb-4">Kurse</h1>
        <Card>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Link textDecoration="underline" href={'/course/upload'}>
                Neue Liste hochladen
              </Link>
            </div>
            <AddToBasket />
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
