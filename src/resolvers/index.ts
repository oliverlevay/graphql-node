import { prisma } from '../database';
import { Query } from './query';
import { Mutation } from './mutation';
import type {
  Department as PrismaDepartment,
  Student as PrismaStudent,
  Teacher as PrismaTeacher,
  Course as PrismaCourse,
} from '.prisma/client';

const Student = {
  dept: (student: PrismaStudent) => {
    return prisma.department.findFirst({
      where: { id: student.deptId },
    });
  },
};

const Department = {
  students: (department: PrismaDepartment) => {
    return prisma.department
      .findUnique({
        where: { id: department.id },
      })
      .students();
  },
  courses: (department: PrismaDepartment) => {
    return prisma.department
      .findUnique({
        where: { id: department.id },
      })
      .courses();
  },
};

const Teacher = {
  courses: (teacher: PrismaTeacher) => {
    return prisma.teacher
      .findUnique({
        where: { id: teacher.id },
      })
      .courses();
  },
};

const Course = {
  teacher: (course: PrismaCourse) => {
    return prisma.course
      .findUnique({
        where: { id: course.id },
      })
      .teacher();
  },
  dept: (course: PrismaCourse) => {
    return prisma.course
      .findUnique({
        where: { id: course.id },
      })
      .dept();
  },
};

export const resolvers = {
  Student,
  Department,
  Teacher,
  Course,
  Query,
  Mutation,
};
