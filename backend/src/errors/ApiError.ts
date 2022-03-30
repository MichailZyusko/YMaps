export default class ApiError extends Error {
  public statusCode: number;

  constructor(statusCode: number = 500, message: string = 'Something went wrong') {
    super(message);
    this.name = ApiError.name;
    this.statusCode = statusCode;
  }
}
