import "./App.css";
import Star from "./Star";

const Stars = ({ count }) => {
  const arr = Array.from(Array(count).keys());

  if (count >= 1 && count <= 5) {
    return arr.map((el) => (
      <ul class="card-body-stars u-clearfix">
        <li class="li">
          <Star />
        </li>
      </ul>
    ));
  }
};

export default Stars;
