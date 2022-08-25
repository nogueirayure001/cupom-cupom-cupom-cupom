import mongoose from 'mongoose';

import newsletterSchema from '../schemas/newsletter.schema.js';
const newsletterModel = mongoose.model('newsletterEmail', newsletterSchema);

async function subscribeToNewsletter(email) {
  const { upsertedCount } = await newsletterModel.updateOne(
    { email: email },
    {},
    { upsert: true }
  );

  if (upsertedCount) return true;

  return false;
}

async function unsubscribeFromNewsletter(id, email) {
  const { deletedCount } = await newsletterModel.deleteOne({
    _id: id,
    email: email
  });

  if (deletedCount) return true;

  return false;
}

async function getSubscribers() {
  return await newsletterModel.distinct('email');
}

export { subscribeToNewsletter, unsubscribeFromNewsletter, getSubscribers };
