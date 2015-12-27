const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = GraphQL.types;

const query = new GraphQLObjectType({
  name: 'BlogQueries',
  fields: () => ({
    recentPost: {
      type: BlogPost,
      resolve() {
        return Collections.posts.findOne();
      }
    },

    posts: {
      type: new GraphQLList(BlogPost),
      resolve() {
        return Collections.posts.find().toArray();
      }
    },

    post: {
      type: BlogPost,
      args: {
        _id: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(root, args) {
        return Collections.posts.findOne({_id: args._id});
      }
    }
  })
});

const schema = new GraphQLSchema({
  query
});

GraphQL.registerSchema('Blog', schema);
