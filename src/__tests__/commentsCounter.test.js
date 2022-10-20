/**
 * @jest-environment jsdom
 */
const involvmentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3CNfK8xiNLfIWKUKw5ck';
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    {
      comment: 'Loved the movie',
      creation_date: '2022-05-10',
      username: 'Ashwin',
    },
    {
      comment: 'Absoulutley a banger!',
      creation_date: '2022-02-20',
      username: 'Natanim',
    },
  ]),
}));
const commentsCounter = async (id) => {
  const response = await fetch(`${involvmentApi}/comments?item_id=${id}`);
  const numberOfComments = await response.json();
  const count = numberOfComments.length;
  const commentsCount = document.querySelector('.comments-counter');
  commentsCount.innerHTML = `(${count})`;
  return count;
};
describe('Tests the comment count', () => {
  test('should test the number of comments', async () => {
    document.body.innerHTML = '<span class="comments-counter"></span>';
    const count = document.querySelector('.comments-counter');
    await commentsCounter(1);
    expect(count.innerHTML).toEqual('(2)');
  });
});
