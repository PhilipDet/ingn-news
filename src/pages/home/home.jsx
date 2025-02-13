import { HomeStyled } from "./home.styled";
import React, { useEffect, useState } from "react";
import { content } from "../../utils/contentful";
import { ArticleCard } from "../../components/articleCard/articleCard";
import { useParams } from "react-router-dom";

export const HomePage = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    const GetCategory = (items) => {
        return items.filter((article) => {
            return (
                article.fields.category.toLowerCase() === category ||
                category === undefined
            );
        });
    };

    useEffect(() => {
        content
            .getEntries({ content_type: "newsArticle" })
            .then((response) => {
                const filteredArticles = GetCategory(response.items);

                const sortedArticles = [...filteredArticles].sort((a, b) => {
                    return new Date(b.fields.date) - new Date(a.fields.date);
                });

                setArticles(sortedArticles);
                setLoading(false);
            })
            .catch(console.error);
    }, [category]);

    return (
        <HomeStyled>
            <section id="articles">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    articles.map((article, index) => {
                        return (
                            <ArticleCard
                                key={article.sys.id}
                                index={index}
                                article={article}
                            />
                        );
                    })
                )}
            </section>
        </HomeStyled>
    );
};
