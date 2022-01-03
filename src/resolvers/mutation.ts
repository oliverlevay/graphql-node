import { prisma } from '../database';

export const Mutation = {
  registerStudent: (parent: any, args: any) => {
    return prisma.student.create({
      data: {
        email: args.email,
        fullName: args.fullName,
        dept: args.deptId && {
          connect: { id: args.deptId },
        },
      },
    });
  },
  enroll: (parent: any, args: any) => {
    return prisma.student.update({
      where: { id: Number(args.id) },
      data: {
        enrolled: true,
      },
    });
  },

  createTeacher: (parent: any, args: any) => {
    return prisma.teacher.create({
      data: {
        email: args.data.email,
        fullName: args.data.fullName,
        courses: {
          create: args.data.courses,
        },
      },
    });
  },

  createCourse: (parent: any, args: any) => {
    return prisma.course.create({
      data: {
        code: args.code,
        title: args.title,
        teacher: args.teacherEmail && {
          connect: { email: args.teacherEmail },
        },
      },
    });
  },

  createDepartment: (parent: any, args: any) => {
    return prisma.department.create({
      data: {
        name: args.name,
        description: args.description,
      },
    });
  },
};
