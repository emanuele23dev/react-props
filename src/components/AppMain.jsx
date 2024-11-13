import BlogCard from "./BlogCard/BlogCard";
import cards from "../components/data/cards.js";

export default function AppMain() {
  const title = "React Props";

  return (
    <main>
      <div className="container">
        <h2 className="blog-title">{title}</h2>

        <section className="blog-post">
          {cards.map((card) => (
            <BlogCard
              key={card.id}
              title={card.title}
              image={card.image}
              content={card.content}
              tags={card.tags}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
