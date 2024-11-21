import mongoose, { Document, Schema } from 'mongoose';

export interface IQuiz extends Document {
  title: string;
  description: string;
  category: mongoose.Types.ObjectId; // Reference to Category
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeLimit: number; // in minutes
  passingScore: number; // percentage
  createdBy: mongoose.Types.ObjectId; // Reference to User
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
  questions: mongoose.Types.ObjectId[]; // Reference to Questions
}

const QuizSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true,
  },
  timeLimit: { type: Number, required: true },
  passingScore: { type: Number, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
});

export default mongoose.model<IQuiz>('Quiz', QuizSchema);
