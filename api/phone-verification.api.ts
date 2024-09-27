import { GenerateOTPRequest, GenerateOTPResponse } from './../types/phone-verification/generate-otp';
import axiosClient from './client';

const phoneVerificationApi = {
  generateOtp: (generateOTPRequest: GenerateOTPRequest): Promise<GenerateOTPResponse> => {
    return axiosClient
      .post<GenerateOTPResponse>('/v1/phone-verification/generate-otp', generateOTPRequest)
      .then((response) => response.data);
  }
};

export default phoneVerificationApi;
