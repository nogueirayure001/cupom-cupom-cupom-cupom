import mongoose from 'mongoose';

import { config } from '../../config/config.js';

function addUnsubscribeLink(baseHtml: string, id: mongoose.Types.ObjectId, email: string) {
  const baseUrl = config.app.API_BASE_URL;

  const unsubscribeLink = `
    <a href="${baseUrl}/newsletter?id=${id}&email=${email}">
      Cancelar inscrição
    </a>
  `;

  return `${baseHtml} ${unsubscribeLink}`;
}

export default addUnsubscribeLink;
