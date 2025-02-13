import { useEffect, useState } from "react";
import { content } from "../../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ArticleStyled } from "./article.styled";
import { useParams } from "react-router-dom";

export const ArticlePage = () => {
    const { article_id } = useParams();
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState(null);

    const FormatDate = (date) => {
        const newDate = new Date(date);
        const month =
            newDate.getMonth() + 1 < 10
                ? `0${newDate.getMonth() + 1}`
                : newDate.getMonth() + 1;
        const day =
            newDate.getDate() < 10
                ? `0${newDate.getDate()}`
                : newDate.getDate();
        const year = newDate.getFullYear();
        return `${day}/${month}-${year}`;
    };

    useEffect(() => {
        content
            .getEntry(article_id)
            .then((response) => {
                setArticle(response);
                setLoading(false);
            })
            .catch(console.error);
    }, [article_id]);

    return (
        <ArticleStyled>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <article>
                    <img
                        src={"https:" + article.fields.image.fields.file.url}
                    />
                    <div>
                        <header>
                            <h1>{article.fields.title}</h1>
                            <span>
                                D. {FormatDate(article.fields.date)} - af{" "}
                                {article.fields.writer}
                                {article.fields.author}
                            </span>
                        </header>
                        {documentToReactComponents(article.fields.text)}
                    </div>
                </article>
            )}
        </ArticleStyled>
    );
};
