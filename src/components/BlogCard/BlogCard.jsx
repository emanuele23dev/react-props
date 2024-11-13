import Button from "../Button/Button";
import style from "./BlogCard.module.css";

export default function BlogCard({ data }) {
  return (
    <section>
      {data.published && (
        <div className={style.blogCard}>
          <img src={data.image} alt="" />
          <div className="blog-title-card">
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <p>
              {data.tags.map((tag) => (
                <span className={style[tag]}>{tag} </span>
              ))}
            </p>
          </div>
          <Button />
        </div>
      )}
    </section>
  );
}
