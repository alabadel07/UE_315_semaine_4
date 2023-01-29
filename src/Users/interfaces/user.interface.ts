import { Document } from 'mongoose';

export interface User extends Document {
    readonly id: Number;
    readonly firstname: String;
    readonly lastname: String;
    readonly email: String;
} 