import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Head from 'next/head'

const { BLOG_URL, CONTENT_API_KEY } = process.env;

// type Post = {
//   title: string;
//   slug: string;
// };
// async function getPosts() {
//   const res = await fetch(
//     `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
//   ).then((res) => res.json());
//   const posts = res.posts;
//   return posts;
// }
// export const getStaticProps = async ({ params }) => {
//   const posts = await getPosts();
//   return { props: { posts } };
// };

const Home: React.FC<> = (props) => {
  // const { posts } = props;
  return (<div>
    <Head>
      <title>Önemli</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>İlk kullanımı doğum tarihlerini belirtmek içindir. Orijinal şekilde altı kollu idi ve her kol bir damla şeklindeydi. Daktilolarda bu şekilde yer almıştır. Bununla beraber bazı daktiloların her kolu ayrı bir şekilde basmakta güçlük çekmiştir. Ayrıca Arap-İsrail ihtilafı nedeniyle birçok Arap, altı kollu sembolü barındıran daktiloları almayı tercih etmemiştir. Bunun sebebi, altı kollu sembolü İsrail bayrağında bulunan Davud Yıldızı'na benzetmeleriydi. Bu nedenle Arap yıldızı olarak anılan beş köşeli bir yıldız ayrı bir sembol olarak birçok sistemde kullanılmıştır. Bununla birlikte bazı fontlarda (yazı biçimi) Arap yıldızı sekiz köşelidir. İki sembolü aşağıda görebilirsiniz:
      AsteriskArap yıldızı*٭</p></div>
  );
};
export default Home;
