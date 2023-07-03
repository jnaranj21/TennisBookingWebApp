import { Col, Row } from "reactstrap";
import CourtCard from "./CourtCard";
import { selectFeaturedCourts } from "./courtsSlice";

const CourtsList = () => {
  const courts = selectFeaturedCourts();
  return (
    <Row>
      {courts.map((court) => {
        return (
          <Col md="3" className="m-4" key={court.id}>
            <CourtCard court={court} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CourtsList;
