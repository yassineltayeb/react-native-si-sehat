import { VerifyOTPRequest } from '../types/phone-verification/verify-otp';
import { GenerateOTPRequest, GenerateOTPResponse } from './../types/phone-verification/generate-otp';
import axiosClient from './client';

const phoneVerificationApi = {
  generateOtp: (generateOTPRequest: GenerateOTPRequest): Promise<GenerateOTPResponse> => {
    return axiosClient
      .post<GenerateOTPResponse>('/v1/phone-verification/generate-otp', generateOTPRequest)
      .then((response) => response.data);
  },
  verifyOtp: (verifyOTPRequest: VerifyOTPRequest): Promise<string> => {
    return axiosClient
      .post<string>('/v1/phone-verification/verify-otp', verifyOTPRequest)
      .then((response) => response.data);
  }
};

export default phoneVerificationApi;
