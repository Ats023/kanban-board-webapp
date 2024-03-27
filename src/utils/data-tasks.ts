export type Status = 'Backlog' | 'To-Do' | 'In-progress' | 'Review' | 'Done'

export const statuses: Status[] = ['Backlog', 'To-Do', 'In-progress', 'Review', 'Done']

export type fibPoints = 0 | 1 | 2 | 3 | 5 | 8 | 13

export type Task = {
    id: string,
    title: string,
    status: Status,
    points?: fibPoints,
  }

export const tasks: Task[] = [
    {
      id: "SZ-01",
      title: "Conduct Market Survey",
      points: 5,
      status: 'Backlog',
    },
    {
      id: "SZ-02",
      title: "Brainstorm ideas",
      points: 1,
      status: 'In-progress',
    },
    {
      id: "SZ-03",
      title: "SWOT Analysis",
      points: 3,
      status: 'To-Do',
    },
    {
      id: "SZ-04",
      title: "Prepare SRS",
      points: 5,
      status: 'To-Do',
    },
    {
      id: "SZ-06",
      title: "Conduct Market Survey",
      points: 5,
      status: 'Done',
    },
    {
      id: "SZ-07",
      title: "Conduct Market Survey",
      points: 13,
      status: 'Review',
    },
  ]