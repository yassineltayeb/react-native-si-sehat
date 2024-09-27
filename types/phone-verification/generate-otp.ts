export interface GenerateOTPRequest {
    phoneNumber: string;
}

export interface GenerateOTPResponse {
    otp: string;
}