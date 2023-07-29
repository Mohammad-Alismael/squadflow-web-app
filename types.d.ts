export type linkType = {
  label: string;
  icon: string;
  link: string;
};
enum TASK_STATUS {
  NOT_STARTED,
  STARTED,
  COMPLETED,
}
type User = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  email?: string;
  password?: string;
  firstName?: string | null;
  lastName?: string | null;
  projects?: Project[];
  tasks?: Task[];
};

type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  owner: User;
  name: string;
  description: string | null;
  due: Date | null;
  tasks: Task[];
  deleted: boolean;
};

type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  owner: User;
  projectId: string;
  project: Project;
  status: TASK_STATUS;
  name: string;
  description: string;
  due: Date | null;
  deleted: boolean;
};

export { User, Project, Task, TASK_STATUS };
