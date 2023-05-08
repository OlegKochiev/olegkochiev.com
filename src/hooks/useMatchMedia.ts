import {useState, useLayoutEffect} from 'react';
import {MEDIA_QUERIES} from '../constants';

type Medias = {
  isMobile?: boolean;
  isLaptop?: boolean;
  isDesktop?: boolean;
};

export default function useMatchMedia(): Medias {
  const [values, setValues] = useState<boolean[]>([]);
  useLayoutEffect(() => {
    const mediaQueryLists = MEDIA_QUERIES.map((query) => matchMedia(query.rule));
    const getValues = () => mediaQueryLists.map((mediaQueryList) => mediaQueryList.matches);
    setValues(getValues);
    const handler = () => setValues(getValues);
    mediaQueryLists.forEach((mediaQueryList) => mediaQueryList.addEventListener('change', handler));
    return () => mediaQueryLists.forEach((mediaQueryList) => mediaQueryList.removeEventListener('change', handler));
  }, []);
  return MEDIA_QUERIES.map((query) => query.size).reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
}
