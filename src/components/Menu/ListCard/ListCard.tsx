import { useGetPostsQuery } from "../../../slice/postSlice/postApi";
import Card from "../../../shared/Card/Card";
import cards from "./ListCard.module.css";
import { useMemo } from "react";
export default function ListCard() {
  const { data = [] } = useGetPostsQuery();

  const filtered = useMemo(() => data.filter((_, index) => index < 8), [data]);

  console.log("Filtered: ", filtered);
  return (
    <>
      <div className={cards.cards}>
        {filtered?.map((item, index) => {
          return (
            <Card key={index} name={item.title} description={item.body}></Card>
          );
        })}
      </div>
    </>
  );
}
