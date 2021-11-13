import { ListGroup, ListGroupItem } from "reactstrap";

export default function Cart(props) {
  return (
    <div id="cart">
      <h1>Your Cart Items</h1>
      <ListGroup>
        {props.finalitems.map((cartlist) => (
          <ListGroupItem key={cartlist.id}>
            <div className="cart-img">
              <img src={cartlist.image} alt="product img" />
              <h5>{cartlist.desc}</h5>
            </div>
            <div className="final-qty">Quantity: {cartlist.value}</div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
