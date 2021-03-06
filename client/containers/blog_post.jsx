BlogPostContainer = GraphQL.bindData((props, onData) => {
  const vars = {postId: props.postId};
  return BlogSchema.watchQuery(BlogPostContainer.query, vars, onData);
})(BlogPost);

BlogPostContainer.query = `
  query _($postId: String!){
    post(_id: $postId) {
      ...${BlogPost.fragment}
    }
  }
`;
