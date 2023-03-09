import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
async function insertLink({ title, url }) {
  return await LinksCollection.insertAsync({ title, url, createdAt: new Date() }) as string;
}

function foo() {
  return 'bar' as const;
}

Meteor.methods({
  insertLink,
  foo
})

Meteor.startup(async () => {
  console.log(Meteor.server.method_handlers.insertLink.toString())
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }

  Meteor.publish('links', () => LinksCollection.find());
});
