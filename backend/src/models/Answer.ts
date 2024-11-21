import mongoose, { Schema, Document } from 'mongoose';

export interface IAnswer extends Document {
  question_id: mongoose.Types.ObjectId;
  user_id: mongoose.Types.ObjectId;
  answer: string;
  result: string;
}

const AnswerSchema: Schema = new Schema({
  question_id: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  answer: { type: String, required: true },
  result: { type: String, required: true },
});

export default mongoose.model<IAnswer>('Answer', AnswerSchema);
