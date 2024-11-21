import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  quiz_id: mongoose.Types.ObjectId;
  question: string;
  options: string[];
  correct_answer: string;
}

const QuestionSchema: Schema = new Schema({
  quiz_id: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correct_answer: { type: String, required: true },
});

export default mongoose.model<IQuestion>('Question', QuestionSchema);
