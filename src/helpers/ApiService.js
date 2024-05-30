import { default as AuthService } from '@/helpers/Api/Auth';
import { default as NewsService } from '@/helpers/Api/News';
import { default as QDBService } from '@/helpers/Api/QuoteDB';
import { default as IRCService } from '@/helpers/Api/IRC';

export default {
  ...AuthService,
  ...NewsService,
  ...QDBService,
  ...IRCService,
};
