export interface TodoDTO {
  id: string;
  title: string;
  description: string;
  date: string;

  completed: boolean;
  overdue: boolean;
}

export interface ResponseTodoApi {
  id: string;
  title: string;
  description: string;
  date: string;

  completed: boolean;
  overdue: boolean;
}
