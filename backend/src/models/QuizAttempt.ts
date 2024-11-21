import mongoose, { Document, Schema } from 'mongoose';

export interface IQuizAttempt extends Document {
  quiz: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  answers: {
    question: mongoose.Types.ObjectId;
    selectedAnswer: string;
    isCorrect: boolean;
  }[];
  score: number;
  timeTaken: number; // in seconds
  completed: boolean;
  startedAt: Date;
  completedAt?: Date;
}

const QuizAttemptSchema = new Schema({
  quiz: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [
    {
      question: { type: Schema.Types.ObjectId, ref: 'Question' },
      selectedAnswer: String,
      isCorrect: Boolean,
    },
  ],
  score: { type: Number, default: 0 },
  timeTaken: { type: Number },
  completed: { type: Boolean, default: false },
  startedAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
});

export default mongoose.model<IQuizAttempt>('QuizAttempt', QuizAttemptSchema);
