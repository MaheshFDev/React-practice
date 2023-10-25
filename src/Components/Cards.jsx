import ListItem from "./ListItem";

export default function Card(props) {
  return (
    <ul id="concepts">
      <ListItem
        title={props.concept[0].title}
        image={props.concept[0].image}
        description={props.concept[0].description}
      />
      <ListItem
        title={props.concept[1].title}
        image={props.concept[1].image}
        description={props.concept[1].description}
      />
      <ListItem
        title={props.concept[2].title}
        image={props.concept[2].image}
        description={props.concept[2].description}
      />
    </ul>
  );
}
