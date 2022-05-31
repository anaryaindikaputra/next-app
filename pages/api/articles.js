import { news } from "../../data";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(news);
    } else if (req.method === 'POST') {
        const title = req.body.title;
        const url = req.body.url;
        const content = req.body.content;
        const article = {
            "id": news.length + 1,
            "title": title,
            "url": url,
            "content": content,
        };
        news.push(article);
        res.status(201).json(article);
    }
}
  