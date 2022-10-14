import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import { loadArticles } from "../../store/articleReducer";
import SingleArticle from "../SingleArticle";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((store) => store.articleState.entries);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map((el) => {
          return (
            <li key={el.id}>
              <NavLink to={`article/${el.id}`}>{el.title}</NavLink>
            </li>
          );
        })}
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle articles={articles}/>
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
