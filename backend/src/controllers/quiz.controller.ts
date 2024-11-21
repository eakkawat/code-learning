import { Request, Response } from 'express';
import Quiz from '@/models/Quiz';
import Question from '@/models/Question';
import Answer from '@/models/Answer';

// Retrieve a list of all quizzes
export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).send(quizzes);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving quizzes', error });
  }
};

// Retrieve a specific quiz by ID
export const getQuizById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findById(id).populate('questions');
    if (quiz) {
      res.status(200).json(quiz);
    } else {
      res.status(404).json({ message: 'Quiz not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving quiz', error });
  }
};

// Create a new quiz
export const createQuiz = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const newQuiz = new Quiz({ title });
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: 'Error creating quiz', error });
  }
};

// Retrieve a list of all questions
export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving questions', error });
  }
};

// Retrieve a specific question by ID
export const getQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);
    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving question', error });
  }
};

// Create a new question
export const createQuestion = async (req: Request, res: Response) => {
  const { quiz_id, question, options, correct_answer } = req.body;
  try {
    const newQuestion = new Question({ quiz_id, question, options, correct_answer });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error creating question', error });
  }
};

// Submit a user's answer
export const submitAnswer = async (req: Request, res: Response) => {
  const { question_id, user_id, answer } = req.body;
  try {
    const question = await Question.findById(question_id);
    if (!question) {
      res.status(404).json({ message: 'Question not found' });
      return;
    }
    const result = question.correct_answer === answer ? 'correct' : 'incorrect';
    const newAnswer = new Answer({ question_id, user_id, answer, result });
    await newAnswer.save();
    res.status(201).json(newAnswer);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting answer', error });
  }
};
