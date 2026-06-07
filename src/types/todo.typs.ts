export interface TODO{
    id: number;
    text: string;
    completed: boolean;
}

export type TODOSTATE = {
    todos: TODO[];
}