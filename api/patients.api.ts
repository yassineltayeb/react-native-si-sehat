import axiosClient from './client';
import { RegisterPatientRequest } from '../types/patients/register-patient';

const patientsApi = {
  register: (registerPatientRequest: RegisterPatientRequest): Promise<string> => {
    return axiosClient
      .post<string>('/v1/patients/register', registerPatientRequest)
      .then((response) => response.data);
  }
};

export default patientsApi;
