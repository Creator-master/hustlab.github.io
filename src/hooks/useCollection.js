import { useStaticQuery, graphql } from 'gatsby';
import { uniqAndSort } from '../common/utils';

const useAllCollections = () => {
  const { allCollectionJson } = useStaticQuery(
    graphql`
      query AllCollections {
        allCollectionJson {
          nodes {
            id
            city
            company
            condition
            department
            work
            time
          }
        }
      }
    `
  );

  const collections = allCollectionJson.nodes;
  const { company, city, work } = collections.reduce(
    (prev, next) => {
      return {
        company: [...prev.company, next.company.trim()],
        city: [...prev.city, next.city.trim()],
        work: [...prev.work, next.work.trim()],
      };
    },
    { company: [], city: [], work: [] }
  );

  const companies = uniqAndSort(company);
  const cities = uniqAndSort(city);
  const works = uniqAndSort(work);

  return {
    collections,
    companies,
    cities,
    works,
  };
};

export { useAllCollections };
