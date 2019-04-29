// Code of the MUTATIONS

const Mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.dataBase.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },
};

module.exports = Mutations;
