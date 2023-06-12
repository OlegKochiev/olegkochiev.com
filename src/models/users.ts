import mongoose, {Document, Schema, model} from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, 'Your password must be at least 6 characters long'],
    select: false,
  },
  role: {
    type: String,
    default: 'user',
    enum: {
      values: ['user', 'admin'],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

usersSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

usersSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.models.Users || model('Users', usersSchema);
