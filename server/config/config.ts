import 'dotenv/config';

export const config = {
  app: {
    PORT: Number(process.env.PORT) || 8000,
    UPDATE_PERIOD: Number(process.env.UPDATE_PERIOD),
    BASE_TIME: Number(process.env.BASE_TIME) || 2,
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY as string,
    API_BASE_URL: 'localhost:8000/api',
  },
  db: {
    MONGODB_PWD: process.env.MONGODB_PWD,
    MONGODB_URL: process.env.MONGODB_URL
  },
  dataSource: {
    LOMADEE_COUPONS_URL: process.env.LOMADEE_COUPONS_URL as string,
    LOMADEE_STORES_URL: process.env.LOMADEE_STORES_URL as string,
  },
  emailer: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY as string,
    SENDER: process.env.SENDER as string
  }
};
