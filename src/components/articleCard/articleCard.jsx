import { ArticleCardStyled } from "./articleCard.styled";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article, index }) => {
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

    const gridPositions = [
        { box: 1, column: "1 / 3", row: "1 / 3" },
        { box: 2, column: "1 / 2", row: "3 / 5" },
        { box: 3, column: "2 / 3", row: "3 / 4" },
        { box: 4, column: "2 / 3", row: "4 / 6" },
        { box: 5, column: "1 / 2", row: "5 / 6" },
        { box: 6, column: "1 / 3", row: "6 / 7" },
        { box: 7, column: "1 / 3", row: "7 / 8" },
        { box: 8, column: "1 / 2", row: "8 / 9" },
        { box: 9, column: "2 / 3", row: "8 / 9" },
    ];

    const pos = gridPositions[index % gridPositions.length];
    const offset = Math.floor(index / gridPositions.length) * 8;
    const gridRow = pos.row.split(" / ");
    const gridRowStart = parseInt(gridRow[0]) + offset;
    const gridRowEnd = parseInt(gridRow[1]) + offset;

    return (
        <ArticleCardStyled
            $gridColumn={pos.column}
            $gridRow={`${gridRowStart} / ${gridRowEnd}`}
            className={`box-${pos.box}`}
        >
            {article.fields.image && (
                <img src={"https:" + article.fields.image.fields.file.url} />
            )}

            <div className="information">
                <h2>{article.fields.title}</h2>
                {documentToReactComponents(article.fields.text)}
                <span>
                    D. {FormatDate(article.fields.date)} - af Janne Melorm
                </span>
                <Link to={`/article/${article.sys.id}`}>Læs mere</Link>
            </div>
        </ArticleCardStyled>
    );
};
