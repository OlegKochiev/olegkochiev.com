import mongoose, {Schema, model} from 'mongoose';

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startedAt: {
    type: Date,
    required: true,
  },
  finishedAt: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.Courses || model('Courses', courseSchema);
