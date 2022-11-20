export interface TodoDTO {
  id: string;
  title: string;
  description: string;
  date: string;
  file: string;

  completed: boolean;
  overdue: boolean;
}

export interface ResponseTodoApi {
  id: string;
  title: string;
  description: string;
  date: string;
  file: string;

  completed: boolean;
  overdue: boolean;
}
