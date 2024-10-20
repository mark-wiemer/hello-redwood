// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */): {
  articles: {
    __typename?: 'Post'
    id: number
    title: string
    body: string
    createdAt: `${number}${number}${number}${number}-${number}${number}-${number}${number}T${number}${number}:${number}${number}:${number}${number}.${number}${number}${number}Z`
  }[]
} => ({
  articles: [
    {
      id: 1,
      body: 'mockBody',
      createdAt: '2000-01-01T02:03:04.567Z',
      title: 'mockTitle',
    },
  ],
})
