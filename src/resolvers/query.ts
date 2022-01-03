import { prisma } from '../database';
import type {
  Department as PrismaDepartment,
  Student as PrismaStudent,
  Teacher as PrismaTeacher,
  Course as PrismaCourse,
} from '.prisma/client';

export const Query = {
  enrollment: () => {
    return prisma.student.findMany({
      where: { enrolled: true },
    });
  },
  student: (_student: PrismaStudent, args: { id: string }) => {
    return prisma.student.findFirst({
      where: { id: Number(args.id) },
    });
  },

  students: () => {
    return prisma.student.findMany({});
  },

  departments: () => {
    return prisma.department.findMany({});
  },

  department: (department: PrismaDepartment, args: { id: string }) => {
    return prisma.department.findFirst({
      where: { id: Number(args.id) },
    });
  },

  courses: () => {
    return prisma.course.findMany({});
  },

  course: (_course: PrismaCourse, args: { id: string }) => {
    return prisma.course.findFirst({
      where: { id: Number(args.id) },
    });
  },

  teachers: () => {
    return prisma.teacher.findMany({});
  },

  teacher: (_parent: any, args: { id: string }) => {
    return prisma.teacher.findFirst({
      where: { id: Number(args.id) },
    });
  },
};
