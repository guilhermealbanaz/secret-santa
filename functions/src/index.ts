import { initializeApp } from 'firebase-admin/app';
import { setGlobalOptions } from 'firebase-functions/v2';

initializeApp();

setGlobalOptions({
  region: 'us-central1',
  memory: '256MiB',
});

export { sendVerificationCode } from './sendVerificationCode';
export { verifyCode } from './verifyCode';
