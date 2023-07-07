import Button from "@/components/Button";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CourtCard = ({ court }) => {
  const { image, name } = court;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
      <Button onClick={() => console.log("Clicked")}>Book now</Button>
    </Card>
  );
};

export default CourtCard;
