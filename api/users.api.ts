import axiosClient from './client';
import { LogInUserRequest, LogInUserResponse } from '../types/users/logInUser';

const usersApi = {
  logIn: (logInUserRequest: LogInUserRequest): Promise<LogInUserResponse> => {
    return axiosClient
      .post<LogInUserResponse>('/v1/users/login', logInUserRequest)
      .then((response) => response.data);
  }
};

export default usersApi;