import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string; // Explanation for the correct answer
  type: 'multiple-choice' | 'true-false' | 'open-ended';
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  tags: string[];
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema: Schema = new Schema({
  quiz_id: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correct_answer: { type: String, required: true },
  explanation: { type: String },
  type: { type: String, enum: ['multiple-choice', 'true-false', 'open-ended'], required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  points: { type: Number, required: true },
  tags: { type: [String] },
  created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IQuestion>('Question', QuestionSchema);
