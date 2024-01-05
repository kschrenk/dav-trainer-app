import { FC } from 'react';
import { Category } from './types';
import { CourseFilterCategory } from './CourseFilterCategory';

type CourseFilterProps = {
  categories: Category[];
  categoryFilter: string[];
  handleCategoryFilter: (categoryName: string) => void;
};

const CourseFilter: FC<CourseFilterProps> = ({
  categories,
  categoryFilter,
  handleCategoryFilter,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <CourseFilterCategory
          key={category.id}
          handleCategoryFilter={handleCategoryFilter}
          category={category}
          isActive={categoryFilter.includes(category.name)}
        />
      ))}
    </div>
  );
};

export { CourseFilter };
