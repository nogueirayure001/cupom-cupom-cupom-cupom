import mongoose from 'mongoose';

export interface Coupon {
    _id?: mongoose.Types.ObjectId,
    description?: string,
    code?: string, 
    store?: string, 
    image?: string, 
    category?: string, 
    link?: string, 
    source?: string, 
    featured?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}
  


