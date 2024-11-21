import mongoose, { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description: string;
  slug: string;
  parentCategory?: mongoose.Types.ObjectId; // For subcategories (optional)
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<ICategory>('Category', CategorySchema);
