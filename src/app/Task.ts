export interface Task {
    push(task: Task): Task[];
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}