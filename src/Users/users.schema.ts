import * as mongoose from 'mongoose';
import { Int } from 'type-graphql';

export const UserSchema = new mongoose.Schema({
    id: Number,
    firstname: String,
    lastname: String,
    email: String,
}) 