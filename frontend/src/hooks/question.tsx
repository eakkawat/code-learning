import axios from 'axios';
import { useEffect, useState } from 'react';
import { IQuestion } from '@/types/question';

function useQuestions(quizId: string | undefined) {
  const [questions, setQuestions] = useState<IQuestion[] | []>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/quizzes/${quizId}`)
      .then((response) => {
        setQuestions(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return response.data.questions.map((question: any) => {
            return {
              ...question,
              correctAnswer: question.correct_answer,
            };
          });
        });
      })
      .catch((errors) => {
        console.error('Error fetching questions:', error);
        setError(errors);
      });
  }, [quizId, error]);

  return { questions, error };
}
export default useQuestions;
