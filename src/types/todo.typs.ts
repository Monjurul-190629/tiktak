export interface TODO{
    id: number;
    text: string;
    complete: boolean;
}

export type TODOSTATE = {
    todos: TODO[];
}