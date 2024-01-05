import { FC } from 'react';
import { Category } from './types';
import { concatClasses } from '../../helpers';

type CourseFilterCategoryProps = {
  category: Category;
  handleCategoryFilter: (categoryName: string) => void;
  isActive: boolean;
};

const defaultStyles = 'bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1';
const activeStyles = 'outline outline-green-200';

const CourseFilterCategory: FC<CourseFilterCategoryProps> = ({
  category,
  handleCategoryFilter,
  isActive,
}) => {
  return (
    <button
      key={category.id}
      onClick={() => handleCategoryFilter(category.name)}
      className={concatClasses(
        defaultStyles,
        isActive ? activeStyles : undefined
      )}
    >
      {category.name}
    </button>
  );
};

export { CourseFilterCategory };
