import mongoose, { Schema, Document } from 'mongoose';

export interface IQuiz extends Document {
  title: string;
}

const QuizSchema: Schema = new Schema({
  title: { type: String, required: true },
});

export default mongoose.model<IQuiz>('Quiz', QuizSchema);
