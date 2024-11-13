import Button from "../Button/Button";
import style from "./BlogCard.module.css";

export default function BlogCard(props) {
  console.log(props);

  return (
    <div className={style.blogCard}>
      <img src={props.image} alt="" />
      <div className="blog-title-card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <p>{props.tags}</p>
      </div>

      <Button />
    </div>
  );
}
