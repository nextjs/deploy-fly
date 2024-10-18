# Deploy Next.js to Fly

This is a Next.js template which can be deployed to [Fly.io](https://fly.io).

## Deploying to Fly

Fly can run your application from a [Docker image without a Docker container](https://www.youtube.com/watch?v=7iypMRKniPU) on their infrastructure.

Everything you need to get started can be found at [https://fly.io/nextjs](https://fly.io/nextjs).

```bash
# Install flyctl on macOS
brew install flyctl

# Run from Next.js project root
fly launch

# Scale CPU, memory, instances, and regions
fly scale
```

For more information, see our [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
