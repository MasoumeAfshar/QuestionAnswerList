import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';


const TYPE = 'questions';
export const QA_API_REDUCER = 'questionApi';
export const questionAPI = createApi({
  reducerPath: QA_API_REDUCER,
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  tagTypes: [TYPE],
  endpoints: builder => ({
    getQuestionList: builder.query< any, any >({
      query: () => {
        return {
          url: '/questionList',
          method: 'GET',
        };
      },
      providesTags: [TYPE],
    }),
    getQuestionDetail: builder.query< any, any >({
      query: data => {
        return {
          url: `/questionList/${data.id}`,
          method: 'GET',
        };
      },
      providesTags: [TYPE],
    }),
    getAnswerList: builder.query< any, any >({
      query: data => {
        return {
          url: `/questionList/${data.id}/answers`,
          method: 'GET',
        };
      },
      providesTags: [TYPE],
    }),
    addToQuestions: builder.mutation<any, any>({
      query: data => {
        return {
          url: '/questionList',
          method: 'POST',
          data: data,
        };
      },
      invalidatesTags: [TYPE],
    }),
    addToAnswers: builder.mutation<any, any>({
      query: data => {
        return {
          url: `/questionList/${data.questionListId}/answers`,
          method: 'POST',
          data: data,
        };
      },
      invalidatesTags: [TYPE],
    }),
    patchAnswers: builder.mutation<any, any>({
      query: data => {
        return {
          url: `/answers/${data.id}`,
          method: 'PATCH',
          data: data,
        };
      },
      invalidatesTags: [TYPE],
    }),
    patchAnswersAmount: builder.mutation<any, any>({
      query: data => {
        return {
          url: `/questionList/${data.id}`,
          method: 'PATCH',
          data: data,
        };
      },
      invalidatesTags: [TYPE],
    }),
    }),
});

export const {
  useGetQuestionListQuery,
  useGetQuestionDetailQuery,
  useGetAnswerListQuery,
  useAddToQuestionsMutation,
  useAddToAnswersMutation,
  usePatchAnswersMutation,
  usePatchAnswersAmountMutation,
} = questionAPI;
