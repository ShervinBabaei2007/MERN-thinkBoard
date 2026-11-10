import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config();

// rate limiting is optional: only enabled when Upstash credentials are set
const enabled = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

// limiting the rate to allow only 50 request per 60 seconds
const rateLimit = enabled
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(50, "60 s"),
    })
  : null;

export default rateLimit;
