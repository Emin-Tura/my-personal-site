import NextLink from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { tr } from "date-fns/locale";

function getData() {
  const posts: Post[] = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4);

  return posts;
}

const PostLists = () => {
  const posts: Post[] = getData();
  return (
    <div className="max-w-2xl my-8">
      <h1 className="my-2 font-thin text-3xl sm:text-2xl">
        <b>Yazılarım</b>
      </h1>
      <hr />
      {posts.map((post) => (
        <article key={post._id}>
          <div className="block py-2">
            <NextLink href={`/post/${post.slug}`}>
              <header>
                <h3 className="font-medium text-xl mb-2 text-black">
                  {post.title}
                </h3>
              </header>
            </NextLink>
            <footer className="mt-1">
              <div className="flex items-center space-x-2 text-gray-500 text-xs">
                <time dateTime={post.date}>
                  {format(parseISO(post.date!), "d LLLL yyyy", {
                    locale: tr,
                  })}
                </time>
                <span>·</span>
                <span>{post.readingTime.text}</span>
              </div>
            </footer>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostLists;
