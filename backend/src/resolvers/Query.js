// Code of the QUERYS

const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('dataBase'),
  // Is the same but is more easy upper way
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.dataBase.query.items();
  //   return items;
  // },
};

module.exports = Query;
