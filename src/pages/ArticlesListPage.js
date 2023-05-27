import ArticlesList from '../Components/ArticlesList';
import articles from './ArticleContent';
import React from 'react';

const ArticlesListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticlesListPage;