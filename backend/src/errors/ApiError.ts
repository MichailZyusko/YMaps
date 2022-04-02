export default class ApiError extends Error {
  public status: number;

  constructor(status: number = 500, message: string = 'Internal server error') {
    super(message);
    this.name = ApiError.name;
    this.status = status;
  }
}
