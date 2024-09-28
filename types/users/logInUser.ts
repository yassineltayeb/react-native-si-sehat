export interface LogInUserRequest {
    email: string;
    password: string;
}

export interface LogInUserResponse {
    accessToken: string;
}