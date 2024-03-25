import { default as NewsService } from '@/helpers/Api/News';
import { default as QDBService } from '@/helpers/Api/QuoteDB';

export default {
  ...NewsService,
  ...QDBService,
};
