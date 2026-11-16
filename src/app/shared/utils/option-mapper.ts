import { Option } from '../types';

export function optionMapper<T>(obj: Record<string, string>): Option<T>[] {
  return Object.entries(obj).map((t): Option<T> => {
    return {
      value: <T>t[0],
      label: t[1]
    };
  });
}
