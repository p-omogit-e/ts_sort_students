
export interface Student {
  name: string;
  surname: string;
  age: number;
  maried: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Maried,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

// eslint-disable-next-line max-len
export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  let rez: Student[] = [];
  const unsorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        rez = unsorted.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }

          if (a.name < b.name) {
            return -1;
          }

          return 0;
        });
      }

      if (order === 'desc') {
        rez = unsorted.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }

          if (a.name > b.name) {
            return -1;
          }

          return 0;
        });
      }
      break;
    case SortType.Surname:
      if (order === 'asc') {
        rez = unsorted.sort((a, b) => {
          if (a.surname > b.surname) {
            return 1;
          }

          if (a.surname < b.surname) {
            return -1;
          }

          return 0;
        });
      }

      if (order === 'desc') {
        rez = unsorted.sort((a, b) => {
          if (a.surname < b.surname) {
            return 1;
          }

          if (a.surname > b.surname) {
            return -1;
          }

          return 0;
        });
      }
      break;
    case SortType.Age:
      if (order === 'asc') {
        rez = unsorted.sort((a, b) => {
          return a.age - b.age;
        });
      }

      if (order === 'desc') {
        rez = unsorted.sort((a, b) => {
          return b.age - a.age;
        });
      }
      break;

    case SortType.Maried:
      if (order === 'asc') {
        rez = unsorted.sort((a, b) => {
          return +a.maried - +b.maried;
        });
      }

      if (order === 'desc') {
        rez = unsorted.sort((a, b) => {
          return +b.maried - +a.maried;
        });
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        rez = students.sort((a, b) => {
          let sumA: number = 0;
          let sumB: number = 0;

          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < a.grades.length; i++) {
            sumA += a.grades[i];
          }

          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < b.grades.length; i++) {
            sumB += a.grades[i];
          }

          return sumA / a.grades.length - sumB / b.grades.length;
        });
      }

      if (order === 'desc') {
        rez = students.sort((a, b) => {
          let sumA: number = 0;
          let sumB: number = 0;

          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < a.grades.length; i++) {
            sumA += a.grades[i];
          }

          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < b.grades.length; i++) {
            sumB += a.grades[i];
          }

          return sumB / b.grades.length - sumA / a.grades.length;
        });
      }
      break;
    default:
      return students;
  }

  return rez;
}
