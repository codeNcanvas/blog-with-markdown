import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    // The 'username' field. This will be used for logging in.
    username: {
      type: String,       
      required: true,     
      unique: true,      
      trim: true,         
    },
    // The 'password' field.
    password: {
      type: String,       
      required: true,     
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return ; // If not modified, skip to the next middleware.
  }

  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch (error) {
    throw error;
  }
});

// - candidatePassword: The plain-text password provided by the user during login.
// - this.password: The hashed password stored in the database for this specific user document.
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);
export default User;