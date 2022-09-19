import mongoose from 'mongoose';

import newsletterSchema from '../schemas/newsletter.schema.js';
import { Newsletter } from '../schemas/newsletter.schema.d.js';

const newsletterModel =
  mongoose.model<Newsletter>('newsletter', newsletterSchema);

async function subscribeToNewsletter(email: string) {
  const { upsertedCount } = await newsletterModel.updateOne(
    { email: email },
    {},
    { upsert: true }
  );

  if (upsertedCount) return true;

  return false;
}

async function unsubscribeFromNewsletter(id: mongoose.Types.ObjectId, email: string) {
  const { deletedCount } = await newsletterModel.deleteOne({
    _id: id,
    email: email
  });

  if (deletedCount) return true;

  return false;
}

async function getSubscribers(): Promise<Array<Newsletter>> {
  const filter = {};
  const projection = { createdAt: 0, updatedAt: 0 };

  return await newsletterModel.find(filter, projection);
}

export { subscribeToNewsletter, unsubscribeFromNewsletter, getSubscribers };
