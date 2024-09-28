import axiosClient from './client';
import { GetSpecializationsResponse } from '../types/specializations/get-specializations';

const specializationsApi = {
  getSpecializationsApi: (searchTerm?: string): Promise<Array<GetSpecializationsResponse>> => {
    const params: any = {};

    if (searchTerm) {
      params.searchTerm = searchTerm;
    }

    return axiosClient
      .get<Array<GetSpecializationsResponse>>('/v1/specializations', { params })
      .then((response) => response.data);
  }
};

export default specializationsApi;