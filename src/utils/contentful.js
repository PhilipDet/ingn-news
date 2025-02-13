import * as contentful from "contentful";
import axios from "axios";

export const content = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
});

export const FetchContent = async (accessToken) => {
    console.log("Access Token:", accessToken);

    return await axios
        .get(
            `https://cdn.contentful.com/spaces/${
                import.meta.env.VITE_PUBLIC_SPACE_ID
            }/environments/master/entries`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: { content_type: "newsArticle" },
            }
        )
        .then((response) => {
            return response.data;
        });
};
