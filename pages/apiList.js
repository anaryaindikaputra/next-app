import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import apiListStyles from '../styles/ApiList.module.css';
import styles from '../styles/Home.module.css';

export default function ApiList() {
    const [title, setTitle] = useState([]);
    const [url, setUrl] = useState([]);
    const [content, setContent] = useState([]);
    const [articles, setArticles] = useState([]);
    
    const fetchArticles = async () => {
        const response = await fetch('/api/articles');
        const data = await response.json();
        console.log(data);
        setArticles(data);
    };

    const submitArticle = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/articles', {
            method: 'POST',
            body: JSON.stringify({
                title,
                url,
                content,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Api</title>
                <meta name="description" content="Page where you can seek information about the company" />
            </Head>
            <main>
                <header>
                    <h1>API</h1>
                    <p className={styles.description}>
                        Get Our API
                    </p>
                </header>
                <section className='post-article'>
                    <h3>Post Article</h3>
                    <hr/>
                    <form className={apiListStyles.postArticleForm} onSubmit={e => submitArticle(e)}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={title} placeholder="Article Title Here" onChange={e => setTitle(e.target.value)} />
                        
                        <label htmlFor="url">URL</label>
                        <input type="text" id="url" value={url} placeholder="Article URL Here" onChange={e => setUrl(e.target.value)} />

                        <label htmlFor="content">Content</label>
                        <textarea id="content" placeholder="Article Content Here" rows="5" onChange={e => setContent(e.target.value)}></textarea>

                        <button className={apiListStyles.buttonPrimary} type='submit'>Submit</button>
                    </form>
                </section>
                <hr />
                <section className='get-article'>
                    <header>
                        <h3>Latest Articles</h3>
                        <button className={apiListStyles.buttonPrimary} onClick={fetchArticles}>Get The Latest Articles</button>
                    </header>
                    {
                        articles.map(article => {
                            return (
                                <div className={apiListStyles.article} key={article.id}>
                                    <div className={apiListStyles.articleRow1}>
                                        <div className='article-title'>
                                            <h4>Title</h4>
                                            <p>{article.title}</p>
                                        </div>
                                        <div className='article-url'>
                                            <h4>URL</h4>
                                            <Link
                                                href={{
                                                    pathname: `/news/${article.url}`,
                                                    query: {
                                                        title: article.title,
                                                        content: article.content,
                                                        image: article.image
                                                    }
                                                }}
                                            >
                                                {article.url}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="article-content">
                                        <h4>Content</h4>
                                        <p>{article.content}</p>
                                    </div>
                                    <div className="article-thumbnail">
                                        <h4>Thumbnail</h4>
                                        {
                                            article.image? (
                                                <Image src={`/images/${article.image[0]}`} alt="Covid-19 Virus" width="250" height="500" />
                                            ) : (
                                                <p>-</p>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
                <style jsx>
                    {`
                        .post-article {
                            margin-bottom: 4rem;
                        }

                        .get-article button {
                            width: 100%;
                        }
                        
                        .get-article header {
                            margin-bottom: 2rem;
                        }
                    `}
                </style>
            </main>
        </div>
    )
}