import axios from 'axios';
import { useEffect, useState } from 'react';
import { Quiz } from '@/types/quiz';

function GetQuizzes() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/quizzes').then((res) => {
      setQuizzes(res.data);
    });
  }, []);

  return quizzes;
}
export default GetQuizzes;
