export type Status = 'Backlog' | 'To-Do' | 'In-progress' | 'Review' | 'Done'

export const statuses: Status[] = ['Backlog', 'To-Do', 'In-progress', 'Review', 'Done']

export type fibPoint = 0 | 1 | 2 | 3 | 5 | 8 | 13

export const fibPoints = [0,1,2,3,5,8,13]

export type Task = {
    id: string,
    title: string,
    status: Status,
    points?: fibPoint,
  }

// export const tasks: Task[] = [
    
//   ]